import { Timestamp } from "firebase/firestore";
import { GET_PRODUCT, GET_PRODUCT_FAIL, GET_PRODUCT_LOADING, GET_PRODUCT_SUCCESS } from "../pages/ProductPage/ProductAction";

import { createStore } from 'redux';

export interface ProductDataType {
    store_id: number,
    discount: number,
    product_id: number,
    title: string,
    price: number,
    is_best: boolean,
    is_sale: boolean,
    delivery_charge: number,
    delivery_remain: number,
    delivery_start: string,
    reviewDataList: ProductDataReviewType[],
    photoDataList: ProductDataPhotoType,
    questionDataList: ProductDataQuestionType[]
}

export interface ProductDataReviewType {
    content: string,
    score: number,
    time_created: Timestamp,
    uid: string,
    photos: string[]
}

export interface ProductDataQuestionType {
    content: string,
    is_answered: boolean,
    time_created: Timestamp,
    uid: string,
    is_secret: boolean
}

export interface ProductDataPhotoType {
    main_photo: string[],
    photos: string[]
}

export interface ProductDataObjectType {
    productInfo: ProductDataType | null
}

const productInfoInitState : ProductDataObjectType | null = {
    productInfo: null
};

// export let UserInfo: any = {

// }

export function ProductInfoReducer(state = productInfoInitState, action: any) {
    switch (action.type) {
        case GET_PRODUCT_SUCCESS:
            console.log("reducer");
            console.log(action.payload.photoDataList);
            
            return {
                ...state,
                productInfo: action.payload,
            };
        case GET_PRODUCT_FAIL:
            return {
                ...state,
                productInfo: action.payload,
            };
        case GET_PRODUCT_LOADING:
            return {
                ...state,
                productInfo: action.payload,
            };
        default:
            return state;
    }
}

export function LikeReducer(currentState= true, action: any) {
    const newState = currentState ? false : true;

    if (action.type === 'CHANGETRUE') {
        //좋아요 수 상승
        console.log("change True");
    }
    else if (action.type === 'CHANGEFALSE') {
        //좋아요 수 감소
        console.log("change False");
    }
    return newState;
}

export const storeLike = createStore(LikeReducer);