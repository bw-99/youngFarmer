import { PurchaseBoxAtom, PurchaseText, PurchaseDetailBox, PurchaseDetailText, SepLine, PurchaseDetailArrow, PurchaseBackGround } from "../atoms/purchase";
import rightArrowIcon from "../../../assets/images/btn-arrow-r-20-px@3x.png";

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../reducers";
import { LikeData } from "../../../reducers/LikeReducer";
import { likeAction, likeCancelAction } from "../../LikePage/LikeAction";

export const PurchaseComp = () => {
    return (
        <div style={{ display: "flex",height: "100vh", flexDirection: "column", position: "fixed", bottom: "0", zIndex: "10000", width: "100vw", maxWidth:"625px" }}>
            <div style={{ zIndex: "0", height: "100vh" }}>
                <PurchaseBackGround style={{ maxWidth: "625px" }} />
            </div>
            <div style={{ zIndex: "1",maxWidth: "625px", padding: " 0 16px", backgroundColor: "white", borderTopLeftRadius: "12px", borderTopRightRadius: "12px" }}>
                <PurchaseBoxAtom style={{ maxWidth: "625px", flexDirection: "column" }}>
                    <PurchaseSelectComp marginTop={"32px"} purchaseText={"Weight"} purchaseDetailText={"Select Weight"} />
                    <SepLine style={{ marginTop: "24px" }} />

                    <PurchaseSelectComp marginTop={"24px"} purchaseText={"Many"} purchaseDetailText={"number of item"} />
                    <SepLine style={{ marginTop: "24px" }} />

                    <PurchaseSelectComp marginTop={"24px"} purchaseText={"Pave"} purchaseDetailText={"Wanna pave"} />
                </PurchaseBoxAtom>
            </div>
            <SepLine style={{ marginTop: "24px" }} />
        </div>
    );

}

interface PurchaseSelectCompProps{
    marginTop: string,
    purchaseText: string,
    purchaseDetailText: string,
}

const PurchaseSelectComp = (props: PurchaseSelectCompProps) => {
    return (
        <div>
            <PurchaseText style={{ marginTop: props.marginTop }}>
                { props.purchaseText }
            </PurchaseText>
            <PurchaseDetailBox style={{ display: "flex", alignItems: "center", maxWidth: "625px", justifyContent: "space-between" }}>
                <PurchaseDetailText style={{ marginLeft: "16px" }}>
                    {props.purchaseDetailText}
                </PurchaseDetailText>
                <PurchaseDetailArrow style={{ marginRight: "12px" }} src={rightArrowIcon} />
            </PurchaseDetailBox>
        </div>
            );
}