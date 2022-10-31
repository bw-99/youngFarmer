export const LOGIN_WITH_KAKAO = "LOGIN_WITH_KAKAO";
export const LOGIN_WITH_NAVER = "LOGIN_WITH_NAVER";
export const LOGIN_WITH_ANONYMOUS = "LOGIN_WITH_ANONYMOUS";

export const LOGIN_TRY = "LOGIN_TRY";

export const LOGIN_SUCCESS_FIRST = "LOGIN_SUCCESS_FIRST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAIL = "LOGIN_FAIL";
export const LOGIN_LOADING = "LOGIN_LOADING";

export const GET_USER_INFO = "GET_USER_INFO";


export const login_result_loading = "login_result_loading"
export const login_result_success = "login_result_success"
export const login_result_fail = "login_result_fail"



export const GetUserInfoAction = (data: any) => {
    return {
        type: GET_USER_INFO,
        payload: data
    }
}


export interface LOGIN_PAYLOAD {
    type: string,
    code: string, 
    callback: Function
}

export type loginData = {
    code: string, 
    nickname: string,
    email: string,
    phoneNumber: string
}

export const LoginWithKakaoAction = (
    data:loginData, 
    sCallback:Function, 
    fCallback:Function, 
    ) => {
    return(
        {
            type: LOGIN_TRY,
            payload: {
                type: LOGIN_WITH_KAKAO,
                data: data,
                sCallback: sCallback,
                fCallback: fCallback,
            }
        }
    );
}

export const LoginWithNaverAction = () => {
    return(
        {
            type: LOGIN_TRY,
            payload: {
                type: LOGIN_WITH_NAVER,
            }
        }
    );
}

export const LoginWithAnonymous = (callback: Function) => {
    return(
        {
            type: LOGIN_TRY,
            payload: {
                type: LOGIN_WITH_ANONYMOUS,
                callback: callback
            }
        }
    )
}