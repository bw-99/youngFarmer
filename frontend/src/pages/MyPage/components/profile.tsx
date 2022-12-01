import defaultPhoto from "../../../assets/images/btn-avatar-default@3x.webp";
import cameraIcon from "../../../assets/images/icon-camera-16-px@3x.webp";
import React from "react";
import orderIcon from "../../../assets/images/btn-order@3x.webp";
import reviewIcon from "../../../assets/images/btn-review@3x.webp";
import pointIcon from "../../../assets/images/btn-point@3x.webp";
import followIcon from "../../../assets/images/btn-follow@3x.webp";

import { ProfileEmail, ProfileFuncMenu, ProfileFuncMenuDivider, ProfileFuncMenuIcon, ProfileFuncMenuText, ProfileNickname, ProfileNicknameSub, ProfilePhoto, ProfilePhotoAtom, ProfilePhotoChange, ProfilePhotoChangeIcon } from "../atoms/profile";
import { MyPageDataType } from "../../../reducers/MypageReducer";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../reducers";
import { db, storage } from "../../..";
import { getDownloadURL, ref, StorageReference, uploadBytes, uploadBytesResumable } from "firebase/storage";
import { collection, query, where, limit, getDocs, updateDoc, addDoc } from "firebase/firestore";
import { getProfileAction } from "../MyAction";
import { useNavigate } from 'react-router-dom';

export const ProfileComp = () => {
    const selector: MyPageDataType = useSelector((state:RootState) =>
        state.ProfileReducer!.mypageInfo
    );      


    return(
        <div style={{padding: "20px 16px 0 16px"}}>
            <ProfilePersonalComp />
            <ProfileFuncComp />
        </div>
    );
}

const ProfilePersonalComp = () => {
    const selector: MyPageDataType = useSelector((state:RootState) =>
        state.ProfileReducer!.mypageInfo
    );   

    const dispatch = useDispatch();

    const photoUploadHandler = (e: any) => {
        const img = e.target.files[0];
        console.log(img);

        const storageRef:StorageReference = ref(storage, `/${img.name}`)!;
          
        const uploadTask = uploadBytesResumable(storageRef, img);

        uploadTask.on(
            "state_changed",
            (snapshot) => {
                const percent = Math.round(
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                );
            },
            (err) => console.log(err),
            () => {
                // download url
                getDownloadURL(uploadTask.snapshot.ref).then( async (url) => {

                    const userRef = collection(db, "user");
                    const q = query(userRef, where("uid", "==", selector.uid), limit(1));
                    const fbdata = await getDocs(q);

                    const profileRef = collection(fbdata.docs[0].ref, "profile");
                    const q2 = query(profileRef);
                    const fbdata2 = await getDocs(q2);

                    await updateDoc(fbdata2.docs[0].ref, {
                        profile_img: url
                    });

                    dispatch(getProfileAction(selector.uid));
                    console.log(url);
                });
            }
        ); 

    }

    return(
        <div style={{display:"flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
            <ProfilePhotoAtom>
                <ProfilePhoto src={
                    selector.profileData.profile_img ?
                    selector.profileData.profile_img
                    : defaultPhoto}/>

            <label>
                <ProfilePhotoChange >
                    <ProfilePhotoChangeIcon src={cameraIcon} />
                </ProfilePhotoChange>

                <input type='file' 
                    accept='image/jpg,impge/png,image/jpeg,image/gif' 
                    name='profile_img' 
                    style={{display:"none"}}
                    onChange={photoUploadHandler}>
                </input>
                </label>

            </ProfilePhotoAtom>
           
            <div style={{marginTop: "16px", display:"flex", alignItems:"flex-end"}}>
                <ProfileNickname> {selector.profileData.profile_nickname? selector.profileData.profile_nickname : "guest"} </ProfileNickname>
                <ProfileNicknameSub> 님 </ProfileNicknameSub>
            </div>

            <ProfileEmail style={{marginTop: "8px"}}> {selector.profileData.profile_email? selector.profileData.profile_email : ""} </ProfileEmail>

        </div>
    );
}

const ProfileFuncComp = () => {
    const navigate = useNavigate();

    return(
        <div style={{marginTop: "20px"}}>
            <ProfileFuncMenu>
                <ProfileFuncItemComp image={orderIcon} text={"주문•배송"} onClickFun = {() => {
                    navigate(`/list`);
                }} />
                <ProfileFuncMenuDivider />
                <ProfileFuncItemComp image={reviewIcon} text={"리뷰작성"} onClickFun = {() => {
                    navigate("/review");
                }} />
                <ProfileFuncMenuDivider />
                <ProfileFuncItemComp image={pointIcon} text={"포인트"} onClickFun = {() => {
                    navigate("/mypage/point");
                }} />
                <ProfileFuncMenuDivider />
                <ProfileFuncItemComp image={followIcon} text={"찜한상점"} onClickFun = {() => {
                    navigate("/mypage/store");
                }} />
            </ProfileFuncMenu>
        </div>
    );
}

type mypageIconProps = {
    image: any,
    text: string,
    onClickFun : Function
}

const ProfileFuncItemComp = ({image, text, onClickFun}:mypageIconProps) => {
    return(
        <div 
        onClick={()=>{
            onClickFun();
        }}
        style={{padding: "0 16px", display: "flex", flexDirection: "column", justifyContent:"center", alignItems:"center"}}>
            <ProfileFuncMenuIcon src={image}/>
            <ProfileFuncMenuText style={{marginTop:"0px"}}> {text} </ProfileFuncMenuText>
        </div>
    );
}
