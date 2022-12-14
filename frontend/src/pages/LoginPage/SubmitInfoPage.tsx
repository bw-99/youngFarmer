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
            <AppBarComponentOnlyBack title="????????????"/>
            <AssignPage3Text1Box style={{marginTop:"86px"}}>
                <AssignPage3Text1>????????? ???????????? ?????? ?????????????????????</AssignPage3Text1>
                {/* <AssignPage3Text1>?????????????????????</AssignPage3Text1> */}
            </AssignPage3Text1Box>

            <AssignPage3FormBox style={{margin: "0 16px"}}>
                <AssignPageForm>
                    <AssignPageFormLabel>
                        ?????????
                        <AssignPageFormSpan> *</AssignPageFormSpan>           
                    </AssignPageFormLabel>
                    <AssignPageFormInputForName 
                    onChange={(e:React.ChangeEvent<HTMLInputElement>)=>{setNickname(e.target.value);}}
                    value={nickname} placeholder={"???????????? ???????????? ??????????????????."} />         
                </AssignPageForm>

                <AssignPageForm>
                    <AssignPageFormLabel>
                        ?????????
                        <AssignPageFormSpan> *</AssignPageFormSpan>           
                    </AssignPageFormLabel>
                    <AssignPageFormInputForEmail 
                    onChange={(e:React.ChangeEvent<HTMLInputElement>)=>{setEmail(e.target.value);}}
                    value={email} placeholder={"???????????? ??????????????????."} />     
                </AssignPageForm>

                <AssignPageForm>
                    <AssignPageFormLabel>
                        ????????? ??????
                        <AssignPageFormSpan> *</AssignPageFormSpan>           
                    </AssignPageFormLabel>
                    <div style={{display: "flex", alignItems: "center", marginTop: "8px"}}>
                        <AssignPageFormInputForNum  
                        onChange={(e:React.ChangeEvent<HTMLInputElement>)=>{setPhoneNumber(e.target.value);}}
                        value={phoneNumber} placeholder={"????????? ????????? ??????????????????."} />
                        
                        <AssignPageFormInputButton 
                        onClick={handlePhoneAuth}
                        style={{ backgroundColor: phoneNumber? "#fb6159" : "#c3c3c3"}}>
                            <ButtonText>??????</ButtonText> 
                        </AssignPageFormInputButton>           
                    </div>
                      
                </AssignPageForm>    
        

               <AssignPageForm style={{marginTop:"12px"}}>
                    <AssignPageFormInputForCertificationNum  
                    onChange={(e:React.ChangeEvent<HTMLInputElement>)=>{setCode(e.target.value);}}
                    value={code} placeholder={"?????? ????????? ??????????????????."} />
                </AssignPageForm>

                <div id="recaptcha-container"></div>

            
            </AssignPage3FormBox>

            <AssignPageSubmitButton2 
            style={{backgroundColor: isSet? "#ed3e3e" : "#c3c3c3"}}
            onClick={handleKakaoLogin}>
                <SubmitButtonText>????????????</SubmitButtonText>
            </AssignPageSubmitButton2>

             {/* <BackgroundWrapper backgroundColor="rgba(255,255,255, 0.8)" isActive={loginSelector === login_result_loading}/> */}
        </AppFrame>
    );
}

export default SubmitInfoPage;
