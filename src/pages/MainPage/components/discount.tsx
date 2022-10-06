import { DiscountBox, DiscountText, MainTextLight, MainTextBold, DiscountPeriod, DiscountImageBox } from "../atoms/atoms"

import recommendItemStawberry from "../../../assets/images/main_recommend_strawberry.png";

export const DiscountComponent = () => {
    return (
        <div>
            <div style={{ padding: "0px 16px 0px 16px"}}>
                <DiscountBox>
                <DiscountText>50% 마감 할인</DiscountText>
                </DiscountBox>

                <MainTextLight>
                    따로 세척없이 껍질째먹는
                </MainTextLight>

                <MainTextBold>
                    경북 청송 사과
                </MainTextBold>

                <DiscountPeriod>
                    9/7부터 ~ 9/16까지
                </DiscountPeriod>

                <div style={{height: "201px"}}></div>
            </div>

            <div style={{zIndex: -10, position: "absolute", top:"129px", opacity: 1}}>
                <DiscountImageBox src={recommendItemStawberry}></DiscountImageBox>
            </div>
        </div>
    );
}