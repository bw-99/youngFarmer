import { useNavigate } from "react-router-dom";
import { call, delay, put, takeLatest } from "redux-saga/effects";
import { LOGIN, LOGIN_FAIL, LOGIN_SUCCESS } from "./SplashActions";


export function* autoLogin(action: any) {
    yield delay(1500);
    yield put({
        type: LOGIN_FAIL,
        callback: action.callback
    });

    // try {
    //     // 유저 로그인 기능 추가해야함
    //     yield put({
    //         type: LOGIN_SUCCESS,
    //         callback: action.callback
    //     });

    // } catch (error) {
    //     yield put({
    //         type: LOGIN_FAIL
    //     });
    // }
}

// watcher Saga: 각각의 INCREMENT_ASYNC 에 incrementAsync 태스크를 생성할겁니다.
export function* getLoginSignal() {
    console.log("call login api");
    yield takeLatest(LOGIN, autoLogin)
}
