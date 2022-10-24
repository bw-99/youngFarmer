export const SEARCH_CREATE = "SEARCH_CREATE";
export const SEARCH_DELETE = "SEARCH_DELETE";

export const SEARCH_CREATE_SUCCESS = "SEARCH_CREATE_SUCCESS";
export const SEARCH_CREATE_FAIL = "SEARCH_CREATE_FAIL";

export const SearchCrateAction = (searchWord: string, callback:Function) => {
    return {
        type: SEARCH_CREATE,
        payload: searchWord,
        callback: callback
    };
}

export const SearchDeleteAction = (searchWord: string) => {
    return {
        type: SEARCH_DELETE,
        payload: searchWord
    };
}