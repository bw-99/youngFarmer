
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAIL = "LOGIN_FAIL";
export const LOGIN = "LOGIN";

export const CALL_LOGIN = (callback: callback) => {
    return {
        type : LOGIN,
        callback: callback
    }
}

interface callback {
    successCallBack : Function,
    failCallBack: Function
}