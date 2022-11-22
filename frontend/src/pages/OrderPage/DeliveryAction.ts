import { DeliveryDataType } from "../../reducers/DeliveryReducer";

export const DELIVERY_TRY = "PRODUCT_GET_ORDER";

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


export const SAVE_DELIVERY_ACTION = "SAVE_DELIVERY_ACTION";

export const saveDeliveryAction = (payload: DeliveryDataType) => {
    console.log("saveDeliveryAction");
    
    return {
        type: SAVE_DELIVERY_ACTION,
        payload: payload
    }
}

export const SAVE_AGREE_ACTION = "SAVE_AGREE_ACTION";
export const saveAgreeAction = (payload: boolean) => {
    return {
        type: SAVE_AGREE_ACTION,
        payload: payload
    }
}