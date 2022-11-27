import { call, delay, put, SagaReturnType, takeLatest } from "redux-saga/effects";
import { LOGIN_FAIL, LOGIN_PAYLOAD, LOGIN_SUCCESS, LOGIN_TRY, LOGIN_WITH_ANONYMOUS, LOGIN_WITH_KAKAO, LOGIN_WITH_NAVER } from "../pages/LoginPage/LoginAction";
import { db, kakaoConfig } from "..";
import { GET_PRODUCT, GET_PRODUCT_SUCCESS } from "../pages/ProductPage/ProductAction";
import { collection, getDoc, getDocs, limit, orderBy, query, where } from "firebase/firestore";
import { AxiosResponse } from "axios";
import { ProductDataType } from "../reducers/ProductReducer";



// type ProductDataType=  {
//     store_id: number,
//     discount: number,
//     product_id: number,
//     title: string,
//     price: number
// }


async function getProdcutAPI(payload:any) {
    const product_id = Number(payload);

    const productRef = collection(db, "product");
    const q = query(productRef, where("product_id", "==", product_id), limit(1));
    const fbdata = await getDocs(q);
    const productData = fbdata.docs[0].data();

    const reviewRef = collection(db, "review");
    const q2 = query(reviewRef, where("product_id", "==", product_id));
    const fbdata2 = await getDocs(q2);
    console.log(fbdata2.empty);

    let reviewDataList = [];

    for (const doc of fbdata2.docs) {
        const reviewData = doc.data();

        const userRef = collection(db, "user");
        const q = query(userRef, where("uid", "==", reviewData.uid), limit(1));
        const fbdata = await getDocs(q);

        const profileRef = collection(fbdata.docs[0].ref, "profile");
        const q2 = query(profileRef);
        const fbdata2 = await getDocs(q2);

        reviewDataList.push({
            ...reviewData,
            writer: fbdata2.docs[0].data()
        })
    }

    const photoRef = collection(fbdata.docs[0].ref, "detail_photo","");
    const q3 = query(photoRef);
    const fbdata3 = await getDocs(q3);
    const photoDataList = fbdata3.docs[0].data();


    const questionRef = collection(fbdata.docs[0].ref, "detail_question","");
    const q4 = query(questionRef);
    const fbdata4 = await getDocs(q4);
    const questionDataList = fbdata4.docs.map((doc) => {
        return doc.data()
    });

    const storeRef = collection(db, "store");
    const q5 = query(storeRef, where("store_id", "==", productData.store_id));
    const fbdata5 = await getDocs(q5);

    return {
        productInfo: {
            ...productData,
            reviewDataList: reviewDataList,
            photoDataList: photoDataList,
            questionDataList: questionDataList,
        },
        storeInfo: fbdata5.docs[0].data()
    };
}


function* getProdcut(action:any) {
    console.log("get product" + action.payload);
    
    const result:ProductDataType = yield call(getProdcutAPI, action.payload);
    
    if(result){        
        console.log("result" + JSON.stringify(result));
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