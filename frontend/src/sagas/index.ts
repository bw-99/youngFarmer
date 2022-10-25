import { takeEvery, call, put, all } from 'redux-saga/effects'
import { getLikeGetSignal, getLikeSignal } from './LikeSaga';
import { getLoginSignal } from './LoginSaga';
import { getProfileSignal } from './MypageSaga';
import { getProductSignal } from './ProductSaga';
import { getSearchSignal } from './SearchSaga';

export default function* rootSaga() {
    yield all([
        getLoginSignal(),
        getProductSignal(),
        getProfileSignal(),
        getLikeSignal(),
        getLikeGetSignal(),
        getSearchSignal()
    ]);
}