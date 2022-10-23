import { GET_PRODUCT, GET_PRODUCT_FAIL, GET_PRODUCT_LOADING, GET_PRODUCT_SUCCESS } from "../pages/ProductPage/ProductAction";


export interface ProductDataType {
    store_id: number,
    discount: number,
    product_id: number,
    title: string,
    price: number
}

const productInfoInitState : ProductDataType | null = null;

// export let UserInfo: any = {

// }

export function ProductInfoReducer(state = productInfoInitState, action: any) {
    switch (action.type) {
        case GET_PRODUCT_SUCCESS:
            console.log(action.payload);
            
            return {
                ...state,
                productInfo: action.payload
            };
        case GET_PRODUCT_FAIL:
            return {
                ...state,
                productInfo: action.payload
            };
        case GET_PRODUCT_LOADING:
            return {
                ...state,
                productInfo: action.payload
            };
        default:
            return state;
    }
}