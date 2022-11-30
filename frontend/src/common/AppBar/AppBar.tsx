import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { BackIconComponent, BackIconWhiteComponent } from "./BackIcon/BackIcon";
import { NotiComponent, NotiComponentWhite } from "./NotiIcon/NotiIcon";
import { ShoppingBagIconComponent, ShoppingBagIconWhiteComponent } from "./ShoppingBagIcon/ShoppingBagIconComponent";
import {ChatIconComponent, ChatWhiteIconComponent  } from "./ChatIcon/ChatIcon";
import { StoreDataType, StoreProductDataType } from "../../pages/StorePage/StoreType";

import styled, { keyframes } from "styled-components";
import { SettingComponent } from "./SettingIcon/SettingIcon";


import searchIconImage from "../../assets/images/btn-search@3x.webp";


import { useDispatch, useSelector } from "react-redux";
import { SearchCrateAction } from "../../pages/SearchPage/SearchActions";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { ShareIconBlackComponent, ShareIconComponent } from "./ShareIcon/ShareIcon";
import { MySettingComponent } from "./SettingIcon/Mysetting";
import { searchFilterTryAction, searchTryAction } from "../../pages/SearchPage/SearchDertailAction";
import { RootState } from "../../reducers";
import { searchRemoveAction } from './../../pages/SearchPage/SearchDertailAction';
import { prop } from "cheerio/lib/api/attributes";

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

// btn-search
interface ScrollPositionProps {
    readonly topPosition: number;
}


const AppBarAtom = styled.div<ScrollPositionProps>`
    position: fixed;
    z-index:1000;
    height: 56px;
    /* transition: background-color 200ms cubic-bezier(0.4, 0, 0.2, 1); */
    top: 0;
    background-color: ${props => `rgba(255,255,255,calc(${props.topPosition/50}))`};
    width: 100vw;
    max-width: 625px;
    display: flex;
`


// const AppBarAtom = styled.div<ScrollProps>`
//     position: fixed;
//     z-index:1000;
//     height: 56px;
//     transition: background-color 200ms cubic-bezier(0.4, 0, 0.2, 1);
//     top: 0;
//     background-color: ${props => props.isScrollDown? "rgba(255,255,255,1)" : "rgba(255,255,255,0)"};
//     width: 100vw;
// `

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
    width: 100vw;
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


export const AppBarComponentOnlyBack = ({title}:StringTitleProps) => {
    const [isScrollDown, setIsScrollDown] = useState(false);
    const [topPosition, setTopPosition] = useState(0);

    const pop = () => {
        setTopPosition(window.scrollY);
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
        <AppBarAtom topPosition={topPosition}>
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
    const [isScrollDown, setIsScrollDown] = useState(false);
    const [topPosition, setTopPosition] = useState(0);

    const pop = () => {
        setTopPosition(window.scrollY);
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
        <AppBarAtom topPosition={topPosition}>
            <div style={{display:"flex", width:"100vw", justifyContent: "space-between"}}>
                <div style={{display:"flex", justifyContent: "flex-start", alignItems:"center"}}>
                    {isScrollDown? <BackIconComponent /> : <BackIconWhiteComponent />}
                </div>
            
                <div style={{display:"flex", justifyContent: "flex-end", alignItems:"center"}}>
                    { isScrollDown? <ShareIconBlackComponent /> : <ShareIconComponent />}
                    {isScrollDown? <ShoppingBagIconComponent />: <ShoppingBagIconWhiteComponent />}
                    
                </div>
            </div>
        </AppBarAtom>
    )
}


export const AppBarComponentStore = (props: StoreProductDataType) => {
    const [isScrollDown, setIsScrollDown] = useState(false);
    const [topPosition, setTopPosition] = useState(0);

    const pop = () => {
        setTopPosition(window.scrollY);
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
        <AppBarAtom topPosition={topPosition}>
            <div style={{ display: "flex", maxWidth: "625px", width: "100vw", justifyContent: "space-between" }}>
                <div style={{ display: "flex", justifyContent: "flex-start", alignItems: "center" }}>
                    {isScrollDown ? <BackIconComponent /> : <BackIconWhiteComponent />}
                </div>

                <div style={{ display: "flex", justifyContent: "flex-end", alignItems: "center" }}>
                    {isScrollDown ? <NotiComponent /> : <NotiComponentWhite />} {/*--Notice컴포넌트 화이트 필요*/}
                    {isScrollDown ?
                        <ChatIconComponent
                            background_photo={props.background_photo}
                            category={props.category}
                            description={props.description}
                            name={props.name}
                            photo={props.photo}
                            store_id={props.store_id}
                            product_list={props.product_list} />
                        :
                        <ChatWhiteIconComponent
                            background_photo={props.background_photo}
                            category={props.category}
                            description={props.description}
                            name={props.name}
                            photo={props.photo}
                            store_id={props.store_id}
                            product_list={props.product_list} />}
                </div>
            </div>
        </AppBarAtom>
    )
}


export const AppBarComponentBack = (title: string) => {
    const [isScrollDown, setIsScrollDown] = useState(false);
    const [topPosition, setTopPosition] = useState(0);

    const pop = () => {
        setTopPosition(window.scrollY);
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
        <AppBarAtom topPosition={topPosition}>
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

export const AppBarComponentNoBack = ({title}:StringTitleProps) => {
    const [isScrollDown, setIsScrollDown] = useState(false);
    const [topPosition, setTopPosition] = useState(0);

    const pop = () => {
        setTopPosition(window.scrollY);
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
        <AppBarAtom topPosition={topPosition}>
            {/* <div style={{display:"flex",
                position: "fixed", zIndex:100, top: 0, backgroundColor: isScrollDown? "rgba(255,255,255,1)":"rgba(255,255,255,0)",width:"100vw"
            }}> */}
                <div style={{flex:2, display:"flex", justifyContent: "flex-start", alignItems:"center"}}>
                </div>
                <div style={{flex:1, display:"flex", justifyContent: "center"}}>
                    <AppBarTitle> {title} </AppBarTitle>
                </div>
                <div style={{flex:2, display:"flex", justifyContent: "flex-end", alignItems:"center"}}>
                    <NotiComponent />
                    <ShoppingBagIconComponent />
                </div>
            {/* </div> */}
        </AppBarAtom>
    )
}

export const AppBarComponentSearch = () => {
    const dispatch = useDispatch();
    const [search, setSearch] = useState("");
    const navigate = useNavigate();
    const params = useParams();
    const [searchParams, setSearchParams] = useSearchParams();

    const toggleSelector: number = useSelector((state:RootState) =>
        state.SearchToggleReducer
    );

    const handleInputChange = (e:ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
    }

    const handleUserKeyPress = (e: any) => {
        if(e.key === "Enter" || e.key === 13){
            dispatch(
                SearchCrateAction(search)
            );
            navigate(`/search/${search}`);
        }
    }

    const [isScrollDown, setIsScrollDown] = useState(false);
    const [topPosition, setTopPosition] = useState(0);

    const pop = () => {
        setTopPosition(window.scrollY);
        if(window.scrollY > 0){
            setIsScrollDown(true);
        }
        else{
            setIsScrollDown(false);
        }
      }


    // const handleInitSearch = (search:string) => {
    //     dispatch(searchTryAction(search));
    // }

    useEffect(() => {
        setSearch(params.search!);
        let searchFilterParam = searchParams.get("searchFilter");
        if(searchFilterParam) {
            let searchFilter = JSON.parse(searchFilterParam);
            let filter = searchFilter.filter;
            let priceRange = searchFilter.priceRange;
            dispatch(searchFilterTryAction(params.search!, filter, priceRange));
        }
        else{
            dispatch(searchTryAction(params.search!));
        }

        return () => {
            dispatch(searchRemoveAction());
        }
    }, [params.search, searchParams.get("searchFilter")]);
    

    useEffect(
        ()=>{

            // alert(searchParams.get("priceRange"));
            window.addEventListener('scroll', pop);
            window.addEventListener('keyup', handleUserKeyPress);
            return () => {
                window.removeEventListener('keyup', handleUserKeyPress);
                window.removeEventListener('scroll', pop);
            }
        }
    )

    return (
        <AppBarAtom topPosition={topPosition}>
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

export const AppBarComponentSetting = ({title}:StringTitleProps) => {
    const [isScrollDown, setIsScrollDown] = useState(false);
    const [topPosition, setTopPosition] = useState(0);

    const pop = () => {
        setTopPosition(window.scrollY);
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
        <AppBarAtom topPosition={topPosition}>
            {/* <div style={{
            display:"flex", width:"100vw",
            position: "fixed", zIndex:100, top: 0, backgroundColor: isScrollDown? "rgba(255,255,255,1)":"rgba(255,255,255,0)"}}> */}
            <div style={{flex:2, display:"flex", justifyContent: "flex-start", alignItems:"center"}}>
            </div>
            <div style={{flex:1, display:"flex", justifyContent: "center"}}>
                <AppBarTitle> {title} </AppBarTitle>
            </div>
            <div style={{flex:2, display:"flex", justifyContent: "flex-end", alignItems:"center"}}>
                <NotiComponent />
                <SettingComponent />
            </div>
        {/* </div> */}
        </AppBarAtom>
        
    )
}




export const AppBarComponentMain = () => {  
    const [isScrollDown, setIsScrollDown] = useState(false);
    const [topPosition, setTopPosition] = useState(0);

    const pop = () => {
        setTopPosition(window.scrollY);
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
        <AppBarAtom topPosition={topPosition}>
            <div style={{width: "100vw", display:"flex", justifyContent: "flex-end", alignItems:"center"}   }>
                <NotiComponent />
                <ShoppingBagIconComponent />
            </div>
            {/* <AppBarMain> */}

            {/* </AppBarMain> */}
        </AppBarAtom>

    );
}

type StringTitleProps = {
    title: string;
  }; 

export const AppBarComponentMyPage = ({title}:StringTitleProps) => {
    const [isScrollDown, setIsScrollDown] = useState(false);
    const [topPosition, setTopPosition] = useState(0);

    const pop = () => {
        setTopPosition(window.scrollY);
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
        <AppBarAtom topPosition={topPosition}>
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
