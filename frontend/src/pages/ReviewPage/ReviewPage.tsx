import React, { useEffect, useState } from "react";

import { useParams, useLocation, useNavigate } from 'react-router-dom';
import { AppFrame } from "../../App";

import {  AppBarComponentOnlyBack, } from "../../common/AppBar/AppBar";
import {
    IndexSelectedLine, IndexSelectedText, IndexNotSelectedLine, IndexNotSelectedText,
    ReviewerImage, ReviewerNickname, ReviewRateStar, ReviewRateText,
    ReviewContent, ReviewDate, ReviewedProductImg, SepLine,
} from "../ReviewPage/atoms/ReviewPage"

import starOn from "../../assets/images/star-copy-3@3x.webp";
import {
    PurchaseDate, PurchaseState, WriteReviewBox, WriteReviewText, PurchaseDot,
    ProductImg, ProductLocateText, ProductTitleText, ProductPriceText, ProductDetailText, ProductDetailDot,
    UnReviewSepLine,
} from "../ReviewPage/atoms/UnReviewPage"


import { db, FirebaseAuth } from "../..";
import { useDispatch, useSelector } from "react-redux";
import { ProductDataOrderType, ProductDataType, ProductWithOrderType, ReviewProductDataType } from "../../reducers/ProductReducer";
import { RootState } from "../../reducers";
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
    
    const unreviewSelector: ProductDataOrderType[] = useSelector((state: RootState) =>
        state.SearchDetailReducer.unreviewProducts
    );

    useEffect(() => {
        FirebaseAuth.onAuthStateChanged((user) => {
            if(user) {
                dispatch(getRreviewListAction(user!.uid));
            }
        })
    }, [])

    console.log(props);

    const changeTimeStemp = (second: number) => {
        let date = new Date(second);
        let year = date.getFullYear().toString().slice(-4); //년도 뒤에 두자리
        let month = ("0" + (date.getMonth() + 1)).slice(-2); //월 2자리 (01, 02 ... 12)
        let day = ("0" + date.getDate()).slice(-2); //일 2자리 (01, 02 ... 31)
        let returnDate = year + "." + month + "." + day

        return returnDate;
    }

    const changePriceToStr = (price: number) => {
        if (price < 0) {
            return "잘못 저장된 금액입니다."
        }

        let strPrice = price.toString();
        let returnStr: string = "";

        let reminder: number = (strPrice.length % 3);
        let quotient: number = Math.floor(strPrice.length / 3);

        let i: number;
        if (reminder == 0) {
            for ( i = 1; i < quotient; i++) {
                returnStr += strPrice.slice(3 * (i - 1), 3 * i);
                returnStr += ",";
            }
            returnStr += strPrice.slice(3 * i);
        }
        else {
            returnStr += strPrice.slice(0, reminder);
            for (i = 1; i <= quotient; i++) {
                returnStr += ",";
                returnStr += strPrice.slice(reminder + 3 * (i - 1), reminder + 3 * i);
            }
        }
        
        return returnStr + "원";
    }

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
                    <>
                    </>
                    
                    {
                        toggle
                            ?
                            <>
                                {
                                    reviewSelector.map((pr, index)=>{
                                        return (
                                            <div style={{ marginTop: "24px", }}>
                                                <div style={{ display: "flex", /*alignItems:"center",*/ justifyContent: "space-between" }}>
                                                    <div style={{ display: "flex", alignItems: "center", }}>
                                                        <ReviewerImage src={pr.review.writer.profile_img} />
                                                        <ReviewerNickname style={{ marginLeft: "10px" }}>
                                                            {
                                                                pr.review.writer.profile_nickname
                                                            }
                                                        </ReviewerNickname>
                                                    </div>
                                                    <div style={{ display: "flex", alignItems: "center", }}>
                                                        <ReviewRateStar src={starOn} style={{ marginRight: "4px" }} />
                                                        <ReviewRateText>{pr.review.score }</ReviewRateText>
                                                    </div>
                                                </div>
                                                <div style={{ display: "flex", marginTop: "10px", justifyContent: "space-between" }}>
                                                    <div style={{ display: "flex", flexDirection: "column" }}>
                                                        <ReviewContent>
                                                            {pr.review.content }
                                                        </ReviewContent>
                                                        <ReviewDate style={{ marginTop: "7px" }}>
                                                            {changeTimeStemp(pr.review.time_created.seconds)}
                                                        </ReviewDate>
                                                    </div>
                                                    <ReviewedProductImg src={pr.review.photos[0]} />
                                                </div>
                                                {
                                                    index + 1 != reviewSelector.length ?
                                                        <SepLine style={{ marginTop: "24px" }} />
                                                        :
                                                        null
                                                }
                                            </div>
                                        )
                                    })
                                }
                            </>
                            :
                            <>
                                {                                    
                                    unreviewSelector.map((pr, index) => {
                                        return (
                                            <div style={{ marginTop: "24px", }}>
                                                <div style={{ display: "flex", justifyContent: "space-between" }}>
                                                    <div style={{ display: "flex", alignItems: "center" }}>
                                                        <PurchaseDate>{pr.time_created ? changeTimeStemp(pr.time_created.seconds) :changeTimeStemp(new Date().getSeconds()) }</PurchaseDate>
                                                        <PurchaseDot style={{ marginLeft: "8px" }} />
                                                        <PurchaseState style={{ marginLeft: "8px" }}>구매확정</PurchaseState>
                                                    </div>
                                                    <div>

                                                    </div>
                                                 
                                                    <WriteReviewBox 
                                                    onClick={()=>{
                                                        navigate("/review/product/"+pr.product.product_id);
                                                    }}
                                                    style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                                                        <WriteReviewText>리뷰작성</WriteReviewText>
                                                    </WriteReviewBox>
                                                </div>
                                                <div style={{ marginTop: "20px", display: "flex" }}>
                                                    <ProductImg src={pr.product.photo} />
                                                    <div style={{ display: "flex", marginTop: "7px", marginLeft: "16px", flexDirection: "column" }}>
                                                        {/* // ? 수정 필요 */}
                                                        <ProductLocateText>산천</ProductLocateText>
                                                        <ProductTitleText style={{ marginTop: "4px" }}>{ pr.product.title}</ProductTitleText>
                                                        <div style={{ display: "flex", marginTop: "10px", alignItems: "center" }}>
                                                            <ProductPriceText>
                                                                {changePriceToStr(pr.product.price)}
                                                            </ProductPriceText>
                                                        
                                                            {
                                                                pr.option?
                                                                <div style={{ marginLeft: "10px", display: "flex", justifyContent: "flex-start"}}>
                                                                    {
                                                                        Object.keys(JSON.parse(pr.option)).map((key:any) => {
                                                                            return <ProductDetailText key={key}>
                                                                                {JSON.parse(pr.option)[key]} •&nbsp;
                                                                            </ProductDetailText>
                                                                        })
                                                                    }
                                                                </div>
                                                                :
                                                                <></>
                                                            }
                                                        </div>
                                                    </div>
                                                </div>
                                                {
                                                    index + 1 != unreviewSelector.length ?
                                                        <UnReviewSepLine style={{ marginTop: "20px" }} />
                                                        :
                                                        null
                                                }
                                            </div>            
                                            )
                                    })
                                }
                                
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