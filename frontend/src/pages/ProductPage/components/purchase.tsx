import { PurchaseBoxAtom, PurchaseText, PurchaseDetailBox, PurchaseDetailText, SepLine, PurchaseDetailArrow, PurchaseBackGround } from "../atoms/purchase";
import rightArrowIcon from "../../../assets/images/btn-arrow-r-20-px@3x.png";

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../reducers";
import { LikeData } from "../../../reducers/LikeReducer";
import { likeAction, likeCancelAction } from "../../LikePage/LikeAction";

export const PurchaseComp = () => {
    return (
        <div>
            <PurchaseBackGround style={{maxWidth: "625px", } }>
                <PurchaseBoxAtom style={{ maxWidth: "625px", }}>
                   {/* <div style={{ display: "flex", alignItems: "center", flexDirection: "column", margin: "32px 0 0 16px" }}>
                        <PurchaseText> 무게 선택 </PurchaseText>
                        <PurchaseDetailBox style={{ display: "flex", alignItems: "center", }}>
                            <PurchaseDetailText> 무게를 선택해주세요 </PurchaseDetailText>
                            <PurchaseDetailArrow src={rightArrowIcon} />
                        </PurchaseDetailBox>
                        <SepLine />
                    </div>*/}
                </PurchaseBoxAtom>
            </PurchaseBackGround>
        </div>            
     );

}