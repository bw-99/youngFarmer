import { takeEvery, call, put, all } from 'redux-saga/effects'
import { getYoutube } from '../pages/LandingPage/LandingSaga';
import { helloSaga, watchIncrementAsync, watchNaverSearch } from '../pages/Register/RegisterSaga';

export default function* rootSaga() {
    yield all([
        helloSaga(),
        watchIncrementAsync(),
        watchNaverSearch(),
        getYoutube()
    ]);
}