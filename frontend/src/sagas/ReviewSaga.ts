import { call, delay, put, SagaReturnType, takeLatest } from "redux-saga/effects";
import { LOGIN_FAIL, LOGIN_PAYLOAD, LOGIN_SUCCESS, LOGIN_TRY, LOGIN_WITH_ANONYMOUS, LOGIN_WITH_KAKAO, LOGIN_WITH_NAVER } from "../pages/LoginPage/LoginAction";
import { db, FirebaseAuth, kakaoConfig } from "..";
import { GET_PRODUCT, GET_PRODUCT_SUCCESS } from "../pages/ProductPage/ProductAction";
import { addDoc, collection, deleteDoc, DocumentData, getDoc, getDocs, limit, orderBy, query, updateDoc, where } from "firebase/firestore";
import { AxiosResponse } from "axios";
import { CartProductDataType, ProductDataOrderType, ProductDataReviewType, ProductDataType, ProductWithOrderType, ReviewProductDataType } from "../reducers/ProductReducer";
import { GET_LIKE, GET_LIKE_FAIL, GET_LIKE_SUCCESS, LIKE_CANCEL_FAIL, LIKE_CANCEL_SUCCESS, LIKE_CANCEL_TRY, LIKE_FAIL, LIKE_SUCCESS, LIKE_TRY } from "../pages/LikePage/LikeAction";
import { LikeDataList } from "../reducers/LikeReducer";
import { CART_ADD_TRY, CART_CANCEL_TRY, GET_CART, CART_TRY, GET_CART_SUCCESS, GET_CART_FAIL, CART_CANCEL_SUCCESS, CART_CANCEL_FAIL, CART_ADD_SUCCESS, CART_ADD_FAIL } from "../pages/CartPage/CartAction";
import { CartData, CartDataList } from "../reducers/CartReducer";
import { SEARCH_CART_SUCCESS, SEARCH_PID_SUCCESS, SEARCH_REVIEW_SUCCESS, SEARCH_UNREVIEW_SUCCESS } from "../pages/SearchPage/SearchDertailAction";
import { GET_REVIEW, GET_REVIEW_LIST, GET_REVIEW_ONE, GET_REVIEW_ONE_FAIL, GET_REVIEW_ONE_RESULT, GET_REVIEW_ONE_SUCCESS, GET_UNREVIEW_LIST } from "../pages/ReviewPage/ReviewAction";


async function convertReview2Product(reviewDataList:ProductDataReviewType[]) {

    const productRef = collection(db, "product");
    let queryList: any[] = [];

    reviewDataList.forEach((element: ProductDataReviewType) => {
        queryList.push(
            query(productRef, where("product_id", "==", element.product_id))
        );
    });

    let dataList = [];

    for (const index in queryList) {
        const fbdata = await getDocs(queryList[index]);
        dataList.push({
            product: fbdata.docs[0].data(),
            review: reviewDataList[index]
            // option: reviewDataList[index].option
        });
    }

    return dataList;
}




async function convertOrder2Product(orderDataList:ProductDataOrderType[]) {
    console.log(orderDataList);
    
    const productRef = collection(db, "product");
    let queryList: any[] = [];

    orderDataList.forEach((element: ProductDataOrderType) => {
        queryList.push(
            query(productRef, where("product_id", "==", element.product.product_id))
        );
    });

    let dataList = [];

    for (const index in queryList) {
        const fbdata = await getDocs(queryList[index]);
        dataList.push({
            product: fbdata.docs[0].data(),
            order: orderDataList[index]
            // option: reviewDataList[index].option
        });
    }

    return dataList;
}

async function getReviewAPI(payload:any) {
    let uid = payload.payload;

    const reviewRef = collection(db, "review");
    const q = query(reviewRef, where("uid", "==", uid));
    const fbdata = await getDocs(q);

    const reviewDataList = fbdata.docs.map((doc) => {
        return doc.data();
    });
    
    return reviewDataList;
}


// function* getReview(action:any) {
//     const result:ProductDataReviewType[] = yield call(getReviewAPI, action.payload);
    
//     if(result){     
//         let pidList = result.map((val) => {
//             return val.product_id
//         });
    
//         const pidResult: ReviewProductDataType[] = yield call(convertReview2Product, result);

//         console.log("result" + JSON.stringify(result));
//         yield put({
//             type: SEARCH_REVIEW_SUCCESS,
//             payload: {
//                 reviewProducts: pidResult
//             },
//         }); 

        
//         // yield put({
//         //     type: CART_ADD_SUCCESS,
//         //     payload: result,
//         // }); 
//     }
//     else{
//         // yield put({
//         //     type: CART_ADD_FAIL,
//         //     callback: action.payload.callback
//         // }); 
//     }
// }

async function checkDuplicateReview(uid:string, product_id: number) {
    const reviewRef = collection(db, "review");
    const reviewq = query(reviewRef, where("uid", "==", uid), where("product_id", "==", product_id));
    const reviewfbdata = await getDocs(reviewq);

    return !reviewfbdata.empty;
}


async function getOrderProductAPI(uid:string, product_id: number) {

    const isDuplicate = await checkDuplicateReview(uid, product_id);
    if(!isDuplicate){
        const orderRef = collection(db, "order");
        // alert(`${uid} ${product_id}`);
        const q = query(orderRef, where("uid", "==", uid), where("product_id_list", "array-contains", product_id));
        const fbdata = await getDocs(q);

        if(fbdata.empty) {
            return false;
        }

        const productList = fbdata.docs[0].data().products;

        for (const pr of productList) {
            if( pr.product.product_id == product_id ){
                return pr;
            }
        }
        
        return false;
    }
    else{
        return false;
    }
}

async function getaTotalReviewAPI(payload:any) {
    let uid = payload.payload;

    const reviewRef = collection(db, "review");
    const q = query(reviewRef, where("uid", "==", uid));
    const fbdata = await getDocs(q);

    console.log(fbdata);

    const reviewDataList = fbdata.docs.map((doc) => {
        return doc.data();
    });

    return reviewDataList;
}


async function getaTotalOrderAPI(payload:any) {
    let uid = payload.payload;

    const orderRef = collection(db, "order");
    const q = query(orderRef, where("uid", "==", uid));
    const fbdata = await getDocs(q);

    console.log(fbdata);
    let orderDataList: any[] = [];
    for (const doc of fbdata.docs) {
        const prList = doc.data().products;
        for (const pr of prList) {
            let temp = true;
            for (const order of orderDataList) {
                if(order.product.product_id == pr.product.product_id) {
                    temp = false;
                    break;
                }
            }
            
            if(temp) {
                orderDataList.push(pr);
            }
        }
    }

    return orderDataList;
}



async function getOrderProductsAPI(reviewProducts:ProductDataReviewType[]) {
    if(!reviewProducts.length) {
        return [];
    }
 
    const pidList = reviewProducts.map((rev) => {
        return rev.product_id
    });

    const orderRef = collection(db, "order");
    const q = query(orderRef, where("uid", "==", reviewProducts[0].uid));
    const fbdata = await getDocs(q);

    let reviewDataList:any = [];
    let docsList = [...fbdata.docs];

    docsList= docsList.filter((doc) => {
        const data = doc.data();
        return !pidList.includes(data.product_id);
    })
    
    
    return docsList.map((doc) => {
        return doc.data();
    });
}

// ! 하던 중

function* getReview(action:any) {
    const orderResult:ProductDataOrderType[] = yield call(getaTotalOrderAPI, action.payload);
    const reviewResult:ProductDataReviewType[] = yield call(getaTotalReviewAPI, action.payload);
    let unReviewResult = [];
    for (const order of orderResult) {
        let temp = true;
        for (const review of reviewResult) {
            if(order.product.product_id === review.product_id) {
                temp=false;
                break;
            }
        }

        if(temp) {
            unReviewResult.push(order);
        }
    }
    console.log(unReviewResult);
    
    // const unreviewProducts: ProductWithOrderType[] = yield call(convertOrder2Product, unReviewResult);
    // console.log(unreviewProducts);
    
    yield put({
        type: SEARCH_UNREVIEW_SUCCESS,
        payload: {
            unreviewProducts: unReviewResult
        },
    }); 
    
    const reviewProducts: ReviewProductDataType[] = yield call(convertReview2Product, reviewResult);
    yield put({
        type: SEARCH_REVIEW_SUCCESS,
        payload: {
            reviewProducts: reviewProducts
        },
    }); 
}



function* getReviewOne(payload:any) {
    let uid = payload.uid;
    let product_id = payload.product_id;

    const result:ProductDataOrderType = yield call(getOrderProductAPI, uid, product_id);
    console.log(result);
    
    if(result){     
        const orderProducts: ReviewProductDataType[] = yield call(convertOrder2Product, [result]);
        yield put({
            type: GET_REVIEW_ONE_SUCCESS,
        });
        
        yield put({
            type: GET_REVIEW_ONE_RESULT,
            payload: {
                orderProducts: orderProducts[0]
            },
        }); 

    }
    else{
        yield put({
            type: GET_REVIEW_ONE_FAIL,
        }); 
    }
}



function* reviewIndex(action: any) {
    switch (action.payload.type) {
        case GET_UNREVIEW_LIST:
            // yield call(getUnReview,action); 
            break;
        
        case GET_REVIEW_LIST:
            yield call(getReview,action); 
            // yield call(cancelCart,action); 
            break;
        
        case GET_REVIEW_ONE:
            console.log("get GET_REVIEW_ONE");
            
            yield call(getReviewOne,action.payload.payload); 
            // yield call(cancelCart,action); 
            break;
    
        default:
            break;
    }
}


export function* getReviewSignal() {
    yield takeLatest(GET_REVIEW, reviewIndex);
}

