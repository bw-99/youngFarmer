import React, { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { useParams, useLocation, useNavigate } from 'react-router-dom';
import styled from "styled-components";
import { FirebaseAuth } from "../..";
import { AppFrame, AuthContext } from "../../App";


import alarm from "../../assets/images/alarm@3x.png";
import shopping_bag from "../../assets/images/shopping_bag@3x.png";
import { AppBarComponentMyPage, AppBarComponentNoBack, AppBarComponentOnlyBack } from "../../common/AppBar/AppBar";


import {CartProductComponent} from "./component/CartProduct"


import { BottomNavigationBar } from "../../common/BottomNavigationBar/BottomNavigationBar";
import { RootState } from "../../reducers";
import { CartData } from "../../reducers/CartReducer";
import { MyPageDataType } from "../../reducers/MypageReducer";
import { ProductDataType } from "../../reducers/ProductReducer";
import { cartCancelAction, getCartAction } from "./CartAction";

import {PaymentBtn} from "./atom/CartProduct"


function CartPage(props: any) {
    const params = useParams();
    const location = useLocation();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const cartSelector: ProductDataType[] = useSelector((state:RootState) =>
        state.SearchDetailReducer.cartProducts
    );      

    // const cartSelector: CartData[] = useSelector((state:RootState) =>
    //     state.CartReducer.carts
    // );     
    // const currentUser = useContext(AuthContext);

    // useEffect(
    //     () => {
    //         FirebaseAuth.onAuthStateChanged((user) => {
    //             let uid = user!.uid;
    //             console.log("uid" + uid);
    //             dispatch(getCartAction(uid));
    //         })
            
    //     },
    // [])

    if(cartSelector) {
        return (
            <AppFrame>
                <AppBarComponentOnlyBack title={"장바구니"} />
                
                <div style={{paddingBottom: "88px",}}>
                {
                    cartSelector.map((product) => {
                        return(
                            <CartProductComponent product={product}/>
                        )
                    })
                }

                </div>
                
                <div style={{position:"fixed", bottom: 0, maxWidth:"625px", width:"100%",height:"88px"}}>
                    <PaymentBtn style={{margin:"0 16px"}}>결제하기</PaymentBtn>
                </div>
            </AppFrame>
        )
    }

    return (
        <AppFrame>
            <AppBarComponentOnlyBack title={"장바구니"} />

        </AppFrame>
    )



   
}

export default CartPage;