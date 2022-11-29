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

export const ChatSendBottomBar = styled.div`
  width: 100%;
  height: 56px;
  background-color: #f5f5f5;
  display: flex;
  flex-direction: column;
  justify-content: center;
`


export const SendInputWrapper = styled.div`
  height: 36px;
  margin: 0 16px;
  border-radius: 20px;
  border: solid 1px #e8e8e8;
  background-color: #ffffff;
  display: flex;
  align-items: center;
`


export const SendInput = styled.input`
  border-radius: 20px;
  border: none;
  outline: none;
  width: calc(100% - 32px - 40px);
  padding: 10px 16px;

  font-family: AppleSDGothicNeo;
  font-size: 14px;
`

export const SendIcon = styled.img`
  width: 24px;
  height: 24px;
  object-fit: cover;
`


export const SepByDate = styled.div`
  flex: 1;
  height: 1px;
  background-color: #e8e8e8;
`


export const SepTextByDate = styled.div`
  font-family: AppleSDGothicNeo;
  font-size: 13px;
  font-weight: 500;
  text-align: right;
  color: #a7a7a7;
`