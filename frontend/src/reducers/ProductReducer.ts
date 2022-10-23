import { GET_PRODUCT, GET_PRODUCT_FAIL, GET_PRODUCT_LOADING, GET_PRODUCT_SUCCESS } from "../pages/ProductPage/ProductAction";


export interface ProductDataType {
    store_id: number,
    discount: number,
    product_id: number,
    title: string,
    price: number,
    reviewDataList: ProductDataReviewType[],
    photoDataList: ProductDataPhotoType,
    delivery_charge: number,
    delivery_remain: number,
    delivery_start: string,
}

export interface ProductDataReviewType {
    content: string,
    score: number,
    time_created: Date,
    uid: string,
}

export interface ProductDataPhotoType {
    main_photo: string,
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