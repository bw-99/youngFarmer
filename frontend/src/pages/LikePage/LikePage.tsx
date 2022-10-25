import React, { useState } from "react";
import { useSelector } from "react-redux";

import { useParams, useLocation, useNavigate } from 'react-router-dom';
import styled from "styled-components";
import { AppFrame } from "../../App";


import alarm from "../../assets/images/alarm@3x.png";
import shopping_bag from "../../assets/images/shopping_bag@3x.png";
import { AppBarComponentNoBack } from "../../common/AppBar/AppBar";



import { BottomNavigationBar } from "../../common/BottomNavigationBar/BottomNavigationBar";
import { RootState } from "../../reducers";
import { LikeData } from "../../reducers/LikeReducer";
import { ItemComponent } from "./components/item";


function LikePage(props: any) {
    const params = useParams();
    const location = useLocation();
    const navigate = useNavigate();

    const selector: LikeData[] = useSelector((state:RootState) =>
        state.LikeReducer.likes
    );


    if(selector){
        return (
            <AppFrame>
                <AppBarComponentNoBack title="찜하기"/>
                <ItemComponent />
                <BottomNavigationBar />
            </AppFrame>
        );
    }
    else{
        return (
            <AppFrame>
                {/* <AppBarComponentNoBack title="찜하기"/>
                <ItemComponent /> */}
                <BottomNavigationBar />
            </AppFrame>
        );
    }
 


}

export default LikePage;