import styled from "styled-components";
import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import ChatPageIconOff from "../../../assets/images/btn-tabbar-chat-off@3x.webp";

import SendIconBlack from "../../../assets/images/send_black.webp";
// import SendIconWhite from "../../../assets/images/send_white.png";
import SendIconWhite from "../../../assets/images/send.webp";

import btnOutIcon from "../../../assets/images/btn-out@3x.webp";
import btnOutBlackIcon from "../../../assets/images/btn-out-black@3x.webp";


import { StoreDataType, StoreProductDataType } from "../../../pages/StorePage/StoreType";
import { getDoc, doc, setDoc, serverTimestamp, collection, query, where, getDocs, addDoc } from "firebase/firestore";
import { useDispatch, useSelector } from "react-redux";
import { db } from "../../..";
import { RootState } from "../../../reducers";
import { MyPageDataType } from "../../../reducers/MypageReducer";
import { FirebaseAuth } from './../../../index';

const AppBarIcon = styled.img`
  width: 24px;
  height: 24px;
  object-fit: contain;
  padding: 16px 16px 16px 8px;
  src: ${(props:any) => props.src};
`


export const ChatIconComponent = (props: StoreProductDataType) => {
    const params = useParams();
    const location = useLocation();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [chatBoxId, setChatBoxId] = useState<string | null>(null);

    const makeNewChat = async(uid:string) => {
        const userRef = collection(db, "user");
        const userQ = query(userRef, where("store_id", "==", Number(params.store_id)));
        const storeResult = await getDocs(userQ);
        if(storeResult.empty) {
            alert("비정상적인 접근입니다.")
            navigate(-1);
        }
        const storeUid = storeResult.docs[0].data();
        
        const chatRef = collection(db, "chat");
        const result = await addDoc(chatRef, { 
            store_id: Number(params.store_id),
            uid: uid,
            uid_list: [
                storeUid.uid,
                uid
            ]
        });
        
        const userChatRef = collection(db, "userChat");
        const addResult = await addDoc(userChatRef, {
            chat: "파시는 농작물에 관심 있어요!",
            chat_box_id: result.id,
            time_created: new Date(),
            uid: uid
        });
        console.log(result.id);
        
        console.log(addResult);
        
    }

    const getChatBoxId = async(uid:string) => {
        const chatRef = collection(db, "chat");
        let chatQ = query(chatRef, where("store_id", "==",  Number(params.store_id)));
        chatQ = query(chatQ, where("uid", "==", uid));
        let data = await getDocs(chatQ);
        if(data.empty) {
            await makeNewChat(uid);
            chatQ = query(chatRef, where("store_id", "==", Number(params.store_id)));
            chatQ = query(chatQ, where("uid", "==", uid));
            data = await getDocs(chatQ);
        }
        console.log(data);
        console.log(data.docs[0].id);
        navigate(`/chat/${data.docs[0].id}`);
        // setChatBoxId(data.docs[0].id);
    }

    const handleEnterChat = () => {
        FirebaseAuth.onAuthStateChanged((user) => {
            if(user) {
                getChatBoxId(user.uid);
            }
        })
    }

    return (
        <AppBarIcon src={btnOutBlackIcon} alt="" onClick={handleEnterChat}/>
    );
}

export const ChatWhiteIconComponent = (props: StoreProductDataType) => {
    const params = useParams();
    const location = useLocation();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [chatBoxId, setChatBoxId] = useState<string | null>(null);

    const makeNewChat = async(uid:string) => {
        const userRef = collection(db, "user");
        const userQ = query(userRef, where("store_id", "==", Number(params.store_id)));
        const storeResult = await getDocs(userQ);
        if(storeResult.empty) {
            alert("비정상적인 접근입니다.")
            navigate(-1);
        }
        const storeUid = storeResult.docs[0].data();
        
        const chatRef = collection(db, "chat");
        const result = await addDoc(chatRef, { 
            store_id: Number(params.store_id),
            uid: uid,
            uid_list: [
                storeUid.uid,
                uid
            ]
        });
        
        const userChatRef = collection(db, "userChat");
        const addResult = await addDoc(userChatRef, {
            chat: "파시는 농작물에 관심 있어요!",
            chat_box_id: result.id,
            time_created: new Date(),
            uid: uid
        });
        console.log(result.id);
        
        console.log(addResult);
        
    }

    const getChatBoxId = async(uid:string) => {
        const chatRef = collection(db, "chat");
        let chatQ = query(chatRef, where("store_id", "==",  Number(params.store_id)));
        chatQ = query(chatQ, where("uid", "==", uid));
        let data = await getDocs(chatQ);
        if(data.empty) {
            await makeNewChat(uid);
            chatQ = query(chatRef, where("store_id", "==", Number(params.store_id)));
            chatQ = query(chatQ, where("uid", "==", uid));
            data = await getDocs(chatQ);
        }
        console.log(data);
        console.log(data.docs[0].id);
        navigate(`/chat/${data.docs[0].id}`);
        // setChatBoxId(data.docs[0].id);
    }

    const handleEnterChat = () => {
        FirebaseAuth.onAuthStateChanged((user) => {
            if(user) {
                getChatBoxId(user.uid);
            }
        })
    }

    return (
        <AppBarIcon color="white" src={btnOutIcon} alt="" onClick={handleEnterChat}/>
    );
}