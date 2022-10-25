import { Item, ItemCountText, ItemCover, ItemImage, ItemOrderShoppingBagButton, ItemOrderShoppingBagButtonIcon, ItemOrderShoppingBagButtonText, ItemTextInfoPrice, ItemTextInfoPriceDiscount, ItemTextInfoSource, ItemTextInfoTitle, ItemUnitList } from "../../../common/ItemList/atoms/item";
import { ItemUnitListComp } from "../../../common/ItemList/ItemList";
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../reducers";
import { LikeData } from "../../../reducers/LikeReducer";
import { ProductDataType } from "../../../reducers/ProductReducer";

export const ItemComponent = () => {
    const selector: LikeData[] = useSelector((state:RootState) =>
        state.LikeReducer.likes
    );

    return(
        <div style={{padding: "20px 9.5px 20px 9.5px"}}>
            <ItemCountText> {selector.length}개 </ItemCountText>
            <ItemUnitListComp image_width={165} product_list={selector.map(val => {return {
                product_id: val.product_id
            } as ProductDataType})}/>
        </div>
    );
}
