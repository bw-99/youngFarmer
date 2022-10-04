import React, { useState } from "react";

import { useParams, useLocation, useNavigate } from 'react-router-dom';
import styled from "styled-components";

import bg from "../../assets/images/login_background.png";

const Background = styled.div`
    background-image: url(${bg});
    background-size: 100%;
    background-repeat: no-repeat;
`

const MainBox = styled.div`
    display: flex;
    height: 100vh;
    flex-direction: column;
    justify-content: space-between;
`

const MainTextBox = styled.div`
    padding: 193px 122px 0px 24px;
`

const MainTextBold = styled.span`
    font-family: SCDream;
    font-size: 44px;
    font-weight: ExtraBold;
    line-height: 59px;
    color: #ffffff;
`

const MainTextLight = styled.span`
    font-family: SCDream;
    font-size: 44px;
    font-weight: light;
    line-height: 59px;
    color: #ffffff;
`

const BottomBox = styled.div`
  width: 100vw;
  height: 262px;
  border-radius: 16px;
  background-color: #ffffff;
`


const KakaoBox = styled.div`
  margin: 20px 16px 12px 16px;
  height: 50px;
  border-radius: 8px;
  background-color: #fde500;
`

const NaverBox = styled.div`
  margin: 12px 16px 12px 16px;
  height: 50px;
  border-radius: 8px;
  background-color: #00c73c;
`

const AppleBox = styled.div`
  margin: 12px 16px 12px 16px;
  height: 50px;
  border-radius: 8px;
  background-color: #000000;
`

const LookAroundBeforeLogin = styled.div`
  font-family: AppleSDGothicNeo;
  padding: 16px 115px 15px 115px;
  border-radius: 8px;
  font-size: 15px;
  font-weight: 500;
  color: #777777;
  width: 100vw;
`

function LoginPage(props: any) {
    const params = useParams();
    const location = useLocation();
    const navigate = useNavigate();

    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");

    const onEmailHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.currentTarget.value);
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
                    <KakaoBox> 카카오로 계속하기 </KakaoBox>
                    <NaverBox> 네이버로 계속하기 </NaverBox>
                    <AppleBox> Apple로 계속하기 </AppleBox>
                    <LookAroundBeforeLogin> 로그인 전 둘러보기 </LookAroundBeforeLogin>
                </BottomBox>
            </MainBox>
        </div>

    );
}

export default LoginPage;