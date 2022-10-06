import { useEffect, useState } from "react";
import { BackIconComponent } from "./BackIcon/BackIcon";
import { NotiComponent } from "./NotiIcon/NotiIcon";
import { ShoppingBagIconComponent } from "./ShoppingBagIcon/ShoppingBagIconComponent";


import styled from "styled-components";
import { SettingComponent } from "./SettingIcon/SettingIcon";

const AppBar = styled.div`
  width: 100vw;
  height: 56px;
  background-color: #ffffff;
  display: flex;
  justify-content: space-between;
`

const AppBarMain = styled.div`
  height: 56px;
  display: flex;
  justify-content: flex-end;
`

const AppBarArrow = styled.img`
  width: 24px;
  height: 24px;
  padding: 16px 8px 16px 8px;
  object-fit: contain;
`

const AppBarTitle = styled.div`
  font-family: AppleSDGothicNeo;
  font-size: 18px;
  font-weight: 600;
  text-align: center;
  color: #272727;
  padding-top: 18px;
  padding-down: 17px;
`


export const AppBarComponentBack = (title: string) => {
    return (

        <div style={{display:"flex", width:"100vw"}}>
            <div style={{flex:2, display:"flex", justifyContent: "flex-start", alignItems:"center"}}>
                <BackIconComponent />
            </div>
            <div style={{flex:1, display:"flex", justifyContent: "center"}}>
                <AppBarTitle> {title} </AppBarTitle>
            </div>
            <div style={{flex:2, display:"flex", justifyContent: "flex-end", alignItems:"center"}}>
                <NotiComponent />
                <ShoppingBagIconComponent />
            </div>
        </div>
    )
}

export const AppBarComponentNoBack = (title: string) => {
    return (

        <div style={{display:"flex", width:"100vw"}}>
            <div style={{flex:2, display:"flex", justifyContent: "flex-start", alignItems:"center"}}>
            </div>
            <div style={{flex:1, display:"flex", justifyContent: "center"}}>
                <AppBarTitle> {title} </AppBarTitle>
            </div>
            <div style={{flex:2, display:"flex", justifyContent: "flex-end", alignItems:"center"}}>
                <NotiComponent />
                <ShoppingBagIconComponent />
            </div>
        </div>
    )
}

export const AppBarComponentSetting = (title: string) => {
    return (

        <div style={{display:"flex", width:"100vw"}}>
            <div style={{flex:2, display:"flex", justifyContent: "flex-start", alignItems:"center"}}>
            </div>
            <div style={{flex:1, display:"flex", justifyContent: "center"}}>
                <AppBarTitle> {title} </AppBarTitle>
            </div>
            <div style={{flex:2, display:"flex", justifyContent: "flex-end", alignItems:"center"}}>
                <NotiComponent />
                <SettingComponent />
            </div>
        </div>
    )
}

export const AppBarComponentMain = () => {
    return (
        <AppBarMain>
            <NotiComponent />
            <ShoppingBagIconComponent />
        </AppBarMain>
    );
}