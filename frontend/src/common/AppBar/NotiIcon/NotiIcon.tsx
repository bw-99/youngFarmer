import styled from "styled-components";
import alarm from "../../../assets/images/alarm@3x.png";
import alarmWhite from "../../../assets/images/alarm-white@3x.png";
import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AppBarIcon = styled.img`
  max-width: 625px;
  width: 24px;
  height: 24px;
  object-fit: contain;
  padding: 16px 8px 16px 8px;
  src: ${(props:any) => props.src};
`

export const NotiComponent = () => {
    return (
      <Link to={"/noti"}>
        <AppBarIcon src={alarm} alt="" />
      </Link>
    );
}


export const NotiComponentWhite = () => {
  return (
    <Link to={"/noti"}>
      <AppBarIcon src={alarmWhite} alt="" />
    </Link>
  );
}