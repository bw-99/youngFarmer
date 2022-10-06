import { Item, ItemCountText, ItemCover, ItemImage, ItemOrderShoppingBagButton, ItemOrderShoppingBagButtonIcon, ItemOrderShoppingBagButtonText, ItemTextInfoPrice, ItemTextInfoPriceDiscount, ItemTextInfoSource, ItemTextInfoTitle, ItemUnitList } from "../atoms/item";
import recommendItemStawberry from "../../../assets/images/main_recommend_strawberry.png";
import shoppingBag from "../../../assets/images/shopping-bag-20px@3x.png";

export const ItemComponent = () => {
    return(
        <div style={{padding: "20px 9.5px 20px 9.5px"}}>
            <ItemCountText> 134개 </ItemCountText>
            <ItemUnitList>
                {/* <ItemUnit /> */}
                {/* <div style={{width: "50px", height:"50px", backgroundColor: "red"}}></div>
                <div style={{width: "50px", height:"50px", backgroundColor: "red"}}></div>
                <div style={{width: "50px", height:"50px", backgroundColor: "red"}}></div>
                <div style={{width: "50px", height:"50px", backgroundColor: "red"}}></div>
                <div style={{width: "50px", height:"50px", backgroundColor: "red"}}></div>
                <div style={{width: "50px", height:"50px", backgroundColor: "red"}}></div> */}
                {/* <ItemUnit />
                <ItemUnit /> */}
                 <ItemUnit />
                 <ItemUnit />
                 <ItemUnit />
                 <ItemUnit />
                 <ItemUnit />
                 <ItemUnit />
                 <ItemUnit />
                 <ItemUnit />
                 <ItemUnit />
                 <ItemUnit />
                 <ItemUnit />
                 <ItemUnit />
                 <ItemUnit />
                 <ItemUnit />
                 <ItemUnit />
                 <ItemUnit />
                 <ItemUnit />
                 <ItemUnit />
                 <ItemUnit />
                 <ItemUnit />
                 <ItemUnit />
                 <ItemUnit />
                 <ItemUnit />
                 <ItemUnit />
                 <ItemUnit />
                 <ItemUnit />
                 <ItemUnit />
                 <ItemUnit />
                 <ItemUnit />
            </ItemUnitList>
        </div>
    );
}


const ItemUnit = () => {
    return (
        <Item>
            <div style={{position: "relative"}}>
                <ItemImage src={recommendItemStawberry}/>
                <ItemCover />
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