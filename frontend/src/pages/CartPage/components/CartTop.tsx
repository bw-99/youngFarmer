import React, { useContext, useEffect, useState } from "react";
import { Text1 } from "../atoms/CartTop";
import checkIcon from "../../../assets/images/btn-checkbox-1@3x.webp";
import checkNotIcon from "../../../assets/images/btn-checkbox-2@3x.webp";
import {CheckBoxIcon} from "../../LoginPage/atoms/Assignp1"

type checkParam = {
    allCheck: boolean,
    setAllCheck: any 
}

export const CartTopComp = ({allCheck, setAllCheck}:checkParam) => {

    return(
        <div style={{display:"flex", justifyContent:"space-between", alignItems:"center"}}>
            <Text1> 전체 선택 </Text1>
            <CheckBoxIcon
            style={{marginRight: "-14px"}}
            onClick={() => {
                setAllCheck(!allCheck);
            }}
            src={allCheck ? checkIcon :  checkNotIcon}/>
        </div>
    );
}