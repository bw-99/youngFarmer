import { PurchaseBoxAtom, PurchaseText, PurchaseDetailBox, PurchaseDetailText, SepLine, PurchaseDetailArrow, PurchaseBackGround } from "../atoms/purchase";
import rightArrowIcon from "../../../assets/images/btn-arrow-r-20-px@3x.png";

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../reducers";
import { LikeData } from "../../../reducers/LikeReducer";
import { likeAction, likeCancelAction } from "../../LikePage/LikeAction";

export const PurchaseComp = () => {
    return (
        <div style={{ display: "flex", flexDirection: "column" } }>
            <div style={{ zIndex: "0", }}>
                <PurchaseBackGround style={{ maxWidth: "625px"/*, border: "solid", borderColor: "red"*/,}}/>
            </div>
            <div style={{ zIndex: "1",marginTop: "301px", maxWidth: "625px", padding: " 0 16px", backgroundColor: "white", borderTopLeftRadius: "12px", borderTopRightRadius: "12px"  }}>
                <PurchaseBoxAtom style={{ maxWidth: "625px", flexDirection: "column" }}>
                    <PurchaseText style={{ marginTop: "32px" }}>
                        Weight
                    </PurchaseText>
                    <PurchaseDetailBox style={{ display: "flex", alignItems: "center", maxWidth: "625px", justifyContent: "space-between" }}>
                        <PurchaseDetailText style={{ marginLeft: "16px" }}>
                            Select Weight
                        </PurchaseDetailText>
                        <PurchaseDetailArrow style={ {marginRight:"12px"}}  src={rightArrowIcon} />
                    </PurchaseDetailBox>
                    <SepLine style={{ marginTop: "24px" }} />

                    <PurchaseText style={{ marginTop: "24px" }}>
                        Many
                    </PurchaseText>
                    <PurchaseDetailBox style={{ display: "flex", alignItems: "center", maxWidth: "625px", justifyContent: "space-between" }}>
                        <PurchaseDetailText style={{ marginLeft: "16px" }}>
                            number of item
                        </PurchaseDetailText>
                        <PurchaseDetailArrow style={{ marginRight: "12px" }} src={rightArrowIcon} />
                    </PurchaseDetailBox>
                    <SepLine style={{ marginTop: "24px" }} />

                    <PurchaseText style={{ marginTop: "24px" }}>
                        Pave
                    </PurchaseText>
                    <PurchaseDetailBox style={{ display: "flex", alignItems: "center", maxWidth: "625px", justifyContent: "space-between" }}>
                        <PurchaseDetailText style={{ marginLeft: "16px" }}>
                            Wanna pave?
                        </PurchaseDetailText>
                        <PurchaseDetailArrow style={{ marginRight: "12px" }} src={rightArrowIcon} />
                    </PurchaseDetailBox>
                </PurchaseBoxAtom>
            </div>
            <SepLine style={{ marginTop: "24px" }} />
        </div>
     );

}