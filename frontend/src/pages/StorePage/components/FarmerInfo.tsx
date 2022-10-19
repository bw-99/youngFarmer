import recommendItemStawberry from "../../../assets/images/main_recommend_strawberry.png";
import FarmerRateStarIcon from "../../../assets/images/rate-star@3x.png";
import rightArrowIcon from "../../../assets/images/btn-arrow-r-14-px@3x.png";
import itemLikeIcon from "../../../assets/images/like-off@3x.png";
import rateStarIcon from "../../../assets/images/rate-star@3x.png";

import { FarmerProfileImage, FarmerNickname, FarmerRateStar, FarmerRateText, DetailSepLine, FarmerIntroduceText, FarmerSortIcon, FarmerSortText, FarmerFollowButton } from "../atoms/FarmerInfo";
import { ItemBestMark, ItemBestMarkRedBorder, ItemSaleMark } from "../../../common/ItemList/ItemList";
import { LikeIconComp } from "../../MainPage/components/recommend";

import React from "react";

export const FarmerInfoComp = () => {
    return (
        <div style={{position: "relative", padding: "34px 0 0 0", borderTopRightRadius: "12px", borderTopLeftRadius: " 12px" }}>
            <div style={{ padding: "0 16px", display: "flex", alignItems: "center", justifyContent: "space-between" } }>
                <div style={{ display: "flex" }}>
                    <FarmerProfileImage src={recommendItemStawberry} />
                    <div style={{ margin: "7px 0 0 20px", alignItems: "center", justifyContent: "center" } }>
                        <FarmerNickname> 청년농부 </FarmerNickname>
                        <div style={{ marginTop: "8px", display: "flex", alignItems: "center" }}>
                            <FarmerRateStar src={FarmerRateStarIcon} />
                            <FarmerRateText style={{ marginLeft: "2px" }} > 5.0 </FarmerRateText>
                            <FarmerSortIcon />
                            <FarmerSortText>채소</FarmerSortText>
                        </div>
                    </div>
                </div>
                <div style={{ marginRight: "16px" }}>
                    <FarmerFollowButton> 팔로우 </FarmerFollowButton>
                </div>
            </div>
            <FarmerIntroduceText style={{padding: "0 16px"}}>100% 친환경 채소만 판매하는 청년농부입니다.</FarmerIntroduceText>
            <div style={{marginTop: "34px"} }>
                <DetailSepLine />
            </div>
        </div>
    );
}