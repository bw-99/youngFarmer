import { RecommendItem, RecommendItemFollowButton, RecommendItemImage, RecommendItemRate, RecommendItemSortIcon, RecommendItemSortText, RecommendItemTitle, RecommendText } from "../atoms/RecommendStore";

import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../reducers";
import { StoreDataType } from "../../StorePage/StoreType";
import { FollowButton } from "../../../common/FollowButton/followButton";
import { useNavigate } from 'react-router-dom';



export const RecommendStoreComponent = () => {
    const storeSelector: StoreDataType[] = useSelector((state:RootState) =>
        state.SearchDetailReducer.storeList
    );


    return(
        <div style={{padding: "0px 16px 30px 16px"}}>
            <RecommendText>  오늘의 추천 상점 </RecommendText>
            <div style={{marginTop: "8px"}}>
                {
                    storeSelector.length > 0
                    ?
                    storeSelector.map((store) => {
                        return(
                            <RecommendStoreItemComp key={store.name} store={store}/>
                        )
                    })
                    :
                    <>
                    검색 결과가 존재하지 않습니다.
                    </>

                }
            </div>
        </div>
    );
}

type productParam = {
    store: StoreDataType
}

const RecommendStoreItemComp = ({store}:productParam) => {
    const navigate = useNavigate();

    return(
        <div style={{paddingTop: "8px", paddingBottom: "8px"}}>
            <RecommendItem 
            onClick={()=>{
                navigate(`/store/${store.store_id}`);        
            }}
            style={{display:"flex", alignItems: "center", justifyContent:"space-between"}}>
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
                    <FollowButton store_id={store.store_id}/>
                </div>
            </RecommendItem>
        </div>
    );
}