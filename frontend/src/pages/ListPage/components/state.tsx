import React, { useEffect, useState } from "react";
import {StateSelectBox ,StateSelectText,StateNonSelectBox, StateNonSelectText } from "../atoms/state"


export const ProductStateList = () => {
    const [index, setIndex] = useState(0);

    
    return (
        <div style={{ margin: "76px 16px 0 16px" }}>
            <div style={{ display: "flex", justifyContent:"space-between" }}>
                <div onClick={() => { setIndex(0); }}>
                    {
                        index == 0 ?
                            <>
                                <StateSelectBox>
                                    <StateSelectText>전체</StateSelectText>
                                </StateSelectBox>
                            </>
                            :
                            <>
                                <StateNonSelectBox >
                                    <StateNonSelectText>전체</StateNonSelectText>
                                </StateNonSelectBox>
                            </>
                    }
                </div>
                <div onClick={() => { setIndex(1); }} >
                    {
                        index == 1 ?
                            <>
                                <StateSelectBox>
                                    <StateSelectText>배송중</StateSelectText>
                                </StateSelectBox>
                            </>
                            :
                            <>
                                <StateNonSelectBox >
                                    <StateNonSelectText>배송중</StateNonSelectText>
                                </StateNonSelectBox>
                            </>
                    }
                </div>
                <div onClick={() => { setIndex(2); }} >
                    {
                        index == 2 ?
                            <>
                                <StateSelectBox>
                                    <StateSelectText>배송완료</StateSelectText>
                                </StateSelectBox>
                            </>
                            :
                            <>
                                <StateNonSelectBox >
                                    <StateNonSelectText>배송완료</StateNonSelectText>
                                </StateNonSelectBox>
                            </>
                    }
                </div>
                <div onClick={() => { setIndex(3); }} >
                    {
                        index == 3 ?
                            <>
                                <StateSelectBox>
                                    <StateSelectText>취소/교환/환불</StateSelectText>
                                </StateSelectBox>
                            </>
                            :
                            <>
                                <StateNonSelectBox >
                                    <StateNonSelectText>취소/교환/환불</StateNonSelectText>
                                </StateNonSelectBox>
                            </>
                    }
                </div>
            </div>
        </div>
    );
}