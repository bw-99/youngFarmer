import React, { useEffect, useState } from "react";

import { useParams, useLocation, useNavigate } from 'react-router-dom';
import styled from "styled-components";
import { AppFrame } from "../../App";


import alarm from "../../assets/images/alarm@3x.png";
import shopping_bag from "../../assets/images/shopping_bag@3x.png";
import { AppBarComponentNoBack, AppBarComponentStore, AppBarComponentSearch, AppBarComponentProduct } from "../../common/AppBar/AppBar";


import {PurchaseComp } from "../ProductPage/components/purchase"

import { BottomNavigationBar } from "../../common/BottomNavigationBar/BottomNavigationBar";
import { CategoryComponent } from "../../common/Category/category";
import { ItemDetailComp } from "./components/itemDetail";
import { FarmerInfoComp } from "./components/FarmerInfo";
import { TopImageComp } from "./components/topImage";
import { collection, query, getDocs } from 'firebase/firestore';
import { db } from "../..";
import { where } from 'firebase/firestore';
import { StoreDataType, StoreProductDataType } from "./StoreType";
import { ProductDataType } from "../../reducers/ProductReducer";


function StorePage(props: any) {
    const params = useParams();
    const location = useLocation();
    const navigate = useNavigate();

    const [storeData, setStoreData] = useState<StoreProductDataType | null>(null);

    const store_id = params.store_id;

    const getProductList = async () => {
        const ProductRef = collection(db, "product");
        const q = query(ProductRef, where("store_id", "==", Number(store_id)));
        const productResult = await getDocs(q);
        return productResult.docs.map((doc) => doc.data()) as ProductDataType[];
    }

    const getStoreInfo = async () => {
        const StoreRef = collection(db, "store");
        const q = query(StoreRef, where("store_id", "==", Number(store_id)));
        const storeResult = await getDocs(q);

        if(storeResult.empty) {
            alert("유효하지 않은 스토어 정보입니다.");
            navigate(-1);
        }
        const storeDataTemp:StoreDataType = storeResult.docs[0].data() as any;
        const productList: ProductDataType[] =  await getProductList() as any;
        setStoreData({
            ...storeDataTemp,
            product_list: productList
        })

        console.log(productList);
    }

    useEffect(() => {
        getStoreInfo();
    }, [])

    if(!storeData) {
        return (
            <div>
            </div>
        );
    }

    return (
        <AppFrame>
            <AppBarComponentStore />    
            {/* <AppBarComponentProduct /> */}
            
            <TopImageComp background_photo={storeData!.background_photo} />
            <FarmerInfoComp storeData={storeData}/>
            <ItemDetailComp storeData={storeData}/>
           
        </AppFrame>
    );
}

export default StorePage;