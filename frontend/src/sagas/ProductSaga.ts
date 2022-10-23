import { call, delay, put, SagaReturnType, takeLatest } from "redux-saga/effects";
import { LOGIN_FAIL, LOGIN_PAYLOAD, LOGIN_SUCCESS, LOGIN_TRY, LOGIN_WITH_ANONYMOUS, LOGIN_WITH_KAKAO, LOGIN_WITH_NAVER } from "../pages/LoginPage/LoginAction";
import { db, kakaoConfig } from "..";
import { GET_PRODUCT, GET_PRODUCT_SUCCESS } from "../pages/ProductPage/ProductAction";
import { collection, getDoc, getDocs, limit, orderBy, query, where } from "firebase/firestore";

type APIResponse = SagaReturnType<any>;


async function getProdcutAPI(payload:any) {
    const productRef = collection(db, "product");
    const product_id = Number(payload);
    console.log(typeof(product_id));
    
    
    const q = query(productRef, where("product_id", "==", product_id), limit(1));
    
    const data = await getDocs(q);
    console.log(data.docs[0].data());

    return data.docs[0].data();
}


function* getProdcut(action:any) {
    console.log("get product" + action.payload);
    
    const result:APIResponse = yield call(getProdcutAPI, action.payload);
    
    if(result){
        console.log(action);
        yield put({
            type: GET_PRODUCT_SUCCESS,
            payload: result,
            callback: action.payload.callback
        }); 
    }
    else{
        yield put({
            type: LOGIN_FAIL,
            callback: action.payload.callback
        }); 
    }
}


function* productIndex(action: any) {
    
    switch (action.type) {
        case GET_PRODUCT:
            yield getProdcut(action); 
            break;
   
        default:
            break;
    }
}

export function* getProductSignal() {
    yield takeLatest(GET_PRODUCT, productIndex);
}