import React from "react";

import {AppBarMainBox, TopText, AvailablePointBox, AvailablePoint, PointAmount, UpdateDate, SeparateBar} from "../atoms/point"
import {PointDetailBox, PointDetailContent, PointDetailDate, PointDetailAmountPlus,PointDetailAmountMinus, SeparateLine} from "../atoms/point"
import BackBtn from "../../../assets/images/btn-back.webp";
import PointImg from "../../../assets/images/point.webp";
import RefreshImg from "../../../assets/images/btn-refresh.webp";
import { AppBarComponentOnlyBack } from "../../../common/AppBar/AppBar";



export const PointPageComp = () => {
    return(
        <div style={{marginTop: "76px"}}>
            <AvailablePointBox style = {{display: "flex", 
            margin:"0 16px 0 16px",
            flexDirection: "row", maxWidth: "calc(625px - 32px)",
            alignItems:"center",justifyContent:"space-between"}}>
                <AvailablePoint style = {{display: "flex", margin: "7px 0px 7px 16px"}}> 사용 가능한 포인트 </AvailablePoint>
                
                <div style={{display:"flex", alignItems:"center", marginRight:"16px"}}>
                    <img src = {PointImg} style = {{margin: "2px 6px 5px 0px", width:"24px",  height:"24px"}} />
                    <PointAmount style = {{display: "flex", margin: "0 0 0 6px"}}> 400 P </PointAmount>
                </div>
            </AvailablePointBox>

            <div style = {{display: "flex", flexDirection: "row", justifyContent:"center", margin:"16px 0 20px 0"}}>
                <img src = {RefreshImg} style = {{}} />
                <UpdateDate style = {{display: "flex"}}> 업데이트 2022년10월06일 </UpdateDate>
            </div>

            <SeparateBar style = {{display: "flex", maxWidth: "calc(625px - 32px)"}} />

            <PointDetailBox style = {{display: "flex", flexDirection: "column", margin: "20px 16px 0 16px"}}>
                <div style={{display: "flex", justifyContent:"space-between"}}>
                    <div style = {{display: "flex", flexDirection: "column"}}>
                        <PointDetailContent style = {{display: "flex", margin: "0 0 3px 0"}}> 이벤트 </PointDetailContent>
                        <PointDetailDate style = {{display: "flex", margin: "0 0 20px 0"}}> 2022년 10월 03일 </PointDetailDate>
                    </div>
                    <PointDetailAmountPlus style = {{display: "flex", margin: "10px 0 10px 0"}}> +500p </PointDetailAmountPlus>
                </div>
                
                <SeparateLine style = {{display: "flex", margin: "0 16px 0 16px"}} />
            </PointDetailBox>

            <PointDetailBox style = {{display: "flex", flexDirection: "column", margin: "20px 16px 0 16px"}}>
                <div style={{display: "flex", justifyContent:"space-between"}}>
                    <div style = {{display: "flex", flexDirection: "column"}}>
                        <PointDetailContent style = {{display: "flex", margin: "0 0 3px 0"}}> 상품 구매 </PointDetailContent>
                        <PointDetailDate style = {{display: "flex", margin: "0 0 20px 0"}}> 2022년 10월 03일 </PointDetailDate>
                    </div>
                    <PointDetailAmountMinus style = {{display: "flex", margin: "10px 0 10px 0"}}> -100p </PointDetailAmountMinus>
                </div>
                
                <SeparateLine style = {{display: "flex", margin: "0 16px 0 16px"}} />
            </PointDetailBox>

        </div>
    )
}