import React, { useEffect, useState } from "react";
import { useParams, Link, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";

import { NavigationBox, AssignPage3Text1Box, AssignPage3Text1, AssignPage3FormBox, AssignPageForm, AssignPageFormLabel, AssignPageFormSpan, AssignPageFormInputForName, AssignPageFormInputForEmail, AssignPageFormInputForNum, AssignPageFormInputButton, ButtonText, AssignPageFormInputForCertificationNum, AssignPageSubmitButton2, SubmitButtonText } from "../LoginPage/atoms/Assignp2";
import { AppFrame } from "../../App";
import { AppBarComponentOnlyBack } from "../../common/AppBar/AppBar";



export const MyInfoRevisePage = () => {

    const params = useParams();
    const navigate = useNavigate();
    const [isCertify, setCertify] = useState(false);
    

    return (
        <AppFrame>
            <AppBarComponentOnlyBack title="내 정보 수정"/>
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
                    <div style={{display:"flex", maxWidth:"95%"}}>
                        <AssignPageFormInputForNum></AssignPageFormInputForNum>
                        <AssignPageFormInputButton >
                           인증
                        </AssignPageFormInputButton> 

                    </div>
                                
                </AssignPageForm>    
        

               <AssignPageForm style={{marginTop:"12px"}}>
                    <AssignPageFormInputForCertificationNum></AssignPageFormInputForCertificationNum>             
                </AssignPageForm>

                
                
            
            </AssignPage3FormBox>

            <AssignPageSubmitButton2 onClick= {() => {
                        
                        {
                            navigate("/mypage/setting");
                        }
                    }}>
                    수정 완료
            </AssignPageSubmitButton2>

        </AppFrame>
    );
}

export default MyInfoRevisePage;