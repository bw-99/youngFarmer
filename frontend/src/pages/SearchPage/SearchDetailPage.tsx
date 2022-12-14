import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { useParams, useLocation, useNavigate } from 'react-router-dom';
import { AppFrame } from "../../App";


import { AppBarComponentNoBack, AppBarComponentSearch } from "../../common/AppBar/AppBar";
import { BackgroundWrapper } from "../../common/BackgroundWrapper/BackgroundWrapper";



import { BottomNavigationBar } from "../../common/BottomNavigationBar/BottomNavigationBar";
import { RootState } from "../../reducers";
import { ProductDataList, ProductDataType } from "../../reducers/ProductReducer";
import { FilterComponent } from "../SearchPage/components/Filter";
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