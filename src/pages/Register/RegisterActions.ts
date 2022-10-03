import { CHANGE_TO_BAR, CHANGE_TO_FOO, ADD_USERNAME, REGISTER_USER, INCREMENT_ASYNC, INCREMENT, SEARCH_NAVER } from "./RegisterConstants";

const USER_URL = "/api/user";

export function registerUser(dataToSubmit?: object) {
    // const data = request("post", USER_URL + "/register", dataToSubmit);

    return {
        type: REGISTER_USER,
        // payload: data,
    };
}

export function changeToBar() {
    return {
        type: CHANGE_TO_BAR,
    };
}

export function searchNaver() {
    return {
        type: SEARCH_NAVER,
    };
}

export function changeToFoo() {
    return {
        type: CHANGE_TO_FOO,
    };
}

export function addName(userName: string) {
    return {
        type: ADD_USERNAME,
        payload: userName,
    };
}

export const numberAddAsync = () => {
    return {
        type: INCREMENT_ASYNC
    }
}

export const numberAdd = () => {
    return {
        type: INCREMENT
    }
}