import recommendItemStawberry from "../../../assets/images/main_recommend_strawberry.png";
import FarmerRateStarIcon from "../../../assets/images/rate-star@3x.png";
import rightArrowIcon from "../../../assets/images/btn-arrow-r-14-px@3x.png";
import itemLikeIcon from "../../../assets/images/like-off@3x.png";
import rateStarIcon from "../../../assets/images/rate-star@3x.png";

import { FarmerProfileImage, FarmerNickname, FarmerRateStar, FarmerRateText, DetailSepLine, FarmerIntroduceText, FarmerSortIcon, FarmerSortText, FarmerFollowButton } from "../atoms/FarmerInfo";
import { ItemBestMark, ItemBestMarkRedBorder, ItemSaleMark } from "../../../common/ItemList/ItemList";
import { LikeIconComp } from "../../MainPage/components/recommend";

import React from "react";
import { StoreProductDataType } from "../StoreType";

type StoreParam = {
    storeData: StoreProductDataType
}

export const FarmerInfoComp = ({storeData}:StoreParam) => {
    return (
        <div style={{padding: "34px 0 0 0",borderTopRightRadius: "12px", borderTopLeftRadius: "12px", zIndex: "1", backgroundColor:"white", marginTop: "-100px"}}>
            <div style={{ padding: "0 16px", display: "flex", alignItems: "center", justifyContent: "space-between" } }>
                <div style={{ display: "flex" }}>
                    <FarmerProfileImage src={storeData.photo} />
                    <div style={{ margin: "7px 0 0 20px", alignItems: "center", justifyContent: "center" } }>
                        <FarmerNickname> {storeData.name} </FarmerNickname>
                        <div style={{ marginTop: "8px", display: "flex", alignItems: "center" }}>
                            <FarmerRateStar src={FarmerRateStarIcon} />
                            <FarmerRateText style={{ marginLeft: "2px" }} > 5.0 </FarmerRateText>
                            {
                                storeData.category.map((cat) => {
                                    return (
                                        <>
                                            <FarmerSortIcon />
                                            <FarmerSortText>{cat}</FarmerSortText>
                                        </>
                                    )
                                })
                            }
                            
                        </div>
                    </div>
                </div>
                <div style={{ marginRight: "16px" }}>
                    <FarmerFollowButton> 팔로우 </FarmerFollowButton>
                </div>
            </div>
            <FarmerIntroduceText style={{padding: "0 16px"}}>{storeData.description}</FarmerIntroduceText>
            <div style={{marginTop: "34px"} }>
                <DetailSepLine />
            </div>
        </div>
    );
}