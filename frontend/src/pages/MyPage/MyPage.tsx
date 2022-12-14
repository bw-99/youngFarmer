import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { useParams, useLocation, useNavigate } from 'react-router-dom';
import { FirebaseAuth } from "../..";
import { AppFrame } from "../../App";


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
        
        FirebaseAuth.onAuthStateChanged((user)=> {
            if(user){
                console.log("dispatch!!");
                dispatch(getProfileAction(user!.uid));
            }
        })
       
        
    }, []);

    
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
                {/* {JSON.stringify(selector)} */}
                <BottomNavigationBar />
            </AppFrame>  
        );
    }

   
}

export default MyPage;