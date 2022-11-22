import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { useParams, useLocation, useNavigate } from 'react-router-dom';
import styled from "styled-components";
import { AppFrame } from "../../App";


import alarm from "../../assets/images/alarm@3x.png";
import shopping_bag from "../../assets/images/shopping_bag@3x.png";
import { AppBarComponentNoBack, AppBarComponentSearch } from "../../common/AppBar/AppBar";
import { BackgroundWrapper } from "../../common/BackgroundWrapper/BackgroundWrapper";



import { BottomNavigationBar } from "../../common/BottomNavigationBar/BottomNavigationBar";
import { CategoryComponent } from "../../common/Category/category";
import { RootState } from "../../reducers";
import { ProductDataList, ProductDataType } from "../../reducers/ProductReducer";
import { FilterComponent } from "../SearchPage/components/Filter";
import { OtherChoiceComp } from "./components/OtherChoice";
import { SearchResultComp } from "./components/SearchResult";
import { ToggleComponent } from "./components/ToggleComponent";
import { SearchFilterCloseAction } from "./SearchActions";


function SearchDetailPage(props: any) {
    const params = useParams();
    const location = useLocation();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    console.log(params);

    const searchSelector: ProductDataList = useSelector((state:RootState) =>
        state.SearchDetailReducer
    );


    const filterSelector: boolean = useSelector((state:RootState) =>
        state.SearchFilterReducer
    );


    if(searchSelector.products) {
        return (
            <AppFrame>
                <AppBarComponentSearch />
                <ToggleComponent />
                <SearchResultComp />

                <BackgroundWrapper 
                onClose={()=>{dispatch(SearchFilterCloseAction());}}
                backgroundColor={"rgba(0,0,0,0.5)"} isActive={filterSelector}>
                    <FilterComponent></FilterComponent>
                </BackgroundWrapper>

                <BottomNavigationBar />
            </AppFrame>
               
        );
    }
    else{
        return (
            <AppFrame>
                <AppBarComponentSearch />
                <BottomNavigationBar />
            </AppFrame>
               
        );
    }   


}

export default SearchDetailPage;