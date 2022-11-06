export const SEARCH_TRY = "SEARCH_TRY";
export const SEARCH_SUCCESS = "SEARCH_SUCCESS";
export const SEARCH_FAIL = "SEARCH_FAIL";

export const SEARCH_FILTER_TRY = "SEARCH_FILTER_TRY";
export const SEARCH_FILTER_SUCCESS = "SEARCH_FILTER_SUCCESS";
export const SEARCH_FILTER_FAIL = "SEARCH_FILTER_FAIL";

export const SEARCH_STORE_TRY = "SEARCH_STORE_TRY";
export const SEARCH_STORE_SUCCESS = "SEARCH_STORE_SUCCESS";
export const SEARCH_STORE_FAIL = "SEARCH_STORE_FAIL";

export const SEARCH_RECOMMNEND_TRY = "SEARCH_RECOMMNEND_TRY";
export const SEARCH_RECOMMNEND_SUCCESS = "SEARCH_RECOMMNEND_SUCCESS";
export const SEARCH_RECOMMNEND_FAIL = "SEARCH_RECOMMNEND_FAIL";

export const SEARCH_PID_TRY = "SEARCH_PID_TRY";
export const SEARCH_PID_SUCCESS = "SEARCH_PID_SUCCESS";
export const SEARCH_PID_FAIL = "SEARCH_PID_FAIL";


export const SEARCH_LIKE_TRY = "SEARCH_LIKE_TRY";
export const SEARCH_LIKE_SUCCESS = "SEARCH_LIKE_SUCCESS";
export const SEARCH_LIKE_FAIL = "SEARCH_LIKE_FAIL";

export const SEARCH_CART_TRY = "SEARCH_CART_TRY";
export const SEARCH_CART_SUCCESS = "SEARCH_CART_SUCCESS";
export const SEARCH_CART_FAIL = "SEARCH_CART_FAIL";

export const SEARCH_ORDER_TRY = "SEARCH_ORDER_TRY";
export const SEARCH_ORDER_SUCCESS = "SEARCH_ORDER_SUCCESS";
export const SEARCH_ORDER_FAIL = "SEARCH_ORDER_FAIL";

export const SEARCH_REVIEW_TRY = "SEARCH_REVIEW_TRY";
export const SEARCH_REVIEW_SUCCESS = "SEARCH_REVIEW_SUCCESS";
export const SEARCH_REVIEW_FAIL = "SEARCH_REVIEW_FAIL";

export const SEARCH_UNREVIEW_TRY = "SEARCH_UNREVIEW_TRY";
export const SEARCH_UNREVIEW_SUCCESS = "SEARCH_UNREVIEW_SUCCESS";
export const SEARCH_UNREVIEW_FAIL = "SEARCH_UNREVIEW_FAIL";

export type FILTER_TYPE = {
    is_best?: boolean,
    is_sale?: boolean,
    is_nonpesticide?: boolean,
    is_ontime?: boolean,
    is_vegitable?: boolean,
}

export type PRICE_RANGE_TYPE = {
    minPrice: number,
    maxPrice: number
}

export const searchTryAction = (search:string) => {
    console.log("searchTryAction");
    
    return {
        type: SEARCH_TRY,
        payload: {
            type: SEARCH_TRY,
            search: search,
        }
    }
}

export const searchFilterTryAction = (search: string, filter: FILTER_TYPE, priceRange?: PRICE_RANGE_TYPE) => {
    console.log("searchFilterTryAction");
    
    return {
        type: SEARCH_TRY,
        payload: {
            type: SEARCH_FILTER_TRY,
            search: search,
            filter: filter,
            priceRange: priceRange
        }
    }
}

// export const searchStoreAction = (search: string) => {
//     return {
//         type: SEARCH_TRY,
//         payload: {
//             type: SEARCH_STORE_TRY,
//             search: search
//         }
//     }
// }

export const searchRecommendTryAction = () => {
    return {
        type: SEARCH_TRY,
        payload: {
            type: SEARCH_RECOMMNEND_TRY
        }
    }
}

export const searchLikeTryAction = (pidList: number[]) => {
    return {
        type: SEARCH_TRY,
        payload: {
            type: SEARCH_PID_TRY,
            pidList: pidList
        }
    }
}