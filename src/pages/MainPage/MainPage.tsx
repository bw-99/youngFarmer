import React, { useState } from "react";

import { useParams, useLocation, useNavigate } from 'react-router-dom';
import styled from "styled-components";


import alarm from "../../assets/images/alarm@3x.png";
import shopping_bag from "../../assets/images/shopping_bag@3x.png";



import { AppBar, AppBarIcon, CategoryBottomLine, CategoryBox, CategoryIcon, CategoryIconBox,CategoryText,DiscountBox, DiscountImageBox, DiscountPeriod, DiscountText, MainTextBold, MainTextLight } from "./atoms/atoms";
import { DiscountComponent } from "./components/discount";
import { CategoryComponent } from "./components/category";
import { RecommendComponent } from "./components/recommend";
import { LookEntireBannerComponent } from "./components/lookEntireBanner";
import { LiveComponent } from "./components/live";
import { BottomNavigationBar } from "../../common/BottomNavigationBar/BottomNavigationBar";


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
        <div style={{position: "relative", width: "100vw", padding: "0px 0px 0px 0px" ,height:"100vh" , backgroundImage: 'linear-gradient(to bottom, #fdeae6, #fdeae6 23%, rgba(253, 234, 230, 0.73) 30%, rgba(253, 234, 230, 0))'}}>
           <AppBar>
                <AppBarIcon src={alarm} alt="" />
                <AppBarIcon src={shopping_bag} alt="" />
                <div style={{width: "8px"}}></div>
            </AppBar>
           
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