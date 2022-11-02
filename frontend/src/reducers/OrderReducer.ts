import { GET_CART_SUCCESS, GET_CART_FAIL, CART_CANCEL_SUCCESS, CART_CANCEL_FAIL, CART_ADD_FAIL, CART_ADD_SUCCESS } from "../pages/CartPage/CartAction";
import { GET_LIKE_FAIL, GET_LIKE_SUCCESS, LIKE_CANCEL_FAIL, LIKE_CANCEL_SUCCESS, LIKE_FAIL, LIKE_SUCCESS } from "../pages/LikePage/LikeAction";
import { ProductDataType } from "./ProductReducer";

export interface OrderDataType {
    count: number,
    product_id: number
}

 interface CartData {
    uid: string,
    product_id: number
}


 interface CartDataList {
    carts: CartData[]
}

const cartInitState : CartDataList = {
    carts: []
}


export function OrderReducer(state = cartInitState, action: any) {
    switch (action.type) {
        case GET_CART_SUCCESS:
            return {
                ...state,
                carts: action.payload,
            };
        case GET_CART_FAIL:
            return {
                ...state,
                carts: action.payload,
            };  
        case CART_ADD_SUCCESS:
            return {
                ...state,
                carts: action.payload,
            };
        case CART_ADD_FAIL:
            return {
                ...state,
            };
        case CART_CANCEL_SUCCESS:
            return {
                ...state,
                carts: action.payload,
            };
        case CART_CANCEL_FAIL:
            return {
                ...state,
                // likes: action.payload,
            };

        default:
            return state;
    }
}

