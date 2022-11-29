import styled from "styled-components";
import React from "react";

export const FarmerProfile = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
`

export const FarmerNickname = styled.div`
  font-family: AppleSDGothicNeo;
  font-size: 16px;
  font-weight: 600;
  color: #171717;
`

export const RecentChat = styled.div`
  font-family: AppleSDGothicNeo;
  font-size: 14px;
  font-weight: 400;
  color: #6b6b6b;
  overflow:hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`


export const RecentChatDate = styled.div`
  font-family: AppleSDGothicNeo;
  font-size: 12px;
  font-weight: 500;
  text-align: right;
  color: #a7a7a7;
`

export const ChatSeperateLine = styled.div`
  height: 1px;
  background-color: #efefef;
`

const NewChatNotiBg = styled.div`
  width: 22px;
  height: 18px;
  border-radius: 9px;
  background-color: #fb6159;
  font-family: AppleSDGothicNeo;
  font-size: 12px;
  font-weight: 600;
  text-align: center;
  color: #ffffff;
`

export const NewChatNoti = (count: number) => {
  return <NewChatNotiBg> </NewChatNotiBg>
  // return <NewChatNotiBg> {count} </NewChatNotiBg>
}