import React from "react";

import {AppBarMainBox, TopText, StoreBox, StoreImg, StoreName, GPA, DOT, Classification, FollowingBox, FollowingText} from "../atoms/savedStore"

import BackBtn from "../../../assets/images/btn-back.png";
import StarBtn from "../../../assets/images/btn-rate-on.png";

export const StorePointPageComp = () => {
    return(
        <div>
    
            <StoreBox style = {{display: "flex", flexDirection: "row", margin: "0 16px 16px 16px", padding: "7px 16px 7px 7px"}}>
                <StoreImg style = {{display: "flex", margin: "0 16px 0 0 "}} />
                <div style = {{display: "flex", flexDirection: "column"}}>
                    <StoreName style = {{display: "flex", margin: "12px 0 9px 0"}}> 청년농부 </StoreName>
                    <div style = {{display: "flex", flexDirection: "row"}}>
                        <img src = {StarBtn} style = {{display: "flex", margin: "0 2px 0 0"}} />
                        <GPA style = {{display: "flex", margin : "0 8px 0 0"}}> 5.0 </GPA>
                        <DOT style = {{display: "flex", margin : "0 8px 0 0"}} />
                        <Classification style = {{display: "flex"}}> 채소 </Classification>
                    </div>
                </div>
                <FollowingBox style = {{display: "flex", margin: "15px 0 15px 0"}}>
                    <FollowingText style = {{display: "flex"}}> 팔로잉 </FollowingText>
                </FollowingBox>
            </StoreBox>

            <StoreBox style = {{display: "flex", flexDirection: "row", margin: "0 16px 16px 16px", padding: "7px 16px 7px 7px"}}>
                <StoreImg style = {{display: "flex", margin: "0 16px 0 0 "}} />
                <div style = {{display: "flex", flexDirection: "column"}}>
                    <StoreName style = {{display: "flex", margin: "12px 0 9px 0"}}> 청년농부 </StoreName>
                    <div style = {{display: "flex", flexDirection: "row"}}>
                        <img src = {StarBtn} style = {{display: "flex", margin: "0 2px 0 0"}} />
                        <GPA style = {{display: "flex", margin : "0 8px 0 0"}}> 5.0 </GPA>
                        <DOT style = {{display: "flex", margin : "0 8px 0 0"}} />
                        <Classification style = {{display: "flex"}}> 채소 </Classification>
                    </div>
                </div>
                <FollowingBox style = {{display: "flex", margin: "15px 0 15px 0"}}>
                    <FollowingText style = {{display: "flex"}}> 팔로잉 </FollowingText>
                </FollowingBox>
            </StoreBox>

            <StoreBox style = {{display: "flex", flexDirection: "row", margin: "0 16px 16px 16px", padding: "7px 16px 7px 7px"}}>
                <StoreImg style = {{display: "flex", margin: "0 16px 0 0 "}} />
                <div style = {{display: "flex", flexDirection: "column"}}>
                    <StoreName style = {{display: "flex", margin: "12px 0 9px 0"}}> 청년농부 </StoreName>
                    <div style = {{display: "flex", flexDirection: "row"}}>
                        <img src = {StarBtn} style = {{display: "flex", margin: "0 2px 0 0"}} />
                        <GPA style = {{display: "flex", margin : "0 8px 0 0"}}> 5.0 </GPA>
                        <DOT style = {{display: "flex", margin : "0 8px 0 0"}} />
                        <Classification style = {{display: "flex"}}> 채소 </Classification>
                    </div>
                </div>
                <FollowingBox style = {{display: "flex", margin: "15px 0 15px 0"}}>
                    <FollowingText style = {{display: "flex"}}> 팔로잉 </FollowingText>
                </FollowingBox>
            </StoreBox>
        
        </div>
    )
}