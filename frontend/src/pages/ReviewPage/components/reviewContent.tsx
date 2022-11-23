import { ReveiwContent, ReviewSepLine } from "../atoms/reviewContent"

type ReviewContentParam = {
    reviewText: any,
    setReviewText: any,
}

export const ReviewContentComp = ({reviewText, setReviewText}:ReviewContentParam) => {
    return (
        <div style={{marginTop: "38px"}}>
            <ReveiwContent 
            rows={10}
            placeholder="구매하신 상품의 리뷰를 20자 이상 남겨주시면 다른 구매자들에게도 도움이 됩니다."
            value={reviewText} onChange={(e) => {
                setReviewText(e.target.value);
            }}/>
            <ReviewSepLine/>
        </div>
    )
}