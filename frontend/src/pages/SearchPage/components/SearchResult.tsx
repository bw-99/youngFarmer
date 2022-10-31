import { ItemUnitListComp } from "../../../common/ItemList/ItemList";
import { DropDownBtn, FilterBackGround, FilterImage, FilterText, FilterName } from "../atoms/SearchResult";
import btnDropDown from "../../../assets/images/btn-dropdown-20-px@3x.png";
import filterBtn from "../../../assets/images/filter-btn@3x.png";
import React from "react";
import { ProductDataType } from "../../../reducers/ProductReducer";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../reducers";
import { SearchFilterOpenAction } from "../SearchActions";
export const SearchResultComp = () => {

    const searchSelector: ProductDataType[] = useSelector((state:RootState) =>
        state.SearchDetailReducer.products
    );


    return(
        <div>
           <SearchResultFilterComp />
            <div style={{padding: "0 9.5px 0 9.5px"}}>
                <ItemUnitListComp image_width={165} product_list={
                    searchSelector.map((product)=> {
                        return product
                    })
                } />
            </div>
        </div>
    );
}

export const SearchResultFilterComp = () => {
    const dispatch = useDispatch();
    return(
        <div style={{margin: "0 16px", display: "flex", alignItems: "center", justifyContent: "space-between"}}>
             <div style={{display: "flex", alignItems: "center"}}>
                <FilterName> 정확도순 </FilterName>
                <DropDownBtn src={btnDropDown} />
             </div>
             
             <FilterBackGround onClick={()=> {
                dispatch(SearchFilterOpenAction());
             }}>
                <FilterImage src={filterBtn}/>
                <FilterText> 필터 </FilterText>
             </FilterBackGround>
        </div>
    );
}