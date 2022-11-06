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
import { db, FirebaseAuth } from "../..";
import { useDispatch, useSelector } from "react-redux";
import { ProductDataType, ProductWithOrderType, ReviewProductDataType } from "../../reducers/ProductReducer";
import { RootState } from "../../reducers";
import { CircularProgress } from '@mui/material';
import { getRreviewListAction, getUnreviewListAction } from "./ReviewAction";

function ReviewPage(props: any) {
    const params = useParams();
    const location = useLocation();
    const navigate = useNavigate();
    const dispatch = useDispatch();

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

    if (reviewSelector && unreviewSelector) {
        return (
            <AppFrame>
                <AppBarComponentOnlyBack title={"리뷰 작성"}/>
                <button onClick={()=>{
                    setToggle(!toggle);
                }}></button>
                {
                    toggle
                    ?
                    <>
                    <h1> 리뷰한 상품 </h1>
                    {
                        JSON.stringify(reviewSelector)
                    }
                    </>
                    :
                    <>
                    <h1> 리뷰 가능 상품 </h1>
                    {
                        unreviewSelector.map((pr) => {
                            return (
                            <button onClick={() => {
                                navigate("/review/product/"+pr.product.product_id);
                            }}>
                                리뷰작성
                                {JSON.stringify(pr)}
                            </button>
                            )
                        })
                    }
                    </>
                }
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

export default ReviewPage;