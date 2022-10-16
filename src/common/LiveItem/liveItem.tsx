import { LiveTitle, LiveTitleText, LiveTitleArrow, LiveItemImage, LiveItemCover, LiveItemCoverTextDate, LiveItemCoverTextMain, LiveItemCoverBottom, LiveItemCoverBottomImage, LiveItemCoverBottomTitle, LiveItemCoverBottomCost, LiveItemCoverBottomDiscount } from "./atoms/live";
import liveRightArrow from "../../assets/images/btn-arrow-r-20-px@3x.png";
import liveFruitMarket from "../../assets/images/main_live_fruitMarket.png";
import { useNavigate } from "react-router-dom";
import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
export const LiveTitleListComponent = () => {
    return (
        <div style={{display:"flex", flexWrap:"wrap", flexDirection:"row"}}>
            <LiveItemComponent />
            <LiveItemComponent />
            <LiveItemComponent />
        </div>
    );
}


export const LiveTitleComponent = () => {
    const navigate = useNavigate();
    return (
        <LiveTitle onClick={()=>{navigate('/main/liveList');}}>
            <LiveTitleText> 청년농부 라이브 </LiveTitleText>
            <LiveTitleArrow src={liveRightArrow} />
        </LiveTitle>
    );
}

const LiveItemComponent = () => {
    return (
        <div style={{position:"relative", margin: "15px 8px 15px 8px"}}>
            <LiveItemImage style={{maxWidth: "767px", }} src={liveFruitMarket} />    
            <LiveItemCoverComponent/>
        </div>
    );
}


const LiveItemCoverComponent = () => {
    return (
        <LiveItemCover style={{maxWidth: "767px", }} >
            <div>
                <LiveItemCoverTextDate>2022.09.07</LiveItemCoverTextDate>
                <LiveItemCoverTextMain>
                    예쁘지 않은 사과가 <br /> 버려지면서 생기는 일
                </LiveItemCoverTextMain>
            </div>

            <LiveItemCoverBottom>
                <LiveItemCoverBottomImage src={liveFruitMarket} />
                <div style={{ marginLeft: "16px" }}>
                    <LiveItemCoverBottomTitle>친환경 못난이 사과 5kg/10kg</LiveItemCoverBottomTitle>
                    <div style={{ display: "flex", marginTop: "8px" }}>
                        <LiveItemCoverBottomCost> 29,000원 </LiveItemCoverBottomCost>
                        <LiveItemCoverBottomDiscount> 20% </LiveItemCoverBottomDiscount>
                    </div>

                </div>
            </LiveItemCoverBottom>
        </LiveItemCover>
    );
}