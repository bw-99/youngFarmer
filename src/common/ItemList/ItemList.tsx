import { Item, ItemCover, ItemImage, ItemLike, ItemOrderShoppingBagButton, ItemOrderShoppingBagButtonIcon, ItemOrderShoppingBagButtonText, ItemTextInfoPrice, ItemTextInfoPriceDiscount, ItemTextInfoSource, ItemTextInfoTitle, ItemUnitList } from "./atoms/item";
import recommendItemStawberry from "../../assets/images/main_recommend_strawberry.png";
import shoppingBag from "../../assets/images/shopping-bag-20px@3x.png";
import { useState } from "react";
import recommendItemLikeIcon from "../../assets/images/btn-heart-on@3x.png";
import recommendItemLikeNotIcon from "../../assets/images/btn-heart-off@3x.png";


export const ItemUnitListComp = () => {
    return (
        <ItemUnitList>
                 <ItemUnitComp />
                 <ItemUnitComp />
                 <ItemUnitComp />
                 <ItemUnitComp />
                 <ItemUnitComp />
                 <ItemUnitComp />
                 <ItemUnitComp />
                 <ItemUnitComp />
                 <ItemUnitComp />
                 <ItemUnitComp />
                 <ItemUnitComp />
                 <ItemUnitComp />
                 <ItemUnitComp />
                 <ItemUnitComp />
                 <ItemUnitComp />
                 <ItemUnitComp />
                 <ItemUnitComp />
                 <ItemUnitComp />
                 <ItemUnitComp />
                 <ItemUnitComp />
                 <ItemUnitComp />
                 <ItemUnitComp />
                 <ItemUnitComp />
                 <ItemUnitComp />
                 <ItemUnitComp />
                 <ItemUnitComp />
                 <ItemUnitComp />
                 <ItemUnitComp />
                 <ItemUnitComp />
            </ItemUnitList>
    );
}

const ItemUnitComp = () => {
    const [isLiked, setIsLiked]  = useState(false);
    return (
        <Item>
            <div style={{position: "relative"}}>
                <ItemImage src={recommendItemStawberry}/>
                <ItemCover />
                <ItemLike 
                style={{padding: isLiked? "3px": "10px"}}
                width={isLiked? "44px":"30px"}
                height={isLiked? "44px":"30px"}
                onClick={() => {setIsLiked(!isLiked)}} 
                src={isLiked? recommendItemLikeIcon: recommendItemLikeNotIcon}/>
            </div>
            <div >
                <ItemTextInfoSource>산천</ItemTextInfoSource>
                <ItemTextInfoTitle> 친환경 복숭아 5kg /10kg </ItemTextInfoTitle>
                <div style={{display: "flex", alignItems: "flex-start", marginTop: "8px"}}>
                    <div style={{display:"flex"}}>
                        <ItemTextInfoPrice> 29,000원 </ItemTextInfoPrice>
                        <ItemTextInfoPriceDiscount> 20% </ItemTextInfoPriceDiscount>
                    </div>
                    
                </div>
            </div>
            <ItemOrderShoppingBagButton >
                <ItemOrderShoppingBagButtonIcon src={shoppingBag}/>
                <ItemOrderShoppingBagButtonText> 담기 </ItemOrderShoppingBagButtonText>
            </ItemOrderShoppingBagButton>
        </Item>
    );
}