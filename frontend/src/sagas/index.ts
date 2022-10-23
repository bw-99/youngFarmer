import { takeEvery, call, put, all } from 'redux-saga/effects'
import { getLoginSignal } from './LoginSaga';
import { getProductSignal } from './ProductSaga';

export default function* rootSaga() {
    yield all([
        getLoginSignal(),
        getProductSignal()
    ]);
}