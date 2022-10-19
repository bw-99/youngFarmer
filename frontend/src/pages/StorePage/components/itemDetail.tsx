import React,{ useState } from "react";
import { IndexSelectedText, IndexNotSelectedText, IndexSelectedLine, IndexNotSelectedLine} from "../atoms/itemDetail";

import productExOne from "../../../assets/images/product-ex1@3x.png";
import productExTwo from "../../../assets/images/product-ex2@3x.png";
import productExThree from "../../../assets/images/product-ex3@3x.png";


export const ItemDetailComp = () => {
    const [index, setIndex] = useState(0);

    function clickHandler(i: number){
        return (event: React.MouseEvent) => {
            setIndex(i);
            event.preventDefault();
        }     
    }

    return(
        <div style={{marginLeft: "16px", padding: "0 0 20px 0"}}>
            <div style={{ display: "flex", marginBottom: "22px" }}>
                <button onClick={clickHandler(0)} style={{ flex: 1 }}>
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
                    
                </button>

                <div style={{flex:1}}>
                    <IndexNotSelectedText style={{padding:"16px 0"}}> 리뷰 25 </IndexNotSelectedText>
                    <IndexNotSelectedLine />
                </div>

                <div style={{flex:1}}>
                    <IndexNotSelectedText style={{flex:1, padding:"16px 0"}}> 상품문의 </IndexNotSelectedText>
                    <IndexNotSelectedLine />
                </div>
            </div>
        </div>
    );
}
