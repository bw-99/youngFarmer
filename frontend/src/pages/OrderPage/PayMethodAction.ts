import { PaymentMethodDataType } from "../../reducers/OrderReducer";

export const SAVE_PAY_METHOD_ACTION = "SAVE_PAY_METHOD_ACTION";

export const TOSS_PAY = "tosspay.tosstest";
export const KAKAO_PAY = "kakaopay.TC0ONETIME";
export const PAYCO_PAY = "payco.PARTNERTEST";

export const savePayMethodAction = (payload:PaymentMethodDataType) => {
    return {
        type: SAVE_PAY_METHOD_ACTION,
        payload: payload
    }
}