import React, { ReactNode, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { SearchFilterCloseAction } from "../../pages/SearchPage/SearchActions";

type backgroundColorParams = {
    backgroundColor: string,
    isActive :boolean,
    children?: ReactNode,
    onClose? : Function
}

export const BackgroundWrapper = ({backgroundColor, isActive,children,onClose}: backgroundColorParams) => {
    const dispatch = useDispatch();
    
    if(!isActive){
        return <div></div>
    }
    
    return(
        <div 
        onClick={()=>{
            if(onClose){
                onClose();
            }
            }}
        style={{backgroundColor: backgroundColor, height: "100vh", width: "100vw", maxWidth:"625px", position: "absolute", zIndex:"10000", top:0}}>
            {children}
        </div>
    );
}