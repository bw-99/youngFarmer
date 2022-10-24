export const LOGIN_WITH_KAKAO = "LOGIN_WITH_KAKAO";
export const LOGIN_WITH_NAVER = "LOGIN_WITH_NAVER";
export const LOGIN_WITH_ANONYMOUS = "LOGIN_WITH_ANONYMOUS";

export const LOGIN_TRY = "LOGIN_TRY";

export const LOGIN_SUCCESS_FIRST = "LOGIN_SUCCESS_FIRST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAIL = "LOGIN_FAIL";

export const GET_USER_INFO = "GET_USER_INFO";

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


export const LoginWithKakaoAction = (
    code:string, 
    sCallback:Function, 
    fCallback:Function, 
    sfCallback:Function
    ) => {
    return(
        {
            type: LOGIN_TRY,
            payload: {
                type: LOGIN_WITH_KAKAO,
                code: code,
                sCallback: sCallback,
                fCallback: fCallback,
                sfCallback: sfCallback
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