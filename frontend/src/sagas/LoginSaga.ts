import { useNavigate } from "react-router-dom";
import { call, delay, put, SagaReturnType, takeLatest } from "redux-saga/effects";
import { loginData, LOGIN_FAIL, LOGIN_LOADING, LOGIN_PAYLOAD, LOGIN_SUCCESS, LOGIN_SUCCESS_FIRST, LOGIN_TRY, LOGIN_WITH_ANONYMOUS, LOGIN_WITH_KAKAO, LOGIN_WITH_NAVER } from "../pages/LoginPage/LoginAction";
import { db, kakaoConfig } from "..";
import axios from 'axios'
import { apiClient, get, post } from "../api/axios";
import { deleteUser, getAuth, signInAnonymously, signInWithCustomToken, signOut, updateEmail, updateProfile } from "firebase/auth";
import { collection, query, where, limit, getDocs, setDoc, doc, addDoc, deleteDoc } from "firebase/firestore";
import { FirebaseAuth } from './../index';

type LoginServiceResponse = SagaReturnType<any>;


async function kakaoLoginAPI(payload:any) {
    // const auth2 = getAuth();
    // alert(JSON.stringify(auth2.currentUser));
    // alert(JSON.stringify(FirebaseAuth.currentUser));
    // // return false;

    if(FirebaseAuth.currentUser) {
        return FirebaseAuth.currentUser.uid;
    }
    
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
    console.log(process.env.REACT_APP_FIREBASE_FUNCTION_KAKAO_API);
    console.log(isLocal);
    
    const customToken = await post(
        `${isLocal? "/kakaoAPI" : process.env.REACT_APP_FIREBASE_FUNCTION_KAKAO_API}/verifyToken`,
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

async function needSignUpAPI(uid:string, is_guest:boolean, ) {
    const userRef = collection(db, "user");
    const q = query(userRef, where("uid", "==", uid));
    const fbdata = await getDocs(q);
    const isNew:boolean = fbdata.empty;
    if(!isNew) {
        console.log(fbdata.docs[0].data());
    }
    console.log("isNew = "+ JSON.stringify(isNew));
    console.log("is_guest = "+ JSON.stringify(is_guest));
    

    return (isNew && !is_guest);
}

async function signUpAPI(uid:string, is_guest:boolean, data:loginData | null) {
    console.log("createUserInfo");
    
    const userRef = collection(db, "user");

    // 신규 가입
    console.log("user 데이터 삽입 중");
    const result = await addDoc(userRef, {
        uid: uid,
        is_guest:is_guest
    });
    console.log(result);
    

    const userProfileRef = collection(db, "user",result.id, "profile");
    console.log("user profile 데이터 삽입 중");

    if(data) {
        await addDoc(userProfileRef, {
            profile_nickname: data.nickname,
            profile_email: data.email,
            profile_img: null
        })
    }
    else{
        await addDoc(userProfileRef, {
            profile_nickname: "Guest-"+uid.substring(0,3),
            profile_email: null,
            profile_img: null
        })
    }

    const discountRef = collection(db, "discount");
    addDoc(discountRef, {
        uid: uid,
        point: 0,
        coupon_list: []
    });
    // 1회성 코드
    // const discountRef = collection(db, "discount");

    // let userListDocs = await getDocs(userRef);
    // let userList = userListDocs.docs.map((doc) => {
    //     return doc.data();
    // })

    // for (const tempUid of userList) {
    //     addDoc(discountRef, {
    //         uid: tempUid.uid,
    //         point: 0,
    //         coupon_list: []
    //     });
    // }

    console.log("create user info 완료");
}


async function deleteAuth() {
    await signOut(FirebaseAuth);
    console.log("signout");
    // await deleteUser(FirebaseAuth.currentUser!);
    
}
// function* kakaoSignup(action: any) {
//     const result =  yield call(needSignUp, )
// }

function* kakaoLogin(action:any) {
    console.log("kakao login");
    
    const uid:LoginServiceResponse = yield call(kakaoLoginAPI, action.payload);
    console.log("kakao login result2 : " + JSON.stringify(uid));
    
    const needSignUp:LoginServiceResponse = yield call(needSignUpAPI, uid as string, false);
    console.log("needSignUp = " + JSON.stringify(needSignUp));
    
    // const needSignUp:LoginServiceResponse = yield call(signUpAPI, result as string, false, action.payload.data);
    if(needSignUp) {
        console.log(action.payload.data);
        console.log(action.payload.data.nickname.trim().length > 0);
        
        if(action.payload.data && action.payload.data.nickname.trim().length > 0) {
            const signUpResult: LoginServiceResponse = yield call(signUpAPI, uid as string, false, action.payload.data);
            yield put({
                type: LOGIN_SUCCESS,
                callback: action.payload.sCallback
            }); 
        }
        else{
            // yield call(deleteAuth);

            yield put({
                type: LOGIN_FAIL,
                callback: action.payload.fCallback
            }); 
        }
    }
    else{
        yield put({
            type: LOGIN_SUCCESS,
            callback: action.payload.sCallback
        }); 
    }
}

function* anonymousLogin(payload:LOGIN_PAYLOAD) {
    const uid:LoginServiceResponse =  yield call(anonymousLoginAPI, payload);
    console.log(uid);
    yield call(signUpAPI, uid as string, true, null);

    if(uid) {
        console.log("login success");
        
        yield put({
            type: LOGIN_SUCCESS,
            callback: payload.callback
        }); 
    }
    else{

        console.log("login fail");

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