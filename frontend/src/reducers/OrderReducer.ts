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
    agreeCondition: boolean,
    impParam: string | null
    // setOrder: boolean
}

const orderSendInit:OrderSending = {
    products: [],
    delivery: null,
    discount: null,
    payMethod: null,
    agreeCondition: true,
    impParam: null
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

        case SAVE_IMP_PARAM:
            // alert("SAVE_IMP_PARAM reducer" + action.payload);
            return {
                ...state,
                impParam: action.payload
            }


        case REMOVE_PRODUCT_ACTION: 
            return {
                ...state,
                products: []
            }
        
        case SAVE_PRODUCT_ACTION:
            let products:any = [];
            if(state && state.products){
                products = [...state.products];
            }

            products.push(action.payload);

            const productIdSet = new Set(products.map((pr:any) => {
                return pr.product.product_id
            }));

            console.log(productIdSet);

            let finalProductList: any[] = [];

            productIdSet.forEach((product_id, index) => {
                for (const pr of products) {
                    if(pr.product.product_id === product_id) {
                        finalProductList.push(pr);
                        break;
                    }
                }
            })

            return {
                ...state,
                products: finalProductList,
            };

        default:
            return {
                ...state,
            };
    }
}