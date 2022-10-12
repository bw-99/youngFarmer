import { SEARCH_CREATE, SEARCH_DELETE } from "../pages/SearchPage/SearchActions";
import { SearchHistoryType, SearchHistoryTypeList } from "../pages/SearchPage/SearchConstants";

const searchInitState : SearchHistoryTypeList = {
    history: []
}

const checkDuplicate = (stateHistory: SearchHistoryType[], payload: string) => {
    for (const iterator of stateHistory) {
        if(iterator.text == payload){
            console.log(true);
            return true;
        }
    }
    console.log(false);
    return false;
}

export function SearchReducer(state = searchInitState, action: any) {
    let history = [];

    switch (action.type) {
        case SEARCH_CREATE:
            // 중복 검사
            history = [...state.history];

            if(!checkDuplicate(state.history, action.payload)){
                history.push({
                    text: action.payload
                });
            }

            action.callback();
            

            localStorage.setItem("searchHistory", JSON.stringify(history));

            return {
                ...state,
                history: history
            };

        case SEARCH_DELETE:
            console.log("DELETE " + action.payload);
            
            history = [...state.history];

            history = history.filter(
                (value, index, arr) => {
                    console.log(value.text != action.payload);
                    
                    return value.text != action.payload
                }
            )

            console.log(history);
            localStorage.setItem("searchHistory", JSON.stringify(history));

            return {
                ...state,
                history: history
            };

        default:
            let searchHistory = localStorage.getItem("searchHistory");

            if(searchHistory){
                state.history = JSON.parse(searchHistory);
            }
            
            return state;
    }
}

