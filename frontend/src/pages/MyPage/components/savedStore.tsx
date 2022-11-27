import React from "react";

import {AppBarMainBox, TopText, StoreBox, StoreImg, StoreName, GPA, DOT, Classification, FollowingBox, FollowingText} from "../atoms/savedStore"

import BackBtn from "../../../assets/images/btn-back.png";
import StarBtn from "../../../assets/images/btn-rate-on.png";

export const StorePointPageComp = () => {
    return(
        <div style={{marginTop: "76px"}}>
            <StoreBox style = {{display: "flex", flexDirection: "row",  justifyContent:"space-between", margin: "0 16px 16px 16px", padding: "7px 16px 7px 7px", alignItems:"center"}}>
                <div style={{display: "flex", alignItems:"center"}}>
                    <StoreImg style = {{display: "flex", margin: "0 16px 0 7px"}} />
                    <div style = {{display: "flex", flexDirection: "column"}}>
                        <StoreName style = {{display: "flex", margin: "12px 0 9px 0"}}> 청년농부 </StoreName>
                        <div style = {{display: "flex", flexDirection: "row", alignItems:"center"}}>
                            <img src = {StarBtn} style = {{display: "flex", margin: "0 2px 0 0"}} />
                            <GPA style = {{display: "flex", margin : "0 8px 0 0"}}> 5.0 </GPA>
                            <DOT style = {{display: "flex", margin : "0 8px 0 0"}} />
                            <Classification style = {{display: "flex"}}> 채소 </Classification>
                        </div>
                    </div>
                </div>
                <FollowingBox style = {{display: "flex", margin: "0 0 0 0", alignItems:"center", justifyContent:"center"}}>
                    <FollowingText style = {{display: "flex"}}> 팔로잉 </FollowingText>
                </FollowingBox>
            </StoreBox>
        </div>
    )
}