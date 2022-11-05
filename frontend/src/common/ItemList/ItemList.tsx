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
import { searchLikeTryAction } from "../../pages/SearchPage/SearchDertailAction";
import { cartAddAction } from "../../pages/CartPage/CartAction";


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
            {/* <ItemUnitShoppingBagComp product={product}/> */}
        </Item>
    );
}


type itemUnitProps = {
    image_width:number,
    bsFlag: boolean,
    product: ProductDataType
}

export const ItemUnitImgComp = ({image_width ,bsFlag= true, product}:itemUnitProps) => {
    // * 좋아요 최신화 안되는 문제 해결
    const selector: LikeData[] = useSelector((state:RootState) =>
        state.LikeReducer.likes
    );  

    const [isLiked, setIsLiked]  = useState(false);
    const isBest = true&&bsFlag;
    const isSale = true&&bsFlag;
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const targetUrl = "/product/"+product.product_id;
    

    useEffect(() => {
        if(selector){
            let likeVal = false;
            console.log("트리거");
            for (const val of selector) {
                console.log(val.product_id, product.product_id);
                if(val.product_id === product.product_id){
                    console.log(product.product_id + " set like true");
                    likeVal = true;
                    console.log(isLiked);
                }
            }
            setIsLiked(likeVal);
        }

    }, [selector,product])


    
    
    return(
        <div >
            <div style={{position: "relative", width:  `${image_width}px`}}>
                <ItemImage  onClick={()=>{navigate(targetUrl)}} src={product.photo? product.photo :recommendItemStawberry} width={image_width+"px"} height={image_width+"px"}/>
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
                    setIsLiked(!isLiked);

                    if(isLiked){
                        dispatch(likeCancelAction(product.product_id));
                    }
                    else{
                        dispatch(likeAction(product.product_id));
                    }
                    // let pidList: number[] = [];
                    // selector.forEach((value) => {
                    //     pidList.push(value.product_id);
                    // })
                    
                    // dispatch(searchLikeTryAction(pidList));
                }} 
                src={isLiked? recommendItemLikeIcon: recommendItemLikeNotIcon}/>
            </div>

            <div onClick={()=>{navigate(targetUrl)}} >
                <ItemTextInfoSource>산천</ItemTextInfoSource>
                <ItemTextInfoTitle> {product.title?product.title: "친환경 복숭아 5kg /10kg"} </ItemTextInfoTitle>
                <div style={{display: "flex", alignItems: "flex-start", marginTop: "8px"}}>
                    <div style={{display:"flex"}}>
                        <ItemTextInfoPrice> {product.price ? product.price + "원" : "29,000원"} </ItemTextInfoPrice>
                        <ItemTextInfoPriceDiscount> {product.discount? product.discount+ "%": "20%"} </ItemTextInfoPriceDiscount>
                    </div>
                    
                </div>
            </div>
        </div>
        
    );
}


type shoppingBagProps = {
    product: ProductDataType
}

export const ItemUnitShoppingBagComp = ({product}:shoppingBagProps) => {
    const dispatch = useDispatch();

    // const handleAddCart = () => {
    //     dispatch(
    //         cartAddAction(product.product_id)
    //     );
    // }
    
    return(
        <ItemOrderShoppingBagButton onClick={()=> {
            // handleAddCart();
            }}>
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