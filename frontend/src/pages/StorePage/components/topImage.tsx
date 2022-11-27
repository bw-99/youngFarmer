import styled from "styled-components";
import recommendItemStawberry from "../../../assets/images/main_recommend_strawberry.png";
import { ImageSize, ImageCover } from "../atoms/topImage";
import topExampleIcon from "../../../assets/images/rectangle@3x.png";
import React from "react";

type BackGroundImgParam = {
    background_photo: string
}

export const TopImageComp = ({background_photo}:BackGroundImgParam) => {
    return (
        <div style={{ display: "flex", height: "310px", alignItems: "center", justifyContent: "center",zIndex: "-10" }}>
            <ImageSize style={{ maxWidth: "625px", }} src={background_photo} />
            <ImageCover style={{maxWidth: "625px", }}/>
        </div>
    )
}