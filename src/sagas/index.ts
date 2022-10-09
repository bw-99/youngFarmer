import { takeEvery, call, put, all } from 'redux-saga/effects'
import { getLoginSignal } from '../pages/SplashPage/SplashSaga';

export default function* rootSaga() {
    yield all([
        getLoginSignal()
    ]);
}