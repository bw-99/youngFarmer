import recommendItemStawberry from "../../../assets/images/main_recommend_strawberry.png";
import shoppingBag from "../../../assets/images/shopping-bag-20px@3x.png";
import closeIcon from "../../../assets/images/btn-close-20-px@3x.png";


import { RecentSearchHistoryBg, RecentSearchSeperateLine, RecentSearchHistoryText, RecentTextStyle, RecentSearchHistoryClose } from "../atoms/RecentSearch";
import React,{ useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../reducers";
import { SearchHistoryType, SearchHistoryTypeList } from "../SearchConstants";
import { json } from "stream/consumers";
import { SearchDeleteAction } from "../SearchActions";

export const RecentSearchComponent = () => {

    const searchHistoryList: SearchHistoryType[] = useSelector((state:RootState) =>
        state.SearchReducer.history
    );
    
    return(
        <div>
            <div style={{margin:"20px 16px 8px 16px"}}>
                <RecentTextStyle> 최근 검색어 </RecentTextStyle>
            </div>

            <div style={{marginLeft:"8px", display:"flex", flexWrap: "wrap", flexDirection: "row"}}>
                {/* {RecentSearchHistoryItemComponent("제철과일")}
                {RecentSearchHistoryItemComponent("채소")}
                {RecentSearchHistoryItemComponent("무농약 채소")}
                {RecentSearchHistoryItemComponent("샤인머스켓")}
                {RecentSearchHistoryItemComponent("사과")}
                {RecentSearchHistoryItemComponent("시나몬 골드")} */}
                {searchHistoryList.map(item => RecentSearchHistoryItemComponent(item.text))}

            </div>
            <div style={{margin:"22px 16px 0px 16px"}}>
                <RecentSearchSeperateLine />
            </div>
        </div>
        
    )
}

// const RecentSearchHistoryItemListComponent = () => {
//     const searchHistoryList: SearchHistoryType[] = useSelector((state:RootState) =>
//         state.SearchReducer.history
//     );
    
//     const rows = [];

//     for(let item of searchHistoryList){
//         rows.push(RecentSearchHistoryItemComponent(item.text))
//     }

//     return rows
// }

export const RecentSearchHistoryItemComponent = (text: string) => {
    const dispatch = useDispatch();

    return(
        <RecentSearchHistoryBg key={text} style={{margin: "8px 6px"}}>
            <div style={{display:"flex", padding: "10px 7px 12px 10px"}}>
                <RecentSearchHistoryText> {text} </RecentSearchHistoryText>
                <div style={{width:"10px"}}></div>
                <RecentSearchHistoryClose onClick={() => {
                    dispatch(SearchDeleteAction(text));
                }} src={closeIcon}/>
            </div>
        </RecentSearchHistoryBg>
    );
}