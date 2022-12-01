import { OrderProductDataType } from "../../../reducers/ProductReducer"
import { ProductImage, ProductName, ProductOption, ProductPrice, StoreName } from "../atoms/orderDetailProduct"
import { OrderParam } from "../OrderDetailPage"
import { useState } from 'react';
import { useEffect } from 'react';

export const OrderDetailProductComp = ({order}:OrderParam) =>{

    const [productByStore, setProductByStore] = useState<any>();

    useEffect(()=>{
        let storeList:any[] = [];
        let productList:any = {};
        for (const pr of order!.products!) {
            if(storeList.includes(pr.product.store_id)) {
                productList[pr.store!.name].push({
                    product: pr.product,
                    option: pr.option
                });
            }
            else {
                storeList.push(pr.product.store_id);
                productList[pr.store!.name] = [{
                    product: pr.product,
                    option: pr.option
                }];
            }
        }
        setProductByStore(productList);
    },[order]);

    if(!productByStore) {
        return (
            <></>
        )
    }

    // * 가게별 정렬
    return (
        <div>


            {
                Object.keys(productByStore).map((key:any) => {
                        return (
                            productByStore[key].map((pr:any) => {
                                return <OrderDetailProductItemComp pr={pr}/>
                            })
                        )
                })
            }
        </div>
    )
}

type PrType = {
    pr: OrderProductDataType
}


const OrderDetailProductItemComp = ({pr}:PrType) => {
    return (
        <div style={{margin: "16px 16px 0 16px", display:"flex", alignItems: "center"}}>
            <ProductImage src={pr.product.photo}/>
            <div style={{marginLeft: "16px"}}>
                <ProductName> {pr.product.title} </ProductName>
                <div style={{marginTop: "10px", display:"flex", alignItems: "center"}}>
                    <ProductPrice style={{marginRight: "10px"}}> {pr.product.price.toLocaleString("kr")}원 </ProductPrice>
                    {
                        Object.keys(JSON.parse(pr.option)).map((key:any) => {
                            return <ProductOption key={key}>
                                {JSON.parse(pr.option)[key]} •&nbsp;
                            </ProductOption>
                        })
                    }
                </div>

            </div>

        </div>
    )
}