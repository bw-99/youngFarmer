import recommendItemStawberry from "../../../assets/images/main_recommend_strawberry.webp";
import React from "react";
import { useSelector } from "react-redux";
import { ProductDataType } from "../../../reducers/ProductReducer";
import { ItemUnitImgComp } from "../../../common/ItemList/ItemList";
import { RootState } from "../../../reducers";
import { OtherChoiceTitle, ChoiceSepLine } from "../atoms/OtherChoice";

export const OtherChoiceComp = () => {

    const searchOtherSelector: ProductDataType[] = useSelector((state:RootState) =>
        state.SearchDetailReducer.recommendResult
    );


    return(
        <div style={{paddingBottom: "30px"}}>
            <OtherChoiceTitle> 다른 사람들이 많이 구매한 상품 </OtherChoiceTitle>

            <div style={{padding: "16px 9.5px 30px 9.5px",display:"flex", flexDirection: "row",flexWrap:"nowrap", overflow: "auto"}}>
                {
                    searchOtherSelector.map((val) => {
                        return (
                            <div style={{padding:"0 6.5px"}}>
                                <ItemUnitImgComp image_width={124} bsFlag= {false} product={val}/>
                            </div>
                        )
                    })
                }
                {/* <ItemUnitDesign />
                <ItemUnitDesign />
                <ItemUnitDesign />
                <ItemUnitDesign />
                <ItemUnitDesign /> */}
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