import React, { useState, createContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import {
    collection,
    query,
    where,
    getDocs,
    setDoc,
    doc,
    updateDoc,
    serverTimestamp,
    getDoc,
    getFirestore,

} from "firebase/firestore";
import { FirebaseAuth } from "../../..";

import { AppFrame } from "../../../App";
import { AppBarComponentOnlyBack } from "../../../common/AppBar/AppBar";
import {ProductBigImg,ProducerChatImg,ProductMiddleBox,ProductText1,ProductText2,ProductText3,ProdcutSmallBtn,ProductSmallImg,ChatTimeBox,ConsumerChatBox,ProducerChatBox,ChatForDivisionBox,ProductInfoBigBox,PlusItemBox,PlustIcon,ProductInfoSmallBox,MainChatSmallBox,MainChatBigBox, ChatDateBox, LineDrawBox, ProductBigText1, ProductBigText2, ProductBigText3, ProductBigBtn} from "../atoms/chatItem2"
import { StoreDataType, StoreProductDataType } from "../../../pages/StorePage/StoreType";
import { MyPageDataType } from "../../../reducers/MypageReducer";
import { RootState } from "../../../reducers";
import { getProfileAction } from "../../MyPage/MyAction";
import { ChatAppBarComponent } from "./chatAppBar"
import iconPicture from "../../../assets/images/icon-chat-btn-1@3x.png"
import iconCamera from "../../../assets/images/icon-chat-btn-2@3x.png"
import iconVoiceMessage from "../../../assets/images/icon-chat-btn-3@3x.png"
import iconRemittance from "../../../assets/images/icon-chat-btn-4@3x.png"

import {ChatBodySmallComponent} from "./chatBody"

import { ChatMenuComponent } from "./chatMenu";
import { select } from "redux-saga/effects";
import { prop } from "cheerio/lib/api/attributes";


interface appBarPropsType {
    isChatClicked:boolean,
    isPlusClicked:boolean,
    isMenuClicked:boolean
}


interface ChatProductDataType{
    f_name : string,
    p_img : string,
    p_name : string,
    p_price : string,
    p_sale : string
}

interface ChatItem2PropsType{
    appBarPart : appBarPropsType,
    chatPart : ChatProductDataType,
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
                <div style={{display:'flex'}}>
                <ChatTimeBox style={{marginRight:"6px"}}>
                {props.time}
                </ChatTimeBox>
                <ConsumerChatBox>
                    {props.contents}
                </ConsumerChatBox>

                </div>
            </ChatForDivisionBox>
            
        )
    }
    else{
        return(
            <ChatForDivisionBox>
                <div style={{display:'flex'}}>
                    <ProducerChatImg style={{margin:"0px 10px"}}>

                    </ProducerChatImg>
                    <ProducerChatBox>
                        {props.contents}
                        
                    </ProducerChatBox>
                    <ChatTimeBox style={{marginLeft:'6px'}} >
                    {props.time}
                    </ChatTimeBox>
                

                </div>
                
                <div>
                    
                </div>
            </ChatForDivisionBox>
            
        )

    }

}


export const ChatItem2Component = (props: ChatItem2PropsType) => {

        const tempChatA = ChatMakeFunc(tempChatData1);
        const tempChatB = ChatMakeFunc(tempChatData2);
           

 // isChatclicked? small chat : big chat 
        return(
            props.appBarPart.isPlusClicked
            //4-5 page
            ?
            <AppFrame>
                    <ChatMenuComponent isMenuOpen={true} ></ChatMenuComponent>
                    <AppBarComponentOnlyBack title={props.chatPart.f_name}/>
                    
                    <ChatDateBox>
                        <LineDrawBox style={{marginLeft:"16px"}}></LineDrawBox>
                        <div style={{minWidth:"90px", margin:"0px 5px"}}>2022년 4월 14일</div>
                        <LineDrawBox style={{marginRight:"16px"}}></LineDrawBox>
                    </ChatDateBox>

                    <MainChatSmallBox style={{overflow:'scroll', height:'520px'}}>
                        
                            <ChatForDivisionBox>
                                <div></div>

                                <ProductInfoBigBox>
                                    <div >
                                        <ProductBigImg style={{marginLeft:" 20px"}}>
                                        </ProductBigImg>
                                    </div>
                                    <div>
                                        <ProductBigText1 style={{margin:"5px 0px 10px 20px"}}>{props.chatPart.p_name}</ProductBigText1>
                                        <div style={{display:"flex"}}>
                                            <ProductBigText2 style={{marginLeft:" 20px"}}>{props.chatPart.p_price}</ProductBigText2>
                                            <ProductBigText3 style={{marginLeft:" 5px", marginTop:"1px"}}>{props.chatPart.p_sale}</ProductBigText3>
                                        </div>

                                    </div>
                                    <div >
                                        <ProductBigBtn style={{margin:"10px 20px 0px"}}>상품 상세보기</ProductBigBtn>
                                    </div>
                                </ProductInfoBigBox>
                            </ChatForDivisionBox>
                            {tempChatA}
                            {tempChatB} 
                            {tempChatA}
                            {tempChatB} 
                            {tempChatA}
                            {tempChatB} 
                            {tempChatA}
                            {tempChatB} 
                        
                            
                        
                        
                        
                    </MainChatSmallBox>
                    
                    {/* <ChatAppBarComponent ></ChatAppBarComponent>
                    
                    <PlusItemBox>
                        <PlustIcon src={iconPicture}/>
                        <PlustIcon src={iconCamera}/>
                        <PlustIcon src={iconVoiceMessage}/>
                        <PlustIcon src={iconRemittance}/>
                    </PlusItemBox> */}
                    {/* bottomappbar  ... 위치까먹음 */}

                    
            </AppFrame>

                
            :
            props.appBarPart.isChatClicked
                //4-4 page
                ?
                <AppFrame>
                    
                    <AppBarComponentOnlyBack title={props.chatPart.f_name}/>
                    
                    <MainChatSmallBox style={{overflow:'hidden'}}>
                        <ProductInfoSmallBox>
                            <ProductSmallImg style={{margin:"10px"}}>

                            </ProductSmallImg>

                            <ProductMiddleBox>
                                <ProductText1 style={{margin:"5px"}}>
                                    {props.chatPart.p_name}
                                </ProductText1>
                                <div style={{display:"flex"}}>
                                    <ProductText2 style={{margin:"5px"}}>
                                        {props.chatPart.p_price}
                                    </ProductText2>
                                    <ProductText3 style={{margin:"5px"}}>
                                        {props.chatPart.p_sale}
                                    </ProductText3>
                                </div>

                            </ProductMiddleBox>
                            <ProdcutSmallBtn style={{marginTop:"13px", marginRight:"15px"}}>
                                상세보기
                            </ProdcutSmallBtn>
                           
                            
                            

                        </ProductInfoSmallBox>
                        
                        <div style={{overflow:'scroll', height:'inherit'}}>
                        
                        {tempChatA}
                        {tempChatB} 
                        {tempChatA}
                        {tempChatB} 
                        {tempChatA}
                        {tempChatB} 
                        {tempChatA}
                        {tempChatB} 

                        </div>
                                               
                    </MainChatSmallBox>
                    {/* <ChatAppBarComponent ></ChatAppBarComponent> */}            
                    {/* bottomappbar  */}
                    

                    
                </AppFrame>
                
                //4-3 page
                :

                <AppFrame>
                    
                    <AppBarComponentOnlyBack title={props.chatPart.f_name}/>
                    

                    <MainChatBigBox style={{height:"520px"}} >
                    
                        <ProductInfoSmallBox>
                            <ProductSmallImg style={{margin:"10px"}}>

                            </ProductSmallImg>

                            <ProductMiddleBox>
                                <ProductText1 style={{margin:"5px"}}>
                                    {props.chatPart.p_name}
                                </ProductText1>
                                <div style={{display:"flex"}}>
                                    <ProductText2 style={{margin:"5px"}}>
                                        {props.chatPart.p_price}
                                    </ProductText2>
                                    <ProductText3 style={{margin:"5px"}}>
                                        {props.chatPart.p_sale}
                                    </ProductText3>
                                </div>

                            </ProductMiddleBox>
                            <ProdcutSmallBtn style={{marginTop:"13px", marginRight:"15px"}}>
                                상세보기
                            </ProdcutSmallBtn>
                           
                            
                            

                        </ProductInfoSmallBox>
                        
                        <div style={{overflow:'scroll', height:'inherit'}}>
                        
                        {tempChatA}
                        {tempChatB} 
                        {tempChatA}
                        {tempChatB} 
                        {tempChatA}
                        {tempChatB} 
                        {tempChatA}
                        {tempChatB} 

                        </div>
                        
                    </MainChatBigBox>
                    {/* <ChatAppBarComponent ></ChatAppBarComponent> */}
                </AppFrame>

        )
}

export const ChatItemCompOnlyText = (props: any) => {
    const [storeInfo, setStoreInfo] = useState<StoreProductDataType | null>(null);
    
    const userInfo: MyPageDataType = useSelector((state: RootState) =>
        state.ProfileReducer!.mypageInfo
    );

    const params = useParams();
    const location = useLocation();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const db = getFirestore();

    const makeChatDatebase = async () => {
        //check whether the group(chats in firestore) exists, if not create
        const combinedId = storeInfo?.store_id + userInfo.uid;

        try {
            const res = await getDoc(doc(db, "chat", combinedId));

            if (!res.exists()) {
                //create a chat in chats collection
                await setDoc(doc(db, "chat", combinedId), { messages: [] });

                //create user chat
                await updateDoc(doc(db, "userChat", userInfo.uid), {
                    [combinedId + ".userInfo"]: {
                        uid: storeInfo?.store_id,
                        displayName: storeInfo?.name,
                        photoURL: storeInfo?.photo,
                    },
                    [combinedId + ".date"]: serverTimestamp(),
                });
            }
        } catch (err) { }
    };

    useEffect(() => {
        setStoreInfo({
            background_photo: location.state.props.background_photo,
            category: location.state.props.category,
            description: location.state.props.description,
            name: location.state.props.name,
            photo: location.state.props.photo,
            store_id: location.state.props.store_id,
            product_list: location.state.props.product_list
        });

        FirebaseAuth.onAuthStateChanged((user) => {
            if (user) {
                console.log("dispatch!!");
                dispatch(getProfileAction(user!.uid));
            }
        })
        makeChatDatebase();
    }, []);

    
    return(
        
        <div/>
        )
}