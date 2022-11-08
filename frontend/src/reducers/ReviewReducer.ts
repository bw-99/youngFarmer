import { SEARCH_CART_SUCCESS, SEARCH_FAIL, SEARCH_LIKE_SUCCESS, SEARCH_ORDER_SUCCESS, SEARCH_PID_SUCCESS, SEARCH_RECOMMNEND_SUCCESS, SEARCH_REVIEW_SUCCESS, SEARCH_STORE_SUCCESS, SEARCH_SUCCESS, SEARCH_UNREVIEW_SUCCESS } from "../pages/SearchPage/SearchDertailAction";
import { FILTER_CLOSE, FILTER_OPEN, SEARCH_CREATE, SEARCH_DELETE, TOGGLE_PRODUCT, TOGGLE_STORE } from "../pages/SearchPage/SearchActions";
import { SearchHistoryType, SearchHistoryTypeList } from "../pages/SearchPage/SearchConstants";
import { OrderProductDataType, ProductDataList, ProductWithOrderType } from "./ProductReducer";
import { GET_REVIEW_ONE_FAIL, GET_REVIEW_ONE_LOADING, GET_REVIEW_ONE_RESULT, GET_REVIEW_ONE_SUCCESS } from "../pages/ReviewPage/ReviewAction";



const preReviewInitState: ProductWithOrderType | null = null;

const preReviewStateInitState = {
    result: GET_REVIEW_ONE_LOADING
}

export function ReviewWriteReducer(state = preReviewInitState, action: any) {
    switch (action.type) {
        case GET_REVIEW_ONE_RESULT:
            return {
                ...state,
                product: action.payload.orderProducts.product,
                order: action.payload.orderProducts.order
                // ...action.payload.orderProducts,
            };

        default:
           
            return state;
    }
}

export function ReviewWriteStateReducer(state = preReviewStateInitState, action: any) {
    switch (action.type) {
        case GET_REVIEW_ONE_SUCCESS:
            return {
                ...state,
                result: GET_REVIEW_ONE_SUCCESS
            };

        case GET_REVIEW_ONE_FAIL:
            return {
                ...state,
                result: GET_REVIEW_ONE_FAIL
            };

        default:
           
            return state;
    }
}