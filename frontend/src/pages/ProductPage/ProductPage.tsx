import React, { useEffect, useState } from "react";

import { useParams, useLocation, useNavigate } from 'react-router-dom';
import styled from "styled-components";
import { AppFrame } from "../../App";


import alarm from "../../assets/images/alarm@3x.png";
import shopping_bag from "../../assets/images/shopping_bag@3x.png";
import { AppBarComponentNoBack, AppBarComponentProduct, AppBarComponentSearch } from "../../common/AppBar/AppBar";



import { BottomNavigationBar } from "../../common/BottomNavigationBar/BottomNavigationBar";
import { CategoryComponent } from "../../common/Category/category";
import { BottomBarComp } from "./components/BottomBar";
import { ItemDetailComp } from "./components/itemDetail";
import { ItemInfoComp } from "./components/itemInfo";
import { TopImageComp } from "./components/topImage";
import { closeModalAction } from "./PurchaseAction"
/*import { PaymentPageComp } from "./components/PaymentPage"*/

import { collection, doc, setDoc, getDoc, query, orderBy, limit, getDocs, where } from "firebase/firestore";
import { db } from "../..";
import { useDispatch, useSelector } from "react-redux";
import { GetProductInfo } from "./ProductAction";
import { ProductDataType } from "../../reducers/ProductReducer";
import { RootState } from "../../reducers";
import { PurchaseComp } from "./components/purchase";

function ProductPage(props: any) {
    const params = useParams();
    const location = useLocation();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    console.log(params.productId);

    const selector: ProductDataType = useSelector((state:RootState) =>
        state.ProductInfoReducer!.productInfo
    );  

    const modalselector: any = useSelector((state: RootState) =>
        state.PurchaseReducer.purchaseInfo
    );

    
    // const productRef = collection(db, "product");
    // const q = query(productRef, where("product_id", "==", params.productId), orderBy("title"), limit(1));

    const [isOpen, setOpen] = useState(false);

    useEffect(() => {
        dispatch(closeModalAction(modalselector));
        dispatch(GetProductInfo(params.productId));
    }, [])

    useEffect(() => {
        if (modalselector) {
            setOpen(modalselector.open_modal);
        }
        console.log("why is change");
    }, [modalselector.open_modal]);

    if (selector) {
        return (
            <AppFrame>
                {/*<PaymentPageComp />*/}
                <AppBarComponentProduct />
                <TopImageComp />
                <ItemInfoComp />
                <ItemDetailComp />
                {
                    isOpen  ? <PurchaseComp /> : <></>
                }
                <BottomBarComp product_id={selector.product_id} />
                    {/* <BottomNavigationBar /> */}
            </AppFrame>
        );
    }
    else{
        return (
            <AppFrame>
                {/*<PaymentPageComp />*/}
            </AppFrame>
        )
    }   

    
}

export default ProductPage;