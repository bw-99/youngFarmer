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
import { ReviewTopComp } from "./components/reviewTopComp";
import { RateComp } from "./components/rate";
import { ReviewContentComp } from "./components/reviewContent";
import { ReviewPhotoComp } from "./components/reviewPhoto";
import { PaymentBtn } from "../CartPage/atoms/CartProduct";

function AddReviewPage(props: any) {
    const params = useParams();
    const location = useLocation();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [product, setProduct] = useState<ProductWithOrderType | null>(null);

    const [reviewPossible, setReviewPossible] = useState(false);

    const [reviewText, setReviewText] = useState("");
    const [reviewPhotos, setReviewPhotos] = useState<any | null>(null);
    const [reviewRate, setReviewRate] = useState(5);

    const [isUploading, setIsUploading] = useState(false);


    const preReviewSelector: ProductWithOrderType | null= useSelector((state:RootState) =>
        state.ReviewWriteReducer
    );  

    const preReviewStateSelector: any = useSelector((state:RootState) =>
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
            alert("이미 작성한 리뷰가 있습니다.");
            navigate(-1);
            return ;
        }
        else{
            console.log("review NOT duplicated");
            // 리뷰 가능
            if(reviewText && reviewPhotos && reviewRate) {
                let uploadResult = await uploadReviewData(reviewText, reviewPhotos, reviewRate, uid, product_id);
                console.log(JSON.stringify(uploadResult));
                alert("리뷰 작성이 완료되었습니다.");
                navigate(-1);
                return ;
            }
            else{
                if(!reviewText) {
                    alert("리뷰를 입력해주세요.");
                }
                else if (reviewText.length < 20) {
                    alert("리뷰를 20글자 이상 작성해주세요.")
                }
                else if(!reviewPhotos) {
                    alert("사진을 업로드해주세요.");
                }
                else{
                    alert("별점을 체크해주세요.");
                }
            }
        }
    }

    useEffect(() => {
        setReviewPossible(reviewText && reviewText.length >= 20 && reviewPhotos && reviewRate);
    },[reviewText, reviewPhotos, reviewRate])

    if (product) {
        return (
            <AppFrame>
                <AppBarComponentOnlyBack title={"리뷰 작성"}/>
                
                <ReviewTopComp product={product}/>
                <RateComp reviewRate={reviewRate} setReviewRate={setReviewRate} />
                <ReviewContentComp reviewText={reviewText} setReviewText={setReviewText} />
                <ReviewPhotoComp reviewPhotos={reviewPhotos} setReviewPhotos={setReviewPhotos} />

                <div style={{
                    backgroundColor: "white",
                    position:"fixed", bottom: 0, maxWidth:"625px", 
                    width:"100%", height:"calc(56px)", padding: "16px 0"}}>
                    <PaymentBtn 
                
                    onClick={async ()=>{
                        // * 서버로 데이터 전송
                        if(reviewPossible) {
                            setIsUploading(true);
                            await firebaseUploadHandler();
                            setIsUploading(false);
                        }
                    }}
                    style = {{
                        width: "calc(100vw - 32px)",
                        maxWidth: "calc(625px - 32px)",
                        backgroundImage: reviewPossible ?"linear-gradient(to bottom, #fb6159, #ed3e3e)"  : "linear-gradient(to bottom, #efefef, #efefef)",
                        color: reviewPossible ?"#ffffff"  : "#444444",
                        margin:"0 16px"
                        }}>전송하기</PaymentBtn>
                </div>
                

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