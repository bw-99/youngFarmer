import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { useParams, useLocation, useNavigate } from 'react-router-dom';
import styled from "styled-components";
import { db, FirebaseAuth } from "../..";
import { AppFrame } from "../../App";


import alarm from "../../assets/images/alarm@3x.webp";
import shopping_bag from "../../assets/images/shopping_bag@3x.webp";
import { AppBarComponentMyPage, AppBarComponentNoBack, AppBarComponentOnlyBack } from "../../common/AppBar/AppBar";



import { BottomNavigationBar } from "../../common/BottomNavigationBar/BottomNavigationBar";
import { RootState } from "../../reducers";
import { MyPageDataType } from "../../reducers/MypageReducer";
import { PointPageComp } from "./components/point";
import { ProfileComp } from "./components/profile";
import { StorePointPageComp } from "./components/savedStore";
import { ServiceCenterComp } from "./components/serviceCenter";
import { ShoppingComp } from "./components/shopping";
import { getProfileAction } from "./MyAction";
import { collection, query } from 'firebase/firestore';
import { where } from 'firebase/firestore';
import { getDocs } from 'firebase/firestore';
import { StoreDataType } from "../StorePage/StoreType";



function SavedStorePage(props: any) {
    const params = useParams();
    const location = useLocation();
    const navigate = useNavigate();
    const dispatch = useDispatch();



    const followSelector: number[] = useSelector((state:RootState) =>
        state.StoreFollowReducer.store_list
    ); 

    const [storeList, setStoreList] = useState<StoreDataType[] | null>(null);

    const getStoreData = async() => {
        const storeRef = collection(db, "store");
        let storeListData:any[] = [];
        for (const store_id of followSelector) {
            console.log(store_id);
            
            let q = query(storeRef, where("store_id" , "==", store_id));
            let temp = await getDocs(q);
            if(temp.empty) {
                continue;
            }
            storeListData.push(temp.docs[0].data());
        }
        setStoreList(storeListData);
    }


    useEffect(()=> {
        getStoreData();
    },[followSelector])


    if (storeList) {
        return(
            <AppFrame>
                <AppBarComponentOnlyBack title={"찜한 상점"} />
                <StorePointPageComp storeList={storeList!} />
            </AppFrame>
        );
    }
    else{
        return (
           <div></div>
        );
    }

   
}

export default SavedStorePage;