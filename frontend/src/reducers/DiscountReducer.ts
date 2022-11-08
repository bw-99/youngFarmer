import { GET_CART_SUCCESS, GET_CART_FAIL, CART_CANCEL_SUCCESS, CART_CANCEL_FAIL, CART_ADD_FAIL, CART_ADD_SUCCESS } from "../pages/CartPage/CartAction";
import { GET_LIKE_FAIL, GET_LIKE_SUCCESS, LIKE_CANCEL_FAIL, LIKE_CANCEL_SUCCESS, LIKE_FAIL, LIKE_SUCCESS } from "../pages/LikePage/LikeAction";
import { ProductDataType } from "./ProductReducer";
import { Timestamp } from 'firebase/firestore';
import { GET_DISCOUNT_RESULT } from "../pages/OrderPage/DiscountAction";


export interface CouponSrcType {
    uid: string,
    coupon_id: number,
    description: string,
    time_started: Timestamp,
    time_deleted: Timestamp,
    title: string
}


export interface DiscountSrcType {
    uid: string,
    point: number,
    coupon_list: number[]
}

export interface DiscountDataType {
    uid: string,
    point: number,
    coupon_list: CouponSrcType[]
}

const discountInitState : DiscountDataType | null = null;

export function DiscountReducer(state = discountInitState, action: any) {
    // let orderProductList:OrderDataType[] = [];
    
    switch (action.type) {
       case GET_DISCOUNT_RESULT:
            return {
                ...state,
                ...action.payload.discountData
            };    
      
        default:
            return state;
    }
}

