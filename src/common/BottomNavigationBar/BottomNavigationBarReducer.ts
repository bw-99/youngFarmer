import { useLocation, useNavigate } from "react-router-dom";
import { CHAT_PAGE, HOME_PAGE, LIKE_PAGE, MY_PAGE, SEARCH_PAGE } from "./BottomNavigationBarActions";
import { BottomNavBarInitState } from "./BottomNavigationBarConstants";

export function BottomNavigationBarReducer(state = BottomNavBarInitState, action: any) {

    switch (action.type) {
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

