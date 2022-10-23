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
import { ProductDataType } from "../../../reducers/ProductReducer";

export const ItemInfoComp = () => {

    const productInfo: ProductDataType = useSelector((state:RootState) =>
        state.ProductInfoReducer
    );  

    return(
        <div style={{position: "relative", padding: "60px 0 0 0"}}>
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
                <div> {JSON.stringify(productInfo)} </div>
                <div> {productInfo?  JSON.stringify(productInfo.price) : ""} </div>
                    <ItemTitle> {productInfo ? productInfo.title : "null"} </ItemTitle> 
                    <ItemLikeBg style={{display:"flex", alignItems:"center", justifyContent: "center"}}>
                        <ItemLike src={itemLikeIcon}/>
                    </ItemLikeBg>   
                </div>

                <div style={{display: "flex", alignItems:"center"}}>
                    <ItemRateStar  src={rateStarIcon}/>
                    <ItemRateText style={{marginLeft: "2px"}}> 4.5 (123) </ItemRateText>
                    <ItemRateArrow  style={{marginLeft: "3px"}} src={rightArrowIcon}/>
                </div>

                <div style={{marginTop:"16px", display: "flex", alignItems:"center", justifyContent:"space-between"}}>
                    <ItemPriceDefault style={{textDecoration: "line-through"}}> 34,000원 </ItemPriceDefault>

                    <div style={{display: "flex", alignItems:"center"}}>
                        <ItemDiscount> 20% </ItemDiscount>
                        <ItemDiscountPrice style={{marginLeft: "10px"}}> 27,200원 </ItemDiscountPrice>
                    </div>
                </div>

                <ItemSepLine style={{marginTop: "24px"}}/>

                <div style={{padding: "24px 0"}}>
                    <DeliveryInfoTitle style={{marginBottom: "18px"}}> 배송정보 </DeliveryInfoTitle>
                    
                    <div style={{display: "flex", alignItems:"center"}}>
                        <DeliveryInfoCategory> 배송비 </DeliveryInfoCategory>
                        <DeliveryInfoExplainMain> 3,200원 </DeliveryInfoExplainMain>
                        <DeliveryInfoExplainSub > (50,000원 이상 무료배송) </DeliveryInfoExplainSub>
                    </div>

                    <div style={{display: "flex", alignItems:"center"}}>
                        <DeliveryInfoCategory> 배송시작 </DeliveryInfoCategory>
                        <DeliveryInfoExplainMain> 7일 이내 </DeliveryInfoExplainMain>
                    </div>

                    <div style={{display: "flex", alignItems:"center"}}>
                        <DeliveryInfoCategory> 수량 </DeliveryInfoCategory>
                        <DeliveryInfoExplainMain> 340개 남음 </DeliveryInfoExplainMain>
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