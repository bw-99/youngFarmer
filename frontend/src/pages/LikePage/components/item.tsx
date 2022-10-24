import { Item, ItemCountText, ItemCover, ItemImage, ItemOrderShoppingBagButton, ItemOrderShoppingBagButtonIcon, ItemOrderShoppingBagButtonText, ItemTextInfoPrice, ItemTextInfoPriceDiscount, ItemTextInfoSource, ItemTextInfoTitle, ItemUnitList } from "../../../common/ItemList/atoms/item";
import { ItemUnitListComp } from "../../../common/ItemList/ItemList";
import React from "react";

export const ItemComponent = () => {
    return(
        <div style={{padding: "20px 9.5px 20px 9.5px"}}>
            <ItemCountText> 134개 </ItemCountText>
            {ItemUnitListComp(165)}
        </div>
    );
}
