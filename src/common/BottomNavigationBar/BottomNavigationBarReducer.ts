import { useLocation, useNavigate } from "react-router-dom";
import { CHAT_PAGE, HOME_PAGE, LIKE_PAGE, MY_PAGE, SEARCH_PAGE } from "./BottomNavigationBarActions";
import { BottomNavBarInitState } from "./BottomNavigationBarConstants";

// // ! 새로고침할 때 redux 상태 초기화 되는 문제 => 로컬 스토리지로 해결 필요
export function BottomNavigationBarReducer(state = BottomNavBarInitState, action: any) {

    let type:string = state.index != -1 ? action.type : localStorage.getItem("pageIndex");
    console.log(type);
    console.log("??????????????????????");
    
    
    switch (type) {
        case HOME_PAGE:
            return {
                ...state,
                index: 0
            };
        case SEARCH_PAGE:
            return {
                ...state,
                index: 1
            };
        case LIKE_PAGE:
            return {
                ...state,
                index: 2
            };
        case CHAT_PAGE:
            return {
                ...state,
                index: 3
            };
        case MY_PAGE:
            return {
                ...state,
                index: 4
            };
        default:
            return {
                ...state,
            };
    }
}

