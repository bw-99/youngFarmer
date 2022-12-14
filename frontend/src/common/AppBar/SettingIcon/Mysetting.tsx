import styled from "styled-components";
import setting from "../../../assets/images/btn-mysetting@3x.webp";
import React from "react";
import { Link } from "react-router-dom";

const AppBarIcon = styled.img`
  width: 24px;
  height: 24px;
  object-fit: contain;
  padding: 16px 16px 16px 8px;
  src: ${(props:any) => props.src};
`

export const MySettingComponent = () => {
    return (
      <Link to={"/mypage/setting"}>
        <AppBarIcon src={setting} alt="" />
      </Link>
    );
}