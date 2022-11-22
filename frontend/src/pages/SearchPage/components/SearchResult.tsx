import { ItemUnitListComp } from "../../../common/ItemList/ItemList";
import { DropDownBtn, FilterBackGround, FilterImage, FilterText, FilterName } from "../atoms/SearchResult";
import btnDropDown from "../../../assets/images/btn-dropdown-20-px@3x.png";
import filterBtn from "../../../assets/images/filter-btn@3x.png";
import React from "react";
import { ProductDataType, StoreDataType } from "../../../reducers/ProductReducer";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../reducers";
import { SearchFilterOpenAction } from "../SearchActions";
import { OtherChoiceComp } from "./OtherChoice";
import { RecommendStoreComponent } from "./RecommendStore";
export const SearchResultComp = () => {
    const toggleSelector: number = useSelector((state:RootState) =>
        state.SearchToggleReducer
    );
    
    const searchSelector: ProductDataType[] = useSelector((state:RootState) =>
        state.SearchDetailReducer.products
    );



    if(toggleSelector == 0) {
        return(
            <div style={{marginTop: "30px"}}>
                <OtherChoiceComp />
                <SearchResultFilterComp />
                <div style={{padding: "0 9.5px 0 9.5px"}}>
                    {
                        searchSelector.length > 0
                        ?
                        <ItemUnitListComp image_width={165} product_list={
                            searchSelector.map((product)=> {
                                return product
                            })
                        } />
                        :
                        <>
                        검색 결과가 존재하지 않습니다.
                        </>
                    }
                    
                </div>
            </div>
        );
    }

    return(
        <div style={{marginTop: "30px"}}>
            <RecommendStoreComponent />
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