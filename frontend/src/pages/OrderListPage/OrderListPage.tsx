import React, { useEffect, useState } from "react";
import { AppFrame } from "../../App";
import { AppBarComponentOnlyBack } from "../../common/AppBar/AppBar";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../reducers";
import { db, FirebaseAuth } from "../..";
import { collection } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { query } from 'firebase/firestore';
import { where } from 'firebase/firestore';
import { getDocs } from 'firebase/firestore';
import { saveAllOrderList } from "./OrderListAction";
import { OrderType } from "../../reducers/OrderListReducer";
import { PrListComp } from "./components/list";
import { ProductFilter } from "./components/filter";


export const OrderListPage = () => {

    const dispatch = useDispatch();
    // const [orderList, setOrderList] = useState<OrderSending[] | null>(null);

    const orderSelector: OrderType = useSelector((state: RootState) =>
        state.OrderListReducer
    );

    const getOrderList = async () => {
        const orderRef = collection(db, "order");
        const auth = getAuth();
        const q = query(orderRef, where("uid", "==", auth.currentUser?.uid));
        const result = await getDocs(q);
        const orderListData: any[] = result.docs.map((doc) => {
            // ! 초기 데이터에 delivery_state 값이 없어 임의로 넣은 값 (추후 삭제)
            let data = doc.data();
            if(!data.delivery_state) {
                data.delivery_state = "배송준비";
            } 
            return data;
        });
        dispatch(saveAllOrderList(orderListData));
    }

    // const changeAllDeliverState = async () => {
    //     const orderRef = collection(db, "order");
    //     const result = await getDocs(orderRef);
    //     result.docs.map(async (doc) => {
    //         const data = doc.data();
    //         await updateDoc(data.ref, {
    //             delivery_state: "배송준비"
    //         })
    //     })
    // }

    useEffect(() => {
        // changeAllDeliverState().then(()=>{
        //     getOrderList();
        // })
        getOrderList();
    }, []);

    if(!orderSelector || !orderSelector.all) {
        return(
            <div>
            </div>
        );
    }

    return (
        <AppFrame>
            <AppBarComponentOnlyBack title={"주문•배송"} />
            <ProductFilter/>
            <PrListComp />
        </AppFrame>
        
    );

}

export default OrderListPage;