export const GET_REVIEW = "GET_REVIEW";

export const GET_UNREVIEW_LIST = "GET_UNREVIEW_LIST";
export const GET_UNREVIEW_LIST_SUCCESS = "GET_UNREVIEW_LIST_SUCCESS";
export const GET_UNREVIEW_LIST_FAIL = "GET_UNREVIEW_LIST_FAIL";

export const GET_REVIEW_LIST = "GET_REVIEW_LIST";
export const GET_REVIEW_LIST_SUCCESS = "GET_REVIEW_LIST_SUCCESS";
export const GET_REVIEW_LIST_FAIL = "GET_REVIEW_LIST_FAIL";


export const GET_REVIEW_ONE = "GET_REVIEW_ONE";
export const GET_REVIEW_ONE_LOADING = "GET_REVIEW_ONE_LOADING";
export const GET_REVIEW_ONE_RESULT = "GET_REVIEW_ONE_RESULT";
export const GET_REVIEW_ONE_SUCCESS = "GET_REVIEW_ONE_SUCCESS";
export const GET_REVIEW_ONE_FAIL = "GET_REVIEW_ONE_FAIL";


export const getUnreviewListAction = (uid?: string) => {
    console.log("getUnreviewListAction");

    return {
        type:GET_REVIEW,
        payload: {
            type: GET_UNREVIEW_LIST,
            payload: uid
        }
    }
}

export const getRreviewListAction = (uid?: string) => {
    console.log("getRreviewListAction");
    
    return {
        type:GET_REVIEW,
        payload: {
            type: GET_REVIEW_LIST,
            payload: uid
        }
    }
}

export const getReviewOneAction = (product_id: number, uid? :string) => {
    console.log("get review one action " + product_id +  " " + uid);
    
    return {
        type:GET_REVIEW,
        payload: {
            type: GET_REVIEW_ONE,
            payload: {
                uid: uid,
                product_id: product_id
            }
        }
    }
}
