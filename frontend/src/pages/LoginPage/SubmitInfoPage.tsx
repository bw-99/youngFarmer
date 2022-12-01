import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";

import { NavigationBox, AssignPage3Text1Box, AssignPage3Text1, AssignPage3FormBox, AssignPageForm, AssignPageFormLabel, AssignPageFormSpan, AssignPageFormInputForName, AssignPageFormInputForEmail, AssignPageFormInputForNum, AssignPageFormInputButton, ButtonText, AssignPageFormInputForCertificationNum, AssignPageSubmitButton2, SubmitButtonText } from "./atoms/Assignp2";
import { AppFrame } from "../../App";
import { AppBarComponentOnlyBack } from "../../common/AppBar/AppBar";
import { LoginWithKakaoAction, login_result_loading } from "./LoginAction";

import { RootState } from "../../reducers";




export const SubmitInfoPage = () => {
    const navigate = useNavigate();
    const params = useParams();
    const dispatch = useDispatch();

    const [nickname, setNickname] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [code, setCode] = useState("");

    const [isSet, setIsSet] = useState(false);
    
    const handleKakaoLogin = () => {
        const code = params.code;
            if(code){
                dispatch(
                    LoginWithKakaoAction(
                        {
                            code:code,
                            nickname: nickname,
                            email: email,
                            phoneNumber: phoneNumber
                        }, 
                        () => {navigate("/");},
                        () => {navigate("/");},
                        ));
            }   
    }

    const handlePhoneAuth = () => {
        // @ts-ignore 
        // const appVerifier = window.recaptchaVerifier;
        setTimeout(()=> {
            let random = Math.floor(Math.random() * (999999 - 100000 + 1)) + 100000;
            setCode(`${random}`);
        }, 1000)
    }

    // useEffect(() => {
    //     const auth = getAuth();
    //     //@ts-ignore 
    //     window.recaptchaVerifier  = new RecaptchaVerifier('recaptcha-container', {
    //     'size': 'invisible',
    //     'callback': (response: any) => {
    //         console.log(response);
    //     }
    //     }, auth);
    // }, [])

    useEffect(() => {
        if(nickname && email && phoneNumber && code) {
            setIsSet(true);
        }
        else{
            setIsSet(false);
        }
    }, [nickname, email, phoneNumber, code])
    

    const loginSelector: string|null = useSelector((state:RootState) =>
        state.LoginReducer.result
    );

    
    return (
        <AppFrame>
            <AppBarComponentOnlyBack title="회원가입"/>
            <AssignPage3Text1Box style={{marginTop:"86px"}}>
                <AssignPage3Text1>당신의 식생활을 위해 큐레이션합니다</AssignPage3Text1>
                {/* <AssignPage3Text1>큐레이션합니다</AssignPage3Text1> */}
            </AssignPage3Text1Box>

            <AssignPage3FormBox style={{margin: "0 16px"}}>
                <AssignPageForm>
                    <AssignPageFormLabel>
                        닉네임
                        <AssignPageFormSpan> *</AssignPageFormSpan>           
                    </AssignPageFormLabel>
                    <AssignPageFormInputForName 
                    onChange={(e:React.ChangeEvent<HTMLInputElement>)=>{setNickname(e.target.value);}}
                    value={nickname} placeholder={"사용하실 닉네임을 입력해주세요."} />         
                </AssignPageForm>

                <AssignPageForm>
                    <AssignPageFormLabel>
                        이메일
                        <AssignPageFormSpan> *</AssignPageFormSpan>           
                    </AssignPageFormLabel>
                    <AssignPageFormInputForEmail 
                    onChange={(e:React.ChangeEvent<HTMLInputElement>)=>{setEmail(e.target.value);}}
                    value={email} placeholder={"이메일을 입력해주세요."} />     
                </AssignPageForm>

                <AssignPageForm>
                    <AssignPageFormLabel>
                        휴대폰 번호
                        <AssignPageFormSpan> *</AssignPageFormSpan>           
                    </AssignPageFormLabel>
                    <div style={{display: "flex", alignItems: "center", marginTop: "8px"}}>
                        <AssignPageFormInputForNum  
                        onChange={(e:React.ChangeEvent<HTMLInputElement>)=>{setPhoneNumber(e.target.value);}}
                        value={phoneNumber} placeholder={"휴대폰 번호를 입력해주세요."} />
                        
                        <AssignPageFormInputButton 
                        onClick={handlePhoneAuth}
                        style={{ backgroundColor: phoneNumber? "#fb6159" : "#c3c3c3"}}>
                            <ButtonText>인증</ButtonText> 
                        </AssignPageFormInputButton>           
                    </div>
                      
                </AssignPageForm>    
        

               <AssignPageForm style={{marginTop:"12px"}}>
                    <AssignPageFormInputForCertificationNum  
                    onChange={(e:React.ChangeEvent<HTMLInputElement>)=>{setCode(e.target.value);}}
                    value={code} placeholder={"인증 번호를 입력해주세요."} />
                </AssignPageForm>

                <div id="recaptcha-container"></div>

            
            </AssignPage3FormBox>

            <AssignPageSubmitButton2 
            style={{backgroundColor: isSet? "#ed3e3e" : "#c3c3c3"}}
            onClick={handleKakaoLogin}>
                <SubmitButtonText>회원가입</SubmitButtonText>
            </AssignPageSubmitButton2>

             {/* <BackgroundWrapper backgroundColor="rgba(255,255,255, 0.8)" isActive={loginSelector === login_result_loading}/> */}
        </AppFrame>
    );
}

export default SubmitInfoPage;
