import { useEffect, useState } from "react";
import { BackIconComponent } from "./BackIcon/BackIcon";
import { NotiComponent } from "./NotiIcon/NotiIcon";
import { ShoppingBagIconComponent } from "./ShoppingBagIcon/ShoppingBagIconComponent";


import styled from "styled-components";
import { SettingComponent } from "./SettingIcon/SettingIcon";


import searchIconImage from "../../assets/images/btn-search@3x.png";

// btn-search

export const SearchIcon = styled.img`
  width: 24px;
  height: 24px;
  object-fit: contain;
  padding: 12px 10px 12px 12px;
`

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


export const SearchInput = styled.div`
  height: 48px;
  border-radius: 25px;
  background-color: #f5f5f5;
  flex: 1;
  margin: 0 16px;
`

export const SearchInputText = styled.input`
  font-family: AppleSDGothicNeo;
  font-size: 15px;
  font-weight: 500;
  color: #b5b5b5;
  border: none;
  background-color: #f5f5f5;
  flex: 1;
  margin-right: 20px;
  outline: none;


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

export const AppBarComponentSearch = () => {
    return (

        <div style={{display:"flex", width:"100vw", justifyContent: "flex-end", alignItems:"center" }}>
            {/* <div style={{display:"flex",flex:1,  justifyContent: "flex-start", alignItems:"center"}}> */}
                <SearchInput> 
                    <div style={{display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems:"center"}}>
                        <SearchIcon src={searchIconImage}/>
                        <SearchInputText type="text" placeholder="검색어를 입력해주세요."></SearchInputText>
                    </div>
                    </SearchInput>
            {/* </div> */}
            
            <div style={{display:"flex", justifyContent: "flex-end", alignItems:"center"}}>
                <NotiComponent />
                <SettingComponent />
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