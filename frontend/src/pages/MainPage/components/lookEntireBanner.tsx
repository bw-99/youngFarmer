import { BannerAtom, BannerButton, BannerCircleOne, BannerCircleTwo, BannerImage, BannerTextBoldAtom, BannerTextLightAtom } from "../atoms/lookEntireBanner";
import mainMiddleBanner from "../../../assets/images/main_middle_banner.webp";
import React from "react";

export const LookEntireBannerComponent = () => {
    return (
        <div>
            <BannerAtom style={{maxWidth: "625px", }} src={mainMiddleBanner}/>
        </div>
    //    <div style={{margin: "0 0 0 0"}}>
    //         <BannerBackgroundAtom> 
    //             <BannerTextComponent />
    //             <BannerImageComponent />
    //         </BannerBackgroundAtom>
    //    </div>
    );
}

const BannerTextComponent = () => {
    return (
        <div style={{padding: "18px 0 0 16px"}}>
            <BannerTextLightAtom> 청년농부에서만 </BannerTextLightAtom>
            <BannerTextBoldAtom> 더 신선하고 빠르게! </BannerTextBoldAtom>
            <BannerButton> 상품 전체 보기 </BannerButton>
        </div>
    );
}

const BannerImageComponent = () => {
    return (
        <div style={{marginTop: "14px", display: "flex", flexDirection: "row"}}>
            <BannerCircleOne />
            <div style={{position: "relative", zIndex: 10}}>
                <BannerImage src={mainMiddleBanner}/>
            </div>
            <div style={{position: "absolute", zIndex: 1, right: "11px"}}>
                <BannerCircleTwo />
            </div>
        </div>
    );
}