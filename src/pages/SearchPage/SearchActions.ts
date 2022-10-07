export const SERACH_CREATE = "SERACH_CREATE";
export const SERACH_DELETE = "SERACH_DELETE";

export const SearchCrateAction = (searchWord: string) => {
    return {
        type: SERACH_CREATE,
        payload: searchWord
    };
}