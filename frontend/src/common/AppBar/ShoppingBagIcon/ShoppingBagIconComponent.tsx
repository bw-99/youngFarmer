import styled from "styled-components";
import shoppingBag from "../../../assets/images/shopping_bag@3x.png";
import shoppingBagWhite from "../../../assets/images/shoppingbag-white-24-px@3x.png";
import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { Link } from "react-router-dom";
const AppBarIcon = styled.img`
  width: 24px;
  height: 24px;
  object-fit: contain;
  padding: 16px 16px 16px 8px;
  src: ${(props:any) => props.src};
`


export const ShoppingBagIconComponent = () => {
    return (
      <Link to={"/cart"}>
        <AppBarIcon src={shoppingBag} alt="" />
      </Link>
    );
}

export const ShoppingBagIconWhiteComponent = () => {
  return (
    <Link to={"/cart"}>
      <AppBarIcon src={shoppingBagWhite} alt="" />
    </Link>
  );
}