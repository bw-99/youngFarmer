import { RecommendItem, RecommendItemFollowButton, RecommendItemImage, RecommendItemRate, RecommendItemSortIcon, RecommendItemSortText, RecommendItemTitle, RecommendText } from "../atoms/RecommendStore";

import React from "react";
import recommendItemStawberry from "../../../assets/images/main_recommend_strawberry.png";



export const RecommendStoreComponent = () => {
    return(
        <div style={{padding: "30px 16px 30px 16px"}}>
            <RecommendText>  오늘의 추천 상점 </RecommendText>
            <div style={{marginTop: "8px"}}>
                <RecommendStoreItemComp />
                <RecommendStoreItemComp />
                <RecommendStoreItemComp />
                <RecommendStoreItemComp />
                <RecommendStoreItemComp />
            </div>
        </div>
    );
}


const RecommendStoreItemComp = () => {
    return(
        <div style={{paddingTop: "8px", paddingBottom: "8px"}}>
            <RecommendItem style={{display:"flex", alignItems: "center", justifyContent:"space-between"}}>
                <div style={{display:"flex", alignItems: "center"}}>
                    <RecommendItemImage src={recommendItemStawberry}/>

                    <div>
                        <RecommendItemTitle> 청년농부 </RecommendItemTitle>
                        <div style={{marginTop: "9px", display: "flex", alignItems:"center"}}>
                            <RecommendItemRate > 5.0 </RecommendItemRate>
                            <RecommendItemSortIcon />
                            <RecommendItemSortText>채소</RecommendItemSortText>
                        </div>
                    </div>
                </div>
                

                <div style={{marginRight: "16px"}}>
                    <RecommendItemFollowButton> 팔로우 </RecommendItemFollowButton>
                </div>
            </RecommendItem>
        </div>
    );
}