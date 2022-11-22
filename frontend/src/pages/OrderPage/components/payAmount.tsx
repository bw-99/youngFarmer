import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../reducers';
import { OrderSending, PaymentMethodDataType } from '../../../reducers/OrderReducer';
import { savePayMethodAction, TOSS_PAY, KAKAO_PAY, PAYCO_PAY } from '../PayMethodAction';
import { useState } from 'react';
import { DISCOUNT_TYPE_AMOUNT, DISCOUNT_TYPE_PERCENT } from '../../../reducers/DiscountReducer';

export const PayAmountComp = () => {
    const dispatch = useDispatch();
    const orderSendSelector: OrderSending = useSelector((state:RootState) => state.OrderSendReducer);

    const [finalPrice, setFinalPrice] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);
    const [discountTotalPrice, setDiscountTotalPrice] = useState(0);
    const [couponPrice, setCouponPrice] = useState(0);
    const [deliveryPrice, setDeliveryPrice] = useState(0);

    useEffect(() => {
        if(!orderSendSelector){
            return;
        }
        // * 결제 금액 계산
        let amount = 0;
        let amountTotal = 0;
        let discountTotal = 0;
        let deliveryTotal = 0;
        // 결제 금액 합산
        orderSendSelector!.products!.forEach((product) => {
            amountTotal += product.product.price;
            discountTotal += product.product.price * (product.product.discount/100);
            deliveryTotal += product.product.delivery_charge;
            amount += product.product.price * (1 - product.product.discount/100) + product.product.delivery_charge;
        })

        setTotalPrice(amountTotal);
        setDiscountTotalPrice(discountTotal);
        setDeliveryPrice(deliveryTotal);


        // 포인트 계산
        let couponTotal = 0;
        if(orderSendSelector.discount){
            couponTotal = orderSendSelector.discount!.point;
            amount -= orderSendSelector.discount!.point;
            // 쿠폰 계산
            if(orderSendSelector.discount!.coupon_list && orderSendSelector.discount!.coupon_list.length > 0 && orderSendSelector.discount!.coupon_list[0]){
                const useCoupon = orderSendSelector.discount!.coupon_list[0];
                if(useCoupon.discount_type == DISCOUNT_TYPE_AMOUNT) {
                    couponTotal += useCoupon.discount; 
                    amount -= useCoupon.discount;
                }
                else if(useCoupon.discount_type == DISCOUNT_TYPE_PERCENT){
                    couponTotal += amount*(useCoupon.discount/100);
                    amount *= (1 - useCoupon.discount/100);
                }
            }
            setCouponPrice(couponTotal);
            setFinalPrice(amount);
        }   
        
    }, [orderSendSelector])
    return (
        <div>
            <div>
                <h3>결제 금액</h3>
            </div>

            <div style={{display:"flex"}}>
                <div>
                    총 상품금액
                </div>
                <div>
                   {totalPrice}
                </div>
            </div>

            <div style={{display:"flex"}}>
                <div>
                    상품할인
                </div>
                <div>
                   {discountTotalPrice}
                </div>
            </div>

            <div style={{display:"flex"}}>
                <div>
                    쿠폰/포인트 할인
                </div>
                <div>
                   {couponPrice}
                </div>
            </div>

            <div style={{display:"flex"}}>
                <div>
                    배송비
                </div>
                <div>
                   {deliveryPrice}
                </div>
            </div>

            <div style={{display:"flex"}}>
                <div>
                    총 결제 금액
                </div>
                <div>
                   {finalPrice}
                </div>
            </div>

        </div>
    )
}