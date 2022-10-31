import { call, delay, put, SagaReturnType, takeLatest } from "redux-saga/effects";
import { LOGIN_FAIL, LOGIN_PAYLOAD, LOGIN_SUCCESS, LOGIN_TRY, LOGIN_WITH_ANONYMOUS, LOGIN_WITH_KAKAO, LOGIN_WITH_NAVER } from "../pages/LoginPage/LoginAction";
import { db, kakaoConfig } from "..";
import { GET_PRODUCT, GET_PRODUCT_SUCCESS } from "../pages/ProductPage/ProductAction";
import { collection, DocumentData, endAt, getDoc, getDocs, limit, orderBy, query, QueryConstraint, startAt, where } from "firebase/firestore";
import { AxiosResponse } from "axios";
import { ProductDataType } from "../reducers/ProductReducer";
import { GET_PROFILE, GET_PROFILE_SUCCESS } from "../pages/MyPage/MyAction";
import { MyPageDataType } from "../reducers/MypageReducer";
import { getAuth } from "firebase/auth";
import { SEARCH_FAIL, SEARCH_LIKE_FAIL, SEARCH_LIKE_SUCCESS, SEARCH_LIKE_TRY, SEARCH_RECOMMNEND_SUCCESS, SEARCH_RECOMMNEND_TRY, SEARCH_SUCCESS, SEARCH_TRY } from "../pages/SearchPage/SearchDertailAction";



// type ProductDataType=  {
//     store_id: number,
//     discount: number,
//     product_id: number,
//     title: string,
//     price: number
// }


async function getSearchAPI(payload:any) {
    let search = payload.search;
    console.log(search);
    

    const productRef = collection(db, "product");
    // ! 검색 기능 도입 필요 (firestore 자체 지원X, algola 같은 3rd party 필요) 
    const q = query(productRef, 
    );
    const fbdata = await getDocs(q);

    let searchDataList:any = [];
    fbdata.docs.forEach((doc) => {
        const data = doc.data();
        if(`${data.title}`.includes(search)){
            console.log("inlcude");
            searchDataList.push(data);
        }
    })
    console.log(searchDataList);

    return searchDataList;
}



async function getSearchOtherAPI(action:any) {

    const productRef = collection(db, "product");
    const q = query(productRef, orderBy("title"), limit(10));
    const fbdata = await getDocs(q);


    let searchDataList:any = [];
    fbdata.docs.forEach((doc) => {
        searchDataList.push(doc.data())
    })

    return fbdata.docs.map((doc) => {
        return doc.data()
    });
}


async function getSearchByPidAPI(payload:any) {

    const productRef = collection(db, "product");
    let queryList: any[] = [];

    payload.pidList.forEach((element: number) => {
        queryList.push(query(productRef, where("product_id", "==", element)))
    });

    let dataList = [];

    for (const q of queryList) {
        const fbdata = await getDocs(q);
        dataList.push(fbdata.docs[0].data());
    }

    return dataList;
}



function* getSearch(action:any) {
    console.log("get profile" + action.payload);
    
    const searchResult:ProductDataType[] = yield call(getSearchAPI, action.payload);
    const recommendResult:ProductDataType[] = yield call(getSearchOtherAPI, action.payload);
    
    if(searchResult ){        
        // console.log("result" + JSON.stringify(otherResult));
        yield put({
            type: SEARCH_SUCCESS,
            payload: {
                products: searchResult,
                recommendResult: recommendResult
            },
            callback: action.payload.callback
        }); 
    }
    else{
        yield put({
            type: SEARCH_FAIL,
            callback: action.payload.callback
        }); 
    }
}


function* getSearchRecommend(action:any) {
    const recommendResult:ProductDataType[] = yield call(getSearchOtherAPI, action.payload);

    if(recommendResult ){        
        yield put({
            type: SEARCH_RECOMMNEND_SUCCESS,
            payload: {
                recommendResult: recommendResult
            },
        }); 
    }
    else{
        yield put({
            type: SEARCH_FAIL,
        }); 
    }
}


function* getSearchByPid(action:any) {
    const likeProducts:ProductDataType[] = yield call(getSearchByPidAPI, action.payload);

    if(likeProducts ){        
        yield put({
            type: SEARCH_LIKE_SUCCESS,
            payload: {
                likeProducts: likeProducts
            },
        }); 
    }
    else{
        yield put({
            type: SEARCH_LIKE_FAIL,
        }); 
    }
}

function* searchIndex(action: any) {
    console.log("search" + JSON.stringify(action));
    
    switch (action.payload.type) {
        case SEARCH_TRY:
            yield getSearch(action); 
            break;

        case SEARCH_RECOMMNEND_TRY:
            yield getSearchRecommend(action);
            break;

        case SEARCH_LIKE_TRY:
            yield getSearchByPid(action);
            break;

        default:
            break;
    }
}

export function* getSearchSignal() {
    yield takeLatest(SEARCH_TRY, searchIndex);
}