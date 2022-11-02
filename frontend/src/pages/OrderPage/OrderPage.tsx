﻿import React, { useEffect, useState } from "react";



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
import { ProductComp } from "./components/product";
import { OrderDataType } from "../../reducers/OrderReducer";
import { clearOrder, getOrderAction } from "./OrderAction";
import { OrderProductDataType } from "../../reducers/ProductReducer";

function OrderPage(props: any) {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const orderSelector: OrderDataType[] = useSelector((state:RootState) =>
        state.OrderReducer.orders
    );     

    const orderProductSelector: OrderProductDataType[] = useSelector((state:RootState) =>
        state.SearchDetailReducer.orderProducts
    );     

    // useEffect(() => {
    //   dispatch(getOrderAction(orderSelector))
    // }, [])

    // useEffect(() => {
    //   dispatch(clearOrder());
    // }, [])
    
    useEffect(() => {
        if(orderProductSelector.length == 0){
            alert("주문 예정인 상품이 없습니다.")
            navigate(-1);
        }
    })
    
    return(
        <AppFrame>
            <AppBarComponentOnlyBack title={"주문/결제"}/>
            
            <SectorTitle style = {{display: "fixed", marginLeft: "16px", marginTop:"80px"}}> 
                <span> 총 </span>
                <span style={{color:"#fb6159"}}>{orderProductSelector.length}</span>
                <span>개의 상품</span>
            </SectorTitle>

            <div style={{marginTop: "20px"}}>
                {
                    orderProductSelector.map((orderProduct) => {
                        return (
                            <ProductComp orderProduct={orderProduct} />
                        )
                    })
                }
            </div>
        </AppFrame>
    )
   
}

export default OrderPage;

