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
import { MyPageDataType } from "../../../reducers/MypageReducer";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../reducers";
import { db, storage } from "../../..";
import { getDownloadURL, ref, StorageReference, uploadBytes, uploadBytesResumable } from "firebase/storage";
import { collection, query, where, limit, getDocs, updateDoc, addDoc } from "firebase/firestore";
import { data } from "cheerio/lib/api/attributes";
import { getProfileAction } from "../MyAction";

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
