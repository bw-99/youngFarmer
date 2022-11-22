import { DeliveryCharge, Line, Package, ProductCost, ProductName, SaleRate, Sector, SectorTitle, SeparateSectorLine, StoreName } from "../atoms/product";
import BackBtn from "../../../assets/images/btn-back.png";
import Truck from "../../../assets/images/btn-order.png";
import Peach from "../../../assets/images/peach.png";
import Check from "../../../assets/images/btn-checkbox-2.png";
import React, { useEffect, useState } from "react";
import { OrderProductDataType, ProductDataType } from "../../../reducers/ProductReducer";
import { Spantemp2 } from "../../CartPage/atoms/CartProduct";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../reducers";
import { removeProductAction, saveProductAction } from "../ProductAction";

export type OrderProductListParam = {
    orderProducts: OrderProductDataType[]
}

export type OrderProductParam = {
    orderProduct: OrderProductDataType
}


export const ProductListComp = ({orderProducts}:OrderProductListParam) => {
    const dispatch = useDispatch();
    
    // const orderProductSelector: OrderProductDataType[] = useSelector((state:RootState) =>
    //     state.SearchDetailReducer.orderProducts
    // );     

    return(
        <>
        {
            orderProducts.map((orderProduct) => {
                return (
                    <ProductComp key={orderProduct.product.product_id} orderProduct={orderProduct} />
                )
            })
        }
        </>
    )
}

const ProductComp = ({orderProduct}:OrderProductParam) => {
    const dispatch = useDispatch();
    useEffect(() => {
        if(orderProduct) {
            dispatch(saveProductAction(orderProduct));
        }

        return () => {
            dispatch(removeProductAction(orderProduct));
        }
    }, []);


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
                            <img src = {orderProduct.product.photo} style = {{width: "88px", height: "88px",objectFit:"cover",borderRadius: "12px",  margin: "0 16px 0 0"}}/>

                            <div style = {{display: "flex", flexDirection: "column"}}>
                                <ProductName style = {{margin: "0px 0 4px 0"}}> {orderProduct.product.title} </ProductName>
                                <div style = {{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
                                    <div style = {{display: "flex", flexDirection: "row"}}>
                                        <ProductCost style = {{display: "flex", margin: "0 6px 0 0"}}> {(orderProduct.product.price * orderProduct.count).toLocaleString("kr")}원 </ProductCost>
                                        <SaleRate style = {{display: "flex", margin: "0 0 2px 0"}}> {orderProduct.product.discount}% </SaleRate>
                                    </div>
                                </div>
                                <Package style = {{display: "flex", margin: "8px 0 0 0"}}> 
                                {
                                    // JSON.stringify(orderProduct.option)
                                    orderProduct.option?
                                    Object.keys(JSON.parse(orderProduct.option)).map((key:any) => {
                                        return <Spantemp2 key={key}>
                                            {JSON.parse(orderProduct.option)[key]} •&nbsp;
                                        </Spantemp2>
                                    })
                                    :
                                    <></>
                                    
                                }

                                </Package>
                            </div>
                        </div>
                    </div>
                    <div style = {{margin: "0 16px 12px 16px"}}>
                        <SeparateSectorLine style = {{maxWidth: "625px", width:"100%",  margin: "16px 0 0 0"}} />
                    </div>
                </Sector>
    );
}

// {
//     "count":1,
//     "product":{
//         "photo":"https://src.hidoc.co.kr/image/lib/2021/6/24/1624517344477_0.jpg","is_nonpesticide":true,"price":34000,"delivery_charge":3200,"store_id":1,"discount":20,"is_ontime":true,"is_best":true,"is_sale":true,"title":"친환경 복숭아 5kg/10kg","delivery_remain":340,"is_vegitable":false,"delivery_start":"7일 이내","product_id":1
//     },
//     "option":{
//         "item_weight":"3kg","number_of_item":"12개입","wanna_pave":"선물용 포장"
//     }
// }