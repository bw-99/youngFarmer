import { takeEvery, call, put, all } from 'redux-saga/effects'
import { getCartSignal } from './CartSaga';
import { getDeliverySignal } from './DeliverySaga';
import { getDiscountSignal } from './DiscountSaga';
import { getLikeSignal } from './LikeSaga';
import { getLoginSignal } from './LoginSaga';
import { getProfileSignal } from './MypageSaga';
import { getOrderSignal } from './OrderSaga';
import { getProductSignal } from './ProductSaga';
import { getReviewSignal } from './ReviewSaga';
import { getSearchSignal } from './SearchSaga';

export default function* rootSaga() {
    yield all([
        getLoginSignal(),
        getProductSignal(),
        getProfileSignal(),
        getLikeSignal(),
        getSearchSignal(),
        getCartSignal(),
        getOrderSignal(),
        getReviewSignal(),
        getDeliverySignal(),
        getDiscountSignal()
    ]);
}