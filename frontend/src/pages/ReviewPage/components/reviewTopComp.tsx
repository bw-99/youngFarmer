import { ProductWithOrderType } from "../../../reducers/ProductReducer"
import { ProductImage, ProductSubTitle, ProductTitle } from "../atoms/reviewTopComp"

type PrOrderParam = {
    product: ProductWithOrderType
}

export const ReviewTopComp = ({product}:PrOrderParam) => {
    return(
        <div style={{
            marginTop: "80px",
            display: "flex", flexDirection: "column", alignItems:"center"}}>
            <ProductImage src={product.product.photo}/>
            <ProductTitle style={{marginTop: "20px"}}> {product.product.title} </ProductTitle>

            <div style={{display: "flex", marginTop: "8px"}}>
            {
                Object.keys(JSON.parse(product.order.option)).map((key:any) => {
                    return <ProductSubTitle key={key}>
                        {JSON.parse(product.order.option)[key]} •&nbsp;
                    </ProductSubTitle>
                })
            }
            </div>
        </div>
    )
}