import React, { useState } from "react";

import { useParams, useLocation, useNavigate } from 'react-router-dom';
import styled from "styled-components";


import alarm from "../../assets/images/alarm@3x.png";
import shopping_bag from "../../assets/images/shopping_bag@3x.png";
import { AppBarComponentNoBack, AppBarComponentSearch } from "../../common/AppBar/AppBar";



import { BottomNavigationBar } from "../../common/BottomNavigationBar/BottomNavigationBar";
import { CategoryComponent } from "../../common/Category/category";
import { OtherChoiceComp } from "./components/OtherChoice";
import { ToggleComponent } from "./components/ToggleComponent";


function SearchDetailPage(props: any) {
    const params = useParams();
    const location = useLocation();
    const navigate = useNavigate();

    console.log(params);

    return (
        <div style={{width: "100vw", height: "100vh"}}>
            {AppBarComponentSearch()}
            <ToggleComponent />
            <OtherChoiceComp />
            <BottomNavigationBar />
        </div>
    );
}

export default SearchDetailPage;