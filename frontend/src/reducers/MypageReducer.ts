import { Timestamp } from "firebase/firestore";
import { GET_PROFILE_SUCCESS, GET_PROFILE_FAIL, GET_PROFILE_LOADING } from "../pages/MyPage/MyAction";
import { GET_PRODUCT, GET_PRODUCT_FAIL, GET_PRODUCT_LOADING, GET_PRODUCT_SUCCESS } from "../pages/ProductPage/ProductAction";


export interface MyPageDataType {
    uid:string,
    profileData: MyPageProfileDataType
}

export interface MyPageProfileDataType {
    profile_nickname: string,
    profile_email: string, 
    profile_img: string
}


export interface MyPageDatabjectType {
    mypageInfo: MyPageDataType | null
}

const mypageInfoInitState : MyPageDatabjectType | null = {
    mypageInfo: null
};

// export let UserInfo: any = {

// }

export function ProfileReducer(state = mypageInfoInitState, action: any) {
    switch (action.type) {
        case GET_PROFILE_SUCCESS:
            console.log("reducer");
            return {
                ...state,
                mypageInfo: action.payload
            };
        case GET_PROFILE_FAIL:
            return {
                ...state,
                mypageInfo: action.payload
            };
        case GET_PROFILE_LOADING:
            return {
                ...state,
                mypageInfo: action.payload
            };
        default:
            return state;
    }
}