import { Timestamp } from "firebase/firestore";
import { GET_PRODUCT, GET_PRODUCT_FAIL, GET_PRODUCT_LOADING, GET_PRODUCT_SUCCESS } from "../pages/ProductPage/ProductAction";

import { createStore } from 'redux';

export interface StoreDataType {
    store_id: number,
    name: string,
    photo: string,
    category : string[]
}

export interface OrderProductDataType {
    product: ProductDataType,
    count: number,
    option: string,
}


export interface CartProductDataType {
    product: ProductDataType,
    option: string,
}

export interface ReviewProductDataType {
    product: ProductDataType,
    review: ProductDataReviewType,
}


export interface ProductDataList {
    products: ProductDataType[] | null,
    recommendResult: ProductDataType[],
    pidProducts: ProductDataType[],
    likeProducts: ProductDataType[],
    cartProducts: ProductDataType[],
    orderProducts: OrderProductDataType[],
    storeList?: StoreDataType[],
    reviewProducts?: ReviewProductDataType[],
    unreviewProducts?: ProductDataOrderType[] 
}

export interface ProductDataType {
    store_id: number,
    discount: number,
    product_id: number,
    title: string,
    price: number,
    
    is_best: boolean,
    is_sale: boolean,
    is_nonpesticide: boolean,
    is_ontime: boolean,
    is_vegitable: boolean,

    delivery_charge: number,
    delivery_remain: number,
    delivery_start: string,
    photo: string,
    reviewDataList: ProductDataReviewType[],
    photoDataList: ProductDataPhotoType,
    questionDataList: ProductDataQuestionType[]
}

export interface ProductDataReviewType {
    content: string,
    score: number,
    time_created: Timestamp,
    uid: string,
    photos: string[],
    product_id: number,
    writer: {
        profile_email: string,
        profile_img: string,
        profile_nickname: string
    }
}

export interface ProductWithOrderType {
    product: ProductDataType,
    order: ProductDataOrderType
}

export interface ProductDataOrderType {
    option: string,
    time_created: Timestamp,
    uid: string,
    product_id: number,
    product: ProductDataType
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

// export function LikeReducer(currentState= true, action: any) {
//     const newState = currentState ? false : true;

//     if (action.type === 'CHANGETRUE') {
//         //���ƿ� �� ���
//         console.log("change True");
//     }
//     else if (action.type === 'CHANGEFALSE') {
//         //���ƿ� �� ����
//         console.log("change False");
//     }
//     return newState;
// }

// export const storeLike = createStore(LikeReducer);