import React, {useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { AppFrame } from "../../App";


import { AppBarComponentOnlyBack } from "../../common/AppBar/AppBar";


import {CartProductComponent, setPreOrderInfo} from "./components/CartProduct"


import { RootState } from "../../reducers";
import { CartProductDataType, ProductDataType } from "../../reducers/ProductReducer";

import {PaymentBtn} from "./atoms/CartProduct"
import { CartTopComp } from "./components/CartTop";
import { OrderDataType } from "../../reducers/OrderReducer";
import { setProductOrderTry } from "../OrderPage/ProductAction";


function CartPage(props: any) {
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
                    position:"fixed", bottom: 0, maxWidth:"625px", width:"100%",height:"56px", padding: "16px 0"}}>
                    <PaymentBtn 
                    onClick={async()=>{
                        setOrder(true);
                        dispatch(setProductOrderTry(orderSelector));
                        await setPreOrderInfo(orderSelector);
                        navigate("/order");
                    }}
                    style = {{
                        width: "calc(100vw - 32px)",
                        maxWidth: "calc(625px - 32px)",
                        backgroundImage: "linear-gradient(to bottom, #fb6159, #ed3e3e)",
                        color: "#ffffff",
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