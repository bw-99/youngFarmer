import { ChoiceItem, ChoiceSepLine, OtherChoiceTitle } from "../atoms/OtherChoice";
import recommendItemStawberry from "../../../assets/images/main_recommend_strawberry.png";
import { ItemUnitImgComp, ItemUnitListComp } from "../../../common/ItemList/ItemList";
import React from "react";
import { ProductDataType } from "../../../reducers/ProductReducer";

export const OtherChoiceComp = () => {
    return(
        <div style={{padding: "30px 0px"}}>
            <OtherChoiceTitle> 다른 사람들이 많이 구매한 상품 </OtherChoiceTitle>

            <div style={{padding: "16px 9.5px 30px 9.5px",display:"flex", flexDirection: "row",flexWrap:"nowrap", overflow: "auto"}}>
                <ItemUnitDesign />
                <ItemUnitDesign />
                <ItemUnitDesign />
                <ItemUnitDesign />
                <ItemUnitDesign />
            </div>

            <ChoiceSepLine />
        </div>
    );
}

const ItemUnitDesign = () => {
    return (
        <div style={{padding:"0 6.5px"}}>
            <ItemUnitImgComp image_width={124} bsFlag= {false} product={{
                product_id: 1
            } as ProductDataType}/>
        </div>
    );
}