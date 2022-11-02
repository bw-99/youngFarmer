import { DeliveryCharge, Line, Package, ProductCost, ProductName, SaleRate, Sector, SectorTitle, SeparateSectorLine, StoreName } from "../atoms/product";
import BackBtn from "../../../assets/images/btn-back.png";
import Truck from "../../../assets/images/btn-order.png";
import Peach from "../../../assets/images/peach.png";
import Check from "../../../assets/images/btn-checkbox-2.png";
import React, { useEffect, useState } from "react";
import { OrderProductDataType, ProductDataType } from "../../../reducers/ProductReducer";

export type OrderProductParam = {
    orderProduct: OrderProductDataType
}


export const ProductComp = ({orderProduct}:OrderProductParam) => {
    return (
        <Sector style = {{ display: "flex", flexDirection: "column"}}>
                    <div style = {{display: "flex", flexDirection: "row", margin: "0 16px 10px 16px",alignItems:"center", justifyContent: "space-between"}}> 
                        <StoreName> 청년농부 </StoreName>
                        <div style = {{display: "flex", flexDirection: "row", alignItems: "center"}}>
                            <img src = {Truck} style = {{width: "30px", height: "30px"}} />
                            <DeliveryCharge style = {{margin: "0 0px 0 0"}}> {orderProduct.product.delivery_charge.toLocaleString("kr")}원 </DeliveryCharge>
                        </div>
                    </div>
                    <Line style = {{ margin: "0 16px 12px 16px"}} />
                    <div style = {{marginLeft:"16px", marginRight:"16px", display: "flex", flexDirection: "row",justifyContent:"space-between", alignItems:"center"}}>
                        <div style={{display:"flex", alignItems:"center"}}>
                            <img src = {orderProduct.product.photo} style = {{width: "88px", height: "88px",objectFit:"cover",  margin: "0 16px 0 0"}}/>

                            <div style = {{display: "flex", flexDirection: "column"}}>
                                <ProductName style = {{margin: "0px 0 4px 0"}}> {orderProduct.product.title} </ProductName>
                                <div style = {{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
                                    <div style = {{display: "flex", flexDirection: "row"}}>
                                        <ProductCost style = {{display: "flex", margin: "0 6px 0 0"}}> {(orderProduct.product.price * orderProduct.count).toLocaleString("kr")}원 </ProductCost>
                                        <SaleRate style = {{display: "flex", margin: "0 0 2px 0"}}> {orderProduct.product.discount}% </SaleRate>
                                    </div>
                                </div>
                                <Package style = {{display: "flex", margin: "8px 0 0 0"}}> 12개입•10kg•선물용 포장 </Package>
                            </div>
                        </div>
                    </div>
                    <div style = {{margin: "0 16px 12px 16px"}}>
                        <SeparateSectorLine style = {{maxWidth: "625px", width:"100%",  margin: "16px 0 0 0"}} />
                    </div>
                </Sector>
    );
}