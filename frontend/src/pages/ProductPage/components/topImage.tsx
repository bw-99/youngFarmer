import styled from "styled-components";
import recommendItemStawberry from "../../../assets/images/main_recommend_strawberry.png";
import { ImageSize, ImageCover, BottomBox, BottomBoxCurPage, BottomBoxTotalPage } from "../atoms/topImage";
import topExampleIcon from "../../../assets/images/rectangle@3x.png";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../reducers";
import { ProductDataObjectType, ProductDataType } from "../../../reducers/ProductReducer";

export const TopImageComp = () => {
    const [current, setCurrent] = useState(0);


    const selector: ProductDataType = useSelector((state:RootState) =>
        state.ProductInfoReducer!.productInfo
    );  

    const length = selector.photoDataList.photos.length;

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    };

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    };

    if (!Array.isArray(selector.photoDataList.photos) || selector.photoDataList.photos.length <= 0) {
        return null;
    }


    return (

        
        <div style={{paddingTop:"0px", display: "flex", height: "310px", alignItems: "center", justifyContent: "center"}}>
            {
                selector.photoDataList.main_photo.map((photo, index) => {
                    return (
                        index === current &&
                        <>
                        <ImageSize style={{maxWidth: "625px", }} src={photo} />
                        <ImageCover style={{maxWidth: "625px", }}/>
                        <BottomBox>
                            <div style={{padding: "4px 11px", display: "flex",  justifyContent: "center"}}>
                                <BottomBoxCurPage> {index+1} </BottomBoxCurPage>
                                <BottomBoxTotalPage> /10 </BottomBoxTotalPage>
                            </div>
                        </BottomBox>
                        </>
                    )
                })
            }
            
        </div>
    )
}