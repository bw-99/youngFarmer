import {CALL_MAIN_API, CALL_MAIN_API_FAILURE, CALL_MAIN_API_SUCCESS, CREATE_TASK, taskInitState} from "./LandingConstants";

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

export function mainMovieReducer(state = moviesInitState, action : any) {
    switch (action.type) {
        case CALL_MAIN_API_SUCCESS:
            return {
                ... state,
                movies: action.movies
            };
        case CALL_MAIN_API_FAILURE:
            return {
                ... state
            };
        default:
            return state;
    }
}



export function remainTaskReducer(state = taskInitState, action : any) {
    switch (action.type) {
        case CREATE_TASK:
            return {
                ... state,
                tasks: [
                    ...state.tasks,
                    action.task
                ]
            };
        default:
            return state;
    }
}
