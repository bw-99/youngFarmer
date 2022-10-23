import styled from "styled-components";
import recommendItemStawberry from "../../../assets/images/main_recommend_strawberry.png";
import { ImageSize, ImageCover, BottomBox, BottomBoxCurPage, BottomBoxTotalPage } from "../atoms/topImage";
import topExampleIcon from "../../../assets/images/rectangle@3x.png";
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../reducers";
import { ProductDataObjectType, ProductDataType } from "../../../reducers/ProductReducer";

export const TopImageComp = () => {
    const selector: ProductDataType = useSelector((state:RootState) =>
        state.ProductInfoReducer!.productInfo
    );  

    return (
        <div style={{ display: "flex", height: "310px", alignItems: "center", justifyContent: "center"}}>
    
            <ImageSize style={{maxWidth: "625px", }} src={selector.photoDataList.main_photo} />
            <ImageCover style={{maxWidth: "625px", }}/>
            <BottomBox>
                <div style={{padding: "4px 11px", display: "flex",  justifyContent: "center"}}>
                    <BottomBoxCurPage> 1 </BottomBoxCurPage>
                    <BottomBoxTotalPage> /10 </BottomBoxTotalPage>
                </div>
            </BottomBox>
        </div>
    )
}