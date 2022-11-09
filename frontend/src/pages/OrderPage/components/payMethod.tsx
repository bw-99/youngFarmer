import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { savePayMethodAction, TOSS_PAY } from './../PayMethodAction';

export const PayMethodComp = () => {
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(savePayMethodAction({
            payMethod: TOSS_PAY
        }));
    }, []);

    return (
        <div>
            <div>
                <h3>결제 수단</h3>
            </div>

            <button disabled={true} style={{marginTop: "30px"}}>
                토스페이
            </button>

        </div>
    )
}