import { call, delay, put, SagaReturnType, takeLatest } from "redux-saga/effects";
import { LOGIN_FAIL, LOGIN_PAYLOAD, LOGIN_SUCCESS, LOGIN_TRY, LOGIN_WITH_ANONYMOUS, LOGIN_WITH_KAKAO, LOGIN_WITH_NAVER } from "../pages/LoginPage/LoginAction";
import { db, kakaoConfig } from "..";
import { GET_PRODUCT, GET_PRODUCT_SUCCESS } from "../pages/ProductPage/ProductAction";
import { collection, getDoc, getDocs, limit, orderBy, query, where } from "firebase/firestore";
import { AxiosResponse } from "axios";
import { ProductDataType } from "../reducers/ProductReducer";
import { GET_PROFILE, GET_PROFILE_SUCCESS } from "../pages/MyPage/MyAction";
import { MyPageDataType } from "../reducers/MypageReducer";
import { getAuth } from "firebase/auth";



// type ProductDataType=  {
//     store_id: number,
//     discount: number,
//     product_id: number,
//     title: string,
//     price: number
// }


async function getProfileAPI(payload:any) {
    console.log("user " + payload);
    
    

    const userRef = collection(db, "user");
    const q = query(userRef, where("uid", "==", payload), limit(1));
    const fbdata = await getDocs(q);
    const userData = fbdata.docs[0].data();

    console.log(userData);

    const profileRef = collection(fbdata.docs[0].ref, "profile");
    const q2 = query(profileRef);
    const fbdata2 = await getDocs(q2);
    const profileData = fbdata2.docs[0].data();

    console.log(profileData);
    
    // const reviewDataList = fbdata2.docs.map((doc) => {
    //     return doc.data()
    // });

    // const photoRef = collection(fbdata.docs[0].ref, "detail_photo","");
    // const q3 = query(photoRef);
    // const fbdata3 = await getDocs(q3);
    // const photoDataList = fbdata3.docs[0].data();


    // const questionRef = collection(fbdata.docs[0].ref, "detail_question","");
    // const q4 = query(questionRef);
    // const fbdata4 = await getDocs(q4);
    // const questionDataList = fbdata4.docs.map((doc) => {
    //     return doc.data()
    // });

    // return {
    //     ...productData,
    //     reviewDataList: reviewDataList,
    //     photoDataList: photoDataList,
    //     questionDataList: questionDataList
    // };
    return {
        ...userData,
        profileData: profileData
    };
}


function* getProfile(action:any) {
    console.log("get profile" + action.payload);
    
    const result:MyPageDataType = yield call(getProfileAPI, action.payload);
    
    if(result){        
        console.log("result" + JSON.stringify(result));
        yield put({
            type: GET_PROFILE_SUCCESS,
            payload: result,
        }); 
    }
    else{
        yield put({
            type: LOGIN_FAIL,
            callback: action.payload.callback
        }); 
    }
}


function* mypageIndex(action: any) {
    
    switch (action.type) {
        case GET_PROFILE:
            yield getProfile(action); 
            break;
   
        default:
            break;
    }
}

export function* getProfileSignal() {
    yield takeLatest(GET_PROFILE, mypageIndex);
}