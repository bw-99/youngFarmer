import { call, delay, put, SagaReturnType, takeLatest } from "redux-saga/effects";
import { LOGIN_FAIL, LOGIN_PAYLOAD, LOGIN_SUCCESS, LOGIN_TRY, LOGIN_WITH_ANONYMOUS, LOGIN_WITH_KAKAO, LOGIN_WITH_NAVER } from "../pages/LoginPage/LoginAction";
import { db, kakaoConfig } from "..";
import { GET_PRODUCT, GET_PRODUCT_SUCCESS } from "../pages/ProductPage/ProductAction";
import { collection, DocumentData, endAt, getDoc, getDocs, limit, orderBy, query, startAt, where } from "firebase/firestore";
import { AxiosResponse } from "axios";
import { ProductDataType } from "../reducers/ProductReducer";
import { GET_PROFILE, GET_PROFILE_SUCCESS } from "../pages/MyPage/MyAction";
import { MyPageDataType } from "../reducers/MypageReducer";
import { getAuth } from "firebase/auth";
import { SEARCH_FAIL, SEARCH_SUCCESS, SEARCH_TRY } from "../pages/SearchDetailPage/SearchDertailAction";



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
    // TODO: 사진 넣기
    // for (let index = 0; index < searchDataList.length; index++) {
    //     const element:DocumentData = searchDataList[index];
    //     const photoRef = collection(element.ref, "detail_photo","");
    //     const q3 = query(photoRef);
    //     const fbdata3 = await getDocs(q3);
    //     const photoDataList = fbdata3.docs[0].data();
    //     searchDataList[index] = {
    //         photoDataList: photoDataList
    //     }
    // }
    console.log(searchDataList);

    return searchDataList;
}


function* getSearch(action:any) {
    console.log("get profile" + action.payload);
    
    const result:ProductDataType[] = yield call(getSearchAPI, action.payload);
    
    if(result){        
        console.log("result" + JSON.stringify(result));
        yield put({
            type: SEARCH_SUCCESS,
            payload: result,
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


function* searchIndex(action: any) {
    console.log("search");
    
    switch (action.payload.type) {
        case SEARCH_TRY:
            yield getSearch(action); 
            break;
   
        default:
            break;
    }
}

export function* getSearchSignal() {
    yield takeLatest(SEARCH_TRY, searchIndex);
}