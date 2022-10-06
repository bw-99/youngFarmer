import { LiveItemCover, LiveItemCoverBottom, LiveItemCoverBottomCost, LiveItemCoverBottomDiscount, LiveItemCoverBottomImage, LiveItemCoverBottomTitle, LiveItemCoverTextDate, LiveItemCoverTextMain, LiveItemImage, LiveTitle, LiveTitleArrow, LiveTitleText } from "../atoms/live";
import liveRightArrow from "../../../assets/images/btn-arrow-r-20-px@3x.png";
import liveFruitMarket from "../../../assets/images/main_live_fruitMarket.png";

export const LiveComponent = () => {
    return (
       <div style={{position: "relative", top:"0px", padding: "43px 16px 24px 16px"}}>
            
            <LiveTitleComponent />
            {/* <div style={{position: "absolute", opacity: 1}}> */}
            <div>
                {LiveItemComponent(92)}
                {LiveItemComponent(92 + 419.7*1)}
                {LiveItemComponent(92 + 419.7*2)}
                {LiveItemComponent(92 + 419.7*3)}
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

const LiveItemComponent = (top:number) => {
    return (
        // <div style={{position: "relative", opacity: 1, zIndex : 100}}>
        <div style={{marginBottom: "16px"}}>
            <LiveItemImage src={liveFruitMarket} />    
            {LiveItemCoverComponent(top)}
        </div>
    );
}
const LiveItemCoverComponent = (top:number) => {
    return (
        <LiveItemCover style={{top: `${top}px`}}>
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