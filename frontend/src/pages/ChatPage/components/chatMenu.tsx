import React from "react";
import { MenuImg,MenuBigBox, MenuSmallBox, BlackOpacityBox, MenuClostBtn } from "../atoms/chatMenu";
import btn1 from "../../../assets/images/btnChatMenu@3x1.webp"
import btn2 from "../../../assets/images/btnChatMenu@3x2.webp"
import btn3 from "../../../assets/images/btnChatMenu@3x3.webp"
import btn4 from "../../../assets/images/btnChatMenu@3x4.webp"

interface TempMenuType  {
    isMenuOpen : boolean
}

export const ChatMenuComponent = (props:TempMenuType) => {

    return (
        props.isMenuOpen
        ?
            <div style={{position:"fixed",maxWidth: "625px", width: "100vw", height: "inherit"}}>
            <BlackOpacityBox>

            </BlackOpacityBox>
            <MenuBigBox>
                <MenuSmallBox style={{borderBottom:"1px solid #efefef"}}>
                    <MenuImg style={{margin:"0px 16px"}} src={btn1}/>
                    <div>
                        채팅 알림 끄기
                    </div>
                </MenuSmallBox>
                <MenuSmallBox style={{borderBottom:"1px solid #efefef"}}>
                    <MenuImg style={{margin:"0px 16px"}} src={btn2}/>
                    <div>
                        상점 차단하기
                    </div>
                </MenuSmallBox>
                <MenuSmallBox style={{borderBottom:"1px solid #efefef"}}>
                    <MenuImg style={{margin:"0px 16px"}} src={btn4}/>
                    <div>
                        신고하기
                    </div>
                </MenuSmallBox>
                <MenuSmallBox>
                    <MenuImg style={{margin:"0px 16px"}} src={btn3}/>
                    <div>
                        채팅방 나가기
                    </div>
                </MenuSmallBox>
                <MenuClostBtn>
                    닫기
                </MenuClostBtn>

            </MenuBigBox>

            </div>

        :
        <div>

        </div>
            

        
        

        
    )
}