import React, { useEffect, useState } from "react";

import { useParams, useLocation, useNavigate } from 'react-router-dom';
import styled from "styled-components";


import { DiscountComponent } from "./components/discount";
import { CategoryComponent } from "../../common/Category/category";
import { RecommendComponent } from "./components/recommend";
import { LookEntireBannerComponent } from "./components/lookEntireBanner";
import { BottomNavigationBar } from "../../common/BottomNavigationBar/BottomNavigationBar";
import { NotiComponent } from "../../common/AppBar/NotiIcon/NotiIcon";
import { ShoppingBagIconComponent } from "../../common/AppBar/ShoppingBagIcon/ShoppingBagIconComponent";
import { AppBarComponentMain } from "../../common/AppBar/AppBar";
import {  LiveTitleComponent, LiveTitleListComponent } from "../../common/LiveItem/liveItem";
import { app, FirebaseAuth } from "../..";
import { getAuth, signInWithCustomToken } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../reducers";
import { searchRecommendTryAction } from "../SearchPage/SearchDertailAction";
import { ProductDataType } from "../../reducers/ProductReducer";


function MainPage(props: any) {
    const params = useParams();
    const location = useLocation();
    const navigate = useNavigate();
    const dispatch =  useDispatch();

    const userInfo:any = useSelector((state : RootState) => state.UserInfoReducer);
    const recommendData:ProductDataType[] = useSelector((state : RootState) => state.SearchDetailReducer.recommendResult);


    useEffect(
        () => {
            dispatch(searchRecommendTryAction());
        }
        , []
    )
    if(recommendData && recommendData.length) {
        return (
            <div style={{maxWidth:"625px", position: "relative", width: "100vw", height:"100vh" }}>
                <AppBarComponentMain />
                <DiscountComponent />
                <CategoryComponent />
                <RecommendComponent />
                <LookEntireBannerComponent />
                <div style={{position: "relative", top:"0px", padding: "43px 8px 24px 8px"}}>
                    <LiveTitleComponent />
                    <LiveTitleListComponent/>
                </div>

                <BottomNavigationBar />
            
            </div>
        )
    }

    return (
        <div style={{maxWidth:"625px", position: "relative", width: "100vw", height:"100vh" }}>
            <AppBarComponentMain />
            

            <BottomNavigationBar />
           
        </div>

    );
}

export default MainPage;