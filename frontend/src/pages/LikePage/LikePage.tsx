import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { useParams, useLocation, useNavigate } from 'react-router-dom';
import { AppFrame } from "../../App";


import { AppBarComponentNoBack } from "../../common/AppBar/AppBar";



import { BottomNavigationBar } from "../../common/BottomNavigationBar/BottomNavigationBar";
import { RootState } from "../../reducers";
import { ProductDataType } from "../../reducers/ProductReducer";
import { ItemComponent } from "./components/item";


function LikePage(props: any) {

    const likeSelector: ProductDataType[] = useSelector((state:RootState) =>
        state.SearchDetailReducer.likeProducts
    );

    // useEffect(() => {
    //     FirebaseAuth.onAuthStateChanged((user) => {
    //         if(user){
    //             dispatch(getLikeAction(user.uid));
    //         }
    //     })
    // }, [])
    
    if(likeSelector){
        return (
            <AppFrame>
                <AppBarComponentNoBack title="찜하기"/>
                <ItemComponent />
                <BottomNavigationBar />
            </AppFrame>
        );
    }
    else{
        return (
            <AppFrame>
                {/* <AppBarComponentNoBack title="찜하기"/>
                <ItemComponent /> */}
                <BottomNavigationBar />
            </AppFrame>
        );
    }
 


}

export default LikePage;