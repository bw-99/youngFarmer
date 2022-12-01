import React,{ useEffect, useState } from "react";
import { IndexSelectedText, IndexNotSelectedText, IndexSelectedLine, IndexNotSelectedLine, ProductCategoryTitleBox, LineDraw, ProductPopularImg, ProdcutPopularBox, ProductTitle, ProductPrice, ProductSale, ProductFilter, ProdcutRecentBox, ProductRecentImg, ProductPopularImgWrap} from "../atoms/itemDetail";

import downbtn from "../../../assets/images/btn-dropdown-20-px@3x.webp"
import itemLikeOffIcon from "../../../assets/images/like-off@3x.webp";
import itemLikeOnIcon from "../../../assets/images/btn-heart-on@3x.webp";
import {ItemLike,ItemLikeBg} from "../../ProductPage/atoms/itemInfo";
import { useSelector, Provider, connect, useDispatch} from "react-redux";
import { ProductDataReviewType, ProductDataType } from "../../../reducers/ProductReducer";
import { likeCancelAction, likeAction } from "../../LikePage/LikeAction";
import { StoreProductDataType } from "../StoreType";
import { ItemUnitImgComp } from "../../../common/ItemList/ItemList";


type StoreParam = {
    storeData: StoreProductDataType
}


export const ItemDetailComp = ({storeData}:StoreParam) => {
    const [index, setIndex] = useState(0);
    const [recentP, setRecentP] = useState(true);
    const [isLiked, setLiked] = useState(true);

    const filterButton = ["all","is_best","is_sale","is_nonpesticide", "is_ontime", "is_vegitable"]

    const [filteredProduct, setFilteredProduct] = useState<ProductDataType[] | null>(null);
    
    const dispatch = useDispatch();
    const product_id = 1;


    useEffect(() => {
        if(index === 0) {
            setFilteredProduct([...storeData.product_list]);
        }
        else{
            let prList = [...storeData.product_list];
            switch (index) {
                case 1:
                    prList = prList.filter((pr) => pr.is_best);
                    break;
                case 2:
                    prList = prList.filter((pr) => pr.is_sale);
                    break;
                case 3:
                    prList = prList.filter((pr) => pr.is_nonpesticide);
                    break;
                case 4:
                    prList = prList.filter((pr) => pr.is_ontime);
                    break;
                case 5:
                    prList = prList.filter((pr) => pr.is_vegitable);
                    break;
            
                default:
                    break;
            }
            setFilteredProduct(prList);
        }
    }, [index])

    const clickHandler = (i: number) => {
        return (event: React.MouseEvent) => {
            setIndex(i);
            event.preventDefault();
        }
    }

    const ItemLikeFunc = () => {
        return isLiked? 
        <ItemLike style={{width: "44px", height: "44px"}} src={itemLikeOnIcon} onClick={()=>{dispatch(likeCancelAction(product_id));}}/> 
        :
        <ItemLike style={{width: "30px", height: "30px"}} src={itemLikeOffIcon} onClick={()=>{dispatch(likeAction(product_id));}}/>
    }


    return(
        <div style={{ marginLeft: "16px", padding: "0 0 20px 0"}}>
            <div style={{ display: "flex", marginBottom: "22px" }}>
                <div onClick={clickHandler(0)} style={{ flex: 1, justifyContent:"center" }}>
                    {
                        index == 0? 
                        <>
                            <IndexSelectedText style={{padding:"16px 0"}}> 전체 상품 </IndexSelectedText>
                            <IndexSelectedLine />
                        </>
                        :
                        <>
                            <IndexNotSelectedText style={{padding:"16px 0"}}> 전체 상품 </IndexNotSelectedText>
                            <IndexNotSelectedLine />
                        </>
                    }

                </div>
                <div onClick={clickHandler(1)} style={{ flex: 1 }}>
                    {
                        index == 1 ?
                            <>
                                <IndexSelectedText style={{ padding: "16px 0" }}> 베스트 </IndexSelectedText>
                                <IndexSelectedLine />
                            </>
                            :
                            <>
                                <IndexNotSelectedText style={{ padding: "16px 0" }}> 베스트 </IndexNotSelectedText>
                                <IndexNotSelectedLine />
                            </>
                    }

                </div>

                <div onClick={clickHandler(2)} style={{ flex: 1 }}>
                    {
                        index == 2 ?
                            <>
                                <IndexSelectedText style={{ padding: "16px 0" }}> 할인 </IndexSelectedText>
                                <IndexSelectedLine />
                            </>
                            :
                            <>
                                <IndexNotSelectedText style={{ padding: "16px 0" }}> 할인 </IndexNotSelectedText>
                                <IndexNotSelectedLine />
                            </>
                    }

                </div>

                <div onClick={clickHandler(3)} style={{ flex: 1 }}>
                    {
                        index == 3 ?
                            <>
                                <IndexSelectedText style={{ padding: "16px 0" }}> 무농약 </IndexSelectedText>
                                <IndexSelectedLine />
                            </>
                            :
                            <>
                                <IndexNotSelectedText style={{ padding: "16px 0" }}> 무농약 </IndexNotSelectedText>
                                <IndexNotSelectedLine />
                            </>
                    }

                </div>
                <div onClick={clickHandler(4)} style={{ flex: 1 }}>
                    {
                        index == 4 ?
                            <>
                                <IndexSelectedText style={{ padding: "16px 0" }}> 제철 </IndexSelectedText>
                                <IndexSelectedLine />
                            </>
                            :
                            <>
                                <IndexNotSelectedText style={{ padding: "16px 0" }}> 제철 </IndexNotSelectedText>
                                <IndexNotSelectedLine />
                            </>
                    }

                </div>
                <div onClick={clickHandler(5)} style={{ flex: 1 }}>
                    {
                        index == 5 ?
                            <>
                                <IndexSelectedText style={{ padding: "16px 0" }}> 채소 </IndexSelectedText>
                                <IndexSelectedLine />
                            </>
                            :
                            <>
                                <IndexNotSelectedText style={{ padding: "16px 0" }}> 채소 </IndexNotSelectedText>
                                <IndexNotSelectedLine />
                            </>
                    }

                </div>
            </div>


            <div >
                <div>
                    <ProductCategoryTitleBox>
                        이번 주 인기 상품
                    </ProductCategoryTitleBox>

                    <div style={{display:"flex", marginLeft:"-9.5px", overflow:'scroll'}}>
                        {
                            storeData.product_list.map((pr) => {
                                return (
                                    <div style={{margin: "0 6.5px"}}>
                                        <ItemUnitImgComp image_width={124} bsFlag={false} product={pr} />
                                    </div>
                                )
                            })
                        }
                    </div>                   
                </div>

                <LineDraw></LineDraw>
                
            </div>

            <div>

                <ProductCategoryTitleBox>

                    <div style={{display:"flex", alignItems:"center"}}>
                        최신순   
                        <img src={downbtn} style={{width:"20px", height:"20px", marginLeft:"5px"}} 
                        // onClick={()=>{setRecentP(!recentP)}} 
                        />
                    </div>
                    {/* <div>
                        <ProductFilter> <img src={filter} style={{width:"16px", height:"16px", marginRight:"2px"}} /> 필터  </ProductFilter>
                    </div> */}

                    
                </ProductCategoryTitleBox>
                {
                     <div style={{display:"flex", marginLeft:"-9.5px", flexWrap:"wrap"}}>
                        {
                            filteredProduct! && filteredProduct!.length 
                            ?
                            <>
                            {
                                filteredProduct!.map((pr) => {
                                    return (
                                        <div style={{margin: "0 6.5px"}}>
                                            <ItemUnitImgComp image_width={165} bsFlag={true} product={pr} />
                                        </div>
                                    )
                                })
                            }
                            </>
                            :
                            <div style={{height: "255px"}}>
                            </div>
                        }
                     
                     
                 </div>       
                }
            </div>
            

        </div>
        
    );
}
