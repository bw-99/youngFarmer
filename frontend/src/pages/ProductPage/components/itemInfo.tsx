import recommendItemStawberry from "../../../assets/images/main_recommend_strawberry.png";
import rightArrowIcon from "../../../assets/images/btn-arrow-r-14-px@3x.png";
import itemLikeIcon from "../../../assets/images/like-off@3x.png";
import rateStarIcon from "../../../assets/images/rate-star@3x.png";

import { DeliveryInfoCategory, DeliveryInfoExplainMain, DeliveryInfoExplainSub, DeliveryInfoTitle, DeliverySepLine, FarmerArrow, FarmerNickname, FarmerProfile, ItemDiscount, ItemDiscountPrice, ItemLike, ItemLikeBg, ItemPriceDefault, ItemRateArrow, ItemRateStar, ItemRateText, ItemSepLine, ItemTitle } from "../atoms/itemInfo";
import { ItemBestMark, ItemBestMarkRedBorder, ItemSaleMark } from "../../../common/ItemList/ItemList";
import { LikeIconComp } from "../../MainPage/components/recommend";

import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../../reducers";
import { ProductDataReviewType, ProductDataType } from "../../../reducers/ProductReducer";

export const ItemInfoComp = () => {

    const selector: ProductDataType = useSelector((state:RootState) =>
        state.ProductInfoReducer!.productInfo
    ); 

    return(
        <div style={{position: "relative", padding: "30px 0 0 0"}}>
            <div style={{position: "relative", padding: "0 16px"}}>
                <FarmerComp />
                <div style={{marginTop: "20px", display:"flex", alignItems:"center", flexDirection:"row", justifyContent:"flex-start"}}>
                    <div>
                        <ItemBestMarkRedBorder />
                    </div>      
                    <div style={{marginLeft: "6px"}}>
                        <ItemSaleMark />
                    </div>
                </div>   


                <div style={{marginTop:"9px",marginBottom:"14px", display: "flex", alignItems:"center", justifyContent: "space-between"}}>
                    <ItemTitle> {selector.title} </ItemTitle> 
                    <ItemLikeBg style={{display:"flex", alignItems:"center", justifyContent: "center"}}>
                        <ItemLike src={itemLikeIcon}/>
                    </ItemLikeBg>   
                </div>

                <div style={{display: "flex", alignItems:"center"}}>
                    <ItemRateStar  src={rateStarIcon}/>
                    <ItemRateText style={{marginLeft: "2px"}}> {getAverageReviewScore(selector.reviewDataList)} ({selector.reviewDataList.length}) </ItemRateText>
                    <ItemRateArrow  style={{marginLeft: "3px"}} src={rightArrowIcon}/>
                </div>

                <div style={{marginTop:"16px", display: "flex", alignItems:"center", justifyContent:"space-between"}}>
                    <ItemPriceDefault style={{textDecoration: "line-through"}}> {(selector.price).toLocaleString('ko-KR')}원 </ItemPriceDefault>

                    <div style={{display: "flex", alignItems:"center"}}>
                        <ItemDiscount> {selector.discount}% </ItemDiscount>
                        <ItemDiscountPrice style={{marginLeft: "10px"}}> {(selector.price * (1 - (selector.discount/100))).toLocaleString('ko-KR')}원 </ItemDiscountPrice>
                    </div>
                </div>

                <ItemSepLine style={{marginTop: "24px"}}/>

                <div style={{padding: "24px 0"}}>
                    <DeliveryInfoTitle style={{marginBottom: "18px"}}> 배송정보 </DeliveryInfoTitle>
                    
                    <div style={{display: "flex", alignItems:"center"}}>
                        <DeliveryInfoCategory> 배송비 </DeliveryInfoCategory>
                        <DeliveryInfoExplainMain> {selector.delivery_charge.toLocaleString("ko-KR")}원 </DeliveryInfoExplainMain>
                        <DeliveryInfoExplainSub > (50,000원 이상 무료배송) </DeliveryInfoExplainSub>
                    </div>

                    <div style={{display: "flex", alignItems:"center"}}>
                        <DeliveryInfoCategory> 배송시작 </DeliveryInfoCategory>
                        <DeliveryInfoExplainMain> {selector.delivery_start} </DeliveryInfoExplainMain>
                    </div>

                    <div style={{display: "flex", alignItems:"center"}}>
                        <DeliveryInfoCategory> 수량 </DeliveryInfoCategory>
                        <DeliveryInfoExplainMain> {selector.delivery_remain} 남음 </DeliveryInfoExplainMain>
                    </div>
                </div>
            </div>

            <div>
                <DeliverySepLine />
            </div>
            
        </div>
    );
}

const FarmerComp = () => {
    const navigate = useNavigate();

    return(
        <div onClick={() => {navigate("/store")}} style={{display: "flex",alignItems:"center"}}>
            <FarmerProfile src={recommendItemStawberry}/>
            <FarmerNickname style={{marginLeft: "10px"}}> 청년농부 </FarmerNickname> 
            <FarmerArrow style={{marginLeft:"2px"}} src={rightArrowIcon}/>
        </div>
    );
}

const getAverageReviewScore = (reviewList: ProductDataReviewType[]) => {
    let score: number = 0;
    reviewList.forEach((review)=> {
        score+=review.score
    });

    return (score/(reviewList.length)).toFixed(1);
}