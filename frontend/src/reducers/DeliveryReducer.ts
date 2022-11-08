import { GET_CART_SUCCESS, GET_CART_FAIL, CART_CANCEL_SUCCESS, CART_CANCEL_FAIL, CART_ADD_FAIL, CART_ADD_SUCCESS } from "../pages/CartPage/CartAction";
import { GET_LIKE_FAIL, GET_LIKE_SUCCESS, LIKE_CANCEL_FAIL, LIKE_CANCEL_SUCCESS, LIKE_FAIL, LIKE_SUCCESS } from "../pages/LikePage/LikeAction";
import { SET_ORDER, CANCEL_ORDER, SET_ORDER_SUCCESS, ADD_ORDER, ADD_ORDER_SUCCESS, CLEAR_ORDER, GET_DELIVERY_RESULT } from "../pages/OrderPage/OrderAction";
import { ProductDataType } from "./ProductReducer";
import { Timestamp } from 'firebase/firestore';

export interface DeliveryDataType {
    location_main: string,
    location_sub: string,
    name: string,
    phone: string,
    requirement: string,
    uid: string,
    is_default: boolean,
    time_created: Timestamp,
}



 interface DeliveryDataListType {
    deliveryList: DeliveryDataType[]
}

const deliveryInitState : DeliveryDataListType = {
    deliveryList: []
}

export function DeliveryReducer(state = deliveryInitState, action: any) {
    // let orderProductList:OrderDataType[] = [];
    
    switch (action.type) {
       case GET_DELIVERY_RESULT:
            return {
                ...state,
                deliveryList: action.payload.deliveryList
            };    
      
        default:
            return state;
    }
}

