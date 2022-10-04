import React, { useState } from "react";

import { useParams, useLocation, useNavigate } from 'react-router-dom';
import styled from "styled-components";

import bg from "../../assets/images/login_background.png";

const Background = styled.div`
    background-image: url(${bg});
    background-size: 100%;
    background-repeat: no-repeat;
`

const MainText = styled.span`
    font-family: TTOmniGothicUL;
    font-size: 44px;
    line-height: 59px;
    color: #ffffff;
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
            <div>
                <div>
                    <MainText>
                        올 가을엔
                    </MainText>
                </div>
                <div>
                    <MainText>
                        청송사과
                    </MainText>
                    <MainText>
                        로
                    </MainText>
                </div>
                <div>
                    <MainText>
                        비타민 충전
                    </MainText>
                </div>
            </div>
        </div>

    );
}

export default LoginPage;