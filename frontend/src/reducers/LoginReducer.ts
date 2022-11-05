import { LOGIN_FAIL, LOGIN_SUCCESS, GET_USER_INFO, LOGIN_SUCCESS_FIRST, LOGIN_LOADING, login_result_loading } from "../pages/LoginPage/LoginAction";
import { SEARCH_CREATE, SEARCH_DELETE } from "../pages/SearchPage/SearchActions";
import { SearchHistoryType, SearchHistoryTypeList } from "../pages/SearchPage/SearchConstants";
import { setItemWithExpireTime } from "../services/localStorage";


interface LoginResult {
    result: string | null
}

const loginInfoInitState : LoginResult = {
    result: null
}

interface UserData {
    
}

const userInfoInitState : UserData = {
}

// export let UserInfo: any = {

// }

export function UserInfoReducer(state = userInfoInitState, action: any) {
    switch (action.type) {
        case GET_USER_INFO:
            return {
                ...state,
                UserInfo: action.payload
            };
        default:
            return state;
    }
}


export function LoginReducer(state = loginInfoInitState, action: any) {
    switch (action.type) {
        case LOGIN_SUCCESS:
            // action.callback();
            return {
                ...state
            };

        case LOGIN_SUCCESS_FIRST:
            return {
                ...state
            };

        case LOGIN_LOADING:
            return {
                result: login_result_loading
            }

        case LOGIN_FAIL:
            console.log("로그인 실패");
            
            return {
                ...state
            };

        default:
            return state;
    }
}

