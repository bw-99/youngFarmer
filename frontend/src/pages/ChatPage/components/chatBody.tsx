import React,{ReactNode} from "react";
import {ChatDateBox,LineDrawBox,ProductMiddleBox,ProductText1,ProductText2,ProductText3,ProdcutSmallBtn,ProductSmallImg,ConsumerChatBox,ProducerChatBox,ChatForDivisionBox,ProductInfoSmallBox,MainChatSmallBox} from "../atoms/chatItem2"



interface ChatProductDataType{
    f_name : string,
    p_img : string,
    p_name : string,
    p_price : string,
    p_sale : string
}


const tempChatData1 = {
    isMe : true,
    contents : "test1test1test1test1test1test1test1test1test1",
    time : "2022-11-11"
}

const tempChatData2 = {
    isMe : false,
    contents : "test2test2test2test2test2test2test2test2test2",
    time : "2022-11-11"
}

const tempChatList = {
    chatList : [tempChatData1,tempChatData2]
}

interface chatDataType{
    isMe : boolean;
    contents : string;
    time: string;
}

interface chatItemList{
    // children: ReactNode;
    chatList : chatDataType[];
}

const ChatMakeFunc = (props : chatDataType) => {
    if (props.isMe) {
        return(
            <ChatForDivisionBox>
                <div>
                    
                </div>
                <ConsumerChatBox>
                    {props.contents}
                    {props.time}
                </ConsumerChatBox>
            </ChatForDivisionBox>
            
        )
    }
    else{
        return(
            <ChatForDivisionBox>
                <ProducerChatBox>
                    {props.contents}
                    {props.time}
                </ProducerChatBox>
                <div>
                    
                </div>
            </ChatForDivisionBox>
            
        )

    }

}

// const ChatListMakeFucn = (props: chatItemList) => {
//     const temp = props.chatList.map((chat) => ChatMakeFunc(chat))
//     return (

        
//             {temp}
        
//     )

// }


export const ChatBodySmallComponent = () => {

  
    return(
        
        <MainChatSmallBox style={{overflow:'hidden'}}>
        <ProductInfoSmallBox>
            <ProductSmallImg style={{margin:"10px"}}>

            </ProductSmallImg>

            <ProductMiddleBox>
                <ProductText1 style={{margin:"5px"}}>
                    {/* {props.chatPart.p_name} */}
                </ProductText1>
                <div style={{display:"flex"}}>
                    <ProductText2 style={{margin:"5px"}}>
                        {/* {props.chatPart.p_price} */}
                    </ProductText2>
                    <ProductText3 style={{margin:"5px"}}>
                        {/* {props.chatPart.p_sale} */}
                    </ProductText3>
                </div>

            </ProductMiddleBox>
            <ProdcutSmallBtn style={{marginTop:"13px", marginRight:"15px"}}>
                상세보기
            </ProdcutSmallBtn>
           
            
            

        </ProductInfoSmallBox>
        
        <div style={{overflow:'scroll', height:'inherit'}}>
        
        {/* {tempChatA}
        {tempChatB} 
        {tempChatA}
        {tempChatB} 
        {tempChatA}
        {tempChatB} 
        {tempChatA}
        {tempChatB}  */}

        </div>
                               
        </MainChatSmallBox>
    )
}

export const ChatBodyBigComponent = () => {

    return(
        <div></div>
    )

}

export const ChatDateComponent = ()=> {

    return(
        <ChatDateBox>
                <LineDrawBox style={{marginLeft:"16px"}}></LineDrawBox>
                <div style={{minWidth:"90px", margin:"0px 5px"}}>2022년 4월 14일</div>
                <LineDrawBox style={{marginRight:"16px"}}></LineDrawBox>
        </ChatDateBox>
    )

}