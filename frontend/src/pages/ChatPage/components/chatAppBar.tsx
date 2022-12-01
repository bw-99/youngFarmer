import React from "react";
import {AppBarBtnPlus,AppBarChatBox,AppBarMainBoxSmall,AppBarChatTextSmallBox, AppBarBtnEnter} from "../atoms/chatAppBar"


//역방향이므로 reducer사용..?
//chattinng쪽 눌러지면 chatItem2의 isClicked true로변경 
//->  키보드 component활성화

export const ChatAppBarComponent = () => {

        return(
            <AppBarMainBoxSmall>
                <AppBarBtnPlus></AppBarBtnPlus>
                <AppBarChatBox>
                    <AppBarChatTextSmallBox>

                    </AppBarChatTextSmallBox>
                    <AppBarBtnEnter></AppBarBtnEnter>
                </AppBarChatBox>
            </AppBarMainBoxSmall>
        )
}