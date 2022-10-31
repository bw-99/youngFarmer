import { useNavigate } from "react-router-dom";
import { call, delay, put, SagaReturnType, takeLatest } from "redux-saga/effects";
import { loginData, LOGIN_FAIL, LOGIN_LOADING, LOGIN_PAYLOAD, LOGIN_SUCCESS, LOGIN_SUCCESS_FIRST, LOGIN_TRY, LOGIN_WITH_ANONYMOUS, LOGIN_WITH_KAKAO, LOGIN_WITH_NAVER } from "../pages/LoginPage/LoginAction";
import { db, kakaoConfig } from "..";
import axios from 'axios'
import { apiClient, get, post } from "../api/axios";
import { getAuth, signInAnonymously, signInWithCustomToken, updateEmail, updateProfile } from "firebase/auth";
import { collection, query, where, limit, getDocs, setDoc, doc, addDoc } from "firebase/firestore";

type LoginServiceResponse = SagaReturnType<any>;


async function kakaoLoginAPI(payload:any) {
    const isLocal:boolean =  window.location.hostname == "localhost" && window.location.origin != process.env.REACT_APP_FIREBASE_LOCAL;
    
    const data: loginData = payload.data;

    const code:string = data.code;
    
    const result = await post(
        `${isLocal? "/kakaoLogin" : "https://kauth.kakao.com"}/oauth/token?grant_type=${encodeURI("authorization_code")}&client_id=${encodeURIComponent(kakaoConfig.restAPIKey)}&redirect_uri=${encodeURI(window.location.origin + "/login/oauth/kakao")}&code=${encodeURI(code)}`, 
        {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
            },
        }
    )

    console.log(result.data.access_token);

    const customToken = await post(
        `${isLocal? "/functions" : process.env.REACT_APP_FIREBASE_FUNCTION_URL}/verifyToken`,
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
    const userCredential = await signInWithCustomToken(auth, customToken.data.firebase_token)
    const user = userCredential.user;
    console.log("kakao login result1 : " + JSON.stringify(user));
    return user.uid;
}

async function anonymousLoginAPI(payload:LOGIN_PAYLOAD) {
    const auth = getAuth();
    const signinResult = await signInAnonymously(auth);

    return signinResult.user.uid;
}

async function createUserInfo(uid:string, is_guest:boolean, data:loginData | null) {
    console.log("createUserInfo");
    
    const userRef = collection(db, "user");
    const q = query(userRef, where("uid", "==", uid), limit(1));
    const fbdata = await getDocs(q);
    const isNew:boolean = fbdata.empty;

    // 신규 가입
    // ! 회원가입 페이지에서 넘어오는 데이터로 구현 필요
    if(fbdata.empty){
        const result = await addDoc(userRef, {
            uid: uid,
            is_guest:is_guest
        });

        const userProfileRef = collection(db, "user",result.id, "profile");
        if(data) {
            await addDoc(userProfileRef, {
                profile_nickname: data.nickname,
                profile_email: data.email,
                profile_img: null
            })
        }
        else{
            await addDoc(userProfileRef, {
                profile_nickname: "Guest"+uid.substring(0,3),
                profile_email: null,
                profile_img: null
            })
        }
        
    }
    // SNS 연동 로그인 중 첫 로그인일 경우
    return (isNew && !is_guest);
}

function* kakaoLogin(action:any) {
    console.log("kakao login");
    
    const result:LoginServiceResponse = yield call(kakaoLoginAPI, action.payload);
    console.log("kakao login result2 : " + JSON.stringify(result));
    
    const needSignUp:LoginServiceResponse = yield call(createUserInfo, result as string, false, action.payload.data);

    if(result){
        yield put({
            type: LOGIN_SUCCESS,
            callback: action.payload.callback
        }); 
        // if(needSignUp) {
        //     yield put({
        //         type: LOGIN_SUCCESS_FIRST,
        //         callback: action.payload.callback
        //     });
        // }
        // else{
        //     yield put({
        //         type: LOGIN_SUCCESS,
        //         callback: action.payload.callback
        //     }); 
        // }
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
    yield call(createUserInfo, result as string, true, null);

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
    // loading start
    yield put({
        type: LOGIN_LOADING,
    }); 
    
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