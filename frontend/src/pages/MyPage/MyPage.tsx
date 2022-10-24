import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { useParams, useLocation, useNavigate } from 'react-router-dom';
import styled from "styled-components";
import { FirebaseAuth } from "../..";
import { AppFrame } from "../../App";


import alarm from "../../assets/images/alarm@3x.png";
import shopping_bag from "../../assets/images/shopping_bag@3x.png";
import { AppBarComponentMyPage, AppBarComponentNoBack } from "../../common/AppBar/AppBar";



import { BottomNavigationBar } from "../../common/BottomNavigationBar/BottomNavigationBar";
import { RootState } from "../../reducers";
import { MyPageDataType } from "../../reducers/MypageReducer";
import { ProfileComp } from "./components/profile";
import { ServiceCenterComp } from "./components/serviceCenter";
import { ShoppingComp } from "./components/shopping";
import { getProfileAction } from "./MyAction";


function MyPage(props: any) {
    const params = useParams();
    const location = useLocation();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const selector: MyPageDataType = useSelector((state:RootState) =>
        state.ProfileReducer!.mypageInfo
    );      

    useEffect(() => {
        if(!selector){
            FirebaseAuth.onAuthStateChanged((data)=> {
                if(data){
                    console.log("dispatch!!");
                    
                    dispatch(getProfileAction(data.uid));
                }
            })
        }
       
        
    }, []);

    // return (
    //     <AppFrame>
    //             <AppBarComponentMyPage title="마이페이지"/>
    //             <ProfileComp />
    //             <ShoppingComp />
    //             <ServiceCenterComp />
    //             <BottomNavigationBar />
    //         </AppFrame>
    // );
    
    if (selector) {
        return(
            <AppFrame>
                <AppBarComponentMyPage title="마이페이지"/>
                <ProfileComp />
                <ShoppingComp />
                <ServiceCenterComp />
                <BottomNavigationBar />
            </AppFrame>
        );
    }
    else{
        return (
            <AppFrame>
                <AppBarComponentMyPage title="마이페이지"/>
                <BottomNavigationBar />
            </AppFrame>  
        );
    }

   
}

export default MyPage;