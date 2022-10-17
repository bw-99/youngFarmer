import { ChatSeperateLine, FarmerNickname, FarmerProfile, NewChatNoti, RecentChat, RecentChatDate } from "../atoms/chatItem";
import farmer from "../../../assets/images/farmer.png";
import React from "react";

interface chatPropsType {
    isReaded:boolean;
}


export const ChatItemComponent = (props: chatPropsType) => {
    return(
        <div>
            <div style={{display:"flex",position:"relative", padding:"20px 16px 20px 16px", alignItems: "center"}}>
                <div style={{padding:"0 14px 0 0"}}>   
                    <FarmerProfile src={farmer}/>
                </div>

                <div>
                    <FarmerNickname> 청년농부 </FarmerNickname>
                    <RecentChat> 네 가능합니다~! 15kg로 하시면 40,000...</RecentChat>
                </div>

                <div>
                    <div style={{position: "absolute", right:16, top:24}}>
                        <RecentChatDate> 3일전 </RecentChatDate>
                    </div>
                    {props.isReaded? null: <div style={{position: "absolute", right:16, bottom:26}}>
                        {NewChatNoti(1)}
                    </div>}
                    
                </div>

                
            </div>
            <ChatSeperateLine />
        </div>
        
    );
}
