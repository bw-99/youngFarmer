import { request } from "../../api/axios";
import { CHANGE_USER, REGISTER_USER } from "./RegisterConstants";

const USER_URL = "/api/user";

export function registerUser(dataToSubmit?: object) {
    const data = request("post", USER_URL + "/register", dataToSubmit);

    return {
        type: REGISTER_USER,
        payload: data,
    };
}


export function changeText(userName: string) {
    return {
        type: CHANGE_USER,
        payload: userName,
    };
}