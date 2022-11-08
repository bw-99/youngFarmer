import React, { useState } from "react";
import checkIcon from "../../../assets/images/btn-checkbox-1@3x.png";
import checkNotIcon from "../../../assets/images/btn-checkbox-2@3x.png";

export const DeliveryComp = () => {
    const  [deliveryDefault, setDeliveryDefault] = useState(false);


    const [deliverMan, setDeliverMan] = useState("");
    const [deliverPhone, setDeliverPhone] = useState("");
    const [deliverLocation, setDeliverLocation] = useState("");
    const [deliverReq, setDeliverReq] = useState("");
    return(
        <div>
            <h3> 배송 정보 </h3>
            <div>
                {/* 수령인 */}
                <div style={{display:"flex", margin:"20px"}}>
                    <div>
                        수령인
                    </div>
                    <input placeholder="수령인을 입력하세요" value={deliverMan} onChange={(e)=>{
                        setDeliverMan(e.target.value);
                    }}>
                    </input>
                </div>

                {/* 휴대폰 */}
                <div style={{display:"flex", margin:"20px"}}>
                    <div>
                        휴대폰
                    </div>
                    <input placeholder="수령인을 입력하세요" value={deliverPhone} onChange={(e)=>{
                        setDeliverPhone(e.target.value);
                    }}>
                    </input>
                </div>

                {/* 주소 */}
                <div style={{display:"flex", margin:"20px"}}>
                    <div>
                        주소
                    </div>
                    <input placeholder="수령인을 입력하세요" value={deliverLocation} onChange={(e)=>{
                        setDeliverLocation(e.target.value);
                    }}>
                    </input>
                </div>


                {/* 배송요청 */}
                <div style={{display:"flex", margin:"20px"}}>
                    <div>
                        배송요청
                    </div>
                    <input placeholder="수령인을 입력하세요" value={deliverReq} onChange={(e)=>{
                        setDeliverReq(e.target.value);
                    }}>
                    </input>
                </div>

            </div>

            <div onClick={()=>{
                setDeliveryDefault(!deliveryDefault);
            }}>
                {
                    deliveryDefault?
                    <img src={checkIcon}/>
                    :
                    <img src={checkNotIcon}/>
                }

                기본 배송지로 설정
            </div>
            

        </div>
    );
}