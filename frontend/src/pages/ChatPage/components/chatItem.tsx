import { ChatSeperateLine, FarmerNickname, FarmerProfile, NewChatNoti, RecentChat, RecentChatDate } from "../atoms/chatItem";
import farmer from "../../../assets/images/farmer.png";
import React, { useEffect, useState } from "react";
import { ChatBoxType, ChatProfileType } from "../ChatType";
import { FirebaseAuth } from './../../../index';

interface chatPropsType {
    isReaded:boolean;
    chatBox: ChatBoxType
}


export const ChatItemComponent = ({isReaded, chatBox}: chatPropsType) => {
    const [youProfile, setYouProfile] = useState<ChatProfileType | null>(null);

    useEffect(()=>{
        if (chatBox.profile_list[0].uid === FirebaseAuth.currentUser!.uid) {
            setYouProfile(chatBox.profile_list[1]);
        }
        else{
            setYouProfile(chatBox.profile_list[0]);
        }
    }, [])

    if(!youProfile || !chatBox){
        return(<></>)
    }

    return(
        <div>
            <div style={{display:"flex",position:"relative", padding:"20px 16px 20px 16px", alignItems: "center"}}>
                <div style={{padding:"0 14px 0 0"}}>   
                    <FarmerProfile src={youProfile!.profile_img ? youProfile!.profile_img : farmer}/>
                </div>
                
                <div>
                    <FarmerNickname> {youProfile!.profile_nickname} </FarmerNickname>
                    <RecentChat> {chatBox.last_chat?.chat} </RecentChat>
                </div>

                <div>
                    <div style={{position: "absolute", right:16, top:24}}>
                        <RecentChatDate> 3일전 </RecentChatDate>
                    </div>
                    {isReaded? null: <div style={{position: "absolute", right:16, bottom:26}}>
                        {NewChatNoti(1)}
                    </div>}
                    
                </div>

                
            </div>
            <ChatSeperateLine />
        </div>
        
    );
}
