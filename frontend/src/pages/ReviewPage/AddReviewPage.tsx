import React, { useEffect, useState } from "react";

import { useParams, useLocation, useNavigate } from 'react-router-dom';
import { AppFrame } from "../../App";

import { AppBarComponentOnlyBack } from "../../common/AppBar/AppBar";


import { collection, query, getDocs, where, addDoc, Timestamp } from "firebase/firestore";
import { db, FirebaseAuth, storage } from "../..";
import { useDispatch, useSelector } from "react-redux";
import { ProductWithOrderType, ReviewProductDataType } from "../../reducers/ProductReducer";
import { RootState } from "../../reducers";
import { getReviewOneAction, getRreviewListAction, GET_REVIEW_ONE_FAIL } from "./ReviewAction";
import { getDownloadURL, ref, StorageReference, uploadBytes } from "firebase/storage";
import { LoadingWrapper } from "../../common/BackgroundWrapper/BackgroundWrapper";

function AddReviewPage(props: any) {
    const params = useParams();
    const location = useLocation();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [product, setProduct] = useState<ProductWithOrderType | null>(null);

    const [reviewText, setReviewText] = useState("");
    const [reviewPhotos, setReviewPhotos] = useState<any | null>(null);
    const [reviewRate, setReviewRate] = useState(5);

    const [isUploading, setIsUploading] = useState(false);


    const preReviewSelector: ProductWithOrderType | null= useSelector((state:RootState) =>
        state.ReviewWriteReducer
    );  

    const preReviewStateSelector: any =  useSelector((state:RootState) =>
        state.ReviewWriteStateReducer
    );  


    // * 해당 product fetching
    useEffect(() => {
        FirebaseAuth.onAuthStateChanged((user) => {
            if(user) {
                dispatch(getReviewOneAction(Number(params.product_id), user.uid))
            }
        })
    }, [])

    // * fetching 해온 결과를 product 변수에 할당
    useEffect(() => {
        if(preReviewSelector) {         
            setProduct(preReviewSelector);   
        }
    }, [preReviewSelector])

    // * fetching 실패 시 리다이렉팅
    useEffect(() => {
        if(preReviewStateSelector) {
            if(preReviewStateSelector.result === GET_REVIEW_ONE_FAIL){
                alert("구매하지 않은 품목 또는 이미 작성한 품목은 리뷰할 수 없습니다.");
                navigate(-1);
            }
        }
    }, [preReviewStateSelector])

    const checkDuplicateReview = async (uid:string, product_id: number) => {
        console.log(uid);

        const reviewRef = collection(db, "review");
        const q = query(reviewRef, where("uid", "==", uid), where("product_id", "==", product_id));
        const fbdata = await getDocs(q);

        return fbdata.empty;
    }

    const uploadPhoto = async(img: any) => {
        const storageRef:StorageReference = ref(storage, `/${img.name}`)!;
        const uploadTask = await uploadBytes(storageRef, img);
        const url = await getDownloadURL(uploadTask.ref);
        return url;
    }

    const uploadReviewData = async(content: string, photoList: any[], rate: number, uid:string, product_id: number) => {
        const reviewRef = collection(db, "review");

        let photoUrlList = [];

        for (const photo of photoList) {
            let url = await uploadPhoto(photo);
            photoUrlList.push(url);
        }

        const result = await addDoc(reviewRef, {
            content: content,
            photos: photoUrlList,
            score: rate,
            time_created: Timestamp.now(),
            uid: uid,
            product_id: product_id
        });

        return result;
    }

    const firebaseUploadHandler = async () => {
        let uid = FirebaseAuth.currentUser!.uid;
        let product_id = product!.product.product_id;

        let reviewDuplicate = await checkDuplicateReview(uid,product_id);
        
        if(!reviewDuplicate) {
            console.log("review duplicated");
            return ;
        }
        else{
            console.log("review NOT duplicated");
            // 리뷰 가능
            if(reviewText && reviewPhotos && reviewRate) {
                let uploadResult = await uploadReviewData(reviewText, reviewPhotos, reviewRate, uid, product_id);
                console.log(JSON.stringify(uploadResult));
            }
        }
    }

    if (product) {
        return (
            <AppFrame>
                <AppBarComponentOnlyBack title={"리뷰 작성"}/>
                {
                    JSON.stringify(product)
                }
                <div>
                    <h1> 리뷰 작성 </h1>
                    <input type={"text"} value={reviewText} onChange={(e)=> {
                        setReviewText(e.target.value);
                    }}></input>
                </div>

                <div>
                    <h1> 리뷰 사진 </h1>
                    <input type='file' 
                        accept='image/jpg,impge/png,image/jpeg,image/gif' 
                        name='review_photo' 
                        // style={{display:"none"}}
                        onChange={(e) => {
                            setReviewPhotos(e.target.files);
                        }}
                        multiple>
                    </input>
                </div>

                <div>
                    <h1> 리뷰 평점 </h1>
                    <input type="number" value={reviewRate} onChange={ (e) => {
                        setReviewRate(Number(e.target.value));
                    }}/>
                </div>

                <button onClick={async ()=>{
                    setIsUploading(true);
                    await firebaseUploadHandler();
                    setIsUploading(false);
                    alert("업로드 완료!");
                }}>
                    리뷰 전송
                </button>
                

                <LoadingWrapper backgroundColor={"rgba(255,255,255,0.6)"} isActive={isUploading} />

            </AppFrame>
        );
    }
    else{

        return (
            <AppFrame>
                {/*<PaymentPageComp />*/}
                {/* {JSON.stringify(preReviewSelector)} */}
                {/* {JSON.stringify(unreviewSelector)} */}
            </AppFrame>
        )
    }   

    
}

export default AddReviewPage;