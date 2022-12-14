import { call, delay, put, SagaReturnType, takeLatest } from "redux-saga/effects";
import { LOGIN_FAIL, LOGIN_PAYLOAD, LOGIN_SUCCESS, LOGIN_TRY, LOGIN_WITH_ANONYMOUS, LOGIN_WITH_KAKAO, LOGIN_WITH_NAVER } from "../pages/LoginPage/LoginAction";
import { db, FirebaseAuth, kakaoConfig } from "..";
import { GET_PRODUCT, GET_PRODUCT_SUCCESS } from "../pages/ProductPage/ProductAction";
import { addDoc, collection, deleteDoc, DocumentData, getDoc, getDocs, limit, orderBy, query, where } from "firebase/firestore";
import { AxiosResponse } from "axios";
import { OrderProductDataType, ProductDataType } from "../reducers/ProductReducer";
import { GET_LIKE, GET_LIKE_FAIL, GET_LIKE_SUCCESS, LIKE_CANCEL_FAIL, LIKE_CANCEL_SUCCESS, LIKE_CANCEL_TRY, LIKE_FAIL, LIKE_SUCCESS, LIKE_TRY } from "../pages/LikePage/LikeAction";
import { LikeDataList } from "../reducers/LikeReducer";
import { CART_ADD_TRY, CART_CANCEL_TRY, GET_CART, CART_TRY, GET_CART_SUCCESS, GET_CART_FAIL, CART_CANCEL_SUCCESS, CART_CANCEL_FAIL, CART_ADD_SUCCESS, CART_ADD_FAIL } from "../pages/CartPage/CartAction";
import { CartData, CartDataList } from "../reducers/CartReducer";
import { SEARCH_CART_SUCCESS, SEARCH_ORDER_SUCCESS, SEARCH_PID_SUCCESS } from "../pages/SearchPage/SearchDertailAction";
import { OrderDataType } from "../reducers/OrderReducer";
import { DeliveryDataType } from "../reducers/DeliveryReducer";
import { GET_DELIVERY_RESULT, DELIVERY_TRY } from "../pages/OrderPage/DeliveryAction";


export async function convertOrder2Product(orderList:OrderDataType[]) {

    const productRef = collection(db, "product");
    let queryList: any[] = [];

    orderList.forEach((order: OrderDataType) => {
        queryList.push(query(productRef, where("product_id", "==", order.product_id)))
    });

    let dataList:OrderProductDataType[] = [];

    for (const index in queryList) {
        const fbdata = await getDocs(queryList[index]);
        if(!fbdata.empty) {
            const product:ProductDataType = fbdata.docs[0].data() as ProductDataType;
        
            dataList.push({
                count: orderList[index].count,
                product: product,
                option: orderList[index].option,
                store: null
            });
        }
    }

    return dataList;
}


async function getDeliveryAPI(payload:any) {
    const deliveryRef = collection(db, "delivery");
    const uid = payload;
    
    const q = query(deliveryRef, where("uid", "==", uid));

    const fbdata = await getDocs(q);
    const deliveryDataList = fbdata.docs.map((doc) => {
        return doc.data();
    });

    return deliveryDataList;
}


function* getDelivery(action:any) {
    console.log("getDelivery" + action.payload);

    const deliveryList: DeliveryDataType[] = yield call(getDeliveryAPI, action.payload.payload);

    yield put({
        type: GET_DELIVERY_RESULT,
        payload: {
            deliveryList: deliveryList
        },
    }); 
}



function* orderIndex(action: any) {
    switch (action.payload.type) {
        case DELIVERY_TRY:
            yield call(getDelivery, action)
            break;


        default:
            break;
    }
}


export function* getDeliverySignal() {
    yield takeLatest(DELIVERY_TRY, orderIndex);
}

