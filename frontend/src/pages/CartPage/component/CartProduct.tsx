
import React, {useState} from "react";

import { useSelector } from "react-redux";
import { RootState } from "../../../reducers";

import transforimg from "../../../assets/images/icon@3x.png" ;

import {CheckBoxIcon} from "../../LoginPage/atoms/Assignp1"


import {CartP1T1,Border8px,Temp1, Temp2,Spantemp2,Spantemp1,CartProductBox,CartProductBoxBorder,CartProductBoxPart1,CartBtn1,CartProductBoxPart2,CartProductBoxPart2Img,CartProductBoxPart2S1,CartProductBoxPart2S2,CartProductBoxPart2SmallBox,CartProductBoxPart2SmallBoxBtn,CartProductBoxPart3,CartProductBoxPart3Small,CartProductBoxPart3SmallPart1,CartProductBoxPart3SmallPart2,CartProductBoxPart4,CartProductBoxPart5, CartP1I1, CartP1T2} from "../atom/CartProduct"
import checkIcon from "../../../assets/images/btn-checkbox-1@3x.png";
import checkNotIcon from "../../../assets/images/btn-checkbox-2@3x.png";

export const CartProductComponent = () => {

    const [ischecked, setIschecked] = useState(false);

    const BtnTemp = () => {
        const [count, setCount] = React.useState<number>(0);
        
        const inc = () => {
          setCount(count + 1);
        };
        
        const dec = () => {
          setCount(count - 1);
        }
       
        return (
          <div style={{display:"flex",width:"90px", height:"34px", backgroundColor:"#efefef" }}>
            <button style={{border:"none",width:"30px"}} onClick={dec}>-</button>
      
            <input style={{display:"flex", justifyContent:"center",border:"none", backgroundColor:"#efefef", width:"30px"}} type="number" value={count} />
      
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
        <CartProductBox>
            <Border8px></Border8px>
            <CartProductBoxPart1>
                <CartP1T1>{data.owner}</CartP1T1>
                <div style={{display:"flex"}}>
                    <img style={{width:"16px", height:"16px"}} src={transforimg}/> 
                    <CartP1T2>{data.p_transport}</CartP1T2>
                </div>
            </CartProductBoxPart1>
            <CartProductBoxBorder></CartProductBoxBorder>

            <CartProductBoxPart2>
                <CartProductBoxPart2S1>
                    <CartProductBoxPart2Img>
                        img temp
                    </CartProductBoxPart2Img>
                </CartProductBoxPart2S1>
                <CartProductBoxPart2S2>
                    <CartProductBoxPart2SmallBox>
                        {data.p_name}
                    </CartProductBoxPart2SmallBox>
                    <CartProductBoxPart2SmallBox>
                        <div>
                            {data.p_price}
                            
                            <Spantemp1>{data.p_sale}</Spantemp1>
                        </div>
                        <div>
                            <CheckBoxIcon style={{padding:"0px"}}
                                onClick={() => { setIschecked(!ischecked);}} 
                                src={ischecked ? checkIcon : checkNotIcon}
                            />

                        </div>
                        
                        
                    </CartProductBoxPart2SmallBox>
                    <CartProductBoxPart2SmallBox>
                        <Spantemp2>{data.p_sub}</Spantemp2>
                    </CartProductBoxPart2SmallBox>
                    
                    <BtnTemp></BtnTemp>
                </CartProductBoxPart2S2>
            </CartProductBoxPart2>

                <CartProductBoxBorder> </CartProductBoxBorder>

            <CartProductBoxPart3>
                <CartProductBoxPart3Small>
                    <CartProductBoxPart3SmallPart1>상품금액</CartProductBoxPart3SmallPart1>
                    <CartProductBoxPart3SmallPart2>34,000원</CartProductBoxPart3SmallPart2>
                </CartProductBoxPart3Small>

                <CartProductBoxPart3Small>
                    <CartProductBoxPart3SmallPart1>배송비</CartProductBoxPart3SmallPart1>
                    <CartProductBoxPart3SmallPart2>3,000원</CartProductBoxPart3SmallPart2>
                </CartProductBoxPart3Small>
            </CartProductBoxPart3>

            <CartProductBoxPart4>
                <Temp1>총 결제금액</Temp1>
                <Temp2>3,3000원</Temp2>
                
            </CartProductBoxPart4>        

            <CartProductBoxPart5>
                {/* 리덕스필요 */}
                <CartBtn1>삭제하기</CartBtn1>
                <CartBtn1>바로구매</CartBtn1>
            </CartProductBoxPart5>       

    

        </CartProductBox>
        
    );
}