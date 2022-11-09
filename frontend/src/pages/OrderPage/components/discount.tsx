import React, { useEffect, useState } from "react";
import checkIcon from "../../../assets/images/btn-checkbox-1@3x.png";
import checkNotIcon from "../../../assets/images/btn-checkbox-2@3x.png";
import { useDispatch, useSelector } from 'react-redux';
import { db, FirebaseAuth } from './../../../index';
import { DeliveryDataType } from "../../../reducers/DeliveryReducer";
import { RootState } from "../../../reducers";
import { addDoc, collection, getDocs, query, Timestamp, updateDoc, where } from "firebase/firestore";
import { BackgroundWrapper, CenterBackgroundWrapper } from "../../../common/BackgroundWrapper/BackgroundWrapper";
import axios from "axios";
import DaumPostcode from "react-daum-postcode";
import ReactDom from 'react-dom';
import { getDiscountTry, saveDiscountAction } from './../DiscountAction';
import { CouponSrcType, DiscountDataType } from "../../../reducers/DiscountReducer";


export const DiscountComp = () => {
    const dispatch = useDispatch();

    let useCoupon: CouponSrcType|null = null;

    const [usePointAmount, setUsePointAmount] = useState(0);
    const [usePoint, setUsePoint] = useState(false);

    const discountSelector: DiscountDataType = useSelector((state:RootState) =>
        state.DiscountReducer
    );     

    const handleSubmitDisInfo = () => {
        if(!useCoupon && discountSelector.coupon_list.length) {
            useCoupon = discountSelector.coupon_list[0];
        }
        
        let discountData: DiscountDataType = {
            uid: FirebaseAuth.currentUser!.uid,
            point: usePointAmount,
            coupon_list: [useCoupon!]
        }
        dispatch(saveDiscountAction(discountData));
    }


    useEffect(() => {
        FirebaseAuth.onAuthStateChanged((user) => {
            dispatch(getDiscountTry(user!.uid));
        })
    }, []);

    useEffect(() => {
        if(discountSelector) {
            handleSubmitDisInfo();
        }
    },[usePointAmount, usePoint, useCoupon,discountSelector]);

    if(!discountSelector) {
        return(
            <div>
            </div>
        );
    }

    return(
        <div>
            <div>
                <h3>할인 정보</h3>
            </div>

            <div style={{display: "flex", marginTop: "30px"}}>
                <div>
                    쿠폰
                </div>

                  

                <div  style={{marginLeft: "40px"}}>
                    {
                        discountSelector.coupon_list
                        ?
                        <select 
                        onChange={(e) => {
                            useCoupon = JSON.parse(e.target.value);
                            console.log(useCoupon);
                        }}>
                            {
                                discountSelector.coupon_list.map((coupon) => {
                                    return <option key={Timestamp.now().nanoseconds + coupon.title} value={JSON.stringify(coupon)}>{coupon.title}</option>;
                                })
                            }
                            
                        </select>  
                        :
                        "쿠폰 없음"
                    }
                </div>
            </div>


            <div style={{display: "flex", marginTop: "30px"}}>
                <div>
                    포인트
                </div>

                <div style={{marginLeft: "40px"}}>
                    <input type="number" 
                    
                    onChange={(e) => {
                        const pointInput = Number(e.target.value);
                        if( pointInput <=  discountSelector.point && pointInput > 0) {
                            setUsePointAmount(pointInput);
                        }
                    }}
                    value={
                        usePoint
                        ?
                        discountSelector.point
                        :
                        usePointAmount
                    }/> P
                    
                </div>

                <button disabled={discountSelector.point === 0} style={{marginLeft: "40px"}} onClick={() => {
                    setUsePoint(!usePoint);
                    setUsePointAmount(usePointAmount)
                }}>
                    전액사용
                </button>
            </div>

            <button onClick={() => {
                handleSubmitDisInfo();
            }}> 
            (임시) 할인 정보 제출
            </button>
        </div>
    );
}