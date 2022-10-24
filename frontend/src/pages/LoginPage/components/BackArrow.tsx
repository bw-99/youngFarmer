
import React, { useState } from "react";
import { useParams, Link, useLocation, useNavigate } from 'react-router-dom';
import styled from "styled-components";
import {btnBack} from "../../../assets/images/btn-back@3x.png"
import {BackArrowBtn,NaviageSpanText} from "../atoms/Assignp2"



export const NavigateComponent = () => {
    const navigate = useNavigate();
    

    return (
        <div style={{width:"313px", height:"24px", backgroundColor:"#fff", display:"flex", padding:"16px 0px 16px 16px",justifyContent:"start"}}>
            <div style={{width:"auto",height:"ato",marginRight:"120px"}} 
            onClick={()=>{navigate("/main/todayRecommend");}}>
                <BackArrowBtn src={btnBack}/>
            </div>
            <NaviageSpanText>회원가입</NaviageSpanText>
        </div>
       
       
    );
}