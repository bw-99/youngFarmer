export const SEARCH_CREATE = "SEARCH_CREATE";
export const SEARCH_DELETE = "SEARCH_DELETE";

export const SEARCH_CREATE_SUCCESS = "SEARCH_CREATE_SUCCESS";
export const SEARCH_CREATE_FAIL = "SEARCH_CREATE_FAIL";

export const FILTER_OPEN = "FILTER_OPEN";
export const FILTER_CLOSE = "FILTER_CLOSE";

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