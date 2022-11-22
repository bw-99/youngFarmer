
import React, {useEffect, useState} from "react";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../reducers";

import transforimg from "../../../assets/images/icon@3x.png" ;

import {CheckBoxIcon} from "../../LoginPage/atoms/Assignp1"


import {CartP1T1,Border8px,Temp1, Temp2,Spantemp2,Spantemp1,CartProductBox,CartProductBoxBorder,CartProductBoxPart1,CartBtn1,CartProductBoxPart2,CartProductBoxPart2Img,CartProductBoxPart2S1,CartProductBoxPart2S2,CartProductBoxPart2SmallBox,CartProductBoxPart2SmallBoxBtn,CartProductBoxPart3,CartProductBoxPart3Small,CartProductBoxPart3SmallPart1,CartProductBoxPart3SmallPart2,CartProductBoxPart4,CartProductBoxPart5, CartP1I1, CartP1T2, CartBtn2} from "../atoms/CartProduct"
import checkIcon from "../../../assets/images/btn-checkbox-1@3x.png";
import checkNotIcon from "../../../assets/images/btn-checkbox-2@3x.png";
import { CartProductDataType, ProductDataType } from "../../../reducers/ProductReducer";
import { cartCancelAction } from "../CartAction";
import { OrderDataType } from "../../../reducers/OrderReducer";
import { useNavigate } from "react-router-dom";
import { addProductOrderTry, cancelProductOrderTry, setProductOrderTry } from "../../OrderPage/ProductAction";
import { addDoc, collection, deleteDoc, getDocs, query, Timestamp, updateDoc, where } from "firebase/firestore";
import { db, FirebaseAuth } from "../../..";

type CartProductCheckParmas = {
    cartProduct: CartProductDataType
    allCheck: boolean,
    order: boolean
}

export const CartProductComponent = ({cartProduct, allCheck, order}:CartProductCheckParmas) => {
    const dispatch = useDispatch();
    const [ischecked, setIschecked] = useState(false);
    const [count, setCount] = React.useState<number>(1);
    const navigate = useNavigate();

    useEffect(() => {
        setIschecked(allCheck);
    }, [allCheck])

   
    const handleDirectOrder = async() => {
        const data = [{
            count: count,
            product_id: cartProduct.product.product_id,
            option: cartProduct.option
        }];
        dispatch(setProductOrderTry(data));
        await setPreOrderInfo(data);
        navigate("/order");
    }

    useEffect(() => {
        if(ischecked) {
            console.log("add order");
            
            dispatch(addProductOrderTry({
                count: count,
                product_id: cartProduct.product.product_id,
                option: cartProduct.option
            }));
        }
        else{
            dispatch(cancelProductOrderTry({
                count: count,
                product_id: cartProduct.product.product_id,
                option: cartProduct.option
            }));
        }
    }, [ischecked])
    


    return(
        <CartProductBox >
            <Border8px></Border8px>
            <CartProductBoxPart1>
                <CartP1T1> 청년농부 </CartP1T1>
                <div style={{display:"flex"}}>
                    <img style={{width:"16px", height:"16px", marginRight:"4px"}} src={transforimg}/> 
                    <CartP1T2>{cartProduct.product.delivery_charge.toLocaleString("kr")}원</CartP1T2>
                </div>
            </CartProductBoxPart1>
            <CartProductBoxBorder></CartProductBoxBorder>

            <CartProductBoxPart2>
                <div style={{display: "flex", alignItems: "flex-start"}}>
                    <CartProductBoxPart2S1>
                        <CartProductBoxPart2Img src={cartProduct.product.photo} />
                    </CartProductBoxPart2S1>
                    <CartProductBoxPart2S2 style={{marginLeft: "16px"}}>
                        <CartProductBoxPart2SmallBox>
                            {cartProduct.product.title}
                        </CartProductBoxPart2SmallBox>
                        <CartProductBoxPart2SmallBox  
                        style={{marginTop: "4px"}}
                        >
                            <div style={{
                                  fontFamily: "AppleSDGothicNeo",
                                  fontSize: "16px",
                                  fontWeight: "800",
                                  color: "#272727",
                            }}>
                                {cartProduct.product.price.toLocaleString("kr")}원
                                
                                <Spantemp1>{cartProduct.product.discount}%</Spantemp1>
                            </div>

                            
                            
                        </CartProductBoxPart2SmallBox>
                        <CartProductBoxPart2SmallBox 
                        style={{marginTop: "8px"}}
                        onClick={(e) => {
                        e.stopPropagation();
                        e.preventDefault();
                        }}>
                            {
                                cartProduct.option?
                                <div style={{display: "flex", justifyContent: "flex-start"}}>
                                    {
                                        Object.keys(JSON.parse(cartProduct.option)).map((key:any) => {
                                            return <Spantemp2 key={key}>
                                                {JSON.parse(cartProduct.option)[key]} •&nbsp;
                                            </Spantemp2>
                                        })
                                    }
                                </div>
                                :
                                <></>
                            }
                            
                        </CartProductBoxPart2SmallBox>

                        <div style={{marginTop: "10px", marginBottom:"16px"}}>
                            <BtnTemp count={count} setCount={setCount} />
                        </div>
                    </CartProductBoxPart2S2>
                </div>
                

                <div style={{marginTop: "30px"}}>
                    <CheckBoxIcon style={{padding:"0px"}}
                        onClick={() => {
                            setIschecked(!ischecked);
                        }}
                        src={ischecked ? checkIcon : checkNotIcon}
                    />

                </div>

            </CartProductBoxPart2>

            <CartProductBoxBorder> </CartProductBoxBorder>

            <CartProductBoxPart3>
                <CartProductBoxPart3Small>
                    <CartProductBoxPart3SmallPart1>상품금액</CartProductBoxPart3SmallPart1>
                    <CartProductBoxPart3SmallPart2>{(cartProduct.product.price * (1 - cartProduct.product.discount / 100)*count).toLocaleString("kr")}원</CartProductBoxPart3SmallPart2>
                </CartProductBoxPart3Small>

                <CartProductBoxPart3Small style={{marginTop: "14px"}}>
                    <CartProductBoxPart3SmallPart1>배송비</CartProductBoxPart3SmallPart1>
                    <CartProductBoxPart3SmallPart2>{cartProduct.product.delivery_charge.toLocaleString("kr")}원</CartProductBoxPart3SmallPart2>
                </CartProductBoxPart3Small>
            </CartProductBoxPart3>

            <CartProductBoxBorder> </CartProductBoxBorder>


            <CartProductBoxPart4>
                <Temp1>총 결제금액</Temp1>
                <Temp2>{((cartProduct.product.price * (1 - cartProduct.product.discount / 100))*count + cartProduct.product.delivery_charge).toLocaleString("kr")}원</Temp2>
                
            </CartProductBoxPart4>        

            <CartProductBoxPart5>
                {/* 리덕스필요 */}
                <CartBtn1 onClick={()=>{
                    dispatch(cartCancelAction(cartProduct.product.product_id));
                }}>삭제하기</CartBtn1>
                <CartBtn2 
                onClick={() => {
                    handleDirectOrder();
                }}
                style={{marginLeft:"9px"}}>바로구매</CartBtn2>
            </CartProductBoxPart5>       
        </CartProductBox>
        
    );
}

export const setPreOrderInfo =  async (prDataList: any[]) => {
    const preorderRef = collection(db, "preorder");
    console.log(FirebaseAuth.currentUser?.uid);
    const q = query(preorderRef, where("uid", "==", FirebaseAuth.currentUser?.uid));
    const target = await getDocs(q);
    if(target.empty) {
        await addDoc(preorderRef, {
            products: prDataList,
            uid: FirebaseAuth.currentUser?.uid,
            time_created: Timestamp.now()
        });
    }
    else {
        if(target.docs.length > 1) {
            for (let index = 1; index < target.docs.length; index++) {
                const documnet = target.docs[index];
                await deleteDoc(documnet.ref);
            }
        }
        await updateDoc(target.docs[0].ref, {
            products: prDataList,
            uid: FirebaseAuth.currentUser?.uid,
            time_created: Timestamp.now()
        });
    }
    
    
}



type counterParmas = {
    count: number
    setCount: any
}


const BtnTemp = ({count, setCount}:counterParmas) => {
        
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
      <div style={{borderRadius:"17px", display:"flex",width:"90px", height:"34px", backgroundColor:"#efefef" }}>
        <button style={{borderRadius:"17px",border:"none",width:"30px"}} onClick={dec}>-</button>
  
        <div style={{
              fontFamily: "AppleSDGothicNeo",
              fontSize: "14px",
              fontWeight: "bold",
              color: "#272727",
              textAlign:"center",
              margin: 0,
                display:"flex", alignItems:"center", justifyContent:"center",border:"none", backgroundColor:"#efefef", width:"30px"}}>
                {count}
            </div>
  
        <button style={{borderRadius:"17px",border:"none",width:"30px"}} onClick={inc}>+</button>
      </div>
    )
  }