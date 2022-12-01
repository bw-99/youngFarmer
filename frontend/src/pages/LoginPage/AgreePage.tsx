import React, { useEffect, useState } from "react";
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import { AssignMainBox, AssignText1, AssignText2, AgreeBox1, AssignText3, AgreeBox2, AssignTextRedSmall, AssignTextBlackSmall, BtnBox, BtnBoxInner, BottomImg, AssignText4, CheckBoxIcon } from "./atoms/Assignp1";
import { AppFrame } from "../../App";
import checkIcon from "../../assets/images/btn-checkbox-1@3x.webp";
import checkNotIcon from "../../assets/images/btn-checkbox-2@3x.webp";

export const AgreePage = () => {
    const [ischecked, setIschecked] = useState(false);
    const [ischecked2, setIschecked2] = useState(false);
    const [ischecked3, setIschecked3] = useState(false);
    const [ischecked4, setIschecked4] = useState(false);
    const [ischecked5, setIschecked5] = useState(false);
    const navigate = useNavigate();
    const params = useParams();

    useEffect(
        () => {
            setIschecked(ischecked);
            setIschecked2(ischecked);
            setIschecked3(ischecked);
            setIschecked4(ischecked); 
            setIschecked5(ischecked);
        },
        [ischecked]
    )
    return (
        <AppFrame>
            <div style={{maxWidth: "625px", margin: "66px 16px 0 16px"}}>
                <AssignText1> 약관동의 </AssignText1>
                
                <div style={{marginTop:"10px"}}>
                    <AssignText2 >
                        필수항목 및 선택항목 약관에 동의해주세요.
                    </AssignText2>
                </div>
                    
                <div style={{marginTop:"26px"}}>
                    <div>
                        <AgreeBox1 style={{maxWidth: "625px",marginBottom: "8px"}}>
                            <CheckBoxIcon
                                onClick={() => { setIschecked(!ischecked);}} 
                                src={ischecked ? checkIcon : checkNotIcon}
                            />
                            <AssignText4>모두 동의</AssignText4>
                        </AgreeBox1>
                    </div>


                    <div>
                        <AgreeBox2>
                            <CheckBoxIcon
                                onClick={() => { setIschecked2(!ischecked2);}} 
                                src={ischecked2 ? checkIcon : checkNotIcon}
                            />
                            <AssignTextRedSmall>&#91;필수&#93;</AssignTextRedSmall>
                            <AssignText3>서비스 이용약관</AssignText3>
                        </AgreeBox2>

                        <AgreeBox2>
                            <CheckBoxIcon
                                onClick={() => { setIschecked3(!ischecked3);}} 
                                src={ischecked3 ? checkIcon : checkNotIcon}
                            />
                                <AssignTextRedSmall>&#91;필수&#93;</AssignTextRedSmall>
                                <AssignText3>개인정보 수집 및 이용동의</AssignText3>                        
                        </AgreeBox2>

                        <AgreeBox2>
                            <CheckBoxIcon
                                onClick={() => { setIschecked4(!ischecked4);}} 
                                src={ischecked4 ? checkIcon : checkNotIcon}
                            />
                            <AssignTextRedSmall>&#91;필수&#93;</AssignTextRedSmall>
                            <AssignText3>개인정보 제3자 정보제공 동의</AssignText3>
                        </AgreeBox2> 

                        <AgreeBox2>
                            <CheckBoxIcon
                                onClick={() => { setIschecked5(!ischecked5);}} 
                                src={ischecked5 ? checkIcon : checkNotIcon}
                            />
                            <AssignTextBlackSmall>&#91;선택&#93;</AssignTextBlackSmall>
                            <AssignText3>마케팅 정보 수신에 대한 동의</AssignText3>
                        </AgreeBox2> 
                    </div>

                    
                </div>
                
                <BtnBox style={{
                    width:"calc(100vw - 32px)", 
                    maxWidth: "625px",
                    position:"fixed", 
                    bottom:"16px",
                    backgroundColor: 
                    (ischecked2&&ischecked3&&ischecked4) ? 
                    "#ed3e3e"
                    :
                    "#c3c3c3"
                    }}
                    onClick= {() => {
                        if(ischecked2&&ischecked3&&ischecked4){
                            navigate("/signup/submitInfo/"+params.code);
                        }
                    }}
                    >
                    <BtnBoxInner style={{maxWidth:"625px"}}>
                        회원가입
                    </BtnBoxInner>
                </BtnBox>

                  
            </div>

            
                

        </AppFrame>
    );
}

export default AgreePage;