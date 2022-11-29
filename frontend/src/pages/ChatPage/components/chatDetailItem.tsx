import { ChatSeperateLine, FarmerNickname, FarmerProfile, NewChatNoti, RecentChat, RecentChatDate } from "../atoms/chatItem";
import { ChatBoxFromMe, ChatBoxFromYou, ChatProfile, ChatTimeCreated } from "../atoms/chatDetailItem";
import farmer from "../../../assets/images/farmer.png";
import React, { useEffect, useState } from "react";
import { ChatDataType } from "../ChatType";
import { Timestamp } from 'firebase/firestore';

interface chatPropsType {
    chatData:ChatDataType;
    nextChatData:ChatDataType | null;
    prevChatData:ChatDataType | null;
    chatLength: number
}



/**
 * 이전 채팅이 없다면 -> 프사(남일 경우) + 채팅
 * 다음 채팅이 없다면 -> 시간
 */

export const ChatDetailItemComponent = ({chatData,nextChatData,prevChatData, chatLength}:chatPropsType ) => {
    const [isTimeDifferent, setIsTimeDifferent] = useState<boolean | null>(null);
    const [isProfileDiff, setIsProfileDiff] = useState<boolean | null>(null);

    useEffect(() => {
        if(prevChatData) {
            if(prevChatData.from_me != chatData.from_me) {
                setIsTimeDifferent(true);
                setIsProfileDiff(true);
            }
            else {
                setIsProfileDiff(false);
                let timeDiff = chatData.time_created.seconds - prevChatData.time_created.seconds;
                if( timeDiff <= 60){
                    setIsTimeDifferent(true);
                }
                else{
                    setIsTimeDifferent(false);
                }
            }
        }
        else {
            setIsProfileDiff(false);
        }
    })

    if(isProfileDiff == null) {
        return(
            <></>
        );
    }

    
    
    if(chatData.from_me) {
        return(
            <div style={{marginTop: isProfileDiff? "10px": "0px"}}>
                <ChatDetailItemFromMeComp chatData={chatData} nextChatData={nextChatData} prevChatData={prevChatData} chatLength={chatLength} />
            </div>
            
        );
    }

    return(
        <div style={{marginTop: isProfileDiff? "10px": "0px"}}>
            <ChatDetailItemFromYouComp chatData={chatData} nextChatData={nextChatData} prevChatData={prevChatData} chatLength={chatLength} />
        </div>
        
    );
    
}


const ChatDetailItemFromMeComp = ({chatData,nextChatData,prevChatData, chatLength}:chatPropsType ) => {
    const isNextExist:boolean = (nextChatData && nextChatData.from_me) ?  true : false; 
    const isPrevExist:boolean = (prevChatData && prevChatData.from_me) ?  true : false; 
    const [isTimeDifferent, setIsTimeDifferent] = useState<boolean | null>(null);
    
    useEffect(() => {
        if(nextChatData) {
            if(nextChatData.from_me != chatData.from_me) {
                setIsTimeDifferent(true);
            }
            else{
                setIsTimeDifferent(isTimeDiff(nextChatData.time_created, chatData.time_created));
            }
        }
        else{
            setIsTimeDifferent(true);
        }
    }, [chatLength])
    return(
        <div style={{display:"flex", alignItems:"flex-end", justifyContent:"flex-end", marginTop:"10px"}}>
            {(isTimeDifferent) && <ChatTimeCreated style={{marginRight: "6px"}}> {convertSec2Date(chatData.time_created.seconds)} </ChatTimeCreated>}
            <ChatBoxFromMe> {chatData.chat} </ChatBoxFromMe>
        </div>
        
    );
}

const ChatDetailItemFromYouComp = ({chatData,nextChatData,prevChatData, chatLength}:chatPropsType ) => {
    const isNextExist:boolean = (nextChatData && !nextChatData.from_me) ?  true : false; 
    const isPrevExist:boolean = (prevChatData && !prevChatData.from_me) ?  true : false; 

    const [isTimeDifferent, setIsTimeDifferent] = useState<boolean | null>(null);
    
    useEffect(() => {
        if(nextChatData) {
            if(nextChatData.from_me != chatData.from_me) {
                setIsTimeDifferent(true);
            }
            else{
                setIsTimeDifferent(isTimeDiff(nextChatData.time_created, chatData.time_created));
            }
        }
        else{
            setIsTimeDifferent(true);
        }
    }, [chatLength])

    return(
        <div style={{display: "flex", alignItems:"flex-start", justifyContent:"flex-start", marginTop:"10px"}}>
            {!isPrevExist && <ChatProfile src={chatData.profile.photo}/>}
            <div style={{display:"flex", alignItems:"flex-end"}}>
                <ChatBoxFromYou style={{marginLeft: "8px"}}> {chatData.chat} </ChatBoxFromYou>
                {isTimeDifferent && <ChatTimeCreated style={{marginLeft: "6px"}}> {convertSec2Date(chatData.time_created.seconds)} </ChatTimeCreated>}
            </div>
        </div>
        
    );
}

const isTimeDiff = (timeStampA:Timestamp, timeStampB:Timestamp) => {

    let timeDiff = timeStampA.seconds - timeStampB.seconds;
    const dateTimeA = new Date(timeStampA.seconds * 1000);
    const dateTimeB = new Date(timeStampB.seconds * 1000);
    console.log(`${timeDiff} - ${dateTimeA.getMinutes() != dateTimeB.getMinutes()} - ${(timeDiff >= 60 && (dateTimeA.getMinutes() != dateTimeB.getMinutes()))}`);

    // if(timeDiff >= 60 && (dateTimeA.getMinutes() != dateTimeB.getMinutes())){
    //     return true;
    // }
    // return false;

    return (timeDiff >= 60 && (dateTimeA.getMinutes() != dateTimeB.getMinutes()));
}

const convertSec2Date = (seconds:number) => {
    const date = new Date(seconds*1000);
    const now = new Date();
    if(date.getFullYear() != now.getFullYear()) {
        return `${date.getFullYear()}년 ${date.getMonth()}월`
    }
    else if(date.getMonth() != now.getMonth()) {
        return `${date.getMonth()}월 ${date.getDate()}일`
    }
    else if(date.getDate() === now.getDate()) {
        return `${date.getHours()}:${date.getMinutes()}`
    }
}