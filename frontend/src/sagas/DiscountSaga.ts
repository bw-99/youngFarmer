import { call, delay, put, SagaReturnType, takeLatest } from "redux-saga/effects";
import { LOGIN_FAIL, LOGIN_PAYLOAD, LOGIN_SUCCESS, LOGIN_TRY, LOGIN_WITH_ANONYMOUS, LOGIN_WITH_KAKAO, LOGIN_WITH_NAVER } from "../pages/LoginPage/LoginAction";
import { db, FirebaseAuth, kakaoConfig } from "..";
import { GET_PRODUCT, GET_PRODUCT_SUCCESS } from "../pages/ProductPage/ProductAction";
import { addDoc, collection, deleteDoc, DocumentData, getDoc, getDocs, limit, orderBy, query, Timestamp, where } from "firebase/firestore";
import { AxiosResponse } from "axios";
import { OrderProductDataType, ProductDataType } from "../reducers/ProductReducer";
import { GET_LIKE, GET_LIKE_FAIL, GET_LIKE_SUCCESS, LIKE_CANCEL_FAIL, LIKE_CANCEL_SUCCESS, LIKE_CANCEL_TRY, LIKE_FAIL, LIKE_SUCCESS, LIKE_TRY } from "../pages/LikePage/LikeAction";
import { LikeDataList } from "../reducers/LikeReducer";
import { CART_ADD_TRY, CART_CANCEL_TRY, GET_CART, CART_TRY, GET_CART_SUCCESS, GET_CART_FAIL, CART_CANCEL_SUCCESS, CART_CANCEL_FAIL, CART_ADD_SUCCESS, CART_ADD_FAIL } from "../pages/CartPage/CartAction";
import { CartData, CartDataList } from "../reducers/CartReducer";
import { SEARCH_CART_SUCCESS, SEARCH_ORDER_SUCCESS, SEARCH_PID_SUCCESS } from "../pages/SearchPage/SearchDertailAction";
import { OrderDataType } from "../reducers/OrderReducer";
import { DeliveryDataType } from "../reducers/DeliveryReducer";
import { DISCOUNT_TRY, GET_DISCOUNT, GET_DISCOUNT_RESULT } from "../pages/OrderPage/DiscountAction";
import { DiscountSrcType } from "../reducers/DiscountReducer";
import { DiscountDataType, CouponSrcType } from './../reducers/DiscountReducer';


export async function convertCouponId2Coupon(discountSrc:DiscountSrcType) {

    const couponRef = collection(db, "coupon");
    let queryList: any[] = [];

    discountSrc.coupon_list.forEach((coupon_id: number) => {
        let tempQuery = query(couponRef, where("coupon_id", "==", coupon_id));
        // ! ineqaulity query는 동시에 2개 이상 사용 못함 (=> 유효기간 체크는 직접 하단에 구현)
        // tempQuery = query(tempQuery, where("time_started", "<",  Timestamp.now()));
        // tempQuery = query(tempQuery, where("time_deleted", ">",  Timestamp.now()));
        queryList.push(tempQuery);
    });

    let discountData: DiscountDataType = {
        uid: discountSrc.uid,
        point: discountSrc.point,
        coupon_list: []
    };

    for (const index in queryList) {
        const fbdata = await getDocs(queryList[index]);
        if(!fbdata.empty) {
            const coupon:CouponSrcType = fbdata.docs[0].data() as CouponSrcType;
            discountData.coupon_list.push(coupon);
        }
    }


    // * 유효기간 체크
    discountData.coupon_list = discountData.coupon_list.filter((coupon) => {
        return(
            (coupon.time_started < Timestamp.now())
            &&
            (coupon.time_deleted > Timestamp.now())
        );
    })

    return discountData;
}


async function getDiscountAPI(payload:any) {
    const deliveryRef = collection(db, "discount");
    const uid = payload;
    
    const q = query(deliveryRef, where("uid", "==", uid));

    const fbdata = await getDocs(q);
    
    if(fbdata.empty) {
        return false;
    }

    return fbdata.docs[0].data();
}


function* getDiscount(action:any) {
    console.log("getDiscount" + action.payload);

    const discountSrc: DiscountSrcType = yield call(getDiscountAPI, action.payload.payload);
    const discountData: DiscountDataType = yield call(convertCouponId2Coupon, discountSrc);

    yield put({
        type: GET_DISCOUNT_RESULT,
        payload: {
            discountData: discountData
        },
    }); 
}



function* orderIndex(action: any) {
    switch (action.payload.type) {
        case GET_DISCOUNT:
            yield call(getDiscount, action)
            break;


        default:
            break;
    }
}


export function* getDiscountSignal() {
    yield takeLatest(DISCOUNT_TRY, orderIndex);
}

