import React, { useEffect, useState } from "react";
import { StateSelectBox, StateSelectText, StateNonSelectBox, StateNonSelectText } from "../atoms/state"
import {
    PurchaseDate, PurchaseState, WriteReviewBox, WriteReviewText, PurchaseDot,
    ProductImg, ProductLocateText, ProductTitleText, ProductPriceText, ProductDetailText, ProductDetailDot,
    UnReviewSepLine,
} from "../atoms/PurchaseInfo"

import testImage from "../../../assets/images/peach@3x.webp";
import { getAllOrderList, getDeliverCompleteOrderList, getOnDeliverOrderList, getReadyOrderList, getRefuncOrderList } from "../OrderListAction";
import { useDispatch } from 'react-redux';

export const ProductFilter = () => {
    const [index, setIndex] = useState(0);
    const dispatch = useDispatch();

    useEffect(() => {
        switch (index) {
            case 0:
                dispatch(getAllOrderList());
                break;
            case 1:
                dispatch(getReadyOrderList());
                break;
            case 2:
                dispatch(getOnDeliverOrderList());
                break;
            case 3:
                dispatch(getDeliverCompleteOrderList());
                break;
            case 4:
                dispatch(getRefuncOrderList());
                break;
        
            default:
                break;
        }
    }, [index])
    
    return (
        <div style={{ margin: "76px 16px 0 16px" }}>
            <div style={{ display: "flex", flexWrap: "wrap"}}>
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
                <div onClick={() => { setIndex(1); }} style={{ marginLeft: "10px" }}>
                    {
                        index == 1 ?
                            <>
                                <StateSelectBox>
                                    <StateSelectText>배송준비</StateSelectText>
                                </StateSelectBox>
                            </>
                            :
                            <>
                                <StateNonSelectBox >
                                    <StateNonSelectText>배송준비</StateNonSelectText>
                                </StateNonSelectBox>
                            </>
                    }
                </div>
                <div onClick={() => { setIndex(2); }} style={{ marginLeft: "10px" }}>
                    {
                        index == 2 ?
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
                <div onClick={() => { setIndex(3); }} style={{marginLeft: "10px" }}>
                    {
                        index == 3 ?
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
                <div onClick={() => { setIndex(4); }} style={{ marginLeft: "10px" }}>
                    {
                        index == 4 ?
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