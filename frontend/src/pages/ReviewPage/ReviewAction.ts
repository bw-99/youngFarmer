export const GET_REVIEW = "GET_REVIEW";

export const GET_UNREVIEW_LIST = "GET_UNREVIEW_LIST";
export const GET_UNREVIEW_LIST_SUCCESS = "GET_UNREVIEW_LIST_SUCCESS";
export const GET_UNREVIEW_LIST_FAIL = "GET_UNREVIEW_LIST_FAIL";

export const GET_REVIEW_LIST = "GET_REVIEW_LIST";
export const GET_REVIEW_LIST_SUCCESS = "GET_REVIEW_LIST_SUCCESS";
export const GET_REVIEW_LIST_FAIL = "GET_REVIEW_LIST_FAIL";


export const getUnreviewListAction = (uid?: string) => {
    return {
        type:GET_REVIEW,
        payload: {
            type: GET_UNREVIEW_LIST,
            payload: uid
        }
    }
}

export const getRreviewListAction = (uid?: string) => {
    return {
        type:GET_REVIEW,
        payload: {
            type: GET_REVIEW_LIST,
            payload: uid
        }
    }
}
