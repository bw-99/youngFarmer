import { ItemCountText } from "../../../common/ItemList/atoms/item";
import { ItemUnitListComp } from "../../../common/ItemList/ItemList";
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../reducers";
import { ProductDataType } from "../../../reducers/ProductReducer";

export const ItemComponent = () => {
    
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
