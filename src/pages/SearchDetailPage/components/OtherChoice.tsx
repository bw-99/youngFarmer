import { ChoiceItem, OtherChoiceTitle } from "../atoms/OtherChoice";
import recommendItemStawberry from "../../../assets/images/main_recommend_strawberry.png";
import { ItemUnitImgComp, ItemUnitListComp } from "../../../common/ItemList/ItemList";


export const OtherChoiceComp = () => {
    return(
        <div style={{padding: "30px 16px"}}>
            <OtherChoiceTitle> 다른 사람들이 많이 구매한 상품 </OtherChoiceTitle>

            {/* <ChoiceItem src={recommendItemStawberry}/> */}

            {ItemUnitImgComp(124)}
        </div>
    );
}