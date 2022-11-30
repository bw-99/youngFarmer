import React from "react";

import {AppBarMainBox, TopText, StoreBox, StoreImg, StoreName, GPA, DOT, Classification, FollowingBox, FollowingText} from "../atoms/savedStore"

import BackBtn from "../../../assets/images/btn-back.webp";
import StarBtn from "../../../assets/images/btn-rate-on.webp";
import { StoreDataType } from "../../StorePage/StoreType";
import { FollowButton } from "../../../common/FollowButton/followButton";
import { useNavigate } from 'react-router-dom';

type StoreListParam = {
    storeList: StoreDataType[]
}

export const StorePointPageComp = ({storeList}:StoreListParam) => {
    return(
        <div style={{marginTop: "76px"}}>
            {
                storeList.length
                ?
                storeList.map((store) => {
                    return <StoreComp store={store}/>
                })
                :
                <div>
                    찜한 상점이 없습니다.
                </div>
            }
            
            
        </div>
    )
}

type StoreParam = {
    store: StoreDataType
}

const StoreComp = ({store}:StoreParam) => {
    const navigate = useNavigate();

    return(
        <StoreBox  
        onClick={()=>{
            navigate(`/store/${store.store_id}`);        
        }}
        style = {{display: "flex", flexDirection: "row",  justifyContent:"space-between", margin: "0 16px 16px 16px", padding: "7px 16px 7px 7px", alignItems:"center"}}>
                <div style={{display: "flex", alignItems:"center"}}>
                    <StoreImg src={store.photo} style = {{display: "flex", margin: "0 16px 0 7px"}} />
                    <div style = {{display: "flex", flexDirection: "column"}}>
                        <StoreName style = {{display: "flex", margin: "12px 0 9px 0"}}> {store.name} </StoreName>
                        <div style = {{display: "flex", flexDirection: "row", alignItems:"center"}}>
                            <img src = {StarBtn} style = {{
                                width: "16px",
                                height: "16px",
                                display: "flex", margin: "0 2px 0 0"}} />
                            <GPA style = {{display: "flex", margin : "0 8px 0 0"}}> 5.0 </GPA>
                            {
                                store.category.map((cat) => {
                                    return (
                                        <div style={{display:"flex", alignItems:"center", marginRight: "8px", justifyContent:"flex-start"}}>
                                            <DOT style = {{display: "flex", margin : "0 8px 0 0"}} />
                                            <Classification style = {{display: "flex"}}> {cat} </Classification>
                                        </div>
                                    )
                                })
                            }
                            
                        </div>
                    </div>
                </div>
                <FollowButton store_id={store.store_id}/>
            </StoreBox>
    )
}