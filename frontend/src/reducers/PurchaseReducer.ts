import { Timestamp } from "firebase/firestore";
import { CLOSE_MODAL, SELECT_NUMBER_OF_ITEM, SELECT_WEIGHT, SELECT_WANNA_PAVE, OPEN_MODAL } from "../pages/ProductPage/PurchaseAction";

import { createStore } from 'redux';

export interface PurchaseDataType {
    open_modal: boolean,
    select_num: number,
    select_item_info: PurchaseDetail | null,
}

export interface PurchaseDetail {
    item_weight: string | null,
    number_of_item: string | null,
    wanna_pave: string | null,
}

export interface PurchaseDataObjectType {
	purchaseInfo: PurchaseDataType
}

const purchaseInfoInit: PurchaseDataType  = {
    open_modal: false,
    select_num: 0,
    select_item_info: {
        item_weight: "3kg",
        number_of_item: "12개입",
        wanna_pave: "선물용 포장"
    },
}

const purchaseInitState: PurchaseDataObjectType = {
	purchaseInfo: purchaseInfoInit
};

export function PurchaseReducer(state = purchaseInitState, action: any) {
    switch (action.type) {
        case CLOSE_MODAL:
            console.log("success close modal", action.payload);
            return {
                ...state,
                purchaseInfo: action.payload,
            };
        case OPEN_MODAL:
            console.log("success open modal");

            return {
                ...state,
                purchaseInfo: action.payload,
            };
        case SELECT_WEIGHT:
            return {
                ...state,
                purchaseInfo: action.payload,
            };
        case SELECT_NUMBER_OF_ITEM:
            return {
                ...state,
                purchaseInfo: action.payload,
            };
        case SELECT_WANNA_PAVE:
            return {
                ...state,
                purchaseInfo: action.payload,
			}
        default:
            return state;
    }
}