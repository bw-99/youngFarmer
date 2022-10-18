import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { BackIconComponent, BackIconWhiteComponent } from "./BackIcon/BackIcon";
import { NotiComponent } from "./NotiIcon/NotiIcon";
import { ShoppingBagIconComponent, ShoppingBagIconWhiteComponent } from "./ShoppingBagIcon/ShoppingBagIconComponent";


import styled, { keyframes } from "styled-components";
import { SettingComponent } from "./SettingIcon/SettingIcon";


import searchIconImage from "../../assets/images/btn-search@3x.png";



import { useDispatch, useSelector } from "react-redux";
import { SearchCrateAction } from "../../pages/SearchPage/SearchActions";
import { useNavigate } from "react-router-dom";
import { ShareIconBlackComponent, ShareIconComponent } from "./ShareIcon/ShareIcon";
import { MySettingComponent } from "./SettingIcon/Mysetting";

// btn-search
interface ScrollProps {
    readonly isScrollDown: boolean;
}

export const SearchIcon = styled.img`
  width: 24px;
  height: 24px;
  object-fit: contain;
  padding: 12px 10px 12px 12px;
`

const fadein = keyframes`
    from {
        background-color: rgba(255,255,255,0);
    }   
    to {
        background-color: rgba(255,255,255,1);
    }
`


const AppBarAtom = styled.div<ScrollProps>`
    position: fixed;
    z-index:1000;
    height: 56px;
    transition: background-color 200ms cubic-bezier(0.4, 0, 0.2, 1);
    top: 0;
    background-color: ${props => props.isScrollDown? "rgba(255,255,255,1)" : "rgba(255,255,255,0)"};
    width: 100vw;
`

const AppBar = styled.div`
  width: 100vw;
  height: 56px;
  background-color: #ffffff;
  display: flex;
  justify-content: space-between;
`

const AppBarMain = styled.div`
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
  padding-bottom: 17px;
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


export const AppBarComponentOnlyBack = (title: string) => {
    const [isScrolled, setIsScrolled] = useState(false);

    const pop = () => {
        console.log(window.scrollY);
        if(window.scrollY > 0){
            setIsScrolled(true);
        }
        else{
            setIsScrolled(false);
        }
      }

      
    useEffect(() => {
        window.addEventListener('scroll', pop);
      
        return () => window.removeEventListener('scroll', pop);
      },[]);
      
    return (
    <AppBarAtom isScrollDown={isScrolled}>
        <div style={{display:"flex", width:"100vw"}}>
            <div style={{flex:2, display:"flex", justifyContent: "flex-start", alignItems:"center"}}>
                <BackIconComponent />
            </div>
            <div style={{flex:4, display:"flex", justifyContent: "center"}}>
                <AppBarTitle> {title} </AppBarTitle>
            </div>
            <div style={{flex:2, display:"flex", justifyContent: "flex-end", alignItems:"center"}}>
            </div>
        </div>
        </AppBarAtom>
    )
}

export const AppBarComponentProduct = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    const pop = () => {
        console.log(window.scrollY);
        if(window.scrollY > 0){
            setIsScrolled(true);
        }
        else{
            setIsScrolled(false);
        }
      }

      
    useEffect(() => {
        window.addEventListener('scroll', pop);
      
        return () => window.removeEventListener('scroll', pop);
      },[]);
      
    return (
    <AppBarAtom isScrollDown={isScrolled}>
        <div style={{display:"flex", width:"100vw", justifyContent: "space-between"}}>
            <div style={{display:"flex", justifyContent: "flex-start", alignItems:"center"}}>
                {isScrolled? <BackIconComponent /> : <BackIconWhiteComponent />}
            </div>
           
            <div style={{display:"flex", justifyContent: "flex-end", alignItems:"center"}}>
                {isScrolled? <ShareIconBlackComponent /> : <ShareIconComponent />}
                {isScrolled? <ShoppingBagIconComponent /> : <ShoppingBagIconWhiteComponent />}
                
            </div>
        </div>
    </AppBarAtom>
    )
}


export const AppBarComponentStore = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    const pop = () => {
        console.log(window.scrollY);
        if (window.scrollY > 0) {
            setIsScrolled(true);
        }
        else {
            setIsScrolled(false);
        }
    }


    useEffect(() => {
        window.addEventListener('scroll', pop);

        return () => window.removeEventListener('scroll', pop);
    }, []);

    return (
        <AppBarAtom isScrollDown={isScrolled}>
            <div style={{ display: "flex", width: "100vw", justifyContent: "space-between" }}>
                <div style={{ display: "flex", justifyContent: "flex-start", alignItems: "center" }}>
                    {isScrolled ? <BackIconComponent /> : <BackIconWhiteComponent />}
                </div>

                <div style={{ display: "flex", justifyContent: "flex-end", alignItems: "center" }}>
                    {isScrolled ? <NotiComponent /> : <NotiComponent />} {/*--Notice컴포넌트 화이트 필요*/}
                    {isScrolled ? <ShoppingBagIconComponent /> : <ShoppingBagIconWhiteComponent />}

                </div>
            </div>
        </AppBarAtom>
    )
}


export const AppBarComponentBack = (title: string) => {
    const [isScrolled, setIsScrolled] = useState(false);

    const pop = () => {
        console.log(window.scrollY);
        if(window.scrollY > 0){
            setIsScrolled(true);
        }
        else{
            setIsScrolled(false);
        }
      }

      
    useEffect(() => {
        window.addEventListener('scroll', pop);
      
        return () => window.removeEventListener('scroll', pop);
      },[]);

    return (
    <AppBarAtom isScrollDown={isScrolled}>
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
    </AppBarAtom>

    )
}

export const AppBarComponentNoBack = (title: string) => {
    const [isScrolled, setIsScrolled] = useState(false);

    const pop = () => {
        console.log(window.scrollY);
        if(window.scrollY > 0){
            setIsScrolled(true);
        }
        else{
            setIsScrolled(false);
        }
      }

      
    useEffect(() => {
        window.addEventListener('scroll', pop);
      
        return () => window.removeEventListener('scroll', pop);
      },[]);

    

    return (
        <AppBarAtom isScrollDown={isScrolled}>
            <div style={{display:"flex",
                position: "fixed", zIndex:100, top: 0, backgroundColor: isScrolled? "rgba(255,255,255,1)":"rgba(255,255,255,0)",width:"100vw"
            }}>
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
        </AppBarAtom>
    )
}

export const AppBarComponentSearch = () => {
    const dispatch = useDispatch();
    const [search, setSearch] = useState("");
    const navigate = useNavigate();

    const handleInputChange = (e:ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
    }

    const handleUserKeyPress = (e: any) => {
        if(e.key === "Enter" || e.key === 13){
            dispatch(
                SearchCrateAction(
                    search, ()=>{navigate(`/search/${search}`);}
                )
            );
            // setSearch("");
        }
    }

    const [isScrolled, setIsScrolled] = useState(false);

    const pop = () => {
        console.log(window.scrollY);
        if(window.scrollY > 0){
            setIsScrolled(true);
        }
        else{
            setIsScrolled(false);
        }
    }

    useEffect(
        ()=>{
            window.addEventListener('scroll', pop);
            window.addEventListener('keyup', handleUserKeyPress);
            return () => {
                window.removeEventListener('keyup', handleUserKeyPress);
                window.removeEventListener('scroll', pop);
            }
        }
    )

    return (
        <AppBarAtom isScrollDown={isScrolled}>
            <div style={{
                display:"flex", width:"100vw", justifyContent: "flex-end", alignItems:"center" }}>
                    <SearchInput> 
                        <div style={{display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems:"center"}}>
                            <SearchIcon src={searchIconImage}/>
                            <SearchInputText 
                            value={search}
                            onChange={handleInputChange}
                                type="text" placeholder="검색어를 입력해주세요."></SearchInputText>
                        </div>
                        </SearchInput>
                <div style={{display:"flex", justifyContent: "flex-end", alignItems:"center"}}>
                    <NotiComponent />
                    <ShoppingBagIconComponent />
                </div>
            </div>
        </AppBarAtom>
        
    )
}

export const AppBarComponentSetting = (title: string) => {
    const [isScrolled, setIsScrolled] = useState(false);

    const pop = () => {
        console.log(window.scrollY);
        if(window.scrollY > 0){
            setIsScrolled(true);
        }
        else{
            setIsScrolled(false);
        }
      }

      
    useEffect(() => {
        window.addEventListener('scroll', pop);
      
        return () => window.removeEventListener('scroll', pop);
      },[]);


    return (

        <div style={{
            display:"flex", width:"100vw",
            position: "fixed", zIndex:100, top: 0, backgroundColor: isScrolled? "rgba(255,255,255,1)":"rgba(255,255,255,0)"}}>
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
    const [isScrollDown, setIsScrollDown] = useState(false);

    const pop = () => {
        console.log(window.scrollY);
        if(window.scrollY > 0){
            setIsScrollDown(true);
        }
        else{
            setIsScrollDown(false);
        }
      }

      
    useEffect(() => {
        window.addEventListener('scroll', pop);
      
        return () => window.removeEventListener('scroll', pop);
      },[]);

    

    return (
        <AppBarAtom isScrollDown={isScrollDown}>
            <AppBarMain>
                <NotiComponent />
                <ShoppingBagIconComponent />
            </AppBarMain>
        </AppBarAtom>

    );
}

export const AppBarComponentMyPage = (title: string) => {
    const [isScrolled, setIsScrolled] = useState(false);

    const pop = () => {
        console.log(window.scrollY);
        if(window.scrollY > 0){
            setIsScrolled(true);
        }
        else{
            setIsScrolled(false);
        }
      }

      
    useEffect(() => {
        window.addEventListener('scroll', pop);
      
        return () => window.removeEventListener('scroll', pop);
      },[]);

    return (
    <AppBarAtom isScrollDown={isScrolled}>
        <div style={{display:"flex", width:"100vw"}}>
                    <div style={{flex:1, display:"flex", justifyContent: "flex-start", alignItems:"center"}}>
                        <MySettingComponent />
                    </div>
                    <div style={{flex:2, display:"flex", justifyContent: "center"}}>
                        <AppBarTitle> {title} </AppBarTitle>
                    </div>
                    <div style={{flex:1, display:"flex", justifyContent: "flex-end", alignItems:"center"}}>
                        <NotiComponent />
                        <ShoppingBagIconComponent />
                    </div>
        </div>
    </AppBarAtom>

    )
}
