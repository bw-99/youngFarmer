import React, { useEffect, useState } from "react";
import { useParams, Link, useLocation, useNavigate } from 'react-router-dom';
import styled from "styled-components";
import { useSelector } from "react-redux";
import {btnBack} from "../../assets/images/btn-back@3x.png"

import {NavigationBox,SubmitButtonText, AssignPageSubmitButton2,ButtonText,AssignPageFormInputButton, AssignBottomBox,AssignMainBox,AssignPage3FormBox,AssignPage3Text1Box,AssignPageForm,AssignPageFormInputForCertificationNum,AssignPageFormInputForEmail,AssignPageFormInputForName,AssignPageFormInputForNum,AssignPageFormLabel,AssignPageFormSpan,AssignPage3Text1} from '../atoms/Assignp2'
import {NavigateComponent} from "./BackArrow"
import {BottomBox,BottomImg} from "../atoms/Assignp1"


export const AssignP2 = () => {
    
    const navigate = useNavigate();

    return (
        <AssignMainBox>
            <NavigationBox>
                {/* 버튼 img 안보임 */}
                <NavigateComponent></NavigateComponent>
            </NavigationBox>



            <AssignPage3Text1Box style={{marginTop:"30px"}}>
                <AssignPage3Text1>당신의 식생활을 위해 큐레이션합니다</AssignPage3Text1>
            </AssignPage3Text1Box>

            <AssignPage3FormBox>
                <AssignPageForm>
                    <AssignPageFormLabel>
                        닉네임
                        <AssignPageFormSpan> *</AssignPageFormSpan>           
                    </AssignPageFormLabel>
                    <br></br>
                    <AssignPageFormInputForName></AssignPageFormInputForName>             
                </AssignPageForm>

                <AssignPageForm>
                    <AssignPageFormLabel>
                        이메일
                        <AssignPageFormSpan> *</AssignPageFormSpan>           
                    </AssignPageFormLabel>
                    <br></br>
                    <AssignPageFormInputForEmail></AssignPageFormInputForEmail>             
                </AssignPageForm>

                <AssignPageForm>
                    <AssignPageFormLabel>
                        휴대폰 번호
                        <AssignPageFormSpan> *</AssignPageFormSpan>           
                    </AssignPageFormLabel>
                    <br></br>
                    <AssignPageFormInputForNum></AssignPageFormInputForNum>
                    <AssignPageFormInputButton>
                        <ButtonText>인증</ButtonText> 
                    </AssignPageFormInputButton>             
                </AssignPageForm>    
        

               <AssignPageForm style={{marginTop:"12px"}}>
                    <AssignPageFormInputForCertificationNum></AssignPageFormInputForCertificationNum>             
                </AssignPageForm>

                

            
            </AssignPage3FormBox>

            <AssignPageSubmitButton2>
                <SubmitButtonText>회원가입</SubmitButtonText>
            </AssignPageSubmitButton2>
            <BottomBox>
                <BottomImg>
                    
                </BottomImg>
            </BottomBox>
        </AssignMainBox>
    );
}

export default AssignP2;