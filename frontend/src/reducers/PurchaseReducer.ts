import { Timestamp } from "firebase/firestore";
import { CLOSE_MODAL, SELECT_NUMBER_OF_ITEM, SELECT_WEIGHT, SELECT_WANNA_PAVE, OPEN_MODAL } from "../pages/ProductPage/PurchaseAction";

import { createStore } from 'redux';

export interface PurchaseDataType {
    open_modal: boolean,
    select_item_info: PurchaseDetail | null,
}

export interface PurchaseDetail {
    item_weight: number | null,
    number_of_item: number | null,
    wanna_pave: number | null,
}

export interface PurchaseDataObjectType {
	purchaseInfo: PurchaseDataType
}

const purchaseInfoInit: PurchaseDataType  = {
    open_modal: false,
    select_item_info: {
        item_weight: null,
        number_of_item: null,
        wanna_pave: null
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