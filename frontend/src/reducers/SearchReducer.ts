import { SEARCH_FAIL, SEARCH_LIKE_SUCCESS, SEARCH_RECOMMNEND_SUCCESS, SEARCH_SUCCESS } from "../pages/SearchPage/SearchDertailAction";
import { FILTER_CLOSE, FILTER_OPEN, SEARCH_CREATE, SEARCH_DELETE, TOGGLE_PRODUCT, TOGGLE_STORE } from "../pages/SearchPage/SearchActions";
import { SearchHistoryType, SearchHistoryTypeList } from "../pages/SearchPage/SearchConstants";
import { ProductDataList } from "./ProductReducer";

export interface SEARCH_FILTER {
    entire: boolean,
    best: boolean,
    discount:boolean,
    ontimeFruit: boolean,
    vegatable: boolean,
    nonPesticide: boolean
}

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


const searchDetailInitState : ProductDataList = {
    products: [],
    recommendResult: [],
    likeProducts: []
}


export function SearchDetailReducer(state = searchDetailInitState, action: any) {
    switch (action.type) {
        case SEARCH_SUCCESS:
            action.callback();
            return {
                ...state,
                products: action.payload.products,
                recommendResult: action.payload.recommendResult,
            };

        case SEARCH_RECOMMNEND_SUCCESS:
            return {
                ...state,
                recommendResult: action.payload.recommendResult,
            };

        case SEARCH_LIKE_SUCCESS:
            return {
                ...state,
                likeProducts: action.payload.likeProducts,
            };

        case SEARCH_FAIL:
            return {
                ...state,
                products: action.payload.products,
                likeProducts: action.payload.recommendResult,
            };

        // case SEARCH_OTHER_SUCCESS:
        //     console.log("search other success: "+action.payload);
            
        //     return  {
        //         ...state,
        //         otherProducts: action.payload
        //     }

        default:
           
            return state;
    }
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


const fiterFlagInitState : boolean = false;


export function SearchFilterReducer(state = fiterFlagInitState, action: any) {
    switch (action.type) {
        case FILTER_OPEN:
            return true;

        case FILTER_CLOSE:
            return false;

        default:
            return state;
    }
}


const toggleFlagInitState : number = 0;


export function SearchToggleReducer(state = toggleFlagInitState, action: any) {
    switch (action.type) {
        case TOGGLE_PRODUCT:
            return 0;

        case TOGGLE_STORE:
            return 1;

        default:
            return state;
    }
}


