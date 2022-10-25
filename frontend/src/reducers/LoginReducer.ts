import { LOGIN_FAIL, LOGIN_SUCCESS, GET_USER_INFO, LOGIN_SUCCESS_FIRST } from "../pages/LoginPage/LoginAction";
import { SEARCH_CREATE, SEARCH_DELETE } from "../pages/SearchPage/SearchActions";
import { SearchHistoryType, SearchHistoryTypeList } from "../pages/SearchPage/SearchConstants";
import { setItemWithExpireTime } from "../services/localStorage";

const searchInitState : SearchHistoryTypeList = {
    history: []
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


export function LoginReducer(state = searchInitState, action: any) {
    switch (action.type) {
        case LOGIN_SUCCESS:
            // 한 시간 유효기간 설정
            console.log("set item with expire");
            
            // setItemWithExpireTime('user','true',1000* 60 * 60);
            action.callback();
            return {
                ...state
            };

        case LOGIN_SUCCESS_FIRST:
            return {
                ...state
            };

        case LOGIN_FAIL:
            console.log("로그인 실패");
            
            return {
                ...state
            };

        default:
            return state;
    }
}

