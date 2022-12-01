import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { db, FirebaseAuth } from "../..";
import { AppFrame } from "../../App";


import { AppBarComponentOnlyBack } from "../../common/AppBar/AppBar";



import { RootState } from "../../reducers";
import { StorePointPageComp } from "./components/savedStore";
import { collection, query } from 'firebase/firestore';
import { where } from 'firebase/firestore';
import { getDocs } from 'firebase/firestore';
import { StoreDataType } from "../StorePage/StoreType";



function SavedStorePage(props: any) {


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