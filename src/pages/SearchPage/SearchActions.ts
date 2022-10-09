export const SEARCH_CREATE = "SEARCH_CREATE";
export const SEARCH_DELETE = "SEARCH_DELETE";

export const SearchCrateAction = (searchWord: string) => {
    return {
        type: SEARCH_CREATE,
        payload: searchWord
    };
}


export const SearchDeleteAction = (searchWord: string) => {
    return {
        type: SEARCH_DELETE,
        payload: searchWord
    };
}