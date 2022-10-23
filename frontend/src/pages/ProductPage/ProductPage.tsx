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

import { collection, doc, setDoc, getDoc, query, orderBy, limit, getDocs, where } from "firebase/firestore";
import { db } from "../..";
import { useDispatch, useSelector } from "react-redux";
import { GetProductInfo } from "./ProductAction";
import { ProductDataType } from "../../reducers/ProductReducer";
import { RootState } from "../../reducers";

function ProductPage(props: any) {
    const params = useParams();
    const location = useLocation();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    console.log(params.productId);

    const selector: any = useSelector((state:RootState) =>
        state.ProductInfoReducer!.productInfo
    );  
    
    // const productRef = collection(db, "product");
    // const q = query(productRef, where("product_id", "==", params.productId), orderBy("title"), limit(1));

    useEffect(() => {
        dispatch(GetProductInfo(params.productId));
    }, []);


    if(selector) {
        return (
            <AppFrame>
                <AppBarComponentProduct />
                <TopImageComp />
                <ItemInfoComp />
                <ItemDetailComp />
                <BottomBarComp />
                {/* <BottomNavigationBar /> */}
            </AppFrame>
        );
    }
    else{
        return (
            <></>
        )
    }   

    
}

export default ProductPage;