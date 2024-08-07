import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import { RootState } from "../../reducers";
import HomePageIconOn from "../../assets/images/btn-tabbar-home-on@3x.webp";
import HomePageIconOff from "../../assets/images/btn-tabbar-home-off@3x.webp";

import SearchPageIconOn from "../../assets/images/btn-tabbar-search-on@3x.webp";
import SearchPageIconOff from "../../assets/images/btn-tabbar-search-off@3x.webp";

import ChatPageIconOn from "../../assets/images/btn-tabbar-chat-on@3x.webp";
import ChatPageIconOff from "../../assets/images/btn-tabbar-chat-off@3x.webp";

import LikePageIconOn from "../../assets/images/btn-tabbar-like-on@3x.webp";
import LikePageIconOff from "../../assets/images/btn-tabbar-like-off@3x.webp";

import MyPageIconOn from "../../assets/images/btn-tabbar-mypage-on@3x.webp";
import MyPageIconOff from "../../assets/images/btn-tabbar-mypage-off@3x.webp";

import styled from "styled-components";
import { CHAT_PAGE, GOTO_CHAT_PAGE, GOTO_HOME_PAGE, GOTO_LIKE_PAGE, GOTO_MY_PAGE, GOTO_SEARCH_PAGE, HOME_PAGE, LIKE_PAGE, MY_PAGE, SEARCH_PAGE } from "./BottomNavigationBarActions";

const IconItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const IconImage = styled.img`
    max-width: calc(625px - 16px - 16px);
  width: 24px;
  height: 24px;
  padding: 10px 25px 7px 25px;
  object-fit: contain;
`
const IconTextSelected = styled.div`
  font-family: AppleSDGothicNeo;
  font-size: 10px;
  font-weight: 800;
  color: #fb6159;
`

const IconTextNotSelected = styled.div`
  font-family: AppleSDGothicNeo;
  font-size: 10px;
  font-weight: 500;
  color: #272727;
`

export const BottomNavigationBar = () => {
    const params = useParams();
    const location = useLocation();
    const navigate = useNavigate();

    const dispatch = useDispatch();

    const pageIndex: number = useSelector((state : RootState) => state.BottomNavigationBarReducer.index);

    return(
        <div>
            <div style={{height:"64px"}} ></div>

            <div style={{position:"fixed", zIndex: 10000,bottom: 0,maxWidth:"625px", width:"100vw", height:"64px", backgroundColor: "#f5f5f5", display: "flex", justifyContent: "space-between"}}>
                {IconItemComponent(
                    0,
                )}
                {IconItemComponent(
                    1,
                )}
                {IconItemComponent(
                    2,
                )}
                {IconItemComponent(
                    3,
                )}
                {IconItemComponent(
                    4,
                )}
            </div>
        </div>
        
    );
}

const IconItemComponent = (itemNumber: number) => {
    const selectedNumber: number = useSelector((state : RootState) => state.BottomNavigationBarReducer.index);
    const navigate = useNavigate();

    let isSelected: boolean = itemNumber == selectedNumber;

    const actionList = [
        GOTO_HOME_PAGE, GOTO_SEARCH_PAGE, GOTO_LIKE_PAGE, GOTO_CHAT_PAGE, GOTO_MY_PAGE
    ];

    const actionConstantList = [
        HOME_PAGE, SEARCH_PAGE, LIKE_PAGE, CHAT_PAGE, MY_PAGE
    ];
    const routeList = [
        "/main", "/search", "/like", "/chat", "/mypage", 
    ]

    const textList = [
        "HOME", "검색", "찜하기", "메세지", "마이페이지"
    ];

    const imageList = [
        // ON OFF
        [HomePageIconOn, HomePageIconOff],
        [SearchPageIconOn, SearchPageIconOff],
        [LikePageIconOn, LikePageIconOff],
        [ChatPageIconOn, ChatPageIconOff],
        [MyPageIconOn, MyPageIconOff],
    ]

    const dispatch = useDispatch();
    
    return (
        <div onClick={()=> {
            navigate(routeList[itemNumber]);
        }}>
            <IconItem>
                {isSelected? <IconImage src={imageList[itemNumber][0]} />: <IconImage src={imageList[itemNumber][1]} />}
                {isSelected? <IconTextSelected>{textList[itemNumber]}</IconTextSelected> : <IconTextNotSelected>{textList[itemNumber]}</IconTextNotSelected>}
            </IconItem>
        </div>
        
    );
}