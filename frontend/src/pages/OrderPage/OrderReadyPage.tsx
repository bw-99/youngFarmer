import React, { useEffect, useState } from "react";

import { useParams, useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import styled from "styled-components";
import { AppFrame } from "../../App";

import { collection, doc, setDoc, getDoc, query, orderBy, limit, getDocs, where, Timestamp, addDoc, updateDoc, deleteDoc } from "firebase/firestore";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../reducers";
import { AppBarComponentOnlyBack } from "../../common/AppBar/AppBar";
import { OrderDataType, OrderSending } from "../../reducers/OrderReducer";
import { apiClient } from "../../api/axios";
import { db, FirebaseAuth } from '../../index';
import { DeliveryDataType } from "../../reducers/DeliveryReducer";
import { getItemWithExpireTime } from "../../services/localStorage";
import { removeItem } from './../../services/localStorage';



export const CircleBox = styled.div`
  width: 88px;
  height: 88px;
  background-color: rgba(251, 97, 89, 0.1);
  border-radius: 50%;
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

function OrderReadyPage(props: any) {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const params = useParams();

    const [searchParams, setSearchParams] = useSearchParams();

    const orderSendSelector: OrderSending = useSelector((state:RootState) => state.OrderSendReducer);
    
    const imp_uid = searchParams.get("imp_uid");
    const merchant_uid = searchParams.get("merchant_uid");
    const imp_success = Boolean(searchParams.get("imp_success"));

    const orderData = getItemWithExpireTime("orderData");


    const orderCallbackHandling = () => {
        apiClient.post(process.env.REACT_APP_FIREBASE_FUNCTION_PAYMENT_API + "/complete", {
            imp_uid: imp_uid,
            merchant_uid: merchant_uid
        }).then(async (data) => {
            if(data.status == 200) {
                await saveOrderData(orderData);
                navigate("/order/complete/"+merchant_uid);
            }
        })
    }

    
    useEffect(() => {
        console.log(imp_uid);
        console.log(merchant_uid);
        console.log(imp_success);
        if(orderSendSelector) {
            console.log(orderSendSelector);
            if(imp_success) {
                orderCallbackHandling();
            }
            else{
                alert(searchParams.get("error_msg"));
                navigate(-1);
            }
        }

        
        return () => {
            removeItem("orderData");
        }
        
    }, [orderSendSelector]);

    return(
        <AppFrame>
            <AppBarComponentOnlyBack title={"주문/결제"}/>
            <div style={{height: "100%", display:"flex", alignItems:"center", justifyContent:"center"}}>
                <div style={{
                    // marginTop: "calc(50vh - 170px)",
                    marginBottom: "100px",
                    display:"flex", flexDirection: "column", alignItems: "center"}}>
                    <CircleBox />
                    <MainText style={{marginTop: "30px"}}> 결제 중... </MainText>
                </div>
            </div>
        </AppFrame>
    )
   
}


export  const saveOrderData = async(data: any) => {
    const orderRef = collection(db, "order");
    await addDoc(orderRef, data);
    const canAddDeliver:boolean = await isExistDuplicateDeliver(data.delivery);
    if(canAddDeliver) {
        await addDoc(collection(db, "delivery"), data.delivery);
    }
}

const isExistDuplicateDeliver = async(delivery:DeliveryDataType) => {
    console.log("isExistDuplicateDeliver");
    const deliverRef = collection(db, "delivery");
    let q = query(deliverRef);
    q = query(q,where("location_main","==",delivery.location_main));
    q = query(q,where("location_sub","==",delivery.location_sub));
    q = query(q,where("name","==",delivery.name));
    q = query(q,where("phone","==",delivery.phone));
    q = query(q,where("uid","==",delivery.uid));
    const result = await getDocs(q);

    if(result.docs.length > 1) {
        for (let index = 1; index < result.docs.length; index++) {
            const doc = result.docs[index];
            await deleteDoc(doc.ref);
        }
    }

    const isEmpty = (result).empty;
    console.log("duplicate");
    return isEmpty;
}

const deleteOrderedFromCart = async() => {
    const cartRef = collection(db, "cart");
}

export default OrderReadyPage;

