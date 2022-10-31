import React, { useEffect, useState } from "react";

type backgroundColorParams = {
    backgroundColor: string,
    isActive :boolean
}

export const BackgroundWrapper = ({backgroundColor, isActive}: backgroundColorParams) => {
    if(!isActive){
        return <div></div>
    }
    
    return(
        <div style={{backgroundColor: backgroundColor, height: "100vh", width: "100vw", position: "absolute", zIndex:"10000", top:0}}>

        </div>
    );
}