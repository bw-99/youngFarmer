
import React, {useState} from "react";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../reducers";

import transforimg from "../../../assets/images/icon@3x.png" ;

import {CheckBoxIcon} from "../../LoginPage/atoms/Assignp1"


import {CartP1T1,Border8px,Temp1, Temp2,Spantemp2,Spantemp1,CartProductBox,CartProductBoxBorder,CartProductBoxPart1,CartBtn1,CartProductBoxPart2,CartProductBoxPart2Img,CartProductBoxPart2S1,CartProductBoxPart2S2,CartProductBoxPart2SmallBox,CartProductBoxPart2SmallBoxBtn,CartProductBoxPart3,CartProductBoxPart3Small,CartProductBoxPart3SmallPart1,CartProductBoxPart3SmallPart2,CartProductBoxPart4,CartProductBoxPart5, CartP1I1, CartP1T2, CartBtn2} from "../atom/CartProduct"
import checkIcon from "../../../assets/images/btn-checkbox-1@3x.png";
import checkNotIcon from "../../../assets/images/btn-checkbox-2@3x.png";
import { ProductDataType } from "../../../reducers/ProductReducer";
import { cartCancelAction } from "../CartAction";

type ProductParmas = {
    product: ProductDataType
}

export const CartProductComponent = ({product}:ProductParmas) => {
    const dispatch = useDispatch();
    const [ischecked, setIschecked] = useState(false);
    const [count, setCount] = React.useState<number>(1);

    const BtnTemp = () => {
        
        const inc = () => {
          setCount(count + 1);
        };
        
        const dec = () => {
            // 0으로는 못 내려감
            if(count > 1){
                setCount(count - 1);
            }
        }
       
        return (
          <div style={{display:"flex",width:"90px", height:"34px", backgroundColor:"#efefef" }}>
            <button style={{border:"none",width:"30px"}} onClick={dec}>-</button>
      
            <input style={{
                  fontFamily: "AppleSDGothicNeo",
                  fontSize: "14px",
                  fontWeight: "bold",
                  color: "#272727",
                display:"flex", justifyContent:"center",border:"none", backgroundColor:"#efefef", width:"30px"}} type="number" value={count} />
      
            <button style={{border:"none",width:"30px"}} onClick={inc}>+</button>
          </div>
        )
      }

    const data = {
        owner : "청년농부",
        p_name : "친환경 복숭아 5kg/10kg",
        p_price : "29,000원",
        p_sale : "20%",
        p_sub : "12개입·10kg·선물용 포장",
        p_transport : "3,000원"
    }
    

    return(
        <CartProductBox >
            <Border8px></Border8px>
            <CartProductBoxPart1>
                <CartP1T1> 청년농부 </CartP1T1>
                <div style={{display:"flex"}}>
                    <img style={{width:"16px", height:"16px", marginRight:"4px"}} src={transforimg}/> 
                    <CartP1T2>{product.delivery_charge.toLocaleString("kr")}원</CartP1T2>
                </div>
            </CartProductBoxPart1>
            <CartProductBoxBorder></CartProductBoxBorder>

            <CartProductBoxPart2>
                <CartProductBoxPart2S1>
                    <CartProductBoxPart2Img src={product.photo} />
                </CartProductBoxPart2S1>
                <CartProductBoxPart2S2>
                    <CartProductBoxPart2SmallBox>
                        {product.title}
                    </CartProductBoxPart2SmallBox>
                    <CartProductBoxPart2SmallBox  onClick={() => {
                        setIschecked(!ischecked);
                    }}>
                        <div>
                            {product.price.toLocaleString("kr")}원
                            
                            <Spantemp1>{product.discount}%</Spantemp1>
                        </div>
                        <div>
                            <CheckBoxIcon style={{padding:"0px"}}
                                
                                src={ischecked ? checkIcon : checkNotIcon}
                            />

                        </div>
                        
                        
                    </CartProductBoxPart2SmallBox>
                    <CartProductBoxPart2SmallBox onClick={(e) => {
                    e.stopPropagation();
                    e.preventDefault();
                    }}>
                        <Spantemp2>{data.p_sub}</Spantemp2>
                    </CartProductBoxPart2SmallBox>
                    
                    <BtnTemp></BtnTemp>
                </CartProductBoxPart2S2>
            </CartProductBoxPart2>

                <CartProductBoxBorder> </CartProductBoxBorder>

            <CartProductBoxPart3>
                <CartProductBoxPart3Small>
                    <CartProductBoxPart3SmallPart1>상품금액</CartProductBoxPart3SmallPart1>
                    <CartProductBoxPart3SmallPart2>{(product.price * (1 - product.discount / 100)*count).toLocaleString("kr")}원</CartProductBoxPart3SmallPart2>
                </CartProductBoxPart3Small>

                <CartProductBoxPart3Small>
                    <CartProductBoxPart3SmallPart1>배송비</CartProductBoxPart3SmallPart1>
                    <CartProductBoxPart3SmallPart2>{product.delivery_charge.toLocaleString("kr")}원</CartProductBoxPart3SmallPart2>
                </CartProductBoxPart3Small>
            </CartProductBoxPart3>

            <CartProductBoxPart4>
                <Temp1>총 결제금액</Temp1>
                <Temp2>{((product.price * (1 - product.discount / 100))*count + product.delivery_charge).toLocaleString("kr")}원</Temp2>
                
            </CartProductBoxPart4>        

            <CartProductBoxPart5>
                {/* 리덕스필요 */}
                <CartBtn1 onClick={()=>{
                    dispatch(cartCancelAction(product.product_id));
                }}>삭제하기</CartBtn1>
                <CartBtn2 style={{marginLeft:"9px"}}>바로구매</CartBtn2>
            </CartProductBoxPart5>       
        </CartProductBox>
        
    );
}