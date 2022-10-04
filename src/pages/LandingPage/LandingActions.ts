import { taskItem } from "./LandingConstants";

export const CALL_MAIN_API = "CALL_MAIN_API";
export const CALL_MAIN_API_SUCCESS = "CALL_MAIN_API_SUCCESS";

export const CALL_MAIN_API_FAILURE = "CALL_MAIN_API_FAILURE";

export const CREATE_TASK = "CREATE_TASK";
export const DELETE_TASK = "DELETE_TASK";
export const READ_TASK = "READ_TASK";
export const UPDATE_TASK = "UPDATE_TASK";

export function getMain() {
    return {
        type: CALL_MAIN_API
    }
}

export function createTask(inputTask: taskItem) {
    return {
        type: CREATE_TASK,
        task: inputTask
    }
}