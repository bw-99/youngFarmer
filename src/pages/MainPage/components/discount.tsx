import { DiscountBox, DiscountText, MainTextLight, MainTextBold, DiscountPeriod, DiscountImageBox } from "../atoms/atoms"

import mainBanner from "../../../assets/images/main_banner.png";

export const DiscountComponent = () => {
    return (
        <img src={mainBanner} alt="" style={{maxWidth: "767px", objectFit: "cover", width:"100vw", height:"416px"}}/>
        // <div style={{position: "relative"}}>
        //     <div style={{ padding: "0px 16px 0px 16px"}}>
        //         <DiscountBox>
        //         <DiscountText>50% 마감 할인</DiscountText>
        //         </DiscountBox>

        //         <MainTextLight>
        //             따로 세척없이 껍질째먹는
        //         </MainTextLight>

        //         <MainTextBold>
        //             경북 청송 사과
        //         </MainTextBold>

        //         <DiscountPeriod>
        //             9/7부터 ~ 9/16까지
        //         </DiscountPeriod>

        //         <div style={{height: "227px"}}></div>
        //     </div>

        //     <div style={{zIndex: -10, position: "absolute", top:"73px", opacity: 1}}>
        //         <DiscountImageBox src={recommendItemStawberry}></DiscountImageBox>
        //     </div>
        // </div>
    );
}