import React, { useEffect, useState } from "react";
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import styled from "styled-components";
import { useSelector } from "react-redux";
import {BottomBox,BottomImg,AssignTextRedSmall,AssignTextBlackSmall,AgreeBox1,AgreeBox2,AssignMainBox,AssignText1,AssignText2,AssignText3,BtnBox,BtnBoxInner} from "../atoms/Assignp1"
import {CheckBoxIcon} from './CheckBox'



export const AssignP1 = () => {
    

    return (
        <AssignMainBox>
            
                <div style={{width:"375px", height:"44px", margin:"0px"}}>
                    {/* for navgation bar */}
                </div>
                <div style={{marginTop: "66px"}}>
                    
                    <AssignText1>
                          약관동의
                    </AssignText1>
                    
                    <div style={{marginTop:"10px"}}>
                    <AssignText2 >
                        필수항목 및 선택항목
                    </AssignText2>
                    </div>
                    
                </div>
                <div style={{marginTop:"26px",marginBottom:"251px",padding:"0px"}}>
                
                    <AgreeBox1>
                       {/* <CheckBoxIcon/> */}
                        <AssignText3>모두 동의</AssignText3>
                    </AgreeBox1>

                    <AgreeBox2>
                        {/* <CheckBoxIcon/> */}
                        <AssignTextRedSmall>&#91; 필수 &#93;</AssignTextRedSmall>
                        <AssignText3>서비스 이용약관</AssignText3>
                    </AgreeBox2>

                    <AgreeBox2>
                        {/* <CheckBoxIcon/> */}
                            <AssignTextRedSmall>&#91; 필수 &#93;</AssignTextRedSmall>
                            <AssignText3>개인정보 수집 및 이용동의</AssignText3>                        
                    </AgreeBox2>

                    <AgreeBox2>
                        {/* <CheckBoxIcon/> */}
                        <AssignTextBlackSmall>&#91; 필수 &#93;</AssignTextBlackSmall>
                        <AssignText3>개인정보 제3자 정보제공 동의</AssignText3>
                    </AgreeBox2> 

                    <AgreeBox2>
                        {/* <CheckBoxIcon/> */}
                        <AssignTextBlackSmall>&#91; 선택 &#93;</AssignTextBlackSmall>
                        <AssignText3>마케팅 정보 수신에 대한 동의</AssignText3>
                    </AgreeBox2> 
                </div>
                  <BtnBox>
                  <BtnBoxInner>
                    회원가입
                  </BtnBoxInner>

                  </BtnBox>
                  <BottomBox>
                    <BottomImg></BottomImg>
                  </BottomBox>
             
            
       

            
            
        </AssignMainBox>
    );
}

export default AssignP1;