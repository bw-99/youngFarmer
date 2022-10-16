import { ToggledText, ToggledUnderline, UnToggledText, UnToggledUnderline } from "../atoms/ToggleComponent";
import React from "react";
export {};


export const ToggleComponent = () => {
    return (
        <div style={{ paddingLeft: "16px", paddingRight: "16px", display: "flex", justifyContent: "space-around"}}>
            <div>
                <ToggledText> 상품 </ToggledText>
                <ToggledUnderline />
            </div>

            <div>
                <UnToggledText> 가게 </UnToggledText>
                <UnToggledUnderline />
            </div>
            
            
            
        </div>
    )
}