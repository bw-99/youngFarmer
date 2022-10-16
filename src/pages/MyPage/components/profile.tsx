import recommendItemStawberry from "../../../assets/images/main_recommend_strawberry.png";
import shoppingBag from "../../../assets/images/shopping-bag-20px@3x.png";
import defaultPhoto from "../../../assets/images/btn-avatar-default@3x.png";
import cameraIcon from "../../../assets/images/icon-camera-16-px@3x.png";
import React from "react";
import orderIcon from "../../../assets/images/btn-order@3x.png";
import reviewIcon from "../../../assets/images/btn-review@3x.png";
import pointIcon from "../../../assets/images/btn-point@3x.png";
import followIcon from "../../../assets/images/btn-follow@3x.png";

import { ProfileEmail, ProfileFuncMenu, ProfileFuncMenuDivider, ProfileFuncMenuIcon, ProfileFuncMenuText, ProfileNickname, ProfileNicknameSub, ProfilePhoto, ProfilePhotoAtom, ProfilePhotoChange, ProfilePhotoChangeIcon } from "../atoms/profile";

export const ProfileComp = () => {
    return(
        <div style={{padding: "20px 16px 0 16px"}}>
            <ProfilePersonalComp />
            <ProfileFuncComp />
        </div>
    );
}

const ProfilePersonalComp = () => {
    return(
        <div style={{display:"flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
            <ProfilePhotoAtom>
                <ProfilePhoto src={defaultPhoto}/>
                <ProfilePhotoChange >
                    <ProfilePhotoChangeIcon src={cameraIcon} />
                </ProfilePhotoChange>
            </ProfilePhotoAtom>
           
            <div style={{marginTop: "16px", display:"flex", alignItems:"flex-end"}}>
                <ProfileNickname> 청년농부 </ProfileNickname>
                <ProfileNicknameSub> 님 </ProfileNicknameSub>
            </div>

            <ProfileEmail style={{marginTop: "8px"}}> abcd@naver.com </ProfileEmail>

        </div>
    );
}

const ProfileFuncComp = () => {
    return(
        <div style={{marginTop: "20px"}}>
            <ProfileFuncMenu>
                {ProfileFuncItemComp(orderIcon, "주문•배송")}
                <ProfileFuncMenuDivider />
                {ProfileFuncItemComp(reviewIcon, "리뷰작성")}
                <ProfileFuncMenuDivider />
                {ProfileFuncItemComp(pointIcon, "포인트")}
                <ProfileFuncMenuDivider />
                {ProfileFuncItemComp(followIcon, "찜한상점")}
            </ProfileFuncMenu>
        </div>
    );
}

const ProfileFuncItemComp = (image:any, text:string) => {
    return(
        <div style={{padding: "0 16px", display: "flex", flexDirection: "column", justifyContent:"center", alignItems:"center"}}>
            <ProfileFuncMenuIcon src={image}/>
            <ProfileFuncMenuText style={{marginTop:"0px"}}> {text} </ProfileFuncMenuText>
        </div>
    );
}