import { OrderProductDataType } from "../../../reducers/ProductReducer"
import { ProductImage, ProductName, ProductOption, ProductPrice, StoreName } from "../atoms/orderDetailProduct"
import { OrderParam } from "../OrderDetailPage"

export const OrderDetailProductComp = ({order}:OrderParam) =>{
    return (
        <div>
            {
                order.products!.map((pr) => {
                    return (
                        <OrderDetailProductItemComp pr={pr}/>
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