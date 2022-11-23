import React, { useEffect, useState } from "react";
import { PurchaseDate, PurchaseDot, PurchaseState, WriteReviewBox, WriteReviewText, ProductImg, ProductLocateText, ProductTitleText, ProductPriceText, ProductDetailText, ProductDetailDot, UnReviewSepLine, SemiSepLine } from "../atoms/PurchaseInfo";
import testImage from "../../../assets/images/peach@3x.png";
import { OrderType } from "../../../reducers/OrderListReducer";
import { useSelector } from "react-redux";
import { RootState } from "../../../reducers";
import { Timestamp } from 'firebase/firestore';
import { OrderSending } from "../../../reducers/OrderReducer";
import { OrderProductDataType, ProductDataType } from "../../../reducers/ProductReducer";
import { useNavigate } from 'react-router-dom';

export const PrListComp = () => {
    const orderSelector: OrderType = useSelector((state: RootState) =>
        state.OrderListReducer
    );

    return (
        <div style={{margin: "10px 16px 0 16px"}}>
            {
                orderSelector.selected!.map((order) =>{
                    return (
                        <>
                        {
                            <OrderComp key={JSON.stringify(order) + order.time_created} order={order} />
                        }
                        </>
                    )
                })
            }
            
        </div>
            
    )
}

type OrderPrType = {
    order: OrderSending
}

const OrderComp = ({order}:OrderPrType) => {
    return (
        <div style={{ marginTop: "20px"}}>
            <OrderTimeComp order={order!} />
            {
                order.products?.map((pr, index) => {
                    return(
                        <div>
                            <OrderProductComp product={pr}/>
                            {
                                index == order.products!.length - 1
                                ?
                                <UnReviewSepLine style={{ marginTop: "20px" }} />
                                :
                                <SemiSepLine style={{ marginTop: "20px" }} />

                            }   
                        </div>
                    )
                })
            }
            
        </div>
    )
}


type ProductParam = {
    product: OrderProductDataType
}

const OrderProductComp = ({product}:ProductParam) => {
    return(
        <div style={{ marginTop: "20px", display: "flex" }}>
            <ProductImg src={product.product.photo} />
            <div style={{ display: "flex", marginTop: "7px", marginLeft: "16px", flexDirection: "column" }}>
                <ProductLocateText>산천</ProductLocateText>
                <ProductTitleText style={{ marginTop: "4px" }}>{product.product.title}</ProductTitleText>
                <div style={{ display: "flex", marginTop: "10px", alignItems: "center" }}>
                    <ProductPriceText> {product.product.price.toLocaleString("kr")}원 </ProductPriceText>
                    <div style={{display: "flex", marginLeft: "19px"}}>
                        {
                            Object.keys(JSON.parse(product.option)).map((key:any) => {
                                return <ProductDetailText key={key}>
                                    {JSON.parse(product.option)[key]} •&nbsp;
                                </ProductDetailText>
                            })
                        }
                    </div>
                    
                </div>
            </div>
        </div>
    )
}


type OrderTimeParam = {
    time_ordered: Timestamp,
}

const OrderTimeComp = ({order}:OrderPrType) => {
    const navigate = useNavigate();
    const time = new Date(order.time_created!.seconds * 1000);
    return (
        <div style={{ display: "flex", justifyContent: "space-between" , alignItems: "center"}}>
            <div style={{ display: "flex", alignItems: "center" }}>
                <PurchaseDate>{time.toISOString().split('T')[0]}</PurchaseDate>
                <PurchaseDot style={{ marginLeft: "8px" }} />
                <PurchaseState style={{ marginLeft: "8px" }}>{order.delivery_state}</PurchaseState>
            </div>
            <div>

            </div>
            <WriteReviewBox 
            onClick={()=>{
                navigate("/order/detail/"+ order.merchant_uid);
            }}
            style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                <WriteReviewText>주문상세</WriteReviewText>
            </WriteReviewBox>
        </div>
    );
}