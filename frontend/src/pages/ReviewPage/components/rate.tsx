import { RateBox, RateLabel, RateStarOff,RateStarOn } from "../atoms/rate"
import starOn from "../../../assets/images/star-copy-3@3x.webp";
import starOff from "../../../assets/images/star-copy-4@3x.webp";

type RateParam = {
    reviewRate: any,
    setReviewRate: any
}
type RateStarParam = {
    index: number,
    rate: number,
}



export const RateComp = ({reviewRate, setReviewRate}:RateParam) => {
    return(
        <RateBox style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            margin: "20px 16px 0 16px"}}>
            <RateLabel> 평점을 선택해주세요. </RateLabel>
            <RateSelectList reviewRate={reviewRate} setReviewRate={setReviewRate} />
        </RateBox>
    )
}

const RateSelectList = ({reviewRate, setReviewRate}:RateParam) => {
    return (
        <div style={{ 
            marginTop: "12px",
            display: "flex"}}>
            <div onClick={()=>{
                setReviewRate(0+1);
            }}>
                <RateSelectStar index={0} rate={reviewRate} />
            </div>

            <div onClick={()=>{
                setReviewRate(1+1);
            }}>
                <RateSelectStar index={1} rate={reviewRate} />
            </div>

            <div onClick={()=>{
                setReviewRate(2+1);
            }}>
                <RateSelectStar index={2} rate={reviewRate} />
            </div>

            <div onClick={()=>{
                setReviewRate(3+1);
            }}>
                <RateSelectStar index={3} rate={reviewRate} />
            </div>

            <div onClick={()=>{
                setReviewRate(4+1);
            }}>
                <RateSelectStar index={4} rate={reviewRate} />
            </div>
        </div>
    )
}

const RateSelectStar = ({index, rate}:RateStarParam) => {
    if(index < rate) {
        return <RateStarOn src={starOn}/>
    }
    return <RateStarOff src={starOff}/>
}