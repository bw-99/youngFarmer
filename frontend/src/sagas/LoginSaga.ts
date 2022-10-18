import { useNavigate } from "react-router-dom";
import { call, delay, put, SagaReturnType, takeLatest } from "redux-saga/effects";
import { LOGIN_FAIL, LOGIN_PAYLOAD, LOGIN_SUCCESS, LOGIN_TRY, LOGIN_WITH_ANONYMOUS, LOGIN_WITH_KAKAO, LOGIN_WITH_NAVER } from "../pages/LoginPage/LoginAction";
import { kakaoConfig } from "..";
import axios from 'axios'
import { apiClient, get, post } from "../api/axios";
import { getAuth, signInAnonymously, signInWithCustomToken } from "firebase/auth";

type LoginServiceResponse = SagaReturnType<any>;


async function kakaoLoginAPI(payload:any) {
    const isLocal:boolean =  window.location.hostname == "localhost" && window.location.origin != process.env.REACT_APP_FIREBASE_LOCAL;
    const code:string = payload.code;
    
    const result = await post(
        `${isLocal? "kakaoLogin" : "https://kauth.kakao.com"}/oauth/token?grant_type=${encodeURI("authorization_code")}&client_id=${encodeURIComponent(kakaoConfig.restAPIKey)}&redirect_uri=${encodeURI(window.location.origin + "/login")}&code=${encodeURI(code)}`, 
        {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
            },
        }
    )

    console.log(result.data.access_token);

    const customToken = await post(
        `${isLocal? "functions" : process.env.REACT_APP_FIREBASE_FUNCTION_URL}/verifyToken`,
        {
            headers: {
                'Content-Type': 'text/plain',
            },
            token: result.data.access_token
        }
    );

    console.log(customToken);
    console.log(customToken.data.firebase_token);
    

    const auth = getAuth();
    signInWithCustomToken(auth, customToken.data.firebase_token)
    .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        return true;
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        return false;
    });
}

async function anonymousLoginAPI(payload:LOGIN_PAYLOAD) {
    const auth = getAuth();
    const signinResult = await signInAnonymously(auth);

    return signinResult.user.uid;
}


function* kakaoLogin(action:any) {
    const result:LoginServiceResponse = yield call(kakaoLoginAPI, action.payload);
    
    if(result){
        console.log(action);
        
        yield put({
            type: LOGIN_SUCCESS,
            callback: action.payload.callback
        }); 
    }
    else{
        yield put({
            type: LOGIN_FAIL,
            callback: action.payload.callback
        }); 
    }
}

function* anonymousLogin(payload:LOGIN_PAYLOAD) {
    const result:LoginServiceResponse =  yield call(anonymousLoginAPI, payload);
    console.log(result);
    if(result) {
        yield put({
            type: LOGIN_SUCCESS,
            callback: payload.callback
        }); 
    }
    else{
        yield put({
            type: LOGIN_FAIL,
            callback: payload.callback
        }); 
    }
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
        
        case LOGIN_WITH_ANONYMOUS:
            yield anonymousLogin(action.payload)
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