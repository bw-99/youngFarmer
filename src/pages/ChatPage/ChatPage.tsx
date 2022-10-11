import React, { useState } from "react";

import { useParams, useLocation, useNavigate } from 'react-router-dom';
import styled from "styled-components";


import alarm from "../../assets/images/alarm@3x.png";
import shopping_bag from "../../assets/images/shopping_bag@3x.png";
import { AppBarComponentNoBack, AppBarComponentSetting } from "../../common/AppBar/AppBar";



import { BottomNavigationBar } from "../../common/BottomNavigationBar/BottomNavigationBar";
import { ChatItemComponent } from "./components/chatItem";


function ChatPage() {
    return (
        <div style={{width: "100vw", height: "100vh"}}>
            {AppBarComponentSetting("채팅목록")}
            <div style={{marginTop: "56px"}}></div>
            <ChatItemComponent isReaded={true}/>
            <ChatItemComponent isReaded={true} />
            <ChatItemComponent isReaded={false} />
            <BottomNavigationBar />
        </div>
    );
}

export default ChatPage;