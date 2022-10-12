import React, { useState } from "react";

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


function ProductPage(props: any) {
    const params = useParams();
    const location = useLocation();
    const navigate = useNavigate();

    console.log(params);

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

export default ProductPage;