import { call, delay, put, SagaReturnType, takeLatest } from "redux-saga/effects";
import { LOGIN_FAIL, LOGIN_PAYLOAD, LOGIN_SUCCESS, LOGIN_TRY, LOGIN_WITH_ANONYMOUS, LOGIN_WITH_KAKAO, LOGIN_WITH_NAVER } from "../pages/LoginPage/LoginAction";
import { db, FirebaseAuth, kakaoConfig } from "..";
import { GET_PRODUCT, GET_PRODUCT_SUCCESS } from "../pages/ProductPage/ProductAction";
import { addDoc, collection, deleteDoc, DocumentData, getDoc, getDocs, limit, orderBy, query, where } from "firebase/firestore";
import { AxiosResponse } from "axios";
import { ProductDataType } from "../reducers/ProductReducer";
import { GET_LIKE, GET_LIKE_FAIL, GET_LIKE_SUCCESS, LIKE_CANCEL_FAIL, LIKE_CANCEL_SUCCESS, LIKE_CANCEL_TRY, LIKE_FAIL, LIKE_SUCCESS, LIKE_TRY } from "../pages/LikePage/LikeAction";
import { LikeDataList } from "../reducers/LikeReducer";
import { CART_ADD_TRY, CART_CANCEL_TRY, GET_CART, CART_TRY, GET_CART_SUCCESS, GET_CART_FAIL, CART_CANCEL_SUCCESS, CART_CANCEL_FAIL, CART_ADD_SUCCESS, CART_ADD_FAIL } from "../pages/CartPage/CartAction";
import { CartData, CartDataList } from "../reducers/CartReducer";
import { SEARCH_CART_SUCCESS, SEARCH_PID_SUCCESS } from "../pages/SearchPage/SearchDertailAction";



async function addCartAPI(payload:any) {
    console.log("addCartAPI");
    
    let uid = FirebaseAuth.currentUser!.uid;
    const product_id = Number(payload.product_id);

    const cartRef = collection(db, "cart");
    const q = query(cartRef, where("product_id", "==", product_id),where("uid", "==", uid));
    const fbdata = await getDocs(q);
    
    // 장바구니 담기 가능
    if(fbdata.empty){
        console.log("장바구니 담은 적 없음");
        const result = await addDoc(cartRef, {
            uid: uid,
            product_id:product_id
        });

        const cartfbDataList = await getDocs(
            query(cartRef, where("uid", "==", uid))
        );
        
        const cartDataList = cartfbDataList.docs.map((doc) => {
            return doc.data();
        });
        
        return cartDataList;
    }

    return false;
}


function* addCart(action:any) {
    console.log("like product_id" + action.payload);
    
    const result:CartData[] = yield call(addCartAPI, action.payload);
    
    if(result){     
        yield put({
            type: CART_ADD_SUCCESS,
            payload: result,
        }); 
    }
    else{
        yield put({
            type: CART_ADD_FAIL,
            callback: action.payload.callback
        }); 
    }
}

export async function convertCart2Product(pidList:number[]) {

    const productRef = collection(db, "product");
    let queryList: any[] = [];

    pidList.forEach((element: number) => {
        queryList.push(query(productRef, where("product_id", "==", element)))
    });

    let dataList = [];

    for (const q of queryList) {
        const fbdata = await getDocs(q);
        dataList.push(fbdata.docs[0].data());
    }

    return dataList;
}


async function getCartAPI(payload:any) {
    const cartRef = collection(db, "cart");
    const uid = payload.uid;
    console.log("uid = "+uid);
    
    const q = query(cartRef, where("uid", "==", uid));
    const fbdata = await getDocs(q);
    const cartDataList = fbdata.docs.map((doc) => {
        return doc.data()
    });


    return cartDataList;
}


function* getCart(action:any) {
    console.log("getCart" + action.payload);
    
    const result:CartData[] = yield call(getCartAPI, action.payload);
    console.log("result = = " + result);
    
    if(result){       
        let pidList = result.map((val) => {
            return val.product_id
        });
    
        const pidResult: ProductDataType[] = yield call(convertCart2Product, pidList);
        console.log(pidResult);

        console.log("result" + JSON.stringify(result));
        yield put({
            type: SEARCH_CART_SUCCESS,
            payload: {
                cartProducts: pidResult
            },
        }); 

        yield put({
            type: GET_CART_SUCCESS,
            payload: result,
        }); 
    }
    else{
        yield put({
            type: GET_CART_FAIL,
            payload: result,
        }); 
    }
}


async function cancelCartAPI(payload:any) {
    let uid = FirebaseAuth.currentUser!.uid;
    const product_id = Number(payload.product_id);

    const cartRef = collection(db, "cart");
    const q = query(cartRef, where("product_id", "==", product_id),where("uid", "==", uid));
    const fbdata = await getDocs(q);
    console.log(fbdata);
    
    // 좋아요 취소 가능
    if(!fbdata.empty){
        console.log("카트 취소 가능");
        const result = await deleteDoc(fbdata.docs[0].ref);

        const cartfbDataList = await getDocs(
            query(cartRef, where("uid", "==", uid))
        );
        
        const cartDataList = cartfbDataList.docs.map((doc) => {
            return doc.data();
        });
        
        console.log(cartDataList);

        return cartDataList;
    }

    return false;
}

function* cancelCart(action:any) {
    console.log("cart product_id" + action.payload);
    
    const result:CartData[] = yield call(cancelCartAPI, action.payload);
    console.log("result = = " + result);
    
    if(result){    
        yield put({
            type: CART_CANCEL_SUCCESS,
            payload: result,
        }); 
    }
    else{
        yield put({
            type: CART_CANCEL_FAIL,
            callback: action.payload.callback
        }); 
    }
}



function* cartIndex(action: any) {
    switch (action.payload.type) {
        case CART_ADD_TRY:
            yield call(addCart,action); 
            break;
        
        case CART_CANCEL_TRY:
            yield call(cancelCart,action); 
            break;

        case GET_CART:
            yield call(getCart, action)
            break;
    
        default:
            break;
    }
}


export function* getCartSignal() {
    yield takeLatest(CART_TRY, cartIndex);
}

