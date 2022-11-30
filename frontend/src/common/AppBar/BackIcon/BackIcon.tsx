import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import backArrow from "../../../assets/images/btn-back@3x.webp"
import backArrowWhite from "../../../assets/images/btn-back-white@3x.webp"

const AppBarArrow = styled.img`
  width: 24px;
  height: 24px;
  padding: 16px 8px 16px 16px;
  object-fit: contain;
`

export const BackIconComponent = () => {
    const navigate = useNavigate();
    return (
        <div onClick={()=> {
            navigate(-1);}}>
            <AppBarArrow src={backArrow}/>
        </div>
    );
}


export const BackIconWhiteComponent = () => {
    const navigate = useNavigate();
    return (
        <div onClick={()=> {
            navigate(-1);}}>
            <AppBarArrow src={backArrowWhite}/>
        </div>
    );
}
