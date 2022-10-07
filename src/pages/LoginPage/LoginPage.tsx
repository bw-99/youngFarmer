import React, { useState } from "react";

import { useParams, useLocation, useNavigate, Link } from 'react-router-dom';
import styled from "styled-components";

import bg from "../../assets/images/login_background@3x.png";
import kakao from "../../assets/images/icon-ui-sns-kakao@3x.png";
import naver from "../../assets/images/icon-sns-naver@3x.png";
import apple from "../../assets/images/icon-sns-apple@3x.png";


import { AppleBox, BottomBox, KakaoBox, LookAround, LookAroundBeforeLogin, MainBox, MainTextBold, MainTextBox, MainTextLight, NaverBox, SnsText } from "./atoms/Box";


function LoginPage(props: any) {
    const params = useParams();
    const location = useLocation();
    const navigate = useNavigate();

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
                    <KakaoBox> 
                        <SnsText>
                            <img src={kakao} style={{marginRight:'8px'}} width= '24px' height= '24px'/>
                            <div>
                            카카오로 계속하기
                            </div>
                        </SnsText>
                    </KakaoBox>
                    <NaverBox> 
                        <SnsText>
                            <img src={naver} style={{marginRight:'8px'}} width= '24px' height= '24px'/>
                            <div>
                            네이버로 계속하기
                            </div>
                        </SnsText> 
                    </NaverBox>
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