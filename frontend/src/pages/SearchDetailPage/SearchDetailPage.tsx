import React, { useState } from "react";
import { useSelector } from "react-redux";

import { useParams, useLocation, useNavigate } from 'react-router-dom';
import styled from "styled-components";
import { AppFrame } from "../../App";


import alarm from "../../assets/images/alarm@3x.png";
import shopping_bag from "../../assets/images/shopping_bag@3x.png";
import { AppBarComponentNoBack, AppBarComponentSearch } from "../../common/AppBar/AppBar";



import { BottomNavigationBar } from "../../common/BottomNavigationBar/BottomNavigationBar";
import { CategoryComponent } from "../../common/Category/category";
import { RootState } from "../../reducers";
import { ProductDataType } from "../../reducers/ProductReducer";
import { OtherChoiceComp } from "./components/OtherChoice";
import { SearchResultComp } from "./components/SearchResult";
import { ToggleComponent } from "./components/ToggleComponent";


function SearchDetailPage(props: any) {
    const params = useParams();
    const location = useLocation();
    const navigate = useNavigate();

    console.log(params);

    const searchSelector: ProductDataType[] = useSelector((state:RootState) =>
        state.SearchDetailReducer.products
    );

    if(searchSelector) {
        return (
            <AppFrame>
                <AppBarComponentSearch />
                <ToggleComponent />
                <OtherChoiceComp />
                <SearchResultComp />
                {/* <BottomNavigationBar /> */}
            </AppFrame>
               
        );
    }
    else{
        return (
            <AppFrame>
                <AppBarComponentSearch />
            </AppFrame>
               
        );
    }   


}

export default SearchDetailPage;