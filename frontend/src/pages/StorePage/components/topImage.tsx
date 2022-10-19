import styled from "styled-components";
import recommendItemStawberry from "../../../assets/images/main_recommend_strawberry.png";
import { ImageSize, ImageCover } from "../atoms/topImage";
import topExampleIcon from "../../../assets/images/rectangle@3x.png";
import React from "react";

export const TopImageComp = () => {
    return (
        <div style={{ display: "flex", height: "310px", alignItems: "center", justifyContent: "center"}}>
            <ImageSize style={{maxWidth: "767px", }} src={topExampleIcon} />
            <ImageCover style={{maxWidth: "767px", }}/>
        </div>
    )
}