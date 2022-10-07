import { LOGIN_FAIL, LOGIN_SUCCESS } from "./SplashActions"

type movieItem = {
    title: string,
    url: string
}

type movieItemList = {
    movies: movieItem[]
}

const moviesInitState: movieItemList = {
    movies: [
        {
            title: "asdf",
            url: "asdfsadf"
        }
    ]
}

export function SplashReducer(state = moviesInitState, action: any) {
    switch (action.type) {
        case LOGIN_SUCCESS:
            action.callback.successCallBack();

            return {
                ...state
            }
        case LOGIN_FAIL:
            
            action.callback.failCallBack();
            return {
                ...state
            }
        default:
            return state;
    }
}

