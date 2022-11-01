import React, { useEffect, useState } from "react";


import BackBtn from "../../assets/images/btn-back.png";
import Truck from "../../assets/images/btn-order.png";
import Peach from "../../assets/images/peach.png";
import Check from "../../assets/images/btn-checkbox-2.png";
import TextFieldRecipient from "../../assets/images/textfield-off_recipient.png";
import TextFieldPhone from "../../assets/images/textfield-off_phone.png";
import TextFieldAddress from "../../assets/images/textfield-off.png";



import { useParams, useLocation, useNavigate } from 'react-router-dom';
import styled from "styled-components";
import { AppFrame } from "../../App";


import { collection, doc, setDoc, getDoc, query, orderBy, limit, getDocs, where } from "firebase/firestore";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../reducers";

function PurchasePage(props: any) {
    return(
        <div style = {{display: "flex", height: "100vh", flexDirection: "column", position: "fixed", bottom: "0", zIndex: "10000", width: "100vw", maxWidth:"625px"}}>
            <div style = {{ zIndex: "0", height: "100vh" }}>
                <TopBar style = {{display: "flex", flexDirection: "row", zIndex: "1", maxWidth: "625px", padding: "16px 0 16px 0", margin: "0 0 24px 0"}}>
                    <img src = {BackBtn} style = {{position: "fixed", margin: "0 0 0 16px"}} />
                    <TopText style = {{display: "flex", margin: "2px 270.5px 2px 270.5px"}}> 주문 / 결제 </TopText>
                </TopBar>
            </div>

            <div>
                <Sector style = {{ display: "flex", flexDirection: "column", maxWidth: "625px", padding: "24px 16px 0 16px"}}>
                    <SectorTitle style = {{display: "fixed", margin: "0 0 20px 0"}}> 총 2개의 상품 </SectorTitle>
                    <div style = {{display: "flex", flexDirection: "row", margin: "0 16px 10px 0", justifyContent: "space-between"}}> 
                        <StoreName> 청년농부 </StoreName>
                        <div style = {{display: "flex", flexDirection: "row"}}>
                            <img src = {Truck} style = {{width: "30px", height: "30px"}} />
                            <DeliveryCharge style = {{margin: "0 16px 0 0"}}> 3,000원 </DeliveryCharge>
                        </div>
                    </div>
                    <Line style = {{maxWidth: "593px", margin: "0 16px 12px 0"}} />
                    <div style = {{display: "flex", flexDirection: "row"}}>
                        <img src = {Peach} style = {{width: "88px", height: "88px", margin: "0 16px 16px 0"}}/>
                        <div style = {{display: "flex", flexDirection: "column"}}>
                            <ProductName style = {{margin: "11px 0 0 0"}}> 친환경 복숭아 5kg/10kg </ProductName>
                            <div style = {{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
                                <div style = {{display: "flex", flexDirection: "row"}}>
                                    <ProductCost style = {{display: "flex", margin: "0 6px 0 0"}}> 29,000원 </ProductCost>
                                    <SaleRate style = {{display: "flex", margin: "0 0 2px 0"}}> 20% </SaleRate>
                                </div>
                                <img src = {Check}/>
                            </div>
                            <Package style = {{display: "flex", margin: "8px 0 0 0"}}> 12개입•10kg•선물용 포장 </Package>
                        </div>
                    </div>
                </Sector>
            </div>

            <div>
                <SeparateSectorLine style = {{maxWidth: "625px", margin: "16px 0 0 0"}} />
            </div>
            
            <div>
                <Sector style = {{display: "flex", flexDirection: "column", maxWidth: "625px", padding: "24px 16px 0 16px"}}>
                    <div style = {{display: "flex", flexDirection: "row", margin: "0 16px 10px 0", justifyContent: "space-between"}}> 
                        <StoreName style = {{margin: "0 0 10px 0"}}> 청년농부 </StoreName>
                        <div style = {{display: "flex", flexDirection: "row"}}>
                            <img src = {Truck} style = {{width: "30px", height: "30px"}} />
                            <DeliveryCharge style = {{margin: "0 16px 0 0"}}> 3,000원 </DeliveryCharge>
                        </div>
                    </div>
                    <Line style = {{maxWidth: "593px", margin: "0 16px 12px 0"}} />
                    <div style = {{display: "flex", flexDirection: "row"}}>
                        <img src = {Peach} style = {{width: "88px", height: "88px", margin: "0 16px 16px 0"}} />
                        <div style = {{display: "flex", flexDirection: "column"}}>
                            <ProductName style = {{margin: "11px 0 0 0"}}> 친환경 복숭아 5kg/10kg </ProductName>
                            <div style = {{display: "flex", flexDirection: "row"}}>
                                <ProductCost style = {{display: "flex", margin: "0 6px 0 0"}}> 29,000원 </ProductCost>
                                <SaleRate style = {{display: "flex", margin: "0 116px 2px 0"}}> 20% </SaleRate>
                                <img src = {Check} style = {{display: "flex", margin: "0 16px 0 0"}} />
                            </div>
                            <Package style = {{display: "flex", margin: "8px 0 0 0"}}> 12개입•10kg•선물용 포장 </Package>
                        </div>
                    </div>
                </Sector>
            </div>
            
            <div>
                <SeparateSectorLine style = {{maxWidth: "625px", margin: "16px 0 0 0"}} />
            </div>

            <div>
                <Sector style = {{display: "flex", flexDirection: "column", maxWidth: "625px", padding: "24px 16px 0 16px"}}>
                    <div style = {{display: "flex", flexDirection: "row"}}>
                        <SectorTitle style = {{display: "fixed", margin: "6px 184px 20px 0"}}> 배송 정보 </SectorTitle>
                        
                    </div>

                    <div style = {{display: "flex", flexDirection: "row", marginTop: "16px"}}>
                        <InputQuestion style = {{display: "flex", margin: "11px 31px 11px 0"}}> 수령인 </InputQuestion>
                        <img src = {TextFieldRecipient} />
                    </div>

                    <div style = {{display: "flex", flexDirection: "row", marginTop: "16px"}}>
                        <InputQuestion style = {{display: "flex", margin: "11px 31px 11px 0"}}> 휴대폰 </InputQuestion>
                        <img src = {TextFieldPhone} />
                    </div>
                    
                    <div style = {{display: "flex", flexDirection: "row", marginTop: "16px"}}>
                        <InputQuestion style = {{display: "flex", margin: "11px 43px 11px 0"}}> 주소 </InputQuestion>
                        <img src = {TextFieldAddress} />
                    </div>
                    <img src = {TextFieldAddress} style = {{ margin: "8px 0 0 68px"}} />


                </Sector>
                
            </div>


        </div>
    )
   
}

export default PurchasePage;

export const TopBar = styled.div `
    width: 100vw;
    maxWidth: 625px;
    height: 56px;
    background-color: #fff;
    align-items: center;
    display: flex;
`

export const TopText = styled.div`
    font-family: AppleSDGothicNeo;
    font-size: 17px;
    font-weight: 600;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    justify-content: center;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: #272727;
`

export const Sector = styled.div`
    width: 100vw;
    maxWidth: 625px;
    height: auto;
    background-color: #fff;
    display: flex;
`

export const SectorTitle = styled.div`
    font-family: AppleSDGothicNeo;
    font-size: 20px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #272727;
    margin: 0 251px 20px 16px;
`

export const StoreName = styled.div`
    font-family: AppleSDGothicNeo;
    font-size: 14px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    text-align: left;
    color: #444;
`

export const DeliveryCharge = styled.div`
    font-family: AppleSDGothicNeo;
    font-size: 14px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    text-align: right;
    color: #6b6b6b;
`

export const Line = styled.div`
    width: 593px;
    height: 1px;
    background-color: #efefef;
`

export const ProductImage = styled.div`
    width: 88px;
    height: 88px;
    border-radius: 12px;
`

export const ProductName = styled.div`
    width: 147px;
    height: 19px;
    margin: 0 0 4px;
    font-family: AppleSDGothicNeo;
    font-size: 15px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #444;
`

export const ProductCost = styled.div`
    font-family: AppleSDGothicNeo;
    font-size: 16px;
    font-weight: 800;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #272727;
    font-weight: 600;
`

export const SaleRate = styled.div`
    font-family: AppleSDGothicNeo;
    font-size: 14px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #fb6159;
`

export const Package = styled.div`
    font-family: AppleSDGothicNeo;
    font-size: 12px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #979797;
`

export const SeparateSectorLine = styled.div`
    width: 100vw;
    max-width: 625px;
    height: 8px;
    background-color: #f7f7f7;
`


export const DestinationListBox = styled.div`
    width: 84px;
    height: 36px;
    border-radius: 18px;
    background-color: #efefef;
`

export const InputQuestion = styled.div`
    width: 37px;
    height: 20px;
    font-family: AppleSDGothicNeo;
    font-size: 14px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.43;
    letter-spacing: normal;
    color: #414141;
`

export const InputBoxLong = styled.div`
    width: 275px;
    height: 42px;   
    object-fit: contain;
`

export const InputBoxShort = styled.div`
    width: 195px;
    height: 42px;   
    object-fit: contain;
`

export const InputAnswer = styled.div`
`