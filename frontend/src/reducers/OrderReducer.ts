import { GET_CART_SUCCESS, GET_CART_FAIL, CART_CANCEL_SUCCESS, CART_CANCEL_FAIL, CART_ADD_FAIL, CART_ADD_SUCCESS } from "../pages/CartPage/CartAction";
import { GET_LIKE_FAIL, GET_LIKE_SUCCESS, LIKE_CANCEL_FAIL, LIKE_CANCEL_SUCCESS, LIKE_FAIL, LIKE_SUCCESS } from "../pages/LikePage/LikeAction";
import { SET_ORDER, CANCEL_ORDER, SET_ORDER_SUCCESS, ADD_ORDER, ADD_ORDER_SUCCESS, CLEAR_ORDER } from "../pages/OrderPage/OrderAction";
import { ProductDataType } from "./ProductReducer";

export interface OrderDataType {
    count: number,
    product_id: number
}



 interface OrderDataListType {
    orders: OrderDataType[]
}

const orderInitState : OrderDataListType = {
    orders: []
}

export function OrderReducer(state = orderInitState, action: any) {
    let orderProductList:OrderDataType[] = [];
    
    switch (action.type) {

        case SET_ORDER_SUCCESS:
            return {
                ...state,
                orders: action.payload,
            };
        

        case ADD_ORDER:
            orderProductList = [action.payload];

            for (const order of state.orders) {
                if(order.product_id === action.payload.product_id) {
                    continue;
                }
                else{
                    orderProductList.push(order);
                }
            }
            
            return {
                ...state,
                orders: orderProductList,
            };       

        case CANCEL_ORDER:
            orderProductList = [];

            for (const order of state.orders) {
                if(order.product_id === action.payload.product_id) {
                    continue;
                }
                else{
                    orderProductList.push(order);
                }
            }
            
            return {
                ...state,
                orders: orderProductList,
            };  
      
        default:
            return state;
    }
}

