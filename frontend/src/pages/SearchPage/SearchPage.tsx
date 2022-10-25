import React, { useState } from "react";

import { useParams, useLocation, useNavigate } from 'react-router-dom';
import styled from "styled-components";
import { AppFrame } from "../../App";


import alarm from "../../assets/images/alarm@3x.png";
import shopping_bag from "../../assets/images/shopping_bag@3x.png";
import { AppBarComponentNoBack, AppBarComponentSearch } from "../../common/AppBar/AppBar";



import { BottomNavigationBar } from "../../common/BottomNavigationBar/BottomNavigationBar";
import { CategoryComponent } from "../../common/Category/category";
import { RecentSearchComponent } from "./components/RecentSearch";
import { RecommendStoreComponent } from "./components/RecommendStore";

import {FilterComponent} from "./components/Filter"

function SearchPage(props: any) {
    const params = useParams();
    const location = useLocation();
    const navigate = useNavigate();

    return (
        <AppFrame>
            <AppBarComponentSearch />
            <CategoryComponent />
            <RecentSearchComponent />
            <RecommendStoreComponent />
            <BottomNavigationBar />
        </AppFrame>
    );
}

export default SearchPage;