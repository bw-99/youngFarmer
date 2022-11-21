import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../reducers';
import { OrderSending, PaymentMethodDataType } from '../../../reducers/OrderReducer';
import { savePayMethodAction, TOSS_PAY, KAKAO_PAY, PAYCO_PAY } from '../PayMethodAction';

export const PayMethodComp = () => {
    const dispatch = useDispatch();
    const paySelector:  PaymentMethodDataType | null = useSelector((state:RootState) => state.OrderSendReducer.payMethod);
    
    useEffect(() => {
        console.log(paySelector);
    }, [paySelector]);

    return (
        <div>
            <div>
                <h3>결제 수단</h3>
            </div>

            <button 
            
            style={{marginTop: "30px", backgroundColor: (paySelector?.payMethod == KAKAO_PAY)? "red": "white"}} onClick={()=>{
                dispatch(savePayMethodAction({
                    payMethod: KAKAO_PAY
                }));
            }}>
                카카오페이
            </button>

            <button disabled={false} style={{marginTop: "30px", backgroundColor: (paySelector?.payMethod == TOSS_PAY)? "red": "white"}}  onClick={()=>{
                dispatch(savePayMethodAction({
                    payMethod: TOSS_PAY
                }));
            }}>
                토스페이
            </button>

            <button disabled={false} style={{marginTop: "30px", backgroundColor: (paySelector?.payMethod == PAYCO_PAY)? "red": "white"}}  onClick={()=>{
                dispatch(savePayMethodAction({
                    payMethod: PAYCO_PAY
                }));
            }}>
                페이코
            </button>

        </div>
    )
}