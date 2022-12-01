
import React, { useState } from "react";
import { useParams, Link, useLocation, useNavigate } from 'react-router-dom';
import styled from "styled-components";
import btnBack from "../../../assets/images/btn-back@3x.webp"
import farmer from "../../../assets/images/farmer.webp"
import {BackArrowBtn,NaviageSpanText} from "../atoms/Assignp2"
import backArrow from "../../../assets/images/btn-back@3x.webp"



export const NavigateComponent = () => {
    const navigate = useNavigate();
    

    return (
        <img width={30} height={30} src={backArrow} alt="" />

        // <div style={{height:"24px", backgroundColor:"#fff", display:"flex", padding:"16px 0px 16px 16px",justifyContent:"start"}}>
        //     <div style={{width:"auto",height:"ato",marginRight:"120px"}} 
        //     onClick={()=>{navigate("/main/todayRecommend");}}>
        //         <BackArrowBtn src={btnBack} alt="" />
        //     </div>
        //     <NaviageSpanText>회원가입</NaviageSpanText>
        // </div>
       
       
    );
}

const AppBarArrow = styled.img`
  width: 24px;
  height: 24px;
  padding: 16px 8px 16px 16px;
  object-fit: contain;
`