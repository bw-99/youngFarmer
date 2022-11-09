import { CircularProgress } from "@mui/material";
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
    
    useEffect(() => {
        if(isActive) {
            document.body.style.overflow = 'hidden';
        }
        return () => {
            document.body.style.overflow = 'unset'
        };
    }, [isActive])


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
        style={{
            backgroundColor: backgroundColor, height: "100%", width: "100vw", maxWidth:"625px", position: "absolute", zIndex:"1000000", top:0}}>
            {children}
        </div>
    );
}

export const LoadingWrapper =  ({backgroundColor, isActive,onClose}: backgroundColorParams) => {
    const dispatch = useDispatch();
    
    useEffect(() => {
        if(isActive) {
            document.body.style.overflow = 'hidden';
        }
        return () => {
            document.body.style.overflow = 'unset'
        };
    }, [isActive])

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
        style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: backgroundColor, height: "100vh", width: "100vw", maxWidth:"625px", position: "absolute", zIndex:"1000000", top:0}}>
            <CircularProgress />
        </div>
    );
}


export const CenterBackgroundWrapper = ({backgroundColor, isActive,children,onClose}: backgroundColorParams) => {
    const dispatch = useDispatch();

    useEffect(() => {
        if(isActive) {
            document.body.style.overflow = 'hidden';
        }
        return () => {
            document.body.style.overflow = 'unset'
        };
    }, [isActive])

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
        style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: backgroundColor, height: "100vh", width: "100vw", maxWidth:"625px", position: "absolute", zIndex:"1000000", top:0}}>
            {children}
        </div>
    );
}


export const TopBackgroundWrapper = ({backgroundColor, isActive,children,onClose}: backgroundColorParams) => {
    const dispatch = useDispatch();
    
    useEffect(() => {
        if(isActive) {
            document.body.style.overflow = 'hidden';
        }
        return () => {
            document.body.style.overflow = 'unset'
        };
    }, [isActive])

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
        style={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "center",
            backgroundColor: backgroundColor, height: "100vh", width: "100vw", maxWidth:"625px", position: "absolute", zIndex:"1000000", top:0}}>
            {children}
        </div>
    );
}