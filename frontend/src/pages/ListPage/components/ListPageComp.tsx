import React, { useEffect, useState } from "react";
import { StateSelectBox, StateSelectText, StateNonSelectBox, StateNonSelectText } from "../atoms/state"
import {
    PurchaseDate, PurchaseState, WriteReviewBox, WriteReviewText, PurchaseDot,
    ProductImg, ProductLocateText, ProductTitleText, ProductPriceText, ProductDetailText, ProductDetailDot,
    UnReviewSepLine,
} from "../atoms/PurchaseInfo"

import testImage from "../../../assets/images/peach@3x.png";

export const ProductStateList = () => {
    const [index, setIndex] = useState(0);

    
    return (
        <div style={{ margin: "76px 16px 0 16px" }}>
            <div style={{ display: "flex", justifyContent:"space-between" }}>
                <div onClick={() => { setIndex(0); }} style={{flex: "1", } }>
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
                <div onClick={() => { setIndex(1); }} style={{ flex: "1", marginLeft: "10px" }}>
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
                <div onClick={() => { setIndex(2); }} style={{ flex: "1", marginLeft: "10px" }}>
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
                <div onClick={() => { setIndex(3); }} style={{ flex: "1", marginLeft: "10px" }}>
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
            {/*여기는 수정해야함*/}
            <div style={{ marginTop: "24px", height: "130px", }}>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <div style={{ display: "flex", alignItems: "center" }}>
                        <PurchaseDate>2022.10.16</PurchaseDate>
                        <PurchaseDot style={{ marginLeft: "8px" }} />
                        <PurchaseState style={{ marginLeft: "8px" }}>구매확정</PurchaseState>
                    </div>
                    <div>

                    </div>
                    <WriteReviewBox style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <WriteReviewText>주문상세</WriteReviewText>
                    </WriteReviewBox>
                </div>
                <div style={{ marginTop: "20px", display: "flex" }}>
                    <ProductImg src={testImage} />
                    <div style={{ display: "flex", marginTop: "7px", marginLeft: "16px", flexDirection: "column" }}>
                        <ProductLocateText>산천</ProductLocateText>
                        <ProductTitleText style={{ marginTop: "4px" }}>친환경 복숭아 5kg /10kg</ProductTitleText>
                        <div style={{ display: "flex", marginTop: "10px", alignItems: "center" }}>
                            <ProductPriceText>29,000원</ProductPriceText>
                            <ProductDetailText style={{ marginLeft: "10px" }}>12개입</ProductDetailText>
                            <ProductDetailDot style={{ marginLeft: "2px" }} />

                            <ProductDetailText style={{ marginLeft: "2px" }}>10kg</ProductDetailText>
                            <ProductDetailDot style={{ marginLeft: "2px" }} />

                            <ProductDetailText style={{ marginLeft: "2px" }}>선물용 포장</ProductDetailText>
                        </div>
                    </div>
                </div>
                <UnReviewSepLine style={{ marginTop: "20px" }} />
            </div>
        </div>
    );
}