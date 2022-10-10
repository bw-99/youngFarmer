import { Item, ItemCover, ItemImage, ItemLike, ItemOrderShoppingBagButton, ItemOrderShoppingBagButtonIcon, ItemOrderShoppingBagButtonText, ItemTextInfoPrice, ItemTextInfoPriceDiscount, ItemTextInfoSource, ItemTextInfoTitle, ItemUnitList } from "./atoms/item";
import recommendItemStawberry from "../../assets/images/main_recommend_strawberry.png";
import shoppingBag from "../../assets/images/shopping-bag-20px@3x.png";
import { useRef, useState } from "react";
import recommendItemLikeIcon from "../../assets/images/btn-heart-on@3x.png";
import recommendItemLikeNotIcon from "../../assets/images/btn-heart-off@3x.png";


export const ItemUnitListComp = (image_width:number) => {
    return (
        <ItemUnitList style={{
            overflow: "auto"
            }}>  
            {ItemUnitComp(image_width)}
            {ItemUnitComp(image_width)}
            {ItemUnitComp(image_width)}
            {ItemUnitComp(image_width)}
            {ItemUnitComp(image_width)}
            {ItemUnitComp(image_width)}
            {ItemUnitComp(image_width)}
            {ItemUnitComp(image_width)}
            {ItemUnitComp(image_width)}
            {ItemUnitComp(image_width)}
            {ItemUnitComp(image_width)}
            {ItemUnitComp(image_width)}
            {ItemUnitComp(image_width)}
            {ItemUnitComp(image_width)}
            {ItemUnitComp(image_width)}
            {ItemUnitComp(image_width)}
        </ItemUnitList>
    );
}

export const ItemUnitComp = (image_width:number) => {
    return (
        <Item>
            {ItemUnitImgComp(image_width)}
            <ItemUnitShoppingBagComp />
        </Item>
    );
}

export const ItemUnitImgComp = (image_width:number) => {
    const [isLiked, setIsLiked]  = useState(false);
    return(
        <div>
            <div style={{position: "relative", width:  `${image_width}px`}}>
                <ItemImage src={recommendItemStawberry} width={image_width+"px"} height={image_width+"px"}/>
                <ItemCover style={{width: `${image_width}px`, height: "60px"}}/>
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
        </div>
        
    );
}

export const ItemUnitShoppingBagComp = () => {
    return(
        <ItemOrderShoppingBagButton >
            <ItemOrderShoppingBagButtonIcon src={shoppingBag}/>
            <ItemOrderShoppingBagButtonText> 담기 </ItemOrderShoppingBagButtonText>
        </ItemOrderShoppingBagButton>
    );
}