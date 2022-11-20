import { PaymentMethodDataType } from "../../reducers/OrderReducer";

export const SAVE_PAY_METHOD_ACTION = "SAVE_PAY_METHOD_ACTION";

export const TOSS_PAY = "tosstest";
export const KAKAO_PAY = "kakaopay";
export const PAYCO_PAY = "payco";

export const savePayMethodAction = (payload:PaymentMethodDataType) => {
    return {
        type: SAVE_PAY_METHOD_ACTION,
        payload: payload
    }
}