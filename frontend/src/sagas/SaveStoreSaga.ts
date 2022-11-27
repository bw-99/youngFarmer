import { call, delay, put, SagaReturnType, takeLatest } from "redux-saga/effects";
import { LOGIN_FAIL, LOGIN_PAYLOAD, LOGIN_SUCCESS, LOGIN_TRY, LOGIN_WITH_ANONYMOUS, LOGIN_WITH_KAKAO, LOGIN_WITH_NAVER } from "../pages/LoginPage/LoginAction";
import { db, kakaoConfig } from "..";
import { GET_PRODUCT, GET_PRODUCT_SUCCESS } from "../pages/ProductPage/ProductAction";
import { addDoc, collection, deleteDoc, getDoc, getDocs, limit, orderBy, query, where } from "firebase/firestore";
import { AxiosResponse } from "axios";
import { ProductDataType } from "../reducers/ProductReducer";
import { FOLLWING_CANCEL_STORE, FOLLWING_CANCEL_STORE_FAIL, FOLLWING_CANCEL_STORE_SUCCESS, FOLLWING_STORE, FOLLWING_STORE_FAIL, FOLLWING_STORE_SUCCESS, GET_FOLLWED_STORE, GET_FOLLWED_STORE_FAIL, GET_FOLLWED_STORE_SUCCESS, GET_PROFILE, GET_PROFILE_SUCCESS, STORE_SAGA } from "../pages/MyPage/MyAction";
import { MyPageDataType } from "../reducers/MypageReducer";
import { getAuth } from "firebase/auth";
import { ref } from 'firebase/storage';

async function getFollowedAPI(payload:any) {
    const uid = payload.uid;
    const followRef = collection(db, "follow");
    const q = query(followRef, where("uid", "==", uid));
    const fbdata = await getDocs(q);
    const followData =  fbdata.docs.map((doc) => doc.data().store_id);
    return followData;
}

async function setFollowedAPI(payload:any) {
    const uid = payload.uid;
    const followRef = collection(db, "follow");
    let q = query(followRef, where("uid", "==", uid));
    q = query(q, where("store_id", "==", payload.store_id));
    const fbdata = await getDocs(q);
    if(fbdata.empty) {
        await addDoc(followRef, {
            uid: uid,
            store_id: payload.store_id
        });
    }
}


async function setFollowedCancelAPI(payload:any) {
    const uid = payload.uid;
    const followRef = collection(db, "follow");
    let q = query(followRef, where("uid", "==", uid));
    q = query(q, where("store_id", "==", payload.store_id));
    const fbdata = await getDocs(q);
    if(!fbdata.empty) {
        await deleteDoc(fbdata.docs[0].ref);
    }
}


function* getFollowedStore(payload:any) {
    const result:number[] = yield call(getFollowedAPI, payload);
    
    if(result){        
        console.log("result" + JSON.stringify(result));
        yield put({
            type: GET_FOLLWED_STORE_SUCCESS,
            payload: result,
        }); 
    }
    else{
        yield put({
            type: GET_FOLLWED_STORE_FAIL,
        }); 
    }
}


function* setFollowedStore(payload:any) {
    yield call(setFollowedAPI, payload);
    const result:number[] = yield call(getFollowedAPI, payload);
    
    if(result){        
        yield put({
            type: FOLLWING_STORE_SUCCESS,
            payload: result,
        }); 
    }
    else{
        yield put({
            type: FOLLWING_STORE_FAIL,
        }); 
    }
}


function* setFollowedCancelStore(payload:any) {
    yield call(setFollowedCancelAPI, payload);
    const result:number[] = yield call(getFollowedAPI, payload);
    
    if(result){        
        yield put({
            type: FOLLWING_CANCEL_STORE_SUCCESS,
            payload: result,
        }); 
    }
    else{
        yield put({
            type: FOLLWING_CANCEL_STORE_FAIL,
        }); 
    }
}


function* saveStoreIndex(action: any) {
    switch (action.payload.type) {
        case GET_FOLLWED_STORE:
            yield getFollowedStore(action.payload.payload); 
            break;

        case FOLLWING_STORE:
            yield setFollowedStore(action.payload.payload); 
            break;

        case FOLLWING_CANCEL_STORE:
            yield setFollowedCancelStore(action.payload.payload); 
            break;
   
        default:
            break;
    }
}

export function* getStoreSaveSignal() {
    yield takeLatest(STORE_SAGA, saveStoreIndex);
}