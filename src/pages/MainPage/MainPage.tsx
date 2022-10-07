import React, { useState } from "react";

import { useParams, useLocation, useNavigate } from 'react-router-dom';
import styled from "styled-components";





import { DiscountComponent } from "./components/discount";
import { CategoryComponent } from "../../common/Category/category";
import { RecommendComponent } from "./components/recommend";
import { LookEntireBannerComponent } from "./components/lookEntireBanner";
import { LiveComponent } from "./components/live";
import { BottomNavigationBar } from "../../common/BottomNavigationBar/BottomNavigationBar";
import { NotiComponent } from "../../common/AppBar/NotiIcon/NotiIcon";
import { ShoppingBagIconComponent } from "../../common/AppBar/ShoppingBagIcon/ShoppingBagIconComponent";
import { AppBarComponentMain } from "../../common/AppBar/AppBar";


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
        <div style={{position: "relative", width: "100vw", height:"100vh" , backgroundImage: 'linear-gradient(to bottom, #fdeae6, #fdeae6 23%, rgba(253, 234, 230, 0.73) 30%, rgba(253, 234, 230, 0))'}}>
            <AppBarComponentMain />
           
            <DiscountComponent />
            <CategoryComponent />
            <RecommendComponent />
            <LookEntireBannerComponent />
            <LiveComponent />

            <BottomNavigationBar />
           
        </div>

    );
}

export default MainPage;