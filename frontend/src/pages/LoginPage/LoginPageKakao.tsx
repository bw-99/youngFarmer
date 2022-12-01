import React, { useEffect, } from "react";

import { useNavigate, useSearchParams } from 'react-router-dom';


import {  LoginWithKakaoAction, LoginWithNaverAction } from "./LoginAction";
import { useDispatch } from "react-redux";
import { db } from "../..";

import { collection, where, limit, getDocs, query } from "firebase/firestore";
import { AppFrame } from "../../App";


  
function LoginKakaoPage(props: any) {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [searchParams, setSearchParams] = useSearchParams();


    const handleIfUserSignUp = async (uid:string) => {
        const userRef = collection(db, "user");
        const q = query(userRef, where("uid", "==", uid), limit(1));
        const fbdata = await getDocs(q);
        const isNew:boolean = fbdata.empty;
        return isNew;
    }

    useEffect(() => {
        const code = searchParams.get("code");
        if(code) {
            dispatch(
                LoginWithKakaoAction(
                    {
                        code:code,
                        nickname: "",
                        email: "",
                        phoneNumber: ""
                    },  
                    () => {navigate("/main");},
                    () => {navigate("/signup/agree/"+code);},
            ));
        }
        
    },[searchParams.get("code")])

    
    // useEffect(
    //     () => {
    //         const code = searchParams.get("code");
    //         if(code){
    //             navigate("/signup/agree/"+code);
    //             // dispatch(
    //             //     LoginWithKakaoAction(
    //             //         code, 
    //             //         () => {navigate("/");},
    //             //         () => {navigate("/");},
    //             //         () => {navigate("/signup/agree");},
    //             //         ));
    //         }   
    //     }, [searchParams.get("code")]
    // )
    
    console.log(`https://kauth.kakao.com/oauth/authorize?client_id=${process.env.REACT_APP_KAKAO_REST_API_KEY}&redirect_uri=${encodeURI(window.location.origin + "/login/oauth/kakao")}&response_type=code`);
    return (
        <AppFrame>

        </AppFrame>
    )
    // return (
    //     <AppFrame>
    //         <div style={{position:"relative", top: "-56px", backgroundImage: `url(${bg})`,  backgroundRepeat: "no-repeat",  height:"100vh", backgroundSize: "cover"}}>
    //             <MainBox>
    //                 <MainTextBox>
    //                     <div>
    //                         <MainTextLight>
    //                             올 가을엔
    //                         </MainTextLight>
    //                     </div>
    //                     <div>
    //                         <MainTextBold>
    //                             청송사과
    //                         </MainTextBold>
    //                         <MainTextLight>
    //                             로
    //                         </MainTextLight>
    //                     </div>
    //                     <div>
    //                         <MainTextLight>
    //                             비타민 충전
    //                         </MainTextLight>
    //                     </div>
    //                 </MainTextBox>
    //                 <BottomBox>
    //                     <a style={{textDecoration: "none"}} href={`https://kauth.kakao.com/oauth/authorize?client_id=${process.env.REACT_APP_KAKAO_REST_API_KEY}&redirect_uri=${encodeURI(window.location.origin + "/login/oauth/kakao")}&response_type=code`}>
    //                         <KakaoBox>
    //                             <SnsText>
    //                                 <img src={kakao} style={{marginRight:'8px'}} width= '24px' height= '24px'/>
    //                                 <div>
    //                                 카카오로 계속하기
    //                                 </div> 
    //                             </SnsText>
    //                         </KakaoBox>
    //                     </a>
    //                     {/* process.env.REACT_APP_REDIRECT_URL */}
    //                     <NaverBox> 
    //                         <SnsText>
    //                             <img src={naver} style={{marginRight:'8px'}} width= '24px' height= '24px'/>
    //                             <div>
    //                             네이버로 계속하기
    //                             </div>
    //                         </SnsText> 
    //                         </NaverBox>
                        
    //                     <AppleBox> 
    //                         <SnsText>
    //                             <img src={apple} style={{marginRight:'8px'}} width= '24px' height= '24px'/>
    //                             <div>
    //                             Apple로 계속하기 
    //                             </div>
    //                         </SnsText>
    //                     </AppleBox>
    //                     <LookAroundBeforeLogin> 
    //                         <LookAround unselectable="on">
    //                             로그인 전 둘러보기
    //                         </LookAround>
    //                     </LookAroundBeforeLogin>
    //                 </BottomBox>
    //             </MainBox>
    //         </div>

    //     </AppFrame>
        
    // );
}

export default LoginKakaoPage;
