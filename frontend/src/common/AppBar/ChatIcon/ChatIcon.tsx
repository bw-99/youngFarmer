import styled from "styled-components";
import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ChatPageIconOff from "../../../assets/images/btn-tabbar-chat-off@3x.png";
import { StoreDataType, StoreProductDataType } from "../../../pages/StorePage/StoreType";

const AppBarIcon = styled.img`
  width: 24px;
  height: 24px;
  object-fit: contain;
  padding: 16px 16px 16px 8px;
  src: ${(props:any) => props.src};
`


export const ChatIconComponent = (props: StoreProductDataType) => {
    return (
        <Link to={"/chat2"} state={{ props: props }} >
            <AppBarIcon src={ChatPageIconOff} alt="" / >
      </Link>
    );
}

export const ChatWhiteIconComponent = (props: StoreProductDataType) => {
  return (
      <Link to={"/chat2"} state={{ props: props }}>
          <AppBarIcon src={ChatPageIconOff} alt="" />
    </Link>
  );
}