import React, { useEffect, useState } from "react";

import TextFieldRecipient from "../../assets/images/textfield-off_recipient.png";
import TextFieldPhone from "../../assets/images/textfield-off_phone.png";
import TextFieldAddress from "../../assets/images/textfield-off.png";
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import styled from "styled-components";
import { AppFrame } from "../../App";


import { collection, doc, setDoc, getDoc, query, orderBy, limit, getDocs, where } from "firebase/firestore";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../reducers";
import { AppBarComponentOnlyBack } from "../../common/AppBar/AppBar";
import { Sector, SectorTitle, StoreName, DeliveryCharge, Line, ProductName, ProductCost, SaleRate, Package, SeparateSectorLine } from "./atoms/product";
import { OrderDataType, OrderSending } from "../../reducers/OrderReducer";
import { OrderProductDataType } from "../../reducers/ProductReducer";
import { ProductListComp } from "./components/product";
import { DeliveryComp } from "./components/delivery";
import { DiscountComp } from "./components/discount";
import { PaymentBtn } from "../CartPage/atoms/CartProduct";
import { apiClient } from "../../api/axios";

function OrderPage(props: any) {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const orderSelector: OrderDataType[] = useSelector((state:RootState) =>
        state.OrderReducer.orders
    );     

    const orderProductSelector: OrderProductDataType[] = useSelector((state:RootState) =>
        state.SearchDetailReducer.orderProducts
    );     

    const [payPossible, setPayPossible] = useState(false);

    const orderSendSelector: OrderSending = useSelector((state:RootState) => state.OrderSendReducer);
    
    useEffect(() => {
        if(orderSendSelector) {
            const isPossible = (
                orderSendSelector!.products!.length > 0
                &&
                orderSendSelector!.delivery!
                &&
                orderSendSelector!.discount
            ) as boolean;
            setPayPossible(
                isPossible
            );
        }
        
    }, [orderSendSelector])

    // if(!orderProductSelector || !orderSendSelector)  {
    //     return (
    //         <div>

    //         </div>
    //     );
    // }
    return(
        <AppFrame>
            <AppBarComponentOnlyBack title={"주문/결제"}/>
            
            <SectorTitle style = {{display: "fixed", marginLeft: "16px", marginTop:"80px"}}> 
                <span> 총 </span>
                <span style={{color:"#fb6159"}}>{orderProductSelector.length}</span>
                <span>개의 상품</span>
            </SectorTitle>

            <div style={{marginTop: "20px"}}>
                <ProductListComp />
            </div>

            <div style={{marginTop: "30px"}}>
                <DeliveryComp />
            </div>

            <div style={{marginTop: "30px"}}>
                <DiscountComp />
            </div>

            <div style={{
                    backgroundColor: "white",
                    position:"fixed", bottom: 0, maxWidth:"625px", width:"100%",height:"56px", paddingBottom: "16px"}}>
                    <PaymentBtn 
                
                    onClick={()=>{
                        // * 서버로 데이터 전송
                        if(payPossible) {
                            apiClient.post("/functions/order", {
                                ...orderSendSelector
                            });
                        }
                    }}
                    style = {{
                        backgroundImage: payPossible ?"linear-gradient(to bottom, #fb6159, #ed3e3e)"  : "linear-gradient(to bottom, #efefef, #efefef)",
                        color: payPossible ?"#ffffff;"  : "#444444",
                        margin:"0 16px"
                        }}>결제하기</PaymentBtn>
                </div>
        </AppFrame>
    )
   
}

export default OrderPage;

