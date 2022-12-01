import React, { useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import {AppColorSmall,ProfileBoxSmall1,ProfileBoxSmall2,ProfileBoxSmallSmall1,ProfileBtnBox,ProfileExitBtn,TitleBox,ProfileBox,MenuBox,ProfileCorrectionBtn,ProfileImgBox,SmallBtn,BigBtn} from "./atoms/setting"
import { AppFrame } from "../../App";
import rightArrow from "../../assets/images/btn-arrow-r-14-px@3x.webp"
import { AppBarComponentOnlyBack } from "../../common/AppBar/AppBar";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../reducers";
import { MyPageDataType } from "../../reducers/MypageReducer";
import { CircularProgress } from '@mui/material';
import { FirebaseAuth } from "../..";
import { getProfileAction } from "./MyAction";
import defaultPhoto from "../../assets/images/btn-avatar-default@3x.webp";


export const MySettingPage = () => {

    const dispatch = useDispatch();
    
    const selector: MyPageDataType = useSelector((state:RootState) =>
        state.ProfileReducer!.mypageInfo
    );      

    useEffect(()=>{
        FirebaseAuth.onAuthStateChanged((data)=> {
            if(data){
                dispatch(getProfileAction(data.uid));
            }
        })
    },[])

    const navigate = useNavigate();
    if(selector) {
        return(
            <AppFrame>
                    <AppBarComponentOnlyBack title={"환경설정"} /> 
                    <ProfileBox style={{marginTop:"80px"}}>
                        
                            <ProfileBoxSmall1 style={{marginLeft:"16px"}}>
                                <ProfileImgBox src={selector.profileData.profile_img ?
                                selector.profileData.profile_img
                                : defaultPhoto}>
                                    {/* img */}
                                </ProfileImgBox>
                            </ProfileBoxSmall1>
                               
                           <ProfileBoxSmall2 style={{marginLeft:"16px"}}>
                                <ProfileBoxSmallSmall1>
                                    {selector.profileData.profile_nickname}
                                </ProfileBoxSmallSmall1>
                                <div
                                 onClick={()=>
                                    {navigate('/mypage/setting/info');}}
                                style={{display:"flex", justifyContent:"space-between", marginRight:"16px"}}>
                                    <ProfileCorrectionBtn>
                                        내 정보 수정하기
                                    </ProfileCorrectionBtn>
                                    <SmallBtn src={rightArrow}/>
                                </div>
                                
                           </ProfileBoxSmall2>
                            
                            
                    </ProfileBox>
                    
    
                    <ProfileBtnBox>
                            <ProfileExitBtn 
                            onClick={() => {
                                FirebaseAuth.signOut().then((val) =>{ 
                                    console.log(val);
                                })

                            }}
                            style={{margin:"0px 8px"}}>로그아웃</ProfileExitBtn>
                            <ProfileExitBtn 
                            onClick={() => {
                                FirebaseAuth.signOut().then((val) =>{ 
                                    console.log(val);
                                })

                            }}
                            style={{margin:"0px 8px"}}>탈퇴하기</ProfileExitBtn>
                    </ProfileBtnBox>
    
                    <AppColorSmall></AppColorSmall>
    
                    <div>
                        <div>
                            <MenuBox onClick={()=>
                                        {navigate('/mypage/setting/alarm');}}>
                                알림 설정
                                <SmallBtn src={rightArrow}/>
                            </MenuBox>
                        </div>
                        <AppColorSmall></AppColorSmall>
                        <div>
                            <MenuBox>
                                문의하기
                                <SmallBtn src={rightArrow}/>
                            </MenuBox>
                            <MenuBox>
                                고객센터
                                <SmallBtn src={rightArrow}/>
                            </MenuBox>
                        </div>
                        <AppColorSmall></AppColorSmall>
                        <div>
                            <MenuBox>
                                약관 및 정책
                                <SmallBtn src={rightArrow}/>
                            </MenuBox>
                            <MenuBox>
                                버전 정보
                                <SmallBtn src={rightArrow}/>
                            </MenuBox>
                        </div>
                    </div>
                    {/* <AppColorBig></AppColorBig> */}
                    
               
            </AppFrame>
        );
    }

    return (
        <AppFrame>
            <CircularProgress />
        </AppFrame>
    )
    
}

export default MySettingPage;