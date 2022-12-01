import React, { useEffect, useState } from "react";

import TextFieldRecipient from "../../assets/images/textfield-off_recipient.webp";
import TextFieldPhone from "../../assets/images/textfield-off_phone.webp";
import TextFieldAddress from "../../assets/images/textfield-off.webp";
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
import { PayAmountComp } from "./components/payAmount";
import { PayMethodComp } from "./components/payMethod";
import { PayAgreeComp } from "./components/agree";
import { saveImpParam } from './OrderAction';
import { saveOrderData } from "./OrderReadyPage";
import { setItemWithExpireTime } from './../../services/localStorage';


declare const window: any;

function OrderPage(props: any) {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const orderSelector: OrderDataType[] = useSelector((state:RootState) =>
        state.OrderReducer.orders
    );     

    const orderProductSelector: OrderProductDataType[] = useSelector((state:RootState) =>
        state.SearchDetailReducer.orderProducts
    );     

    // const [agree, setAgree] = useState(false);
    const [timeNow, setTimeNow] = useState<Date>();

    const [payPossible, setPayPossible] = useState(false);
    const [productInfo, setProductInfo] = useState<OrderProductDataType[]>();
    const [deliveryInfo, setDeliveryInfo] = useState<DeliveryDataType | null>(null);

    const orderSendSelector: OrderSending = useSelector((state:RootState) => state.OrderSendReducer);
    var IMP = window.IMP; 
    IMP.init(process.env.REACT_APP_IM_PORT_CID); 

    const createMerchantUid = () => {
        const now = new Date();
        setTimeNow(now);
        const year = now.getFullYear();
        const month = now.getMonth() < 10 ? `0${now.getMonth()}` : now.getMonth();
        const date = now.getDate() < 10 ? `0${now.getDate()}` : now.getDate();

        const nowString = `${year}${month}${date}`
        const auth = getAuth();
        console.log(auth.currentUser!.uid);

        const merchantUid = `ORD${nowString}-${auth.currentUser!.uid.substring(0,5)}-${new Date().getTime()}`;
        console.log(merchantUid);
        return merchantUid;
    }

    const makeImpParam = () => {
        const pg = orderSendSelector.payMethod!.payMethod;
        const pay_method = "card";
        const merchant_uid:string = createMerchantUid();
        const name = orderSendSelector!.products!.length > 1 
                    ? orderSendSelector!.products![0].product.title + `외 ${orderSendSelector!.products!.length -1 }개`
                    : orderSendSelector!.products![0].product.title;

        // * 결제 금액 계산
        let amount = 0;
        // 결제 금액 합산
        orderSendSelector!.products!.forEach((product) => {
            amount += product.product.price * (1 - product.product.discount/100) + product.product.delivery_charge;
        })
        // 포인트 계산
        amount -= orderSendSelector.discount!.point;
        // 쿠폰 계산
        if(orderSendSelector.discount!.coupon_list && orderSendSelector.discount!.coupon_list.length > 0 && orderSendSelector.discount!.coupon_list[0]){
            const useCoupon = orderSendSelector.discount!.coupon_list[0];
            if(useCoupon.discount_type == DISCOUNT_TYPE_AMOUNT) {
                amount -= useCoupon.discount;
            }
            else if(useCoupon.discount_type == DISCOUNT_TYPE_PERCENT){
                amount *= (1 - useCoupon.discount/100);
            }
        }

        const buyer_name = orderSendSelector!.delivery!.name;
        const buyer_tel = orderSendSelector!.delivery!.phone;
        const buyer_addr = orderSendSelector!.delivery!.location_main + " " + orderSendSelector!.delivery!.location_sub;
        
        const impParam = {
            pg:pg,
            pay_method: pay_method,
            merchant_uid: merchant_uid,
            name: name,
            amount: amount,
            buyer_name: buyer_name,
            buyer_tel: buyer_tel,
            buyer_addr: buyer_addr,
            m_redirect_url: `${window.location.origin}/order/ready/`+merchant_uid
        };

        dispatch(saveImpParam(JSON.stringify(impParam)));

        return impParam;
    }

    const requestPay = (impParam: any) => {
        const auth = getAuth();
        const orderdata = {
            ...orderSendSelector,
            impParam: JSON.stringify(impParam),
            merchant_uid: impParam.merchant_uid,
            time_created: new Date(),
            uid: auth.currentUser!.uid,
            delivery_state: "배송준비",
            product_id_list: orderSendSelector!.products!.map((pr) => {
                return pr.product.product_id
            })
        }
        setItemWithExpireTime("orderData", orderdata, 1000*60*2);

        // 결제 요청
        IMP.request_pay({
            ...impParam
        }, (rsp:any) => {
            console.log(rsp);
            if (rsp.success) {
                // 서버에 요청 보내서 거래 위조 여부 검증
                apiClient.post(process.env.REACT_APP_FIREBASE_FUNCTION_PAYMENT_API + "/complete", {
                    imp_uid: rsp.imp_uid,
                    merchant_uid: rsp.merchant_uid
                }).then(async (data) => {
                    if(data.status == 200) {
                        // 정상 거래일 때, 거래 정보를 firebase에 저장
                        await saveOrderData(orderdata);
                        console.log(data);
                        navigate("/order/complete/"+impParam.merchant_uid);
                    }
                })
            } else {
                alert("결제 실패");
                navigate(-1);
                navigate(-1);
            }
        });
      }


    const orderFinal = async () => {
        const impParam = makeImpParam();
        // await saveImpOnFS(impParam);
        setTimeout(() => {
            requestPay(impParam);
        }, 1000);
    }

    useEffect(() => {
        if(orderSendSelector) {
            console.log(JSON.stringify(orderSendSelector));
            const isPossible = (
                orderSendSelector!.products!.length > 0
                &&
                orderSendSelector!.delivery!
                &&
                orderSendSelector!.discount
                &&
                orderSendSelector!.payMethod
                // &&
                // orderSendSelector!.agreeCondition
            ) as boolean;
            setPayPossible(
                isPossible
            );
        }
    }, [orderSendSelector])

    const getOrderProducts = async (uid:string) => {
        const preorderRef = collection(db, "preorder");
        const q = query(preorderRef, where("uid", "==", uid));
        const target = await getDocs(q);
        if(target.empty) {
            navigate(-1);
            return;
        }
        const productList = await convertOrder2Product(target.docs[0].data().products);
        setProductInfo(productList);
        return;
    }

    useEffect(() => {
        FirebaseAuth.onAuthStateChanged((user) => {
            if(user) {
                getOrderProducts(user!.uid);
                // getDeliveryInfo(user!.uid);
            }
        })
    }, []);

    if(!productInfo) {
        return (
            <div>

            </div>
        )
    }

    if(productInfo && productInfo.length == 0) {
        navigate(-1);
    }

    return(
        
        <AppFrame>
            <AppBarComponentOnlyBack title={"주문/결제"}/>
            <SectorTitle style = {{display: "fixed", marginLeft: "16px", marginTop:"80px"}}> 
                <span> 총 </span>
                <span style={{color:"#fb6159"}}>{productInfo.length}</span>
                <span>개의 상품</span>
            </SectorTitle>

            <div style={{marginTop: "20px"}}>
                <ProductListComp orderProducts={productInfo} />
            </div>

            <div style={{marginTop: "30px"}}>
                <DeliveryComp/>
            </div>

            <div style={{marginTop: "30px"}}>
                <DiscountComp />
            </div>


            <div style={{marginTop: "30px"}}>
                <PayMethodComp />
            </div>

            <div style={{marginTop: "30px"}}>
                <PayAmountComp />
            </div>
            
            {/* <div style={{marginTop: "30px"}}>
                <PayAgreeComp/>
            </div> */}

            <div style={{height: "100px"}}>

            </div>

            <div style={{
                    backgroundColor: "white",
                    position:"fixed", bottom: 0, maxWidth:"625px", 
                    width:"100%", height:"calc(56px)", padding: "16px 0"}}>
                    <PaymentBtn 
                
                    onClick={()=>{
                        // * 서버로 데이터 전송
                        if(payPossible) {
                            orderFinal();
                            apiClient.post("/paymentAPI", {
                                ...orderSendSelector
                            });
                        }
                    }}
                    style = {{
                        width: "calc(100vw - 32px)",
                        maxWidth: "calc(625px - 32px)",
                        backgroundImage: payPossible ?"linear-gradient(to bottom, #fb6159, #ed3e3e)"  : "linear-gradient(to bottom, #efefef, #efefef)",
                        color: payPossible ?"#ffffff"  : "#444444",
                        margin:"0 16px"
                        }}>결제하기</PaymentBtn>
                </div>
        </AppFrame>
    )
   
}

export default OrderPage;

