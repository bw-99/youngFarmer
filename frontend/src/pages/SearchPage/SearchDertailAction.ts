export const SEARCH_TRY = "SEARCH_TRY"
export const SEARCH_SUCCESS = "SEARCH_SUCCESS"
export const SEARCH_FAIL = "SEARCH_FAIL"


export const SEARCH_STORE_TRY = "SEARCH_STORE_TRY";
export const SEARCH_STORE_SUCCESS = "SEARCH_STORE_SUCCESS";
export const SEARCH_STORE_FAIL = "SEARCH_STORE_FAIL";

export const SEARCH_RECOMMNEND_TRY = "SEARCH_RECOMMNEND_TRY";
export const SEARCH_RECOMMNEND_SUCCESS = "SEARCH_RECOMMNEND_SUCCESS";
export const SEARCH_RECOMMNEND_FAIL = "SEARCH_RECOMMNEND_FAIL";


export const SEARCH_LIKE_TRY = "SEARCH_LIKE_TRY";
export const SEARCH_LIKE_SUCCESS = "SEARCH_LIKE_SUCCESS";
export const SEARCH_LIKE_FAIL = "SEARCH_LIKE_FAIL";

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
            type: SEARCH_LIKE_TRY,
            pidList: pidList
        }
    }
}