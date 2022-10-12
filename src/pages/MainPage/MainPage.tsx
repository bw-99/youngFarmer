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


function MainPage(props: any) {
    const params = useParams();
    const location = useLocation();
    const navigate = useNavigate();

    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");

    const onEmailHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.currentTarget.value);
    };
    const onPasswordHanlder = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.currentTarget.value);
    };  

    const onSubmitHandler = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    };

    

    return (
        <div style={{maxWidth:"767px", position: "relative", width: "100vw", height:"100vh" }}>
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

    );
}

export default MainPage;