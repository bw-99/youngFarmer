import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { useParams, useLocation, useNavigate } from 'react-router-dom';
import { FirebaseAuth } from "../..";
import { AppFrame } from "../../App";


import { AppBarComponentOnlyBack } from "../../common/AppBar/AppBar";



import { RootState } from "../../reducers";
import { MyPageDataType } from "../../reducers/MypageReducer";
import { PointPageComp } from "./components/point";
import { getProfileAction } from "./MyAction";


function PointPage(props: any) {
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
                <AppBarComponentOnlyBack title={"포인트"} />
                <PointPageComp />
                {/* <AppBarComponentMyPage title="마이페이지"/>
                <ProfileComp />
                <ShoppingComp />
                <ServiceCenterComp />
                <BottomNavigationBar /> */}
            </AppFrame>
        );
    }
    else{
        return (
           <div></div>
        );
    }

   
}

export default PointPage;