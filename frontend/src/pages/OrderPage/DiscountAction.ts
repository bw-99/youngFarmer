import { DiscountDataType } from "../../reducers/DiscountReducer";

export const DISCOUNT_TRY = "DISCOUNT_TRY";

export const GET_DISCOUNT = "GET_DISCOUNT";
export const GET_DISCOUNT_RESULT = "GET_DISCOUNT_RESULT";

export const GET_DISCOUNT_LOADING = "GET_DISCOUNT_LOADING";
export const GET_DISCOUNT_SUCCESS = "GET_DISCOUNT_SUCCESS";
export const GET_DISCOUNT_FAIL = "GET_DISCOUNT_FAIL";


export const getDiscountTry = (uid?:string) => {
    console.log("getDiscountTry");
    
    return{
        type: DISCOUNT_TRY,
        payload: {
            type: GET_DISCOUNT,
            payload: uid
        }
    }
}

export const SAVE_DISCOUNT_ACTION = "SAVE_DISCOUNT_ACTION";

export const saveDiscountAction = (payload:DiscountDataType) => {
    return {
        type: SAVE_DISCOUNT_ACTION,
        payload: payload
    }
}