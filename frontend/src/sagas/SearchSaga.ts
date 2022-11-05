import { call, delay, put, SagaReturnType, takeLatest } from "redux-saga/effects";
import { LOGIN_FAIL, LOGIN_PAYLOAD, LOGIN_SUCCESS, LOGIN_TRY, LOGIN_WITH_ANONYMOUS, LOGIN_WITH_KAKAO, LOGIN_WITH_NAVER } from "../pages/LoginPage/LoginAction";
import { db, kakaoConfig } from "..";
import { GET_PRODUCT, GET_PRODUCT_SUCCESS } from "../pages/ProductPage/ProductAction";
import { collection, DocumentData, endAt, getDoc, getDocs, limit, orderBy, query,  QueryConstraint, startAt, where } from "firebase/firestore";
import { AxiosResponse } from "axios";
import { ProductDataType, StoreDataType } from "../reducers/ProductReducer";
import { GET_PROFILE, GET_PROFILE_SUCCESS } from "../pages/MyPage/MyAction";
import { MyPageDataType } from "../reducers/MypageReducer";
import { getAuth } from "firebase/auth";
import { FILTER_TYPE, SEARCH_FAIL, SEARCH_FILTER_TRY, SEARCH_PID_FAIL, SEARCH_PID_SUCCESS, SEARCH_PID_TRY, SEARCH_RECOMMNEND_SUCCESS, SEARCH_RECOMMNEND_TRY, SEARCH_STORE_SUCCESS, SEARCH_STORE_TRY, SEARCH_SUCCESS, SEARCH_TRY } from "../pages/SearchPage/SearchDertailAction";



// type ProductDataType=  {
//     store_id: number,
//     discount: number,
//     product_id: number,
//     title: string,
//     price: number
// }

async function getSearchStoreAPI(searchResult:ProductDataType[], payload:any) {
    let queryList = [];
    const storeRef = collection(db, "store");
     
    // * product의 store_id를 바탕으로 store 불러옴
    for (const product of searchResult) {
        queryList.push(query(storeRef, where("store_id", "==", product.store_id)));
    }

    let dataList = [];

    for (const q of queryList) {
        const fbdata = await getDocs(q);
        if(!fbdata.empty){
            dataList.push(fbdata.docs[0].data());
        }
    }


    // * store의 name으로 검색
    let search = payload.search;
    const q = query(storeRef);
    const fbdata = await getDocs(q);

    if(!fbdata.empty) {
        fbdata.docs.forEach((doc) => {
            const data = doc.data();
            if(`${data.name}`.includes(search)){
                console.log("inlcude");
                dataList.push(data);
            }
        })
    }

    

    return dataList;
}

async function getSearchFilterAPI(payload:any) {
    let search:string = payload.search ? payload.search : " ";
    search = search.trim()

    
    let filter: any = payload.filter;
    let priceRange:any = payload.priceRange;
    console.log(filter);
    console.log(priceRange);

    const productRef = collection(db, "product");

    let queryTemp = query(productRef);

    if(filter){
        Object.keys(filter).map((key) => {
            if(key){
                console.log(key + " : " + filter[key]);
                queryTemp = query(queryTemp, where(key, "==", filter[key]))
                // queryList.push(
                //     query(productRef, where(key, "==", filter[key]))
                // );
            }
        })
    }


    if(priceRange){
        queryTemp = query(queryTemp,  where("price", ">=", priceRange.minPrice));
        queryTemp = query(queryTemp,  where("price", "<=", priceRange.maxPrice));
    }


    
    let dataList = [];
    const fbdata = await getDocs(queryTemp);
    dataList = fbdata.docs.map((doc) => {
        return doc.data();
    })

    let searchDataList:any = [];

    if(search){
        dataList.map((data:any) => {
            if(`${data.title}`.includes(search)){
                console.log("inlcude");
                searchDataList.push(data);
            }
        })
    }
    else{
        
        searchDataList = dataList;
    }
    console.log("?????!!!!!" + JSON.stringify(searchDataList));

    return searchDataList;
}


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
    const storeResult:StoreDataType[] = yield call(getSearchStoreAPI, searchResult, action.payload);
    
    if(searchResult ){        
        // console.log("result" + JSON.stringify(otherResult));
        yield put({
            type: SEARCH_SUCCESS,
            payload: {
                products: searchResult,
                recommendResult: recommendResult,
                storeList: storeResult
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

function* getSearchFilter(action:any) {
    console.log("get profile" + action.payload);
    
    const searchResult:ProductDataType[] = yield call(getSearchFilterAPI, action.payload);
    const recommendResult:ProductDataType[] = yield call(getSearchOtherAPI, action.payload);
    const storeResult:StoreDataType[] = yield call(getSearchStoreAPI, searchResult, action.payload);
    
    if(searchResult ){        
        // console.log("result" + JSON.stringify(otherResult));
        yield put({
            type: SEARCH_SUCCESS,
            payload: {
                products: searchResult,
                recommendResult: recommendResult,
                storeList: storeResult
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
    const pidProducts:ProductDataType[] = yield call(getSearchByPidAPI, action.payload);

    if(pidProducts ){        
        yield put({
            type: SEARCH_PID_SUCCESS,
            payload: {
                pidProducts: pidProducts
            },
        }); 
    }
    else{
        yield put({
            type: SEARCH_PID_FAIL,
        }); 
    }
}

function* searchIndex(action: any) {
    console.log("search" + JSON.stringify(action));
    
    switch (action.payload.type) {
        case SEARCH_TRY:
            yield getSearch(action); 
            break;

        case SEARCH_FILTER_TRY:
            yield getSearchFilter(action); 
            break;

        case SEARCH_RECOMMNEND_TRY:
            yield getSearchRecommend(action);
            break;

        case SEARCH_PID_TRY:
            yield getSearchByPid(action);
            break;

        default:
            break;
    }
}

export function* getSearchSignal() {
    yield takeLatest(SEARCH_TRY, searchIndex);
}