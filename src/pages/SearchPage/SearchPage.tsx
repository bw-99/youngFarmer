import React, { useState } from "react";

import { useParams, useLocation, useNavigate } from 'react-router-dom';
import styled from "styled-components";


import alarm from "../../assets/images/alarm@3x.png";
import shopping_bag from "../../assets/images/shopping_bag@3x.png";
import { AppBarComponentNoBack } from "../../common/AppBar/AppBar";



import { BottomNavigationBar } from "../../common/BottomNavigationBar/BottomNavigationBar";


function SearchPage(props: any) {
    const params = useParams();
    const location = useLocation();
    const navigate = useNavigate();


    return (
        <div style={{width: "100vw", height: "100vh"}}>
            {AppBarComponentNoBack("검색")}
            <h1> 작업 중 </h1>
            <BottomNavigationBar />
        </div>
    );
}

export default SearchPage;