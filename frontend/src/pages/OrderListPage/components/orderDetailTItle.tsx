import { OrderParam } from "../OrderDetailPage"
import { MerchantText, OrderDate, SepLine } from './../atoms/orderDetailTItle';

export const OrderDetailTopComp = ({order}:OrderParam) => {
    const date = new Date(order.time_created!.seconds * 1000);
    return(
        <div style={{marginTop:"76px"}}>
            <OrderDate style={{margin:"2px 16px"}}> {date.toISOString().split("T")[0]} </OrderDate>
            <MerchantText style={{margin:"2px 16px"}}> {order.merchant_uid} </MerchantText>
            <SepLine style={{marginTop: "30px"}}/>
        </div>
    )
}