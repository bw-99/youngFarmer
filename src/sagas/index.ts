import { takeEvery, call, put, all } from 'redux-saga/effects'
import { getYoutube } from '../pages/LandingPage/LandingSaga';
import { helloSaga, watchIncrementAsync, watchNaverSearch } from '../pages/Register/RegisterSaga';
import { getLoginSignal } from '../pages/SplashPage/SplashSaga';

export default function* rootSaga() {
    yield all([
        helloSaga(),
        watchIncrementAsync(),
        watchNaverSearch(),
        getYoutube(),
        getLoginSignal()
    ]);
}