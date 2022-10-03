import {call, delay, put, takeEvery} from 'redux-saga/effects'
import {searchGoogleApi} from './RegisterApi';
import {INCREMENT, INCREMENT_ASYNC, SEARCH_NAVER} from './RegisterConstants';
// import * as cheerio from 'cheerio';

export function* helloSaga () {
    console.log('Hello Sagas!');

    const {data} = yield call(searchGoogleApi, "react");

    console.log('Hello Sagas!');
    console.log(data);
    

    // const $ = cheerio.load(data);
    // console.log($);

    console.log("fuck");
    
    
    // console.log($("#video-title").text());
    
    // console.log(data);
}

// worker Saga: 비동기 증가 태스크를 수행할겁니다.
export function* incrementAsync (action : any) {
    console.log(action);
    yield delay(1000);
    yield put({type: INCREMENT})
}

// watcher Saga: 각각의 INCREMENT_ASYNC 에 incrementAsync 태스크를 생성할겁니다.
export function* watchIncrementAsync () {
    console.log("asdfsdf");
    yield takeEvery(INCREMENT_ASYNC, incrementAsync)
}


export function* watchNaverSearch () {
    console.log("????");
    
    yield takeEvery(SEARCH_NAVER, helloSaga)
}