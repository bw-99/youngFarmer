import React from "react";

import {AppBarMainBox, TopText, AvailablePointBox, AvailablePoint, PointAmount, UpdateDate, SeparateBar} from "../atoms/point"
import {PointDetailBox, PointDetailContent, PointDetailDate, PointDetailAmountPlus,PointDetailAmountMinus, SeparateLine} from "../atoms/point"
import BackBtn from "../../../assets/images/btn-back.png";
import PointImg from "../../../assets/images/point.png";
import RefreshImg from "../../../assets/images/btn-refresh.png";



export const PointPageComp = () => {
    return(
        <div style = {{display: "flex", height: "100vh", flexDirection: "column", position: "fixed", bottom: "0", zIndex: "10000", width: "100vw", maxWidth:"625px"}}>
        
            <AppBarMainBox style = {{display: "flex", flexDirection: "row", zIndex: "1", maxWidth: "625px", padding: "16px 0 16px 0", margin: "0 0 24px 0"}}>
                <img src = {BackBtn} style = {{position: "fixed", margin: "0 0 0 16px"}} />
                <TopText style = {{display: "flex", margin: "2px 270.5px 2px 270.5px"}}> 포인트 </TopText>
            </AppBarMainBox>
            
            <AvailablePointBox style = {{display: "flex", flexDirection: "row", maxWidth: "593px", padding: "25px 16px 24px 16px", margin: "20px 16px 16px 16px"}}>
                <AvailablePoint style = {{display: "flex", margin: "7px 77px 7px 0"}}> 사용 가능한 포인트 </AvailablePoint>
                <img src = {PointImg} style = {{position: "fixed", margin: "2px 6px 5px 77px"}} />
                <PointAmount style = {{display: "flex", margin: "0 0 0 6px"}}> 34,000P </PointAmount>
            </AvailablePointBox>

            <div style = {{display: "flex", flexDirection: "row"}}>
                <img src = {RefreshImg} style = {{position: "fixed", margin: "16px 2px 20px 114px"}} />
                <UpdateDate style = {{display: "flex"}}> 업데이트 2022년10월06일 </UpdateDate>
            </div>

            <SeparateBar style = {{display: "flex", width: "100vw"}} />

            <PointDetailBox style = {{display: "flex", flexDirection: "row", padding: "20px 16px 0 16px"}}>
                <div style = {{display: "flex", flexDirection: "column"}}>
                    <PointDetailContent style = {{display: "flex", margin: "0 0 3px 0"}}> 이벤트 </PointDetailContent>
                    <PointDetailDate style = {{display: "flex", margin: "0 0 20px 0"}}> 2022년 10월 03일 </PointDetailDate>
                </div>
                <PointDetailAmountPlus style = {{display: "flex", margin: "10px 0 10px 0"}}> +500p </PointDetailAmountPlus>
                <SeparateLine style = {{display: "flex", margin: "0 16px 0 16px"}} />
            </PointDetailBox>

            <PointDetailBox style = {{display: "flex", flexDirection: "row", padding: "20px 16px 0 16px"}}>
                <div style = {{display: "flex", flexDirection: "column"}}>
                    <PointDetailContent style = {{display: "flex", margin: "0 0 3px 0"}}> 리뷰 작성 </PointDetailContent>
                    <PointDetailDate style = {{display: "flex", margin: "0 0 20px 0"}}> 2022년 10월 03일 </PointDetailDate>
                </div>
                <PointDetailAmountPlus style = {{display: "flex", margin: "10px 0 10px 0"}}> +100p </PointDetailAmountPlus>
                <SeparateLine style = {{display: "flex", margin: "0 16px 0 16px"}} />
            </PointDetailBox>

            <PointDetailBox style = {{display: "flex", flexDirection: "row", padding: "20px 16px 0 16px"}}>
                <div style = {{display: "flex", flexDirection: "column"}}>
                    <PointDetailContent style = {{display: "flex", margin: "0 0 3px 0"}}> 상품구입 </PointDetailContent>
                    <PointDetailDate style = {{display: "flex", margin: "0 0 20px 0"}}> 2022년 10월 03일 </PointDetailDate>
                </div>
                <PointDetailAmountMinus style = {{display: "flex", margin: "10px 0 10px 0"}}> -3,000p </PointDetailAmountMinus>
                <SeparateLine style = {{display: "flex", margin: "0 16px 0 16px"}} />
            </PointDetailBox>

            



        </div>
    )
}