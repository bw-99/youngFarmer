import React, { useEffect } from "react";
import {ProductStateList } from "../ListPage/components/ListPageComp"
import { useParams, Link, useLocation, useNavigate } from 'react-router-dom';
import { AppFrame } from "../../App";
import rightArrow from "../../assets/images/btn-arrow-r-14-px@3x.png"
import leftArrow from "../../assets/images/btn-back@3x.png"
import { AppBarComponentOnlyBack } from "../../common/AppBar/AppBar";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../reducers";
import { MyPageDataType } from "../../reducers/MypageReducer";
import { CircularProgress } from '@mui/material';
import { FirebaseAuth } from "../..";
import defaultPhoto from "../../assets/images/btn-avatar-default@3x.png";


export const ListPage = () => {

    const dispatch = useDispatch();

    /*const selector: MyPageDataType = useSelector((state: RootState) =>
        state.ProfileReducer!.mypageInfo
    );*/

    return (
        <AppFrame>
            <AppBarComponentOnlyBack title={"주문•배송"} />
            <ProductStateList/>
        </AppFrame>
        
    );

}

export default ListPage;