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
    const selector: LikeData[] = useSelector((state:RootState) =>
        state.LikeReducer.likes
    );

    const likeProductsSelector : ProductDataType[] =useSelector((state:RootState) =>
        state.SearchDetailReducer.likeProducts
    );
    
    useEffect(() => {
        // selector.map((val) => {
        //      console.log(val.product_id);
        //   })
        let pidList: number[] = [];
        selector.forEach((value) => {
            pidList.push(value.product_id);
        })
        
        dispatch(searchLikeTryAction(pidList));
    
    }, [selector])

    // useEffect(() => {
    //     likeProductsSelector.filter(
    //         (pr) => {
    //             let pidList = selector.map((like) => {
    //                 return like.product_id
    //             });
    //             return pidList.includes(pr.pr);
    //         }
    //     )
    //     likeProductsSelector.forEach((val) => {
    //         if(val.product_id === sele)
    //     })
    // },[likeProductsSelector])
    

    return(
        <div style={{padding: "20px 9.5px 20px 9.5px"}}>
            <ItemCountText> {likeProductsSelector.length}개 </ItemCountText>
            <ItemUnitListComp image_width={165} product_list={likeProductsSelector}/>
        </div>
    );
}
