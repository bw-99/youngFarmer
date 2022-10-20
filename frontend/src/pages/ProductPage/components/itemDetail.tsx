import React,{ useState } from "react";
import { IndexSelectedText, IndexNotSelectedText, IndexSelectedLine, IndexNotSelectedLine, ImageBox } from "../atoms/itemDetail";

import productExOne from "../../../assets/images/product-ex1@3x.png";
import productExTwo from "../../../assets/images/product-ex2@3x.png";
import productExThree from "../../../assets/images/product-ex3@3x.png";

export const ItemDetailComp = () => {
    const [index, setIndex] = useState(0);

    return(
        <div style={{margin: "0 16px", padding: "0 0 20px 0"}}>
            <div style={{display: "flex", marginBottom: "22px"}}>
                <div onClick={()=>{setIndex(0);}} style={{flex:1}}>
                    {
                        index == 0? 
                        <>
                            <IndexSelectedText style={{padding:"16px 0"}}> 상품정보 </IndexSelectedText>
                            <IndexSelectedLine />
                        </>
                        :
                        <>
                            <IndexNotSelectedText style={{padding:"16px 0"}}> 상품정보 </IndexNotSelectedText>
                            <IndexNotSelectedLine />
                        </>
                    }
                    
                </div>

                <div style={{flex:1}}>
                    <IndexNotSelectedText style={{padding:"16px 0"}}> 리뷰 25 </IndexNotSelectedText>
                    <IndexNotSelectedLine />
                </div>

                <div style={{flex:1}}>
                    <IndexNotSelectedText style={{flex:1, padding:"16px 0"}}> 상품문의 </IndexNotSelectedText>
                    <IndexNotSelectedLine />
                </div>
            </div>
            <ImageBox style={{maxWidth: "625px", }} src={productExOne} />
            <ImageBox style={{maxWidth: "625px", }} src={productExTwo} />
            <ImageBox style={{maxWidth: "625px", }} src={productExThree} />
        </div>
    );
}