import { ItemUnitListComp } from "../../../common/ItemList/ItemList";
import { DropDownBtn, FilterBackGround, FilterImage, FilterText, FilterName } from "../atoms/SearchResult";
import btnDropDown from "../../../assets/images/btn-dropdown-20-px@3x.png";
import filterBtn from "../../../assets/images/filter-btn@3x.png";

export const SearchResultComp = () => {
    return(
        <div>
           <SearchResultFilterComp />
            <div style={{padding: "0 9.5px 0 9.5px"}}>
                {ItemUnitListComp(165)}
            </div>
        </div>
    );
}

export const SearchResultFilterComp = () => {
    return(
        <div style={{margin: "0 16px", display: "flex", alignItems: "center", justifyContent: "space-between"}}>
             <div style={{display: "flex", alignItems: "center"}}>
                <FilterName> 정확도순 </FilterName>
                <DropDownBtn src={btnDropDown} />
             </div>
             
             <FilterBackGround>
                <FilterImage src={filterBtn}/>
                <FilterText> 필터 </FilterText>
             </FilterBackGround>
        </div>
    );
}