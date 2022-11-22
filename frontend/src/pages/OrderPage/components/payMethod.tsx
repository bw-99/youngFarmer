import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../reducers';
import { OrderSending, PaymentMethodDataType } from '../../../reducers/OrderReducer';
import { PayMethodButton, PayMethodTitle, SepLine } from '../atoms/payMethod';
import { savePayMethodAction, TOSS_PAY, KAKAO_PAY, PAYCO_PAY } from '../PayMethodAction';

export const PayMethodComp = () => {
    const dispatch = useDispatch();
    const paySelector:  PaymentMethodDataType | null = useSelector((state:RootState) => state.OrderSendReducer.payMethod);
    
    useEffect(() => {
        console.log(paySelector);
    }, [paySelector]);

    return (
        <div>
            <PayMethodTitleComp/>

            <div style={{display: "flex", margin: "11.5px 11.5px", flexWrap:"wrap"}}>
                <PayMethodButton style={{
                    margin: "4.5px 4.5px",
                    color: (paySelector?.payMethod == KAKAO_PAY)? "#ffffff": "#7e7e7e",
                    backgroundColor: (paySelector?.payMethod == KAKAO_PAY)? "#fb6159": "#ffffff"}} onClick={()=>{
                    dispatch(savePayMethodAction({
                        payMethod: KAKAO_PAY
                    }));
                }}> 
                카카오페이 
                </PayMethodButton>
                
                <PayMethodButton style={{
                    margin: "4.5px 4.5px",
                    color: (paySelector?.payMethod == TOSS_PAY)? "#ffffff": "#7e7e7e",
                    backgroundColor: (paySelector?.payMethod == TOSS_PAY)? "#fb6159": "#ffffff"}} onClick={()=>{
                    dispatch(savePayMethodAction({
                        payMethod: TOSS_PAY
                    }));
                }}> 
                토스페이 
                </PayMethodButton>
                
                <PayMethodButton style={{
                    margin: "4.5px 4.5px",
                    color: (paySelector?.payMethod == PAYCO_PAY)? "#ffffff": "#7e7e7e",
                    backgroundColor: (paySelector?.payMethod == PAYCO_PAY)? "#fb6159": "#ffffff"}} onClick={()=>{
                    dispatch(savePayMethodAction({
                        payMethod: PAYCO_PAY
                    }));
                }}> 
                페이코 
                </PayMethodButton>
            </div>

            <SepLine style={{marginTop: "calc(24px - 4.5px)"}}/>
        </div>
    )
}

const PayMethodTitleComp = () => {
    return (
        <div style={{marginLeft: "16px"}}>   
            <PayMethodTitle>
                결제수단
            </PayMethodTitle>
        </div>
    )
}