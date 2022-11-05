import { Item, ItemCountText, ItemCover, ItemImage, ItemOrderShoppingBagButton, ItemOrderShoppingBagButtonIcon, ItemOrderShoppingBagButtonText, ItemTextInfoPrice, ItemTextInfoPriceDiscount, ItemTextInfoSource, ItemTextInfoTitle, ItemUnitList } from "../../../common/ItemList/atoms/item";
import { ItemUnitListComp } from "../../../common/ItemList/ItemList";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../reducers";
import { LikeData } from "../../../reducers/LikeReducer";
import { ProductDataType } from "../../../reducers/ProductReducer";
import { searchLikeTryAction } from "../../SearchPage/SearchDertailAction";

export const ItemComponent = () => {
    const dispatch = useDispatch();
    const [prList, setPrList] = useState([]);

    const likeSelector: ProductDataType[] = useSelector((state:RootState) =>
        state.SearchDetailReducer.likeProducts
    );
    
    return(
        <div style={{padding: "20px 9.5px 20px 9.5px"}}>
            <ItemCountText> {likeSelector.length}개 </ItemCountText>
            <ItemUnitListComp image_width={165} product_list={likeSelector}/>
        </div>
    );
}
