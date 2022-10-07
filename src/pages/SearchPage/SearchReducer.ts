import { SEARCH_CREATE, SEARCH_DELETE } from "./SearchActions";
import { SearchHistoryType, SearchHistoryTypeList } from "./SearchConstants";

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
    console.log("????Reducer");
    
    switch (action.type) {
        case SEARCH_CREATE:
            // 중복 검사
            console.log("action!!");
            history = [...state.history];

            if(!checkDuplicate(state.history, action.payload)){
                history.push({
                    text: action.payload
                });
            }

            return {
                ...state,
                history: history
            };

        case SEARCH_DELETE:
            console.log("DELETE");
            
            history = [...state.history];

            history = history.filter(
                (value, index, arr) => {
                    return value == action.payload
                }
            )

            console.log(history);
            

            return {
                ...state,
                history: history
            };

        default:
            return state;
    }
}

