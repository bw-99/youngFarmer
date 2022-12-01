import { data } from "cheerio/lib/api/attributes";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { useParams, useLocation, useNavigate } from 'react-router-dom';
import styled from "styled-components";
import { FirebaseAuth } from "../..";
import { AppFrame } from "../../App";


import alarm from "../../assets/images/alarm@3x.webp";
import shopping_bag from "../../assets/images/shopping_bag@3x.webp";
import { AppBarComponentNoBack } from "../../common/AppBar/AppBar";



import { BottomNavigationBar } from "../../common/BottomNavigationBar/BottomNavigationBar";
import { RootState } from "../../reducers";
import { LikeData } from "../../reducers/LikeReducer";
import { ProductDataType } from "../../reducers/ProductReducer";
import { ItemComponent } from "./components/item";
import { getLikeAction } from "./LikeAction";


function LikePage(props: any) {
    const params = useParams();
    const location = useLocation();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const likeSelector: ProductDataType[] = useSelector((state:RootState) =>
        state.SearchDetailReducer.likeProducts
    );

    // useEffect(() => {
    //     FirebaseAuth.onAuthStateChanged((user) => {
    //         if(user){
    //             dispatch(getLikeAction(user.uid));
    //         }
    //     })
    // }, [])
    
    if(likeSelector){
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