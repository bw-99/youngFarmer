import { CALL_MAIN_API, CREATE_TASK, taskItem } from "./LandingConstants";

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