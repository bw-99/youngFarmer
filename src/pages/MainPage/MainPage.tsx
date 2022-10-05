import React, { useState } from "react";

import { useParams, useLocation, useNavigate } from 'react-router-dom';
import styled from "styled-components";


import alarm from "../../assets/images/alarm@3x.png";
import shopping_bag from "../../assets/images/shopping_bag@3x.png";

import categoryBest from "../../assets/images/category-best@3x.png";
import categoryDiscount from "../../assets/images/category-discount@3x.png";
import categorySeasonal from "../../assets/images/category-seasonal@3x.png";
import categoryVegitable from "../../assets/images/category-vegitable@3x.png";
import categoryHealthy from "../../assets/images/category-healthy@3x.png";

import { AppBar, AppBarIcon, CategoryBottomLine, CategoryBox, CategoryIcon, CategoryIconBox,CategoryText,DiscountBox, DiscountImageBox, DiscountPeriod, DiscountText, MainTextBold, MainTextLight } from "./atoms/atoms";
import { relative } from "path";


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
        <div style={{width: "100vw", padding: "0px 0px 0px 0px" ,height:"100vh" , backgroundImage: 'linear-gradient(to bottom, #fdeae6, #fdeae6 23%, rgba(253, 234, 230, 0.73) 30%, rgba(253, 234, 230, 0))'}}>
           <AppBar>
                <AppBarIcon src={alarm} alt="" />
                <AppBarIcon src={shopping_bag} alt="" />
                <div style={{width: "8px"}}></div>
            </AppBar>
           
            
            <div style={{ padding: "0px 16px 0px 16px"}}>
                <DiscountBox>
                <DiscountText>50% 마감 할인</DiscountText>
                </DiscountBox>

                <MainTextLight>
                    따로 세척없이 껍질째먹는
                </MainTextLight>

                <MainTextBold>
                    경북 청송 사과
                </MainTextBold>

                <DiscountPeriod>
                    9/7부터 ~ 9/16까지
                </DiscountPeriod>
            </div>

            <div style={{zIndex: -10, position: "relative", top:"-80px"}}>
                <DiscountImageBox></DiscountImageBox>
            </div>

            <div style={{zIndex: 1, position: "relative", top:"-80px"}}>
                <CategoryBox>
                    <CategoryIconBox>
                        <CategoryIcon src={categoryBest}></CategoryIcon>
                        <CategoryText> BEST </CategoryText>
                    </CategoryIconBox>

                    <CategoryIconBox>   
                        <CategoryIcon src={categoryDiscount}></CategoryIcon>
                        <CategoryText> 할인중% </CategoryText>
                    </CategoryIconBox>

                    <CategoryIconBox>   
                        <CategoryIcon src={categorySeasonal}></CategoryIcon>
                        <CategoryText> 제철과일 </CategoryText>
                    </CategoryIconBox>

                    <CategoryIconBox>   
                        <CategoryIcon src={categoryVegitable}></CategoryIcon>
                        <CategoryText> 채소 </CategoryText>
                    </CategoryIconBox>

                    <CategoryIconBox>   
                        <CategoryIcon src={categoryHealthy}></CategoryIcon>
                        <CategoryText> 무농약 </CategoryText>
                    </CategoryIconBox>
                </CategoryBox>
                <CategoryBottomLine />
            </div>



            
           
        </div>

    );
}

export default MainPage;