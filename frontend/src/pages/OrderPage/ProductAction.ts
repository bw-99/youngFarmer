import { OrderDataType } from "../../reducers/OrderReducer";
import { OrderProductDataType } from "../../reducers/ProductReducer";

export const PRODUCT_ORDER_TRY = "PRODUCT_ORDER_TRY";

export const PRODUCT_CLEAR_ORDER = "PRODUCT_CLEAR_ORDER";

export const PRODUCT_SET_ORDER= "PRODUCT_SET_ORDER";
export const PRODUCT_SET_ORDER_SUCCESS = "PRODUCT_SET_ORDER_SUCCESS";
export const PRODUCT_SET_ORDER_FAIL = "PRODUCT_SET_ORDER_FAIL";


export const PRODUCT_ADD_ORDER= "PRODUCT_ADD_ORDER";
export const PRODUCT_ADD_ORDER_SUCCESS = "PRODUCT_ADD_ORDER_SUCCESS";
export const PRODUCT_ADD_ORDER_FAIL = "PRODUCT_ADD_ORDER_FAIL";

export const PRODUCT_CANCEL_ORDER = "PRODUCT_CANCEL_ORDER";
export const PRODUCT_CANCEL_ORDER_SUCCESS = "PRODUCT_CANCEL_ORDER_SUCCESS";
export const PRODUCT_CANCEL_ORDER_FAIL = "PRODUCT_CANCEL_ORDER_FAIL";

export const PRODUCT_GET_ORDER = "PRODUCT_GET_ORDER";
export const PRODUCT_GET_ORDER_SUCCESS = "PRODUCT_GET_ORDER_SUCCESS";
export const PRODUCT_GET_ORDER_FAIL = "PRODUCT_GET_ORDER_FAIL";


export const setProductOrderTry = (data: OrderDataType[]) => {
    return {
        type: PRODUCT_ORDER_TRY,
        payload: {
            type: PRODUCT_SET_ORDER,
            dataList: data
        }
    }
}

export const clearProductOrder = () => {
    return {
        type: PRODUCT_CLEAR_ORDER
    }
}

export const addProductOrderTry = (data: OrderDataType) => {
    return {
        type: PRODUCT_ADD_ORDER,
        payload: data
    }
}

export const cancelProductOrderTry = (data: OrderDataType) => {
    return {
        type: PRODUCT_CANCEL_ORDER,
        payload: data
    }
}

export const getProductOrderAction = (dataList: OrderDataType[]) => {
    return {
        type: PRODUCT_ORDER_TRY,
        payload: {
            type: PRODUCT_GET_ORDER,
            dataList: dataList
        }
    }
}

export const SAVE_PRODUCT_ACTION = "SAVE_PRODUCT_ACTION";

export const saveProductAction = (products:OrderProductDataType) => {
    return {
        type: SAVE_PRODUCT_ACTION,
        payload: products
    };
}