import React, { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { useParams, useLocation, useNavigate } from 'react-router-dom';
import styled from "styled-components";
import { FirebaseAuth } from "../..";
import { AppFrame, AuthContext } from "../../App";


import alarm from "../../assets/images/alarm@3x.png";
import shopping_bag from "../../assets/images/shopping_bag@3x.png";
import { AppBarComponentMyPage, AppBarComponentNoBack, AppBarComponentOnlyBack } from "../../common/AppBar/AppBar";


import {CartProductComponent} from "./components/CartProduct"


import { BottomNavigationBar } from "../../common/BottomNavigationBar/BottomNavigationBar";
import { RootState } from "../../reducers";
import { CartData } from "../../reducers/CartReducer";
import { MyPageDataType } from "../../reducers/MypageReducer";
import { CartProductDataType, ProductDataType } from "../../reducers/ProductReducer";
import { cartCancelAction, getCartAction } from "./CartAction";

import {PaymentBtn} from "./atoms/CartProduct"
import { CartTopComp } from "./components/CartTop";
import { OrderDataType } from "../../reducers/OrderReducer";
import { setProductOrderTry } from "../OrderPage/ProductAction";


function CartPage(props: any) {
    const params = useParams();
    const location = useLocation();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const cartSelector: CartProductDataType[] = useSelector((state:RootState) =>
        state.SearchDetailReducer.cartProducts
    );      

    const [allCheck, setAllCheck] = useState(false);
    const [order, setOrder] = useState(false);

    const orderSelector: OrderDataType[] = useSelector((state:RootState) =>
        state.OrderReducer.orders
    );    

    if(cartSelector) {
        return (
            <AppFrame>
                <AppBarComponentOnlyBack title={"장바구니"} />
                <div style={{margin: "80px 16px 20px 16px"}}>
                    <CartTopComp allCheck={allCheck} setAllCheck={setAllCheck}/>
                </div>
                <div style={{paddingBottom: "88px",}}>
                {
                    cartSelector.map((cartProduct) => {
                        return(
                            <CartProductComponent allCheck={allCheck} cartProduct={cartProduct} order={order}/>
                        )
                    })
                }
                </div>
                
                <div style={{
                    backgroundColor: "white",
                    position:"fixed", bottom: 0, maxWidth:"625px", width:"100%",height:"56px", paddingBottom: "16px"}}>
                    <PaymentBtn 
                    onClick={()=>{
                        setOrder(true);
                        dispatch(setProductOrderTry(orderSelector));
                        navigate("/order");
                    }}
                    style={{
                        margin:"0 16px"
                        }}>결제하기</PaymentBtn>
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