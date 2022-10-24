import { BestBanner, Item, ItemCover, ItemImage, ItemLike, ItemOrderShoppingBagButton, ItemOrderShoppingBagButtonIcon, ItemOrderShoppingBagButtonText, ItemTextInfoPrice, ItemTextInfoPriceDiscount, ItemTextInfoSource, ItemTextInfoTitle, ItemUnitList, SaleBanner } from "./atoms/item";
import recommendItemStawberry from "../../assets/images/main_recommend_strawberry.png";
import shoppingBag from "../../assets/images/shopping-bag-20px@3x.png";
import  React, { useEffect, useRef, useState } from "react";
import recommendItemLikeIcon from "../../assets/images/btn-heart-on@3x.png";
import recommendItemLikeNotIcon from "../../assets/images/btn-heart-off@3x.png";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { likeAction, likeCancelAction } from "../../pages/LikePage/LikeAction";
import { RootState } from "../../reducers";
import { LikeData, LikeDataList } from "../../reducers/LikeReducer";
import { FirebaseAuth } from "../..";
import { ProductDataType } from "../../reducers/ProductReducer";


type itemListProps = {
    image_width:number,
    product_list: ProductDataType[]
}


type itemProps = {
    image_width:number,
    product: ProductDataType
}

export const ItemUnitListComp = ({image_width, product_list}:itemListProps) => {
    return (
        <ItemUnitList style={{
            display: "flex",
            flexWrap: "wrap"
            }}>  
            {
                product_list.map((product) => {
                    return <ItemUnitComp image_width={image_width} product={product}/>
                })  
            }
            {/* <ItemUnitComp image_width={image_width}/>
            <ItemUnitComp image_width={image_width}/>
            <ItemUnitComp image_width={image_width}/>
            <ItemUnitComp image_width={image_width}/>
            <ItemUnitComp image_width={image_width}/>
            <ItemUnitComp image_width={image_width}/>
            <ItemUnitComp image_width={image_width}/>
            <ItemUnitComp image_width={image_width}/>
            <ItemUnitComp image_width={image_width}/>
            <ItemUnitComp image_width={image_width}/>
            <ItemUnitComp image_width={image_width}/>
            <ItemUnitComp image_width={image_width}/>
            <ItemUnitComp image_width={image_width}/>
            <ItemUnitComp image_width={image_width}/>
            <ItemUnitComp image_width={image_width}/>
            <ItemUnitComp image_width={image_width}/>
            <ItemUnitComp image_width={image_width}/> */}
        </ItemUnitList>
    );
}

export const ItemUnitComp = ({image_width, product}:itemProps) => {
    return (
        <Item>
            <ItemUnitImgComp image_width={image_width} bsFlag={false} product={product}/>
            <ItemUnitShoppingBagComp />
        </Item>
    );
}


type itemUnitProps = {
    image_width:number,
    bsFlag: boolean,
    product: ProductDataType
}

export const ItemUnitImgComp = ({image_width ,bsFlag= true, product}:itemUnitProps) => {
    const [isLiked, setIsLiked]  = useState(false);
    const isBest = true&&bsFlag;
    const isSale = true&&bsFlag;
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const product_id = 1;
    const targetUrl = "/product/"+product_id;
    
    const selector: LikeData[] = useSelector((state:RootState) =>
        state.LikeReducer.likes
    );  

    useEffect(() => {
        if(selector){
            setIsLiked(false);
            selector.forEach((val) => {
                if(val.product_id === product_id){
                    setIsLiked(true);
                }
            })
        }

    }, [selector])
    
    return(
        <div >
            <div style={{position: "relative", width:  `${image_width}px`}}>
                <ItemImage  onClick={()=>{navigate(targetUrl)}} src={recommendItemStawberry} width={image_width+"px"} height={image_width+"px"}/>
                <ItemCover onClick={()=>{navigate(targetUrl)}} style={{width: `${image_width}px`, height: "60px"}}/>
                
                {isBest? 
                <div style={{ position: "absolute", top: "14px", left: "12px", zIndex: "20" }}> 
                    <ItemBestMark />
                </div>: null}

                {isSale? 
                <div style={{left: isBest? "62px" : "12px", position: "absolute", top: "14px", zIndex: "20" }}> 
                    <ItemSaleMark />
                </div> : null}
                

                <ItemLike 
                style={{padding: isLiked? "3px": "10px"}}
                width={isLiked? "44px":"30px"}
                height={isLiked? "44px":"30px"}
                onClick={() => {
                    if(isLiked){
                        dispatch(likeCancelAction(product_id));
                    }
                    else{
                        dispatch(likeAction(product_id));
                    }
                }} 
                src={isLiked? recommendItemLikeIcon: recommendItemLikeNotIcon}/>
            </div>

            <div onClick={()=>{navigate(targetUrl)}} >
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

export const ItemBestMark = () => {
    return(
        <BestBanner>BEST</BestBanner>
    );
}

export const ItemBestMarkRedBorder = () => {
    return(
        <BestBanner style={{border: "solid 1px #fb6159"}}>BEST</BestBanner>
    );
}



export const ItemSaleMark = () => {
    return(
        <SaleBanner>SALE</SaleBanner>
    );
}