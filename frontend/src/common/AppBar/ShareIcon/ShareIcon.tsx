import React from "react";
import styled from "styled-components";
import btnOutIcon from "../../../assets/images/btn-out@3x.png";
import btnOutBlackIcon from "../../../assets/images/btn-out-black@3x.png";

const AppBarIcon = styled.img`
  width: 24px;
  height: 24px;
  object-fit: contain;
  padding: 16px 8px 16px 8px;
  src: ${(props:any) => props.src}
`


export const ShareIconComponent = () => {
    return (
        <AppBarIcon src={btnOutIcon} alt="" />
    );
}

export const ShareIconBlackComponent = () => {
    return (
        <AppBarIcon src={btnOutBlackIcon} alt="" />
    );
}