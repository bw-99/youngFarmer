export const SEARCH_CREATE = "SEARCH_CREATE";
export const SEARCH_DELETE = "SEARCH_DELETE";

export const SEARCH_CREATE_SUCCESS = "SEARCH_CREATE_SUCCESS";
export const SEARCH_CREATE_FAIL = "SEARCH_CREATE_FAIL";

export const FILTER_OPEN = "FILTER_OPEN";
export const FILTER_CLOSE = "FILTER_CLOSE";

export const TOGGLE_PRODUCT = "TOGGLE_PRODUCT";
export const TOGGLE_STORE = "TOGGLE_STORE";

export const toggleProductAction = () => {
    return {
        type:TOGGLE_PRODUCT
    }
}

export const toggleStoreAction = () => {
    return {
        type:TOGGLE_STORE
    }
}


export const SearchCrateAction = (searchWord: string) => {
    return {
        type: SEARCH_CREATE,
        payload: searchWord,
    };
}

export const SearchDeleteAction = (searchWord: string) => {
    return {
        type: SEARCH_DELETE,
        payload: searchWord
    };
}

export const SearchFilterOpenAction = () => {
    return {
        type: FILTER_OPEN
    }
}

export const SearchFilterCloseAction = () => {
    return {
        type: FILTER_CLOSE
    }
}