import { GET_CART_SUCCESS, GET_CART_FAIL, CART_CANCEL_SUCCESS, CART_CANCEL_FAIL, CART_ADD_FAIL, CART_ADD_SUCCESS } from "../pages/CartPage/CartAction";
import { GET_LIKE_FAIL, GET_LIKE_SUCCESS, LIKE_CANCEL_FAIL, LIKE_CANCEL_SUCCESS, LIKE_FAIL, LIKE_SUCCESS } from "../pages/LikePage/LikeAction";
import { OrderProductDataType, ProductDataType } from "./ProductReducer";
import { DeliveryDataType } from './DeliveryReducer';
import { DiscountDataType } from './DiscountReducer';
import { SAVE_DISCOUNT_ACTION } from "../pages/OrderPage/DiscountAction";
import { SAVE_AGREE_ACTION, SAVE_DELIVERY_ACTION } from "../pages/OrderPage/DeliveryAction";
import { PRODUCT_SET_ORDER_SUCCESS, PRODUCT_ADD_ORDER, PRODUCT_CANCEL_ORDER, SAVE_PRODUCT_ACTION } from "../pages/OrderPage/ProductAction";
import { SAVE_PAY_METHOD_ACTION } from "../pages/OrderPage/PayMethodAction";

export interface OrderDataType {
    count: number,
    product_id: number,
    option: string
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

        case PRODUCT_SET_ORDER_SUCCESS:
            return {
                ...state,
                orders: action.payload,
            };
        

        case PRODUCT_ADD_ORDER:
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

        case PRODUCT_CANCEL_ORDER:
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


export interface PaymentMethodDataType {
    payMethod: string
}

export interface OrderSending {
    products: OrderProductDataType[] | null,
    delivery: DeliveryDataType | null,
    discount: DiscountDataType | null,
    payMethod: PaymentMethodDataType | null,
    agreeCondition: boolean
    // setOrder: boolean
}

const orderSendInit:OrderSending = {
    products: [],
    delivery: null,
    discount: null,
    payMethod: null,
    agreeCondition: false
}

export function OrderSendReducer(state = orderSendInit, action: any) {
    console.log(state);
    
    switch (action.type) {
        case SAVE_DISCOUNT_ACTION:
            return {
                ...state,
                discount: action.payload,
            };

        case SAVE_PAY_METHOD_ACTION:
            return {
                ...state,
                payMethod: action.payload
            }

        case SAVE_DELIVERY_ACTION:
            return {
                ...state,
                delivery: action.payload,
            };

        case SAVE_AGREE_ACTION:
            return {
                ...state,
                agreeCondition: action.payload
            }
        
        case SAVE_PRODUCT_ACTION:
            let products:any = [];
            if(state && state.products){
                products = [...state.products];
            }

            products.push(action.payload);

            // * 중복 제거
            products = products.filter( function( item: any, index: any, inputArray: string | any[] ) {
                return inputArray.indexOf(item) == index;
            });


            return {
                ...state,
                products: products,
            };

        default:
            return state;
    }
}