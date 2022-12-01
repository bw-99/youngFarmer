import recommendRightArrow from "../../../assets/images/btn-arrow-r-20-px@3x.webp";
import recommendItemLikeIcon from "../../../assets/images/btn-heart-on@3x.webp";
import recommendItemLikeNotIcon from "../../../assets/images/btn-heart-off@3x.webp";
import React from "react";
import { RecommnedTitle, RecommnedTitleText, RecommnedTitleArrow, RecommendItemLike } from "../atoms/recommend";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ItemUnitImgComp} from "../../../common/ItemList/ItemList";
import { ProductDataType } from "../../../reducers/ProductReducer";
import { useSelector } from "react-redux";
import { RootState } from "../../../reducers";

export const RecommendComponent = () => {
    const navigate = useNavigate();
    const recommendData:ProductDataType[] = useSelector((state : RootState) => state.SearchDetailReducer.recommendResult);

    
    return (
       <div style={{padding: "38px 0 0 0 "}}>
            <RecommnedTitle onClick={()=>{navigate("/main/todayRecommend");}}>
                <RecommnedTitleText>오늘의 추천 상품</RecommnedTitleText>
                <RecommnedTitleArrow src={recommendRightArrow}/>
            </RecommnedTitle>

            <div style={{padding: "15px 9.5px 42px 9.5px",display:"flex", flexDirection: "row",flexWrap:"nowrap", overflow: "auto"}}>
                {
                    recommendData.map((value) => {
                        return (
                            <div style={{padding:"0 6.5px"}}>
                                <ItemUnitImgComp image_width={154} bsFlag={false}  product={value}/>
                            </div>
                        )
                    })
                }

            </div>
            
       </div>
    );
}

// const RecommentUnit = () => {
//     return (
//         <RecommendItem>
//             <RecommendItemBox>
//                 <RecommendItemImage src={recommendItemStawberry}/>
//                 <RecommendItemCover />
//                 <LikeIconComp />
//             </RecommendItemBox>
//             <div>
//                 <RecommendItemTextInfoSource>산천</RecommendItemTextInfoSource>
//                 <RecommendItemTextInfoTitle> 친환경 복숭아 5kg/10kg </RecommendItemTextInfoTitle>
//                 <div style={{display: "flex", alignItems: "flex-start", marginTop: "8px"}}>
//                     <RecommendItemTextInfoPrice> 29,000원 </RecommendItemTextInfoPrice>
//                     <RecommendItemTextInfoPriceDiscount> 20% </RecommendItemTextInfoPriceDiscount>
//                 </div>
//             </div>
//         </RecommendItem>
//     );
// }

export const LikeIconComp = () => {
    const [isLiked, setIsLiked]  = useState(false);
    // position: absolute;
    // top: 0px;
    // right: 0px;
    // z-index: 20;
    return(
        <RecommendItemLike 
                style={{padding: isLiked? "3px": "10px"}}
                width={isLiked? "44px":"30px"}
                height={isLiked? "44px":"30px"}
                onClick={() => {setIsLiked(!isLiked)}} 
                src={isLiked? recommendItemLikeIcon: recommendItemLikeNotIcon}/>
    );
}