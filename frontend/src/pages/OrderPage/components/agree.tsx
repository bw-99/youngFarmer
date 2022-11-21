import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../reducers';
import { OrderSending, PaymentMethodDataType } from '../../../reducers/OrderReducer';
import { savePayMethodAction, TOSS_PAY, KAKAO_PAY, PAYCO_PAY } from '../PayMethodAction';
import checkIcon from "../../../assets/images/btn-checkbox-1@3x.png";
import checkNotIcon from "../../../assets/images/btn-checkbox-2@3x.png";
import { saveAgreeAction } from '../DeliveryAction';

type agreeParams = {
    agree: boolean, 
    setAgree: React.Dispatch<React.SetStateAction<boolean>>
}

export const PayAgreeComp = () => {
    const dispatch = useDispatch();
    const agreeSelector:  boolean = useSelector((state:RootState) => state.OrderSendReducer.agreeCondition);

    return (
        <div>
            <div>
                <div onClick={()=>{
                    let tempBool = !agreeSelector;
                    console.log(tempBool);
                    dispatch(saveAgreeAction(tempBool));
                }}>
                    {
                        agreeSelector?
                        <img src={checkIcon}/>
                        :
                        <img src={checkNotIcon}/>
                    }

                </div>

                <h3>결제 시 필수 사항 동의</h3>
            </div>
        </div>
    )
}