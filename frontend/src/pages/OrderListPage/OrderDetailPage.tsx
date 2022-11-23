import React, { useEffect, useState } from "react";
import { useParams, Link, useLocation, useNavigate } from 'react-router-dom';
import { AppFrame } from "../../App";
import rightArrow from "../../assets/images/btn-arrow-r-14-px@3x.png"
import leftArrow from "../../assets/images/btn-back@3x.png"
import { AppBarComponentOnlyBack } from "../../common/AppBar/AppBar";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../reducers";
import { MyPageDataType } from "../../reducers/MypageReducer";
import { CircularProgress } from '@mui/material';
import { db, FirebaseAuth } from "../..";
import defaultPhoto from "../../assets/images/btn-avatar-default@3x.png";
import { collection } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { query } from 'firebase/firestore';
import { where } from 'firebase/firestore';
import { getDocs } from 'firebase/firestore';
import { OrderSending, PaymentMethodDataType } from "../../reducers/OrderReducer";
import { saveAllOrderList } from "./OrderListAction";
import { OrderType } from "../../reducers/OrderListReducer";
import { PrListComp } from "./components/list";
import { ProductFilter } from "./components/filter";
import { updateDoc } from 'firebase/firestore';
import { OrderDetailTopComp } from "./components/orderDetailTItle";
import { OrderDetailProductComp } from "./components/orderDetailProduct";


export const OrderDetailPage = () => {
    const navigate = useNavigate();
    const params = useParams();
    const dispatch = useDispatch();
    const merchant_uid = params.merchant_uid;
    const [orderInfo, setOrderInfo] = useState<OrderSending | null>(null);

    // const orderSelector: OrderType = useSelector((state: RootState) =>
    //     state.OrderListReducer
    // );

    const getOrderInfo = async () => {
        const orderRef = collection(db, "order");
        const auth = getAuth();
        const q = query(orderRef, where("merchant_uid", "==", merchant_uid));
        const result = await getDocs(q);
        if(result.empty) {
            alert("비정상적인 접근입니다.");
            navigate(-1);
            return;
        }
        const orderData:any = result.docs[0].data();
        setOrderInfo(orderData);
    }

    useEffect(() => {
        getOrderInfo();
    }, []);

    if(!orderInfo) {
        return(
            <div>
            </div>
        );
    }

    return (
        <AppFrame>
            <AppBarComponentOnlyBack title={"주문 상세"} />
            <OrderDetailTopComp order={orderInfo} />
            <OrderDetailProductComp order={orderInfo} />
            {
                JSON.stringify(orderInfo)
            }
        </AppFrame>
        
    );

}

export type OrderParam = {
    order: OrderSending
}

export default OrderDetailPage;