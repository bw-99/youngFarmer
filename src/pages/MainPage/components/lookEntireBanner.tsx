import { BannerBackgroundAtom, BannerButton, BannerCircleOne, BannerCircleTwo, BannerImage, BannerTextBoldAtom, BannerTextLightAtom } from "../atoms/lookEntireBanner";
import lookEntireBannerTomato from "../../../assets/images/main_lookEntireBanner_tomato.png";

export const LookEntireBannerComponent = () => {
    return (
       <div style={{margin: "0 0 0 0"}}>
            <BannerBackgroundAtom> 
                <BannerTextComponent />
                <BannerImageComponent />
            </BannerBackgroundAtom>
       </div>
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
                <BannerImage src={lookEntireBannerTomato}/>
            </div>
            <div style={{position: "absolute", zIndex: 1, right: "11px"}}>
                <BannerCircleTwo />
            </div>
        </div>
    );
}