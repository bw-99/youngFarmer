import { useNavigate } from "react-router-dom";
import { call, delay, put, takeLatest } from "redux-saga/effects";
import { LOGIN_FAIL, LOGIN_SUCCESS, LOGIN_TRY, LOGIN_WITH_KAKAO, LOGIN_WITH_NAVER } from "../pages/LoginPage/LoginAction";
import { kakaoConfig } from "..";
import axios from 'axios'
import { apiClient, get } from "../api/axios";

async function kakaoLoginAPI(payload:any) {
    const headers = {
        'Content-type': 'application/x-www-form-urlencoded;charset=utf-8',
        "Access-Control-Allow-Origin": "true",
    }

    console.log(`code = ${payload.code}`);

    // const result = await get(
    //     "naver/search.naver?where=nexearch&sm=top_hty&fbm=0&ie=utf8&query=%EC%BD%94%EC%8A%A4%ED%94%BC"
    // );

    // const result = await apiClient.get(
    //     "google/search?q=ggg",
    //     {
    //         headers: headers
    //     }
    // );


    // const result = await fetch(
    //     `https://kauth.kakao.com/oauth/token? \
    //     grant_type=${encodeURI("authorization_code")} \
    //     &client_id=${encodeURI(kakaoConfig.restAPIKey)} \
    //     &redirect_uri=${encodeURI("http://localhost:52324/login")} \
    //     &code=${encodeURI(payload.code)}`,
    //     {
    //         method: 'POST',
    //         headers: headers
    //     }
        
    // );

    const result = await axios.post(
        `kauth/oauth`,{}, 
        {
            headers: headers
        }
    );

    
    // console.log(result);
    

    // const result = await axios.get(
    //     `api/oauth/authorize?response_type=code&client_id=${kakaoConfig.restAPIKey}&redirect_uri=${kakaoConfig.redirectUri}`,
    //     {headers}
    // );

    // const result = await get(
    //     "/kauth/search?q=asdf",
    //     {headers}
    // );

    // console.log(result);
    
    
    // return result;
}


function* kakaoLogin(action:any) {
    yield kakaoLoginAPI(action.payload);
    
    yield put({
        type: LOGIN_SUCCESS,
        callback: action.callback
    }); 
}


function* loginIndex(action: any) {
    switch (action.payload.type) {
        case LOGIN_WITH_KAKAO:
            yield kakaoLogin(action); 
            break;
        
        case LOGIN_WITH_NAVER:
            yield put({
                type: LOGIN_FAIL,
                callback: action.callback
            }); 
            break;
    
        default:
            yield put({
                type: LOGIN_FAIL,
                callback: action.callback
            }); 
            break;
    }
}

export function* getLoginSignal() {
    yield takeLatest(LOGIN_TRY, loginIndex)
}