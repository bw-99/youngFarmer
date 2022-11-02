import { call, delay, put, SagaReturnType, takeLatest } from "redux-saga/effects";
import { LOGIN_FAIL, LOGIN_PAYLOAD, LOGIN_SUCCESS, LOGIN_TRY, LOGIN_WITH_ANONYMOUS, LOGIN_WITH_KAKAO, LOGIN_WITH_NAVER } from "../pages/LoginPage/LoginAction";
import { db, FirebaseAuth, kakaoConfig } from "..";
import { GET_PRODUCT, GET_PRODUCT_SUCCESS } from "../pages/ProductPage/ProductAction";
import { addDoc, collection, deleteDoc, DocumentData, getDoc, getDocs, limit, orderBy, query, where } from "firebase/firestore";
import { AxiosResponse } from "axios";
import { ProductDataType } from "../reducers/ProductReducer";
import { GET_LIKE, GET_LIKE_FAIL, GET_LIKE_SUCCESS, LIKE_CANCEL_FAIL, LIKE_CANCEL_SUCCESS, LIKE_CANCEL_TRY, LIKE_FAIL, LIKE_SUCCESS, LIKE_TRY } from "../pages/LikePage/LikeAction";
import { LikeData, LikeDataList } from "../reducers/LikeReducer";
import { convertCart2Product } from "./CartSaga";
import { SEARCH_LIKE_SUCCESS, SEARCH_PID_SUCCESS } from "../pages/SearchPage/SearchDertailAction";


async function likeAPI(payload:any) {
    console.log("like api");
    
    let uid = FirebaseAuth.currentUser!.uid;
    const product_id = Number(payload.product_id);

    const likeRef = collection(db, "like");
    const q = query(likeRef, where("product_id", "==", product_id),where("uid", "==", uid));
    const fbdata = await getDocs(q);
    console.log(fbdata);
    console.log("좋아요 안한거같은데");
    
    
    // 좋아요 가능
    if(fbdata.empty){
        console.log("좋아요 한 적 없음");
        const result = await addDoc(likeRef, {
            uid: uid,
            product_id:product_id
        });

        const likefbDataList = await getDocs(
            query(likeRef, where("uid", "==", uid))
        );
        
        const likeDataList = likefbDataList.docs.map((doc) => {
            return doc.data();
        });
        return likeDataList;
    }

    return false;
}


function* like(action:any) {
    console.log("like product_id" + action.payload);
    
    const result:LikeDataList = yield call(likeAPI, action.payload);
    
    if(result){        
        yield put({
            type: LIKE_SUCCESS,
            payload: result,
        }); 
    }
    else{
        yield put({
            type: LIKE_FAIL,
            callback: action.payload.callback
        }); 
    }
}



async function getLikeAPI(payload:any) {
    const uid = payload.uid;

    const likeRef = collection(db, "like");
    console.log("uid = "+uid);
    
    const q = query(likeRef, where("uid", "==", uid));
    const fbdata = await getDocs(q);
    const likeDataList = fbdata.docs.map((doc) => {
        return doc.data()
    });


    return likeDataList;
}


function* getLike(action:any) {
    console.log("getlike" + action.payload);
    
    const result:LikeData[] = yield call(getLikeAPI, action.payload);
    console.log(result);
    
    if(result){  
        let pidList = result.map((val) => {
            return val.product_id
        });
    
        const pidResult: ProductDataType[] = yield call(convertCart2Product, pidList);
        console.log(pidResult);

        console.log("result" + JSON.stringify(result));

        yield put({
            type: SEARCH_LIKE_SUCCESS,
            payload: {
                likeProducts: pidResult
            },
        }); 

        
        yield put({
            type: GET_LIKE_SUCCESS,
            payload: result,
        }); 
    }
    else{
        yield put({
            type: GET_LIKE_FAIL,
            payload: result,
        }); 
    }
}


async function likeCancelAPI(payload:any) {
    let uid = FirebaseAuth.currentUser!.uid;
    const product_id = Number(payload.product_id);

    const likeRef = collection(db, "like");
    const q = query(likeRef, where("product_id", "==", product_id),where("uid", "==", uid));
    const fbdata = await getDocs(q);
    console.log(fbdata);
    
    // 좋아요 취소 가능
    if(!fbdata.empty){
        console.log("좋아요 취소 가능");
        const result = await deleteDoc(fbdata.docs[0].ref);

        const likefbDataList = await getDocs(
            query(likeRef, where("uid", "==", uid))
        );
        
        const likeDataList = likefbDataList.docs.map((doc) => {
            return doc.data();
        });
        
        console.log(likeDataList);

        return likeDataList;
    }

    return false;
}

function* likeCacncel(action:any) {
    console.log("like product_id" + action.payload);
    
    const result:LikeDataList = yield call(likeCancelAPI, action.payload);
    
    if(result){    
        console.log("좋아요 취소 성공");
            
        yield put({
            type: LIKE_CANCEL_SUCCESS,
            payload: result,
        }); 
    }
    else{
        yield put({
            type: LIKE_CANCEL_FAIL,
            callback: action.payload.callback
        }); 
    }
}



function* likeIndex(action: any) {
    switch (action.payload.type) {
        case LIKE_TRY:
            yield call(like,action); 
            break;
        
        case LIKE_CANCEL_TRY:
            yield call(likeCacncel,action); 
            break;

        case GET_LIKE:
            yield call(getLike, action)
            break;
    
        default:
            break;
    }
}


export function* getLikeSignal() {
    yield takeLatest(LIKE_TRY, likeIndex);
}
