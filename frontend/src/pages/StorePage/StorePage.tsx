import React, { useState } from "react";

import { useParams, useLocation, useNavigate } from 'react-router-dom';
import styled from "styled-components";
import { AppFrame } from "../../App";


import alarm from "../../assets/images/alarm@3x.png";
import shopping_bag from "../../assets/images/shopping_bag@3x.png";
import { AppBarComponentNoBack, AppBarComponentStore, AppBarComponentSearch } from "../../common/AppBar/AppBar";


import {PurchaseComp } from "../ProductPage/components/purchase"

import { BottomNavigationBar } from "../../common/BottomNavigationBar/BottomNavigationBar";
import { CategoryComponent } from "../../common/Category/category";
import { ItemDetailComp } from "./components/itemDetail";
import { FarmerInfoComp } from "./components/FarmerInfo";
import { TopImageComp } from "./components/topImage";


function StorePage(props: any) {
    const params = useParams();
    const location = useLocation();
    const navigate = useNavigate();

    console.log(params);

    return (
        <AppFrame>
            <AppBarComponentStore />    
            <TopImageComp />
            <FarmerInfoComp />
            <ItemDetailComp />
            {/*<PurchaseComp />*/}
            {/* <BottomNavigationBar /> */}
        </AppFrame>
    );
}

export default StorePage;