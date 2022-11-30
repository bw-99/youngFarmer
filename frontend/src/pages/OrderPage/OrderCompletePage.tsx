import React, { useEffect, useState } from "react";

import TextFieldRecipient from "../../assets/images/textfield-off_recipient.webp";
import TextFieldPhone from "../../assets/images/textfield-off_phone.webp";
import TextFieldAddress from "../../assets/images/textfield-off.webp";
import CheckIcon from "../../assets/images/check.webp";
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import styled from "styled-components";
import { AppFrame } from "../../App";

import CryptoJS from 'crypto-js';
import { collection, doc, setDoc, getDoc, query, orderBy, limit, getDocs, where, Timestamp, addDoc, updateDoc, deleteDoc } from "firebase/firestore";
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
import { db, FirebaseAuth } from './../../index';
import { getAuth } from "firebase/auth";
import { DISCOUNT_TYPE_AMOUNT, DISCOUNT_TYPE_PERCENT } from './../../reducers/DiscountReducer';
import { BackgroundWrapper } from "../../common/BackgroundWrapper/BackgroundWrapper";
import { ProductDataOrderType } from './../../reducers/ProductReducer';
import { convertOrder2Product } from "../../sagas/OrderSaga";
import { DeliveryDataType } from "../../reducers/DeliveryReducer";



export const CircleBox = styled.div`
  width: 88px;
  height: 88px;
  background-color: rgba(251, 97, 89, 0.1);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const MainText = styled.div`
  font-family: AppleSDGothicNeo;
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  color: #272727;
`

export const SubText = styled.div`
  font-family: AppleSDGothicNeo;
  font-size: 14px;
  font-weight: 500;
  text-align: center;
  color: #a2a2a2;
`


declare const window: any;

function OrderCompletePage(props: any) {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const params = useParams();

    const orderSelector: OrderDataType[] = useSelector((state:RootState) =>
        state.OrderReducer.orders
    );     

    const orderProductSelector: OrderProductDataType[] = useSelector((state:RootState) =>
        state.SearchDetailReducer.orderProducts
    );     

    const orderSendSelector: OrderSending = useSelector((state:RootState) => state.OrderSendReducer);
    
    const [isExist, setIsExist] = useState(false);
    
    useEffect(() => {
        FirebaseAuth.onAuthStateChanged((user) => {
            if(user) {
                const merchant_uid = params.merchant_uid;
                const uid = user!.uid;
                const orderRef = collection(db, "order");
                const q = query(orderRef, where("merchant_uid", "==", merchant_uid), where("uid", "==", uid));
                getDocs(q).then((docs) => {
                    if(!docs.empty) {
                        setIsExist(true);
                    }
                    else{
                        alert("비정상적인 접근입니다.");
                        navigate(-1);
                    }
                    
                })
            }
        })
        
    }, [])

    if(!isExist) {
        return (
            <div>

            </div>
        );
    }

    return(
        <AppFrame>
            <AppBarComponentOnlyBack title={"주문/결제"}/>
            <div style={{height: "100%", display:"flex", alignItems:"center", justifyContent:"center"}}>
                <div style={{
                    // marginTop: "calc(50vh - 170px)",
                    marginBottom: "100px",
                    display:"flex", flexDirection: "column", alignItems: "center"}}>
                    <CircleBox>
                        <img 
                        style={{
                            width: "30px",
                            height: "30px",
                            objectFit: "cover"
                        }}
                        src={CheckIcon} alt="" />
                    </CircleBox>
                    <MainText style={{marginTop: "30px"}}> 주문 결제가 완료되었습니다. </MainText>
                    <SubText style={{marginTop: "12px"}}> 다양한 상품을 담아보세요. </SubText>
                </div>
            </div>

            
            <div style={{
                    backgroundColor: "white",
                    position:"fixed", bottom: 0, maxWidth:"118px", width:"100%",height:"56px", paddingBottom: "16px"}}>
                    <PaymentBtn 
                    onClick={()=>{
                        navigate("/main");
                    }}
                    style = {{
                        width: "calc(100vw - 32px)",
                        maxWidth: "calc(625px - 32px)",
                        backgroundImage: "linear-gradient(to bottom, #fb6159, #ed3e3e)",
                        color: "#ffffff",
                        margin:"0 16px"
                        }}>메인으로</PaymentBtn>
                </div>
        </AppFrame>
    )
   
}

export default OrderCompletePage;

