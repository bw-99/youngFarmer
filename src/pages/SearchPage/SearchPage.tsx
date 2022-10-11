import React, { useState } from "react";

import { useParams, useLocation, useNavigate } from 'react-router-dom';
import styled from "styled-components";


import alarm from "../../assets/images/alarm@3x.png";
import shopping_bag from "../../assets/images/shopping_bag@3x.png";
import { AppBarComponentNoBack, AppBarComponentSearch } from "../../common/AppBar/AppBar";



import { BottomNavigationBar } from "../../common/BottomNavigationBar/BottomNavigationBar";
import { CategoryComponent } from "../../common/Category/category";
import { RecentSearchComponent } from "./components/RecentSearch";
import { RecommendStoreComponent } from "./components/RecommendStore";


function SearchPage(props: any) {
    const params = useParams();
    const location = useLocation();
    const navigate = useNavigate();

    return (
        <div style={{width: "100vw", height: "100vh"}}>
            <AppBarComponentSearch />
            <div style={{marginTop: "56px"}}>
                <CategoryComponent />
            </div>
            <RecentSearchComponent />
            <RecommendStoreComponent />
            <BottomNavigationBar />
        </div>
    );
}

export default SearchPage;