export const LIKE_TRY = "LIKE_TRY";
export const LIKE_SUCCESS = "LIKE_SUCCESS";
export const LIKE_FAIL = "LIKE_FAIL";

export const LIKE_CANCEL_TRY = "LIKE_CANCEL_TRY";
export const LIKE_CANCEL_SUCCESS = "LIKE_CANCEL_SUCCESS";
export const LIKE_CANCEL_FAIL = "LIKE_CANCEL_FAIL";

export const GET_LIKE = "GET_LIKE";
export const GET_LIKE_SUCCESS = "GET_LIKE_SUCCESS";
export const GET_LIKE_FAIL = "GET_LIKE_FAIL";

export const likeAction = (product_id:number) => {
    return {
        type: LIKE_TRY,
        payload: {
            type: LIKE_TRY,
            product_id: product_id,
        }
    };
}


export const likeCancelAction = (product_id:number) => {
    return {
        type: LIKE_TRY,
        payload: {
            type: LIKE_CANCEL_TRY,
            product_id: product_id,
        }
    };
}


export const getLikeAction = (uid:string) => {
    return {
        type: GET_LIKE,
        payload: {
            type: GET_LIKE,
            uid: uid
        }
    }
}