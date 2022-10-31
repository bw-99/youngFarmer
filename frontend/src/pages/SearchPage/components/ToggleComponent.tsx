import { ToggledText, ToggledUnderline, UnToggledText, UnToggledUnderline } from "../atoms/ToggleComponent";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../reducers";
import { toggleProductAction, toggleStoreAction } from "../SearchActions";
export {};


export const ToggleComponent = () => {
    const toggleSelector: number = useSelector((state:RootState) =>
        state.SearchToggleReducer
    );

    const dispatch = useDispatch();

    return (
        <div style={{ paddingLeft: "16px", paddingRight: "16px", display: "flex", justifyContent: "space-around"}}>
            
            {/* <h1>{toggleSelector}</h1> */}
            <div 
            onClick={
                () => {
                    dispatch(toggleProductAction());
                }
            }
            style={{flex:1}}>
                {
                    toggleSelector==0?
                    <>
                        <ToggledText> 상품 </ToggledText>
                        <ToggledUnderline />
                    </>
                    :
                    <>
                        <UnToggledText> 상품 </UnToggledText>
                        <UnToggledUnderline />
                    </>

                }

            </div>

            <div 
            onClick={
                () => {
                    dispatch(toggleStoreAction());
                }
            }
            style={{flex:1}}>
            {
                    toggleSelector==1?
                    <>
                        <ToggledText> 가게 </ToggledText>
                        <ToggledUnderline />
                    </>
                    :
                    <>
                        <UnToggledText> 가게 </UnToggledText>
                        <UnToggledUnderline />
                    </>

                }
            </div>
        </div>
    )
}