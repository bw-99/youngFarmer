import { LOGIN_FAIL, LOGIN_SUCCESS } from "../pages/LoginPage/LoginAction";
import { SEARCH_CREATE, SEARCH_DELETE } from "../pages/SearchPage/SearchActions";
import { SearchHistoryType, SearchHistoryTypeList } from "../pages/SearchPage/SearchConstants";

const searchInitState : SearchHistoryTypeList = {
    history: []
}

export function LoginReducer(state = searchInitState, action: any) {

    switch (action.type) {
        case LOGIN_SUCCESS:
            alert("로그인 성공");
            return {
                ...state
            };

        case LOGIN_FAIL:
            alert("로그인 실패");
            return {
                ...state
            };

        default:
            return state;
    }
}

