import { LiveItemCover, LiveItemCoverBottom, LiveItemCoverBottomCost, LiveItemCoverBottomDiscount, LiveItemCoverBottomImage, LiveItemCoverBottomTitle, LiveItemCoverTextDate, LiveItemCoverTextMain, LiveItemImage, LiveTitle, LiveTitleArrow, LiveTitleText } from "../atoms/live";
import liveRightArrow from "../../../assets/images/btn-arrow-r-20-px@3x.png";
import liveFruitMarket from "../../../assets/images/main_live_fruitMarket.png";

export const LiveComponent = () => {
    return (
       <div style={{position: "relative", top:"0px", padding: "43px 8px 24px 8px"}}>
            
            <LiveTitleComponent />
            {/* <div style={{position: "absolute", opacity: 1}}> */}
            <div style={{display:"flex", flexWrap:"wrap", flexDirection:"row"}}>
                <LiveItemComponent />
                <LiveItemComponent />
                <LiveItemComponent />
                <LiveItemComponent />
                <LiveItemComponent />
                <LiveItemComponent />
                <LiveItemComponent />
                <LiveItemComponent />
                <LiveItemComponent />
                <LiveItemComponent />
            </div>
       </div>
    );
}

const LiveTitleComponent = () => {
    return (
        <LiveTitle>
            <LiveTitleText> 청년농부 라이브 </LiveTitleText>
            <LiveTitleArrow src={liveRightArrow} />
        </LiveTitle>
    );
}

const LiveItemComponent = () => {
    return (
        <div style={{position:"relative", margin: "15px 8px 15px 8px"}}>
            <LiveItemImage src={liveFruitMarket} />    
            <LiveItemCoverComponent/>
        </div>
    );
}


const LiveItemCoverComponent = () => {
    return (
        <LiveItemCover>
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