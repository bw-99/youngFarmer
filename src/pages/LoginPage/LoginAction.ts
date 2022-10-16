export const LOGIN_WITH_KAKAO = "LOGIN_WITH_KAKAO";
export const LOGIN_WITH_NAVER = "LOGIN_WITH_NAVER";

export const LOGIN_TRY = "LOGIN_TRY";

export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAIL = "LOGIN_FAIL";

export const LoginWithKakaoAction = (code:string) => {
    return(
        {
            type: LOGIN_TRY,
            payload: {
                type: LOGIN_WITH_KAKAO,
                code: code
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
