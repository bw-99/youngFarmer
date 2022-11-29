import styled from "styled-components";
import React from "react";

export const ChatBoxFromMe = styled.div`
    border-radius: 16px;
    background-color: #fb6159;
    border-top-right-radius: 0px;


    font-family: AppleSDGothicNeo;
    font-size: 14px;
    color: #ffffff;
    
    padding: 12px;
    min-height: calc(50px -24px);
    min-width: calc(80px -24px);

    display: flex;
    justify-content: flex-end;
` 


export const ChatBoxFromYou = styled.div`
    border-radius: 16px;
    background-color: #f5f5f5;
    border-top-left-radius: 0px;

    font-family: AppleSDGothicNeo;
    font-size: 14px;
    line-height: 20px;
    color: #272727;
    
    padding: 12px;
    min-height: calc(50px -24px);
    min-width: calc(80px -24px);

    display: flex;
    justify-content: flex-start;
` 



export const ChatProfile = styled.img`
  width: 32px;
  height: 32px;
  object-fit: cover;
  border-radius: 50%;
`

export const ChatTimeCreated = styled.div`
  font-family: AppleSDGothicNeo;
  font-size: 12px;
  font-weight: 500;
  color: #b5b5b5;
`