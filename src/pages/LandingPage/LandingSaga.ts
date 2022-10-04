import {call, delay, put, takeLatest} from "redux-saga/effects";
import {mainYoutubeApi} from "./LandingApi";
import {CALL_MAIN_API, CALL_MAIN_API_FAILURE, CALL_MAIN_API_SUCCESS} from "./LandingConstants";


// worker Saga: 비동기 증가 태스크를 수행할겁니다.
export function* callYoutubeMain (action : any) {

    try {
        const {data} = yield call(mainYoutubeApi);
        // console.log(data);

        // let domparser = new DOMParser();
        // let containerDOM = domparser.parseFromString( data , 'text/html');
        // console.log(containerDOM.querySelectorAll("a"));
        
        // const titleList = $("#video-title");
        // console.log(titleList);

        yield put({
            type: CALL_MAIN_API_SUCCESS,
            movies: [
                {
                    title: 'sss',
                    url: 'dsss'
                },
                {
                    title: 'sss2',
                    url: 'dsss'
                },
                {
                    title: 'sss3',
                    url: 'dsss'
                }
            ]
        });

    } catch (error) {
        
        yield put({
            type: CALL_MAIN_API_FAILURE
        });
    }
    


}

// watcher Saga: 각각의 INCREMENT_ASYNC 에 incrementAsync 태스크를 생성할겁니다.
export function* getYoutube () {
    console.log("call main api");
    
    yield takeLatest(CALL_MAIN_API, callYoutubeMain)
}
