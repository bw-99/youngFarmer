import React, { useEffect, useState } from "react";

import { useParams, useLocation, useNavigate, Link, useSearchParams } from 'react-router-dom';
import styled from "styled-components";

import bg from "../../assets/images/login_background@3x.png";
import kakao from "../../assets/images/icon-ui-sns-kakao@3x.png";
import naver from "../../assets/images/icon-sns-naver@3x.png";
import apple from "../../assets/images/icon-sns-apple@3x.png";


import { AppleBox, BottomBox, KakaoBox, LookAround, LookAroundBeforeLogin, MainBox, MainTextBold, MainTextBox, MainTextLight, NaverBox, SnsText } from "./atoms/Box";
import { LoginWithKakaoAction, LoginWithNaverAction } from "./LoginAction";
import { useDispatch } from "react-redux";
import { kakaoConfig } from "../..";
import { get, post } from "../../api/axios";


  
function LoginPage(props: any) {
    const params = useParams();
    const location = useLocation();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [searchParams, setSearchParams] = useSearchParams();

    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");

    const onButtonClickHandler = (e: React.MouseEvent<HTMLInputElement>) => {
        navigate('/main');
    };
    const onPasswordHanlder = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.currentTarget.value);
    };  

    const onSubmitHandler = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    };


    useEffect(
        () => {
            const code = searchParams.get("code");
            if(code){
                post(
                    `/oauth/token?grant_type=${encodeURI("authorization_code")}&client_id=${encodeURIComponent(kakaoConfig.restAPIKey)}&redirect_uri=${encodeURI("http://localhost:52324/login")}&code=${encodeURI(code)}`, 
                    {
                        headers: {
                            'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
                        },
                    }
                ).then((data) => {
                    console.log(data.data.access_token);
                    console.log(data.data.token_type);
                    console.log(data.data.refresh_token);
                    console.log(data.data.expires_in);
                    console.log(data.data.scope);
                })
             }   
        }, [searchParams.get("code")]
    )
    
    

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
                    <a style={{textDecoration: "none"}} href={kakaoConfig.kakaoAuthUri}>
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
                    <LookAroundBeforeLogin   onClick={onButtonClickHandler}> 
                        <LookAround>
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
