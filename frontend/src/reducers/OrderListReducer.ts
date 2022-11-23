import { GET_CART_SUCCESS, GET_CART_FAIL, CART_CANCEL_SUCCESS, CART_CANCEL_FAIL, CART_ADD_FAIL, CART_ADD_SUCCESS } from "../pages/CartPage/CartAction";
import { GET_LIKE_FAIL, GET_LIKE_SUCCESS, LIKE_CANCEL_FAIL, LIKE_CANCEL_SUCCESS, LIKE_FAIL, LIKE_SUCCESS } from "../pages/LikePage/LikeAction";
import { OrderProductDataType, ProductDataType } from "./ProductReducer";
import { DeliveryDataType } from './DeliveryReducer';
import { DiscountDataType } from './DiscountReducer';
import { SAVE_DISCOUNT_ACTION } from "../pages/OrderPage/DiscountAction";
import { SAVE_AGREE_ACTION, SAVE_DELIVERY_ACTION } from "../pages/OrderPage/DeliveryAction";
import { PRODUCT_SET_ORDER_SUCCESS, PRODUCT_ADD_ORDER, PRODUCT_CANCEL_ORDER, SAVE_PRODUCT_ACTION, REMOVE_PRODUCT_ACTION } from "../pages/OrderPage/ProductAction";
import { SAVE_PAY_METHOD_ACTION } from "../pages/OrderPage/PayMethodAction";
import { stat } from "fs";
import { SAVE_IMP_PARAM } from "../pages/OrderPage/OrderAction";
import { OrderSending } from "./OrderReducer";
import { GET_ALL_ORDER_LIST, GET_READY_ORDER_LIST, SAVE_ALL_ORDER_LIST, GET_ON_DELIVER_ORDER_LIST, GET_DELIVER_COMPLETE_ORDER_LIST, GET_REFUND_ORDER_LIST } from './../pages/OrderListPage/OrderListAction';

export interface PaymentMethodDataType {
    payMethod: string
}

export interface OrderType {
    all: OrderSending[] | null,
    // ready: OrderSending[],
    // onDeliver: OrderSending[],
    // deliverComplete: OrderSending[],
    // refund: OrderSending[],
    selected: OrderSending[] | null
}

const orderTypeInit:OrderType = {
    all: null,
    // ready: [],
    // onDeliver: [],
    // deliverComplete: [],
    // refund: [],
    selected: null
}

export function OrderListReducer(state = orderTypeInit, action: any) {
    console.log(state);
    
    switch (action.type) {
        case SAVE_ALL_ORDER_LIST:
            const temp = [ ...action.payload];
            return {
                ...state,
                all: temp, 
                selected: temp
            }

        case GET_ALL_ORDER_LIST: 
            const allOrder = [...state.all!];
            return {
                ...state,
                selected: allOrder
            }
        
        case GET_READY_ORDER_LIST:
            let readyList = [...state.all!];
            readyList = readyList.filter((order) => {
                return order.delivery_state === "배송준비";
            })
            return {
                ...state,
                selected: readyList
            }
        
        case GET_ON_DELIVER_ORDER_LIST:
            let onDeliverList = [...state.all!];
            onDeliverList = onDeliverList.filter((order) => {
                return order.delivery_state === "배송중";
            })
            return {
                ...state,
                selected: onDeliverList
            }
    
        case GET_DELIVER_COMPLETE_ORDER_LIST:
            let compDeliverList = [...state.all!];
            compDeliverList = compDeliverList.filter((order) => {
                return order.delivery_state === "배송완료";
            })
            return {
                ...state,
                selected: compDeliverList
            }
        
        case GET_REFUND_ORDER_LIST:
            let refundList = [...state.all!];
            refundList = refundList.filter((order) => {
                return order.delivery_state === "취소/교환/환불";
            })
            return {
                ...state,
                selected: refundList
            }

        default:
            return {
                ...state,
            };
    }
}