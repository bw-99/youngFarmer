export const SEARCH_TRY = "SEARCH_TRY"
export const SEARCH_SUCCESS = "SEARCH_SUCCESS"
export const SEARCH_FAIL = "SEARCH_FAIL"

export const searchTryAction = (search:string) => {
    console.log("searchTryAction");
    
    return {
        type: SEARCH_TRY,
        payload: {
            type: SEARCH_TRY,
            search: search
        }
    }
}