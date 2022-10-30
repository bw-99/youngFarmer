import { Timestamp } from "firebase/firestore";
import { CLOSE_MODAL, SELECT_NUMBER_OF_ITEM, SELECT_WEIGHT, SELECT_WANNA_PAVE, OPEN_MODAL } from "../pages/ProductPage/PurchaseAction";

import { createStore } from 'redux';

export interface PurchaseDataType {
    open_modal: boolean,
    select: PurchaseDetail | null,
}

export interface PurchaseDetail {
    item_weight: number | null,
    number_of_item: number | null,
    wanna_pave: string | null,
}

export interface PurchaseDataObjectType {
	purchaseInfo: PurchaseDataType
}

const purchaseInfoInit: PurchaseDataType  = {
    open_modal: false,
    select: null,
}

const purchaseInitState: PurchaseDataObjectType = {
	purchaseInfo: purchaseInfoInit
};

export function PurchaseReducer(state = purchaseInitState, action: any) {
    switch (action.type) {
        case CLOSE_MODAL:
            console.log("success close modal");
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
                productInfo: action.payload,
            };
        case SELECT_NUMBER_OF_ITEM:
            return {
                ...state,
                productInfo: action.payload,
            };
        case SELECT_WANNA_PAVE:
            return {
                ...state,

			}
        default:
            return state;
    }
}