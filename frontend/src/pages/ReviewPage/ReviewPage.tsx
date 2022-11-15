import React, { useEffect, useState } from "react";

import { useParams, useLocation, useNavigate } from 'react-router-dom';
import styled from "styled-components";
import { AppFrame } from "../../App";

import testImage from "../../assets/images/peach@3x.png";
import rateStarIcon from "../../assets/images/rate-star@3x.png";
import alarm from "../../assets/images/alarm@3x.png";
import shopping_bag from "../../assets/images/shopping_bag@3x.png";
import { AppBarComponentNoBack, AppBarComponentOnlyBack, AppBarComponentProduct, AppBarComponentSearch } from "../../common/AppBar/AppBar";
import {
    IndexSelectedLine, IndexSelectedText, IndexNotSelectedLine, IndexNotSelectedText,
    ReviewerImage, ReviewerNickname, ReviewRateStar, ReviewRateText,
    ReviewContent, ReviewDate, ReviewedProductImg, SepLine,
} from "../ReviewPage/atoms/ReviewPage"


import {
    PurchaseDate, PurchaseState, WriteReviewBox, WriteReviewText, PurchaseDot,
    ProductImg, ProductLocateText, ProductTitleText, ProductPriceText, ProductDetailText, ProductDetailDot,
    UnReviewSepLine,
} from "../ReviewPage/atoms/UnReviewPage"

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

    const [toggle, setToggle] = useState(false);

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
                <div style={{margin:"0 16px 0 16px"} }>
                    <div style={{display:"flex"} }>
                        <div onClick={() => { if (toggle) { setToggle(false); } }} style={{flex:1} } >
                            {
                                !toggle ?
                                    <>
                                        <IndexSelectedText style={{ padding: "16px 0" }}> 작성 가능한 리뷰 </IndexSelectedText>
                                        <IndexSelectedLine />
                                    </>
                                    :
                                    <>
                                        <IndexNotSelectedText style={{ padding: "16px 0" }}> 작성 가능한 리뷰 </IndexNotSelectedText>
                                        <IndexNotSelectedLine />
                                    </>
                            }
                        </div>
                        <div onClick={() => { if (!toggle) { setToggle(true) } }} style={{ flex: 1 }} >
                            {
                                toggle ?
                                    <>
                                        <IndexSelectedText style={{ padding: "16px 0" }}> 작성한 리뷰 </IndexSelectedText>
                                        <IndexSelectedLine />
                                    </>
                                    :
                                    <>
                                        <IndexNotSelectedText style={{ padding: "16px 0" }}> 작성한 리뷰 </IndexNotSelectedText>
                                        <IndexNotSelectedLine />
                                    </>
                            }
                        </div>
                    </div>
                    {
                        toggle
                            ?
                            /*<>
                                <h1> 리뷰한 상품 </h1>
                                {
                                    console.log(JSON.stringify(reviewSelector))
                                }
                            </>*/
                            <>
                                <div style={{marginTop: "24px", height: "130px",} }>
                                    <div style={{ display: "flex", /*alignItems:"center",*/ justifyContent: "space-between" }}>
                                        <div style={{ display: "flex", alignItems: "center",} }>
                                            <ReviewerImage src={rateStarIcon} />
                                            <ReviewerNickname style={{ marginLeft: "10px" }}>청년 농부</ReviewerNickname>
                                        </div>
                                        <div style={{ display: "flex", alignItems: "center", }}>
                                            <ReviewRateStar src={testImage} style={{marginRight:"4px"} }/>
                                            <ReviewRateText>4.5</ReviewRateText>
                                        </div>
                                    </div>
                                    <div style={{ display: "flex", marginTop: "10px", justifyContent:"space-between" }}>
                                        <div style={{ display: "flex", flexDirection: "column" }}>
                                            <ReviewContent>
                                                지인한테 선물받아보고 너무 맛있어서 제가 또 구매했습니다. 포장을 튼튼하게 해주셔서 무르지도 않고…
                                            </ReviewContent>
                                            <ReviewDate style={{marginTop:"7px"} }>2022.09.13</ReviewDate>
                                        </div>
                                        <ReviewedProductImg src={testImage}/>
                                    </div>
                                    <SepLine style={{marginTop:"24px"} }/>
                                </div>
                            </>
                            :
                            /*<>
                                <h1> 리뷰 가능 상품 </h1>
                                {
                                    unreviewSelector.map((pr) => {
                                        console.log(JSON.stringify(pr));
                                        return (
                                            <button onClick={() => {
                                                navigate("/review/product/" + pr.product.product_id);
                                            }}>
                                                리뷰작성
                                                {JSON.stringify(pr)}
                                            </button>
                                        )
                                    })
                                }
                            </>*/
                            <>
                                <div style={{ marginTop: "24px", height: "130px", }}>
                                    <div style={{display: "flex" ,justifyContent:"space-between"} }>
                                        <div style={{ display: "flex", alignItems: "center" } }>
                                            <PurchaseDate>2022.10.16</PurchaseDate>
                                            <PurchaseDot style={{ marginLeft: "8px" }} />
                                            <PurchaseState style={{ marginLeft: "8px" } }>구매확정</PurchaseState>
                                        </div>
                                        <div>
                                            
                                        </div>
                                        <WriteReviewBox style={{display:"flex", alignItems:"center", justifyContent:"center"} }>
                                            <WriteReviewText>리뷰작성</WriteReviewText>
                                        </WriteReviewBox>
                                    </div>
                                    <div style={{ marginTop: "20px", display:"flex"} }>
                                        <ProductImg src={testImage} />
                                        <div style={{display:"flex", marginTop: "7px", marginLeft:"16px" ,flexDirection:"column"} }>
                                            <ProductLocateText>산천</ProductLocateText>
                                            <ProductTitleText style={{ marginTop: "4px"} }>친환경 복숭아 5kg /10kg</ProductTitleText>
                                            <div style={{ display: "flex", marginTop: "10px", alignItems:"center" }}>
                                                <ProductPriceText>29,000원</ProductPriceText>
                                                <ProductDetailText style={{marginLeft:"10px"} }>12개입</ProductDetailText>
                                                <ProductDetailDot style={{ marginLeft: "2px" }} />

                                                <ProductDetailText style={{ marginLeft: "2px" }}>10kg</ProductDetailText>
                                                <ProductDetailDot style={{ marginLeft: "2px" }} />

                                                <ProductDetailText style={{ marginLeft: "2px" }}>선물용 포장</ProductDetailText>
                                            </div>
                                        </div>
                                    </div>
                                    <UnReviewSepLine style={{ marginTop: "20px" }} />
                                </div>
                            </>
                    }
                </div>
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