import React,{ useState } from "react";
import { IndexSelectedText, IndexNotSelectedText, IndexSelectedLine, IndexNotSelectedLine, ImageBox, ItemReviewTitle, ItemReviewButton, ItemReviewStar, ItemReviewScore, SepLine, ReviewerPhoto, ReviewerNickname, EachRateStar, EachRateStarScore, ReviewContent, ReviewPhoto, ContentDate, QuestionNickname, QuestionUnansweredButton, QuestionLockIcon, QuestionContent } from "../atoms/itemDetail";

import productExOne from "../../../assets/images/product-ex1@3x.png";
import productExTwo from "../../../assets/images/product-ex2@3x.png";
import productExThree from "../../../assets/images/product-ex3@3x.png";

import { useSelector } from "react-redux";
import { RootState } from "../../../reducers";
import { ProductDataQuestionType, ProductDataReviewType, ProductDataType } from "../../../reducers/ProductReducer";

import rateStarOn from "../../../assets/images/btn-rate-on@3x.png";
import rateStarOff from "../../../assets/images/btn-rate-off@3x.png";

import iconLock from "../../../assets/images/icon-lock@3x.png";
import { getAverageReviewScore } from "./itemInfo";


export const ItemDetailComp = () => {
    const [index, setIndex] = useState(0);

    const selector: ProductDataType = useSelector((state:RootState) =>
        state.ProductInfoReducer!.productInfo
    );  


    return(
        <div style={{margin: "0 16px", padding: "0 0 20px 0"}}>
            <div style={{display: "flex", marginBottom: "22px"}}>
                <div onClick={()=>{setIndex(0);}} style={{flex:1}}>
                    {
                        index == 0? 
                        <>
                            <IndexSelectedText style={{padding:"16px 0"}}> 상품정보 </IndexSelectedText>
                            <IndexSelectedLine />
                        </>
                        :
                        <>
                            <IndexNotSelectedText style={{padding:"16px 0"}}> 상품정보 </IndexNotSelectedText>
                            <IndexNotSelectedLine />
                        </>
                    }
                    
                </div>

                <div onClick={()=>{setIndex(1);}} style={{flex:1}}>
                    {
                        index == 1?
                        <>
                            <IndexSelectedText style={{padding:"16px 0"}}> 리뷰 {selector.reviewDataList.length} </IndexSelectedText>
                            <IndexSelectedLine />
                        </>
                        :
                        <>
                            <IndexNotSelectedText style={{padding:"16px 0"}}> 리뷰 {selector.reviewDataList.length} </IndexNotSelectedText>
                            <IndexNotSelectedLine />
                        </> 
                    }
                    
                </div>

                <div onClick={()=>{setIndex(2);}} style={{flex:1}}>
                    {
                        index == 2?
                        <>
                            <IndexSelectedText style={{flex:1, padding:"16px 0"}}> 상품문의 </IndexSelectedText>
                            <IndexSelectedLine />
                        </>
                        :
                        <>
                            <IndexNotSelectedText style={{flex:1, padding:"16px 0"}}> 상품문의 </IndexNotSelectedText>
                            <IndexNotSelectedLine />
                        </>
                    }

                </div>
            </div>
            {
                index == 0?
                ItemDetailPhotoComp(selector.photoDataList.photos):

                index == 1 ?
                ItemReviewComp(selector.reviewDataList):
                ItemQuestionComp(selector.questionDataList)

            }
        </div>
    );
}

const ItemQuestionComp = (questionList:ProductDataQuestionType[]) => (
    <div>
        <div style={{ marginBottom:"24px", display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
            <ItemReviewTitle> 상품 Q&A </ItemReviewTitle>
            <ItemReviewButton> 문의작성 </ItemReviewButton>
        </div>
        
        {
            questionList.map((question) => {
                return ItemQuestionDetailComp(question)
            })
        }

    </div>
)


const ItemQuestionDetailComp = (review: ProductDataQuestionType) => {
    return (
        <div>
            <SepLine />
            <div style={{padding: "24px 0"}}>
                <div style={{display: "flex", alignItems:"center", justifyContent:"space-between", }}>
                    <QuestionNickname> 청년농부 </QuestionNickname>
                    <ContentDate > {`${review.time_created.toDate().toLocaleDateString("kr-KR")}`} </ContentDate>
                </div>

                <div style={{marginTop:"15px", display: "flex", justifyContent: "space-between", alignItems:"center"}}>
                    <div style={{display: "flex", alignItems:"center"}}>
                        {
                            review.is_secret?
                            <>
                                <QuestionLockIcon src={iconLock}/>
                                <QuestionContent style={{marginLeft: "6px"}}> 비밀 글입니다. </QuestionContent>
                            </>
                            :
                            <>
                                <QuestionContent> {review.content} </QuestionContent>
                            </>
                        }
                        
                    </div>
                    {
                        review.is_answered?
                        <QuestionUnansweredButton> 답변예정 </QuestionUnansweredButton>
                        :
                        <QuestionUnansweredButton> 답변완료 </QuestionUnansweredButton>
                    }
                </div>
            </div>
        </div>
    );
}


const ItemDetailPhotoComp = (photos:string[] ) => {
    return photos.map((photo) => {
        return(
            <ImageBox style={{maxWidth: "625px", }} src={photo} key={photo} />
        );
    })
}

const ItemReviewComp = (reviewList:ProductDataReviewType[]) => (
    <div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
            <ItemReviewTitle> 상품리뷰 {reviewList.length} </ItemReviewTitle>
            <ItemReviewButton> 리뷰작성 </ItemReviewButton>
        </div>

        <div style={{ display: "flex", justifyContent: "flex-start", marginBottom: "30px" }}>
            <ItemReviewStar src={rateStarOn} />
            <ItemReviewStar src={rateStarOn} />
            <ItemReviewStar src={rateStarOn} />
            <ItemReviewStar src={rateStarOn} />
            <ItemReviewStar src={rateStarOff} />
            <ItemReviewScore style={{ marginLeft: "8px" }}> {getAverageReviewScore(reviewList)} </ItemReviewScore>
        </div>
        
        {
            reviewList.map((review) => {
                return ItemReivewDetailComp(review)
            })
        }

    </div>
)

const ItemReivewDetailComp = (review: ProductDataReviewType) => {
    return (
        <div>
            <SepLine />
            <div style={{padding: "24px 0"}}>
                <div style={{display: "flex", justifyContent:"space-between", alignItems:"center"}}>
                    <div style={{display: "flex", alignItems:"center"}}>
                        <ReviewerPhoto  src={productExThree}/>
                        <ReviewerNickname style={{marginLeft: "10px"}}> 청년농부 </ReviewerNickname>
                    </div>

                    <div style={{display: "flex", alignItems:"center"}}> 
                        <EachRateStar style={{marginRight: "4px"}} src={rateStarOn}/>
                        <EachRateStarScore> 4.5 </EachRateStarScore>
                    </div>
                </div>

                <div style={{display: "flex", marginTop: "10px", justifyContent: "space-between"}}>
                    <div>
                        <ReviewContent> {review.content} </ReviewContent>
                        <ContentDate style={{marginTop:"7px"}}> {`${review.time_created.toDate().toLocaleDateString("kr-KR")}`} </ContentDate>
                    </div>
                    <ReviewPhoto src={review.photos[0]} />
                </div>
            </div>
        </div>
    );
}