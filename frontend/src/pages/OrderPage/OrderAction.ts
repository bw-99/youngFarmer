import { OrderDataType } from "../../reducers/OrderReducer";

export const ORDER_TRY = "ORDER_TRY";

export const CLEAR_ORDER = "CLEAR_ORDER";

export const SET_ORDER= "SET_ORDER";
export const SET_ORDER_SUCCESS = "SET_ORDER_SUCCESS";
export const SET_ORDER_FAIL = "SET_ORDER_FAIL";


export const ADD_ORDER= "ADD_ORDER";
export const ADD_ORDER_SUCCESS = "ADD_ORDER_SUCCESS";
export const ADD_ORDER_FAIL = "ADD_ORDER_FAIL";


export const CANCEL_ORDER = "CANCEL_ORDER";
export const CANCEL_ORDER_SUCCESS = "CANCEL_ORDER_SUCCESS";
export const CANCEL_ORDER_FAIL = "CANCEL_ORDER_FAIL";

export const GET_ORDER = "GET_ORDER";
export const GET_ORDER_SUCCESS = "GET_ORDER_SUCCESS";
export const GET_ORDER_FAIL = "GET_ORDER_FAIL";



export const DELIVERY_TRY = "GET_ORDER";

export const GET_DELIVERY_RESULT = "GET_DELIVERY_RESULT";

export const GET_DELIVERY_LOADING = "GET_DELIVERY_LOADING";
export const GET_DELIVERY_SUCCESS = "GET_DELIVERY_SUCCESS";
export const GET_DELIVERY_FAIL = "GET_DELIVERY_FAIL";


export const getDeliveryTry = (uid?:string) => {
    return {
        type: DELIVERY_TRY,
        payload: {
            type: DELIVERY_TRY,
            payload: uid
        }
    }
}

export const setOrderTry = (data: OrderDataType[]) => {
    return {
        type: ORDER_TRY,
        payload: {
            type: SET_ORDER,
            dataList: data
        }
    }
}

// export const addOrderTry = (data: OrderDataType) => {
//     return {
//         type: ORDER_TRY,
//         payload: {
//             type: ADD_ORDER,
//             data: data
//         }
//     }
// }

export const clearOrder = () => {
    return {
        type: CLEAR_ORDER
    }
}

export const addOrderTry = (data: OrderDataType) => {
    return {
        type: ADD_ORDER,
        payload: data
    }
}

export const cancelOrderTry = (data: OrderDataType) => {
    return {
        type: CANCEL_ORDER,
        payload: data
    }
}

export const getOrderAction = (dataList: OrderDataType[]) => {
    return {
        type: ORDER_TRY,
        payload: {
            type: GET_ORDER,
            dataList: dataList
        }
    }
}