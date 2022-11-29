import React from "react";



import { ChatItem2Component, ChatItemCompOnlyText } from "./components/chatItem2"

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

function ChatPage2() {
    return (
        /*<ChatItem2Component  chatPart={tempData1} appBarPart={tempData2}></ChatItem2Component>
        */<ChatItemCompOnlyText />
    );
}

export default ChatPage2;