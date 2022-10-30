import {
    PurchaseBoxAtom, PurchaseText, PurchaseDetailBox, PurchaseDetailText,
    SepLine, PurchaseDetailArrow, PurchaseBackGround, BackIconArrow, SelectTitleText,
    SelectContentText
} from "../atoms/purchase";
import rightArrowIcon from "../../../assets/images/btn-arrow-r-20-px@3x.png";
import backIcon from "../../../assets/images/btn-back@3x.png";

import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../reducers";
import { LikeData } from "../../../reducers/LikeReducer";
import { likeAction, likeCancelAction } from "../../LikePage/LikeAction";

//컴포넌트에 필요한 선언
/*interface PurchaseMainCompProps {
    setIndexFn: Dispatch<SetStateAction<number>>,
}*/

interface PurchaseMainSelectCompProps {
    setIndexFn: Dispatch<SetStateAction<number>>,
    setIndexNum: number,
    marginTop: string,
    purchaseText: string,
    purchaseDetailText: string,
}

//메인함수
export const PurchaseComp = () => {
    const [purchaseIndex, SetIndex] = useState(0);
    const [parentBottomState, ChangeState] = useState("82px");

    useEffect(() => {
        if (purchaseIndex != 0) {
            ChangeState("0px");
        }
        else {
            ChangeState("82px");
        }
    },[purchaseIndex]);

    return (
        <div style={{ display: "flex", height: "100vh", flexDirection: "column", position: "fixed", bottom: parentBottomState, zIndex: "10000", width: "100vw", maxWidth: "625px", }}>
            <div style={{ zIndex: "0", height: "100vh" }}>
                <PurchaseBackGround style={{ maxWidth: "625px" }} />
            </div>
            <div style={{ zIndex: "2", } }>
                {
                    purchaseIndex === 0 ?
                        <div style={{backgroundColor: "white", borderTopLeftRadius: "12px", borderTopRightRadius: "12px", }} >
                            <div style={{ maxWidth: "625px", padding: " 32px 16px 0 16px", }}>
                                <PurchaseBoxAtom style={{ maxWidth: "625px", flexDirection: "column" }}>
                                    <PurchaseMainSelectComp setIndexFn={SetIndex} setIndexNum={1} marginTop={"0px"} purchaseText={"Weight"} purchaseDetailText={"Select Weight"} />
                                    <SepLine style={{ marginTop: "24px" }} />

                                    <PurchaseMainSelectComp setIndexFn={SetIndex} setIndexNum={2} marginTop={"24px"} purchaseText={"Many"} purchaseDetailText={"number of item"} />
                                    <SepLine style={{ marginTop: "24px" }} />

                                    <PurchaseMainSelectComp setIndexFn={SetIndex} setIndexNum={3} marginTop={"24px"} purchaseText={"Pave"} purchaseDetailText={"Wanna pave"} />
                                </PurchaseBoxAtom>
                            </div>
                            <div style={{ zIndex: "1", paddingTop: "23px", backgroundColor: "white", }} >
                                <SepLine />
                            </div>
                        </div>
                        :
                        /*<SelectWeight />*/
                        <div style={{ display: "flex", flexDirection: "column",backgroundColor: "white", top: "82px", maxWidth: "625px", borderTopLeftRadius: "12px", borderTopRightRadius: "12px" }} >
                            <div style={{ display: "flex", height: "56px", width: "100vw", maxWidth: "625px", marginLeft: "16px", alignItems: "center" }}>
                                <BackIconArrow onClick={(e: React.MouseEvent) => { e.preventDefault(); SetIndex(0); }} src={backIcon} />
                                <SelectTitleText style={{ marginLeft: "calc(50% - 40px - 34px)" }}>Weight</SelectTitleText>
                            </div>
                            <SepLine />

                            <div style={{ display: "flex", height: "64px", width: "100vw", maxWidth: "625px",marginLeft: "16px", alignItems: "center", }}>
                                <SelectContentText> 10kg </SelectContentText>
                            </div>
                            <SepLine />

                            <div style={{ display: "flex", height: "64px", width: "100vw", maxWidth: "625px", marginLeft: "16px", alignItems: "center", }}>
                                <SelectContentText> 15kg </SelectContentText>
                            </div>
                            <SepLine />

                            <div style={{ display: "flex", height: "64px", width: "100vw", maxWidth: "625px", marginLeft: "16px", alignItems: "center", }}>
                                <SelectContentText> 20kg </SelectContentText>
                            </div>
                            <SepLine />

                            <div style={{ display: "flex", height: "64px", width: "100vw", maxWidth: "625px", marginLeft: "16px", alignItems: "center", }}>
                                <SelectContentText> 25kg </SelectContentText>
                            </div>
                        </div>
                }
            </div>
        </div>
    );
}

//!메인함수에 필요한 컴포넌트
/*const SelectWeight = () => {
    return (
        
     );
}*/

const SelectNumberOf = () => {
    return (
        <div>
            2
        </div>
    );
}

const SelectWannaPave = () => {
    return (
        <div>
            3
        </div>
    );
}

//컴포넌트에 필요한 컴포넌트
const PurchaseMainSelectComp = (props: PurchaseMainSelectCompProps) => {
    return (
        <div>
            <PurchaseText style={{ marginTop: props.marginTop }}>
                { props.purchaseText }
            </PurchaseText>
            <PurchaseDetailBox onClick={() => { props.setIndexFn(props.setIndexNum); }} style={{ display: "flex", alignItems: "center", maxWidth: "625px", justifyContent: "space-between" }}>
                <PurchaseDetailText style={{ marginLeft: "16px" }}>
                    {props.purchaseDetailText}
                </PurchaseDetailText>
                <PurchaseDetailArrow style={{ marginRight: "12px" }} src={rightArrowIcon} />
            </PurchaseDetailBox>
        </div>
    );
}