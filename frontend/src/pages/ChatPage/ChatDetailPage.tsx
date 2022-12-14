import { getDoc, doc, setDoc, serverTimestamp, query, collection, onSnapshot, where, addDoc, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import { db } from "../..";

import sendIcon from "../../assets/images/btn-send.webp";
import sendIconActive from "../../assets/images/btn-send-active.webp";


import { FirebaseAuth } from './../../index';
import { ChatBoxSrcType, ChatBoxType, ChatDataType, ChatProfileType } from "./ChatType";
import { ChatDetailItemComponent } from "./components/chatDetailItem";
import { AppFrame } from "../../App";
import { AppBarComponentOnlyBack } from "../../common/AppBar/AppBar";
import { ChatSendBottomBar, SendIcon, SendInput, SendInputWrapper } from "./atoms/chatDetailItem";
import { setItemWithExpireTime, setItemWithNoExpireTime } from "../../services/localStorage";

const tempData1 = {
    f_name : "청년 농부",
    p_img : "src",
    p_name : "친환경 못난이 사과 5kg /10kg",
    p_price : "20,000원",
    p_sale : "20%"
}

const tempData2 = {
    isChatClicked:true,
    isPlusClicked:true,
    isMenuClicked:true

}


// chat키보드가 눌렸는지? plus버튼이 눌렸는지?에따라 3개 component rendering
// chatpart는 상품정보/농장정보 포함
// chatmessages는 chatBody에서 직접 reducer이용해서 처리...?
// appBarPart를 통해 어떤 종류의 페이지(4-3,4,5)를 렌더링할지 정하고

function ChatDetailPage() {
    const params = useParams();
    const navigate = useNavigate();

    const [userInputChat, setUserInputChat] = useState<string>("");
    const [chatBox, setChatBox] = useState<ChatBoxType | null>(null);
    const [chatList, setChatList] = useState<ChatDataType[] | null>(null);
    const [otherProfile, setOtherProfile] = useState<ChatProfileType | null>(null);
    
    const getChatBoxList = async(uid:string) => {
        try {
            const chatBoxDoc = doc(db, "chat", `${params.chat_box_id}`);
            let chatBoxData:ChatBoxSrcType = (await getDoc(chatBoxDoc)).data() as any;

            let userProfileDataList: any[] = []
            for (let index = 0; index < chatBoxData.uid_list.length; index++) {
                const uidItem = chatBoxData.uid_list[index];
                console.log(uidItem);
                
                const userData = await getDocs(query(collection(db, "user"), where("uid", "==", uidItem)));
                console.log(userData);
                
                const userProfileCollection =  collection(userData.docs[0].ref, "profile");
                const userProfile = (await getDocs(userProfileCollection)).docs[0].data() as any;
                userProfileDataList.push({
                    ...userProfile,
                    uid: uidItem
                });
            }

            setChatBox({
                profile_list: userProfileDataList,
                last_chat: null,
                id: chatBoxData.id
            });

            // .find((profile)=>profile.uid == FirebaseAuth.currentUser!.uid)
            FirebaseAuth.onAuthStateChanged((user) => {
                if(user) {
                    setOtherProfile(userProfileDataList.find((profile)=>profile.uid !== FirebaseAuth.currentUser!.uid));
                }
            })
            
        }
        catch (error) {
            console.log(error);
            
            alert("비정상적인 접근입니다.");
            navigate(-1);
        }
    }

    useEffect(() => {
        FirebaseAuth.onAuthStateChanged((user) => {
            if(user) {
                getChatBoxList(user.uid);
            }
        })
    }, [])

    useEffect(() => {
        if(!chatBox || (chatList && chatList.length)) {
            return;
        }
        console.log("useeffect");
        
        const q = query(collection(db, "userChat"), where("chat_box_id", "==", params.chat_box_id));
        const unsubscribe = onSnapshot(q, (snapshot) => {
            let currentChatList:any[] = chatList? [...chatList]: [];

            snapshot.forEach((doc) => {
                console.log(doc.data().chat);
                currentChatList.push({
                    uid: doc.data().uid,
                    chat:doc.data().chat,
                    time_created: doc.data().time_created,
                    id: doc.id
                });
            })

            for (let index = 0; index < currentChatList.length; index++) {
                const chatData = currentChatList[index];
                if(chatData.uid === chatBox.profile_list[0].uid) {
                    currentChatList[index].profile = chatBox.profile_list[0]
                }
                else{
                    currentChatList[index].profile = chatBox.profile_list[1]
                }
                currentChatList[index].from_me = (chatData.uid === FirebaseAuth.currentUser!.uid);
            }

            currentChatList.sort(function(a,b) {
                if(a.time_created > b.time_created) return 1;
                if(a.time_created < b.time_created) return -1;
                return 0;
            })

            setItemWithNoExpireTime(`chat/${params.chat_box_id}`, currentChatList[currentChatList.length -1].time_created);

            setChatList(currentChatList);
        });
    }, [chatBox])

    useEffect(() => {
        setTimeout(() => {
            window.scrollTo(0, window.document.body.scrollHeight);
        }, 10)
    }, [chatList])


    
    const sendChatData = async(chatString: string) => {
        if(!chatString.trim()) {
            return;
        }
        const userChatRef = collection(db, "userChat");
        await addDoc(userChatRef, {
            chat_box_id: params.chat_box_id,
            time_created: new Date(),
            chat: chatString,
            uid: FirebaseAuth.currentUser!.uid
        });
    }

    if(!chatBox || !otherProfile) {
        return (
            <div>
            </div>
        );
    }

    
    return (
        <AppFrame>
            <AppBarComponentOnlyBack title={
                `${otherProfile.profile_nickname}`
            } />

            <div style={{height:"20px"}}></div>
            {
                chatList?.map((chatData, index) => {
                    return (
                        <div style={{margin: "0 16px"}}>
                            <ChatDetailItemComponent 
                            chatData={chatData}
                            nextChatData={chatList.length >= index + 1 ? chatList[index + 1] : null}
                            prevChatData={chatList.length >= 1 ? chatList[index - 1] : null} 
                            chatLength={chatList.length}                        
                            />
                        </div>
                    )
                })
            }
            
            <div style={{height:"76px"}}></div>

            <ChatSendBottomBar style={{maxWidth:"625px", position:"fixed", bottom: 0}}>
                <SendInputWrapper>
                    <SendInput 
                    style={{color: userInputChat? "#272727":"#c3c3c3"}}
                    value={userInputChat} 
                    placeholder="메세지를 입력하세요."
                    onSubmit={()=> {
                        sendChatData(userInputChat);
                        setUserInputChat("");
                    }}
                    onChange={(e)=>{
                        setUserInputChat(e.target.value);
                    }} />    
                    <SendIcon 
                    src={userInputChat ? sendIconActive : sendIcon} 
                    onClick={()=>{
                        sendChatData(userInputChat);
                        setUserInputChat("");
                    }}/>
                </SendInputWrapper>
            </ChatSendBottomBar>
       </AppFrame>
    );

}

export default ChatDetailPage;