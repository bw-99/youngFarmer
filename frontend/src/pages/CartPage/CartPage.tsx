import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { useParams, useLocation, useNavigate } from 'react-router-dom';
import styled from "styled-components";
import { FirebaseAuth } from "../..";
import { AppFrame } from "../../App";


import alarm from "../../assets/images/alarm@3x.png";
import shopping_bag from "../../assets/images/shopping_bag@3x.png";
import { AppBarComponentMyPage, AppBarComponentNoBack, AppBarComponentOnlyBack } from "../../common/AppBar/AppBar";


import {CartProductComponent} from "./component/CartProduct"


import { BottomNavigationBar } from "../../common/BottomNavigationBar/BottomNavigationBar";
import { RootState } from "../../reducers";
import { MyPageDataType } from "../../reducers/MypageReducer";

import {PaymentBtn} from "./atom/CartProduct"


function CartPage(props: any) {
    const params = useParams();
    const location = useLocation();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const selector: MyPageDataType = useSelector((state:RootState) =>
        state.ProfileReducer!.mypageInfo
    );      

    return (
        <AppFrame>
            <AppBarComponentOnlyBack title={"장바구니"} />
            <CartProductComponent/>
            <CartProductComponent/>
            <div style={{ height:"88px"}}>
                <PaymentBtn>결제하기</PaymentBtn>
            </div>
        </AppFrame>
    )

   
}

export default CartPage;