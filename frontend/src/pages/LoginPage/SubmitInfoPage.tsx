import React, { useEffect, useState } from "react";
import { useParams, Link, useLocation, useNavigate } from 'react-router-dom';
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import {btnBack} from "../../assets/images/btn-back@3x.png"

import { AssignMainBox, BottomImg } from "./atoms/Assignp1";
import { BottomBox } from "./atoms/Box";
import { NavigateComponent } from "./components/BackArrow";
import { NavigationBox, AssignPage3Text1Box, AssignPage3Text1, AssignPage3FormBox, AssignPageForm, AssignPageFormLabel, AssignPageFormSpan, AssignPageFormInputForName, AssignPageFormInputForEmail, AssignPageFormInputForNum, AssignPageFormInputButton, ButtonText, AssignPageFormInputForCertificationNum, AssignPageSubmitButton2, SubmitButtonText } from "./atoms/Assignp2";
import { AppFrame } from "../../App";
import { AppBarComponentOnlyBack } from "../../common/AppBar/AppBar";
import { LoginWithKakaoAction } from "./LoginAction";


export const SubmitInfoPage = () => {
    const navigate = useNavigate();
    const params = useParams();
    const dispatch = useDispatch();
    
    const handleKakaoLogin = () => {
        const code = params.code;
            if(code){
                // console.log(code);
                dispatch(
                    LoginWithKakaoAction(
                        code, 
                        () => {navigate("/");},
                        () => {navigate("/");},
                        ));
            }   
    }

    return (
        <AppFrame>
            <AppBarComponentOnlyBack title="회원가입"/>
            <AssignPage3Text1Box style={{marginTop:"86px"}}>
                <AssignPage3Text1>당신의 식생활을 위해</AssignPage3Text1>
                <AssignPage3Text1>큐레이션합니다</AssignPage3Text1>
            </AssignPage3Text1Box>

            <AssignPage3FormBox>
                <AssignPageForm>
                    <AssignPageFormLabel>
                        닉네임
                        <AssignPageFormSpan> *</AssignPageFormSpan>           
                    </AssignPageFormLabel>
                    <AssignPageFormInputForName></AssignPageFormInputForName>             
                </AssignPageForm>

                <AssignPageForm>
                    <AssignPageFormLabel>
                        이메일
                        <AssignPageFormSpan> *</AssignPageFormSpan>           
                    </AssignPageFormLabel>
                    <AssignPageFormInputForEmail></AssignPageFormInputForEmail>             
                </AssignPageForm>

                <AssignPageForm>
                    <AssignPageFormLabel>
                        휴대폰 번호
                        <AssignPageFormSpan> *</AssignPageFormSpan>           
                    </AssignPageFormLabel>
                    <AssignPageFormInputForNum></AssignPageFormInputForNum>
                    <AssignPageFormInputButton>
                        <ButtonText>인증</ButtonText> 
                    </AssignPageFormInputButton>             
                </AssignPageForm>    
        

               <AssignPageForm style={{marginTop:"12px"}}>
                    <AssignPageFormInputForCertificationNum></AssignPageFormInputForCertificationNum>             
                </AssignPageForm>

                

            
            </AssignPage3FormBox>

            <AssignPageSubmitButton2 onClick={handleKakaoLogin}>
                <SubmitButtonText>회원가입</SubmitButtonText>
            </AssignPageSubmitButton2>

        </AppFrame>
    );
}

export default SubmitInfoPage;