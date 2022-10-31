import React from "react";
import { useParams, Link, useLocation, useNavigate } from 'react-router-dom';
import {AppColorBig,AppColorSmall,ProfileBoxSmallSmall2,ProfileBoxSmall1,ProfileBoxSmall2,ProfileBoxSmallSmall1,ProfileBtnBox,ProfileExitBtn,TitleBox,ProfileBox,MenuBox,ProfileCorrectionBtn,ProfileImgBox,SmallBtn,BigBtn} from "./atoms/setting"
import { AppFrame } from "../../App";
import rightArrow from "../../assets/images/btn-arrow-r-14-px@3x.png"
import leftArrow from "../../assets/images/btn-back@3x.png"
import { AppBarComponentOnlyBack } from "../../common/AppBar/AppBar";


export const MySettingPage = () => {
    
    const navigate = useNavigate();
    return(
        <AppFrame>
            
                {/* <TitleBox>
                    <div style={{float:"left"}}><BigBtn src={leftArrow}/></div>
                    <div>환경설정</div>  
                    <div style={{borderStyle:"none"}}></div> 
                </TitleBox> */}
                {/* // ! app bar 재활용 */}
                <AppBarComponentOnlyBack title={"환경설정"} /> 
                <ProfileBox style={{marginTop:"80px"}}>
                    
                        <ProfileBoxSmall1>
                            <ProfileImgBox style={{marginLeft:"16px"}}>
                                {/* img */}
                            </ProfileImgBox>
                        </ProfileBoxSmall1>
                           
                       <ProfileBoxSmall2>
                            <ProfileBoxSmallSmall1>
                                청년농부
                            </ProfileBoxSmallSmall1>
                            <div style={{display:"flex", justifyContent:"space-between", marginRight:"16px"}}>
                                <ProfileCorrectionBtn onClick={()=>
                                    {navigate('/mypage/setting/info');}}>
                                    내 정보 수정하기
                                </ProfileCorrectionBtn>
                                <SmallBtn src={rightArrow}/>

                            </div>
                            
                              
                       </ProfileBoxSmall2>
                        
                        
                </ProfileBox>
                

                <ProfileBtnBox>
                    
                        <ProfileExitBtn style={{margin:"0px 8px"}}>로그아웃</ProfileExitBtn>
                        <ProfileExitBtn style={{margin:"0px 8px"}}>탈퇴하기</ProfileExitBtn>
                
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
                <AppColorBig></AppColorBig>
                
           
        </AppFrame>
    );
}

export default MySettingPage;