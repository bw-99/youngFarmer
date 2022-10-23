import React,{ useState } from "react";
import { IndexSelectedText, IndexNotSelectedText, IndexSelectedLine, IndexNotSelectedLine, ImageBox } from "../atoms/itemDetail";

import productExOne from "../../../assets/images/product-ex1@3x.png";
import productExTwo from "../../../assets/images/product-ex2@3x.png";
import productExThree from "../../../assets/images/product-ex3@3x.png";
import { useSelector } from "react-redux";
import { RootState } from "../../../reducers";
import { ProductDataType } from "../../../reducers/ProductReducer";

export const ItemDetailComp = () => {
    const [index, setIndex] = useState(0);

    const selector: ProductDataType = useSelector((state:RootState) =>
        state.ProductInfoReducer!.productInfo
    );  


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
                    <IndexNotSelectedText style={{padding:"16px 0"}}> 리뷰 {selector.reviewDataList.length} </IndexNotSelectedText>
                    <IndexNotSelectedLine />
                </div>

                <div style={{flex:1}}>
                    <IndexNotSelectedText style={{flex:1, padding:"16px 0"}}> 상품문의 </IndexNotSelectedText>
                    <IndexNotSelectedLine />
                </div>
            </div>
            {
                selector.photoDataList.photos.map((photo) => {
                    return(
                        <ImageBox style={{maxWidth: "625px", }} src={photo} key={photo} />
                    );
                })
            }
           
        </div>
    );
}