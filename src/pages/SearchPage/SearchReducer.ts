import { SERACH_CREATE, SERACH_DELETE } from "./SearchActions";
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
    switch (action.type) {
        case SERACH_CREATE:
            // 중복 검사
            if(!checkDuplicate(state.history, action.payload)){
                state.history.push({
                    text: action.payload
                });
            }
            state.history.push({
                text: action.payload
            });
            return {
                ...state,
                history: state.history
            };
        case SERACH_DELETE:
            return {
                ...state
            };
        default:
            return state;
    }
}

