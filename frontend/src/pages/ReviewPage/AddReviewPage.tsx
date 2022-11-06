import React, { useEffect, useState } from "react";

import { useParams, useLocation, useNavigate } from 'react-router-dom';
import styled from "styled-components";
import { AppFrame } from "../../App";


import alarm from "../../assets/images/alarm@3x.png";
import shopping_bag from "../../assets/images/shopping_bag@3x.png";
import { AppBarComponentNoBack, AppBarComponentOnlyBack, AppBarComponentProduct, AppBarComponentSearch } from "../../common/AppBar/AppBar";



import { BottomNavigationBar } from "../../common/BottomNavigationBar/BottomNavigationBar";
import { CategoryComponent } from "../../common/Category/category";

import { collection, doc, setDoc, getDoc, query, orderBy, limit, getDocs, where } from "firebase/firestore";
import { db, FirebaseAuth, storage } from "../..";
import { useDispatch, useSelector } from "react-redux";
import { ProductDataType, ProductWithOrderType, ReviewProductDataType } from "../../reducers/ProductReducer";
import { RootState } from "../../reducers";
import { CircularProgress } from '@mui/material';
import { getRreviewListAction, getUnreviewListAction } from "./ReviewAction";
import { getDownloadURL, ref, StorageReference, uploadBytesResumable } from "firebase/storage";

function AddReviewPage(props: any) {
    const params = useParams();
    const location = useLocation();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [product, setProduct] = useState<ProductWithOrderType | null>(null);
    const [reviewText, setReviewText] = useState("");
    const [reviewRate, setReviewRate] = useState(5);

    const [toggle, setToggle] = useState(true);

    const reviewSelector: ReviewProductDataType[] = useSelector((state:RootState) =>
        state.SearchDetailReducer.reviewProducts
    ); 
    
    const unreviewSelector: ProductWithOrderType[] = useSelector((state:RootState) =>
        state.SearchDetailReducer.unreviewProducts
    );  

    useEffect(() => {
        FirebaseAuth.onAuthStateChanged((user) => {
            if(user) {
                dispatch(getRreviewListAction(user.uid));
            }
        })
    }, [])

    useEffect(() => {
        if(unreviewSelector) {
            unreviewSelector.forEach((unreviewProduct) =>{
                console.log(unreviewProduct.product.product_id ,  params.product_id);
                
                if(unreviewProduct.product.product_id === Number(params.product_id)) {
                    setProduct(unreviewProduct);
                }
            })
        }
    }, [unreviewSelector])

    const photoUploadHandler = (e: any) => {
        const img = e.target.files[0];
        console.log(img);

        const storageRef:StorageReference = ref(storage, `/${img.name}`)!;
          
        const uploadTask = uploadBytesResumable(storageRef, img);

        // uploadTask.on(
        //     "state_changed",
        //     (snapshot) => {
        //         const percent = Math.round(
        //             (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        //         );
        //     },
        //     (err) => console.log(err),
        //     () => {
        //         // download url
        //         getDownloadURL(uploadTask.snapshot.ref).then( async (url) => {

        //             const userRef = collection(db, "user");
        //             const q = query(userRef, where("uid", "==", selector.uid), limit(1));
        //             const fbdata = await getDocs(q);

        //             const profileRef = collection(fbdata.docs[0].ref, "profile");
        //             const q2 = query(profileRef);
        //             const fbdata2 = await getDocs(q2);

        //             await updateDoc(fbdata2.docs[0].ref, {
        //                 profile_img: url
        //             });

        //             dispatch(getProfileAction(selector.uid));
        //             console.log(url);
        //         });
        //     }
        // ); 

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
                        onChange={photoUploadHandler}
                        multiple>
                    </input>
                </div>

                <div>
                    <h1> 리뷰 평점 </h1>
                    <input type="number" value={reviewRate} onChange={ (e) => {
                        setReviewRate(Number(e.target.value));
                    }}/>
                </div>

                <button>
                    리뷰 전송
                </button>
                

            </AppFrame>
        );
    }
    else{
        return (
            <AppFrame>
                {/*<PaymentPageComp />*/}
            </AppFrame>
        )
    }   

    
}

export default AddReviewPage;