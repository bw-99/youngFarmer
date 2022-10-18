import React, { useEffect, useState } from "react";

import { useParams, useLocation, useNavigate, Link, useSearchParams } from 'react-router-dom';
import styled from "styled-components";

import bg from "../../assets/images/login_background@3x.png";
import kakao from "../../assets/images/icon-ui-sns-kakao@3x.png";
import naver from "../../assets/images/icon-sns-naver@3x.png";
import apple from "../../assets/images/icon-sns-apple@3x.png";


import { AppleBox, BottomBox, KakaoBox, LookAround, LookAroundBeforeLogin, MainBox, MainTextBold, MainTextBox, MainTextLight, NaverBox, SnsText } from "./atoms/Box";
import { LoginWithAnonymous, LoginWithKakaoAction, LoginWithNaverAction } from "./LoginAction";
import { useDispatch } from "react-redux";
import { get, post } from "../../api/axios";
import { kakaoConfig } from "../..";

import { getAuth, signInAnonymously } from "firebase/auth";


  
function LoginPage(props: any) {
    const params = useParams();
    const location = useLocation();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [searchParams, setSearchParams] = useSearchParams();


    const onButtonClickHandler = (e: React.MouseEvent<HTMLInputElement>) => {
        navigate('/main');
    };

    const handleAnonymousLogin = () => {
        dispatch(LoginWithAnonymous(()=>{navigate("/main")}));
        // const auth = getAuth();
        // signInAnonymously(auth)
        // .then(() => {
        //     alert("sign in");
        // })
        // .catch((error) => {
        //     const errorCode = error.code;
        //     const errorMessage = error.message;
        // });
    }

    useEffect(
        () => {
            const code = searchParams.get("code");
            if(code){
                dispatch(LoginWithKakaoAction(code, ()=> {
                    navigate("/main");
                }));
            }   
            return () => {
                searchParams.delete("code");
            }
        }, [searchParams.get("code")]
    )
    
    // alert(`https://kauth.kakao.com/oauth/authorize?client_id=${process.env.REACT_APP_KAKAO_REST_API_KEY}&redirect_uri=${encodeURI(window.location.origin + "/login")}&response_type=code`);
    console.log(`https://kauth.kakao.com/oauth/authorize?client_id=${process.env.REACT_APP_KAKAO_REST_API_KEY}&redirect_uri=${encodeURI(window.location.origin + "/login")}&response_type=code`);
    
    return (
        <div style={{backgroundImage: `url(${bg})`, backgroundRepeat: "no-repeat", width: "100vw", height:"100vh", backgroundSize: "cover"}}>
            <MainBox>
                <MainTextBox>
                    <div>
                        <MainTextLight>
                            올 가을엔
                        </MainTextLight>
                    </div>
                    <div>
                        <MainTextBold>
                            청송사과
                        </MainTextBold>
                        <MainTextLight>
                            로
                        </MainTextLight>
                    </div>
                    <div>
                        <MainTextLight>
                            비타민 충전
                        </MainTextLight>
                    </div>
                </MainTextBox>
                <BottomBox>
                    <a style={{textDecoration: "none"}} href={`https://kauth.kakao.com/oauth/authorize?client_id=${process.env.REACT_APP_KAKAO_REST_API_KEY}&redirect_uri=${encodeURI(window.location.origin + "/login")}&response_type=code`}>
                        <KakaoBox>
                            <SnsText>
                                <img src={kakao} style={{marginRight:'8px'}} width= '24px' height= '24px'/>
                                <div>
                                카카오로 계속하기
                                </div> 
                            </SnsText>
                        </KakaoBox>
                    </a>
                    {/* process.env.REACT_APP_REDIRECT_URL */}
                    <a style={{textDecoration: "none"}} href={"http://localhost:52324/login/oauth/naver"}>
                        <NaverBox> 
                            <SnsText>
                                <img src={naver} style={{marginRight:'8px'}} width= '24px' height= '24px'/>
                                <div>
                                네이버로 계속하기
                                </div>
                            </SnsText> 
                        </NaverBox>
                    </a>
                    
                    <AppleBox> 
                        <SnsText>
                            <img src={apple} style={{marginRight:'8px'}} width= '24px' height= '24px'/>
                            <div>
                            Apple로 계속하기 
                            </div>
                        </SnsText>
                    </AppleBox>
                    <LookAroundBeforeLogin onClick={handleAnonymousLogin}> 
                        <LookAround unselectable="on">
                            로그인 전 둘러보기
                        </LookAround>
                    </LookAroundBeforeLogin>
                </BottomBox>
            </MainBox>
        </div>

    );
}

export default LoginPage;

function dispatch() {
    throw new Error("Function not implemented.");
}