import React, { useEffect, useState } from "react";

import { useParams, useLocation, useNavigate } from 'react-router-dom';
import styled from "styled-components";
import { AppFrame } from "../../App";


import alarm from "../../assets/images/alarm@3x.png";
import shopping_bag from "../../assets/images/shopping_bag@3x.png";
import { AppBarComponentNoBack, AppBarComponentSetting } from "../../common/AppBar/AppBar";



import { BottomNavigationBar } from "../../common/BottomNavigationBar/BottomNavigationBar";
import { ChatBoxSrcType, ChatBoxType, ChatProfileType } from "./ChatType";
import { ChatItemComponent } from "./components/chatItem";

import ChatItemComponentLongBtn from "./components/chtItemLongPress";
import { collection, query } from 'firebase/firestore';
import { db } from "../..";
import { where } from 'firebase/firestore';
import { FirebaseAuth } from './../../index';
import { getDocs } from 'firebase/firestore';
import { getDoc } from 'firebase/firestore';


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
                userProfileData.push(userProfile);
            }
            chatBoxList.push({
                profile_list: userProfileData,
                last_chat: chatBoxData.messages[-1],
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
                    return(
                        <div onClick={() => {
                            navigate(`/chat/${chatBox.id}`);
                        }}>
                            <ChatItemComponent isReaded={true} />
                        </div>
                    )
                })
            }
            <BottomNavigationBar />
        </AppFrame>
    );
}

export default ChatPage;