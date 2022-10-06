import recommendRightArrow from "../../../assets/images/btn-arrow-r-20-px@3x.png";
import recommendItemStawberry from "../../../assets/images/main_recommend_strawberry.png";
import { RecommnedTitle, RecommnedTitleText, RecommnedTitleArrow, RecommendList, RecommendItem, RecommendItemBox, RecommendItemImage, RecommendItemCover, RecommendItemTextInfoSource, RecommendItemTextInfoTitle, RecommendItemTextInfoPrice, RecommendItemTextInfoPriceDiscount } from "../atoms/recommend";

export const RecommendComponent = () => {
    return (
       <div style={{padding: "38px 0 0 0"}}>
            <RecommnedTitle>
                <RecommnedTitleText>오늘의 추천 상품</RecommnedTitleText>
                <RecommnedTitleArrow src={recommendRightArrow}/>
            </RecommnedTitle>
            
            <RecommendList>
                <RecommentUnit />
                <RecommentUnit />
                <RecommentUnit />
            </RecommendList>
            

            
            
       </div>
    );
}

const RecommentUnit = () => {
    return (
        <RecommendItem>
            <RecommendItemBox>
                <RecommendItemImage src={recommendItemStawberry}/>
                <RecommendItemCover />
            </RecommendItemBox>
            <div>
                <RecommendItemTextInfoSource>산천</RecommendItemTextInfoSource>
                <RecommendItemTextInfoTitle> 친환경 복숭아 5kg/10kg </RecommendItemTextInfoTitle>
                <div style={{display: "flex", alignItems: "flex-start", marginTop: "8px"}}>
                    <RecommendItemTextInfoPrice> 29,000원 </RecommendItemTextInfoPrice>
                    <RecommendItemTextInfoPriceDiscount> 20% </RecommendItemTextInfoPriceDiscount>
                </div>
            </div>
        </RecommendItem>
    );
}