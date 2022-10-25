import { GET_LIKE_FAIL, GET_LIKE_SUCCESS, LIKE_CANCEL_FAIL, LIKE_CANCEL_SUCCESS, LIKE_FAIL, LIKE_SUCCESS } from "../pages/LikePage/LikeAction";

export interface LikeData {
    uid: string,
    product_id: number
}


export interface LikeDataList {
    likes: LikeData[]
}

const likeInitState : LikeDataList = {
    likes: []
}


export function LikeReducer(state = likeInitState, action: any) {
    switch (action.type) {
        case GET_LIKE_SUCCESS:
            return {
                ...state,
                likes: action.payload,
            };
        case GET_LIKE_FAIL:
            return {
                ...state,
                likes: action.payload,
            };  
        case LIKE_SUCCESS:
            return {
                ...state,
                likes: action.payload,
            };
        case LIKE_FAIL:
            return {
                ...state,
            };
        case LIKE_CANCEL_SUCCESS:
            return {
                ...state,
                likes: action.payload,
            };
        case LIKE_CANCEL_FAIL:
            return {
                ...state,
                // likes: action.payload,
            };

        default:
            return state;
    }
}

