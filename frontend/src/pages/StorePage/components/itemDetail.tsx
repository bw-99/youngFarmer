import React,{ useState } from "react";
import { IndexSelectedText, IndexNotSelectedText, IndexSelectedLine, IndexNotSelectedLine, ProductCategoryTitleBox, LineDraw, ProductPopularImg, ProdcutPopularBox, ProductTitle, ProductPrice, ProductSale, ProductFilter, ProdcutRecentBox, ProductRecentImg} from "../atoms/itemDetail";

import productExOne from "../../../assets/images/product-ex1@3x.png";
import productExTwo from "../../../assets/images/product-ex2@3x.png";
import productExThree from "../../../assets/images/product-ex3@3x.png";
import downbtn from "../../../assets/images/btn-dropdown-20-px@3x.png"
import filter from "../../../assets/images/btn@3x.png";
import { flexbox } from "@mui/system";
import { ProductOption } from "../../OrderListPage/atoms/orderDetailProduct";
import itemLikeOffIcon from "../../../assets/images/like-off@3x.png";
import itemLikeOnIcon from "../../../assets/images/btn-heart-on@3x.png";
import {ItemLike,ItemLikeBg} from "../../ProductPage/atoms/itemInfo";
import { useNavigate } from "react-router-dom";
import { useSelector, Provider, connect, useDispatch} from "react-redux";
import { RootState } from "../../../reducers";
import { ProductDataReviewType, ProductDataType } from "../../../reducers/ProductReducer";
import { LikeData } from "../../../reducers/LikeReducer";
import { likeCancelAction, likeAction } from "../../LikePage/LikeAction";

export const ItemDetailComp = () => {
    const [index, setIndex] = useState(0);
    const [recentP, setRecentP] = useState(true);
    const [isLiked, setLiked] = useState(true);

    const dispatch = useDispatch();
    const product_id = 1;

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
                <div onClick={clickHandler(0)} style={{ flex: 1 }}>
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
                                <IndexSelectedText style={{ padding: "16px 0" }}> 친황경 과일 </IndexSelectedText>
                                <IndexSelectedLine />
                            </>
                            :
                            <>
                                <IndexNotSelectedText style={{ padding: "16px 0" }}> 친황경 과일 </IndexNotSelectedText>
                                <IndexNotSelectedLine />
                            </>
                    }

                </div>
                <div onClick={clickHandler(3)} style={{ flex: 1 }}>
                    {
                        index == 3 ?
                            <>
                                <IndexSelectedText style={{ padding: "16px 0" }}> 제철 과일 </IndexSelectedText>
                                <IndexSelectedLine />
                            </>
                            :
                            <>
                                <IndexNotSelectedText style={{ padding: "16px 0" }}> 제철 과일 </IndexNotSelectedText>
                                <IndexNotSelectedLine />
                            </>
                    }

                </div>
                <div onClick={clickHandler(4)} style={{ flex: 1 }}>
                    {
                        index == 4 ?
                            <>
                                <IndexSelectedText style={{ padding: "16px 0" }}> 친황경 채소 </IndexSelectedText>
                                <IndexSelectedLine />
                            </>
                            :
                            <>
                                <IndexNotSelectedText style={{ padding: "16px 0" }}> 친황경 채소 </IndexNotSelectedText>
                                <IndexNotSelectedLine />
                            </>
                    }

                </div>
            </div>


            <div>
                <div>
                    <ProductCategoryTitleBox>
                        이번주 인기 상품
                    </ProductCategoryTitleBox>

                    <div style={{display:"flex"}}>
                    <ProdcutPopularBox>
                            <ProductPopularImg>
                            </ProductPopularImg>
                            <ProductTitle style={{marginTop:"8px"}}>친환경 복숭아</ProductTitle>
                            <div style={{display:"flex", marginTop:"8px"}}>
                                <ProductPrice>29,000원</ProductPrice>
                                <ProductSale>20%</ProductSale>
                            </div>
                        </ProdcutPopularBox>

                        <ProdcutPopularBox>
                            <ProductPopularImg>
                            </ProductPopularImg>
                            <ProductTitle style={{marginTop:"8px"}}>친환경 복숭아</ProductTitle>
                            <div style={{display:"flex", marginTop:"8px"}}>
                                <ProductPrice>29,000원</ProductPrice>
                                <ProductSale>20%</ProductSale>
                            </div>
                        </ProdcutPopularBox>

                        <ProdcutPopularBox>
                            <ProductPopularImg>
                            </ProductPopularImg>
                            <ProductTitle style={{marginTop:"8px"}}>친환경 복숭아</ProductTitle>
                            <div style={{display:"flex", marginTop:"8px"}}>
                                <ProductPrice>29,000원</ProductPrice>
                                <ProductSale>20%</ProductSale>
                            </div>
                        </ProdcutPopularBox>

                        <ProdcutPopularBox>
                            <ProductPopularImg>
                            </ProductPopularImg>
                            <ProductTitle style={{marginTop:"8px"}}>친환경 복숭아</ProductTitle>
                            <div style={{display:"flex", marginTop:"8px"}}>
                                <ProductPrice>29,000원</ProductPrice>
                                <ProductSale>20%</ProductSale>
                            </div>
                        </ProdcutPopularBox>
                    </div>                   
                </div>

                <LineDraw></LineDraw>
                
            </div>

            <div>

                <ProductCategoryTitleBox>

                    <div>
                        최신 상품   
                        <img src={downbtn} style={{width:"20px", height:"20px", marginLeft:"5px"}} onClick={()=>{setRecentP(!recentP)}} />
                    </div>
                    <div>
                        <ProductFilter> <img src={filter} style={{width:"16px", height:"16px", marginRight:"2px"}} /> 필터  </ProductFilter>
                    </div>

                    
                </ProductCategoryTitleBox>
                {
                    recentP
                    ?
                    <div style={{marginLeft:"16px"}}>
                        <div style={{display:"flex"}}>
                            <ProdcutRecentBox>
                                <ProductRecentImg>

                                </ProductRecentImg>
                                <ProductOption >산천</ProductOption>
                                <ProductTitle style={{marginTop:"8px"}}>친환경 복숭아</ProductTitle>
                                <div style={{display:"flex", marginTop:"8px"}}>
                                    <ProductPrice>29,000원</ProductPrice>
                                    <ProductSale>20%</ProductSale>
                                </div>
                            
                            
                            </ProdcutRecentBox>

                            <ProdcutRecentBox style={{marginLeft:"16px"}}>
                                <ProductRecentImg>

                                </ProductRecentImg>
                                <ProductOption>산천</ProductOption>
                                <ProductTitle style={{marginTop:"8px"}}>친환경 복숭아</ProductTitle>
                                <div style={{display:"flex", marginTop:"8px"}}>
                                    <ProductPrice>29,000원</ProductPrice>
                                    <ProductSale>20%</ProductSale>
                                </div>
                            
                            
                            </ProdcutRecentBox>

                            <ProdcutRecentBox style={{marginLeft:"16px"}}>
                                <ProductRecentImg>

                                </ProductRecentImg>
                                <ProductOption>산천</ProductOption>
                                <ProductTitle style={{marginTop:"8px"}}>친환경 복숭아</ProductTitle>
                                <div style={{display:"flex", marginTop:"8px"}}>
                                    <ProductPrice>29,000원</ProductPrice>
                                    <ProductSale>20%</ProductSale>
                                </div>
                            
                            
                            </ProdcutRecentBox>

                        </div>
                        <LineDraw></LineDraw>
                        


                    </div>

                    :
                    <div style={{marginLeft:"16px"}}></div>
                }
            </div>
            

        </div>
        
    );
}
