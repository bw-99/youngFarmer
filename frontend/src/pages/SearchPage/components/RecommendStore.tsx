import { RecommendItem, RecommendItemFollowButton, RecommendItemImage, RecommendItemRate, RecommendItemSortIcon, RecommendItemSortText, RecommendItemTitle, RecommendText } from "../atoms/RecommendStore";

import React from "react";
import recommendItemStawberry from "../../../assets/images/main_recommend_strawberry.png";
import { useSelector } from "react-redux";
import { RootState } from "../../../reducers";
import { ProductDataType, StoreDataType } from "../../../reducers/ProductReducer";



export const RecommendStoreComponent = () => {
    const storeSelector: StoreDataType[] = useSelector((state:RootState) =>
        state.SearchDetailReducer.storeList
    );


    return(
        <div style={{padding: "0px 16px 30px 16px"}}>
            <RecommendText>  오늘의 추천 상점 </RecommendText>
            <div style={{marginTop: "8px"}}>
                {
                    storeSelector.map((store) => {
                        return(
                            <RecommendStoreItemComp key={store.name} store={store}/>
                        )
                    })
                }
            </div>
        </div>
    );
}

type productParam = {
    store: StoreDataType
}

const RecommendStoreItemComp = ({store}:productParam) => {
    return(
        <div style={{paddingTop: "8px", paddingBottom: "8px"}}>
            <RecommendItem style={{display:"flex", alignItems: "center", justifyContent:"space-between"}}>
                <div style={{display:"flex", alignItems: "center"}}>
                    <RecommendItemImage src={store.photo}/>

                    <div>
                        <RecommendItemTitle> {store.name} </RecommendItemTitle>
                        <div style={{marginTop: "9px", display: "flex", alignItems:"center"}}>
                            <RecommendItemRate > 5.0 </RecommendItemRate>
                            <RecommendItemSortIcon />
                            {
                                store.category.map((cat)=>{
                                    return <RecommendItemSortText key={cat}>{cat} &nbsp;</RecommendItemSortText>
                                })
                            }
                        </div>
                    </div>
                </div>
                

                <div style={{marginRight: "16px"}}>
                    <RecommendItemFollowButton> 팔로우 </RecommendItemFollowButton>
                </div>
            </RecommendItem>
        </div>
    );
}