import React from "react";
import { Icon, ShoppingItemAtom, ShoppingItemRightArrow, ShoppingItemText, ShoppingSepLine, ShoppingText } from "../atoms/shopping";
import questionIcon from "../../../assets/images/icon-question@3x.png";

import noticeIcon from "../../../assets/images/icon-notice@3x.webp";
import couponIcon from "../../../assets/images/icon-coupon@3x.webp";
import cardIcon from "../../../assets/images/icon-card@3x.webp";
import friendIcon from "../../../assets/images/icon-card@3x.webp";

import { ShoppingItemComp } from "./shopping";

export const ServiceCenterComp = () => {
    return(
        <div style={{margin: "20px 16px 20px 16px"}}>
            <ShoppingText style={{marginBottom: "10px"}}> 고객센터 </ShoppingText>
            {ShoppingItemComp(noticeIcon, "문의 내역")}
            {ShoppingItemComp(couponIcon, "쿠폰함")}
            {ShoppingItemComp(cardIcon, "결제수단 관리")}
            {ShoppingItemComp(friendIcon, "친구 초대")}
        </div>
    );
}
