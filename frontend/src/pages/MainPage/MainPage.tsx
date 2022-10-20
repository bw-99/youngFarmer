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
import { useSelector } from "react-redux";
import { RootState } from "../../reducers";


function MainPage(props: any) {
    const params = useParams();
    const location = useLocation();
    const navigate = useNavigate();

    const userInfo:any = useSelector((state : RootState) => state.UserInfoReducer);


    useEffect(
        () => {
            // const auth = getAuth();
            // const user = auth.currentUser;

            // console.log(user);
            // console.log(getUserInfo());

            // console.log(FirebaseAuth.currentUser);
            
            // console.log(userInfo);
        }
        , []
    )
    

    return (
        <div style={{maxWidth:"625px", position: "relative", width: "100vw", height:"100vh" }}>
            <AppBarComponentMain />
            {/* <h1> {JSON.stringify(userInfo)} </h1> */}
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

    );
}

export default MainPage;