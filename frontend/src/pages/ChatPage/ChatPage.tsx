import React, { useEffect, useState } from "react";

import { useNavigate } from 'react-router-dom';
import { AppFrame } from "../../App";


import { AppBarComponentNoBack, AppBarComponentSetting } from "../../common/AppBar/AppBar";



import { BottomNavigationBar } from "../../common/BottomNavigationBar/BottomNavigationBar";
import { ChatBoxSrcType, ChatBoxType, ChatDataType, ChatProfileType } from "./ChatType";
import { ChatItemComponent } from "./components/chatItem";

import { collection, doc, query } from 'firebase/firestore';
import { db } from "../..";
import { where } from 'firebase/firestore';
import { FirebaseAuth } from './../../index';
import { getDocs } from 'firebase/firestore';
import { orderBy } from 'firebase/firestore';
import { limit } from 'firebase/firestore';
import { getItemWithNoExpireTime } from './../../services/localStorage';
import { Timestamp } from 'firebase/firestore';


function ChatPage() {
    const navigate = useNavigate();

    const [chatBoxList, setChatBoxList] = useState<ChatBoxType[] | null>(null);

    const getChatBoxList = async(uid:string) => {
        const chatBoxRef = collection(db, "chat");
        const chatBoxQ = query(chatBoxRef, where("uid_list", "array-contains", uid));
        let chatBoxDataDocsList:any[] = (await getDocs(chatBoxQ)).docs.map((doc) => doc) as any;
        let chatBoxDataList:ChatBoxSrcType[] = chatBoxDataDocsList.map((doc) => {
            return({
                ...doc.data(),
                id: doc.id
            });
        });


        let chatBoxList:ChatBoxType[] = [];

        for (const chatBoxData of chatBoxDataList) {
            let userProfileData:ChatProfileType[] = [];
            for (let index = 0; index < chatBoxData.uid_list.length; index++) {
                const uidItem = chatBoxData.uid_list[index];
                const userProfileCollection =  collection((await getDocs(query(collection(db, "user"), where("uid", "==", uidItem)))).docs[0].ref, "profile");
                const userProfile = (await getDocs(userProfileCollection)).docs[0].data() as any;
                console.log(userProfile);
                userProfileData.push({
                    ...userProfile,
                    uid: uidItem
                });
            }

            const lastChatRef = collection(db, "userChat");
            const lcq = query(lastChatRef, where("chat_box_id", "==", chatBoxData.id), orderBy("time_created", "desc"), limit(1));
            const lcResult = await getDocs(lcq);
            const lastChatData:ChatDataType = lcResult.docs[0].data() as any;
            
            chatBoxList.push({
                profile_list: userProfileData,
                last_chat: lastChatData,
                id: chatBoxData.id
            })
        }
        setChatBoxList(chatBoxList);
    }

    useEffect(() => {
        FirebaseAuth.onAuthStateChanged((user) => {
            if(user) {
                getChatBoxList(user.uid);
            }
        })
    }, [])

    if(!chatBoxList) {
        return(
            <AppFrame>
            <AppBarComponentSetting title={"채팅목록"} />
            <BottomNavigationBar />
        </AppFrame>
        )
    } 

    return (
        <AppFrame>
            <AppBarComponentSetting title={"채팅목록"} />
            {
                chatBoxList?.map((chatBox) => {
                    const savedLastChatTime:Timestamp = getItemWithNoExpireTime(`chat/${chatBox.id}`) ? getItemWithNoExpireTime(`chat/${chatBox.id}`) : {
                        seconds: 0,
                        nanoseconds: 0
                    } ;
                    const lastChatTime: Timestamp = chatBox.last_chat!.time_created;
                    
                    const isReaded = lastChatTime.nanoseconds - savedLastChatTime.nanoseconds > 0 ? false:true
                    return(
                        <div onClick={() => {
                            navigate(`/chat/${chatBox.id}`);
                        }}>
                            <ChatItemComponent isReaded={isReaded} chatBox={chatBox} />
                        </div>
                    )
                })
            }
            <BottomNavigationBar />
        </AppFrame>
    );
}

export default ChatPage;