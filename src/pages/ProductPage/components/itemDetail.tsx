import { useState } from "react";
import { IndexSelectedText, IndexNotSelectedText, IndexSelectedLine, IndexNotSelectedLine } from "../atoms/itemDetail";

export const ItemDetailComp = () => {
    const [index, setIndex] = useState(0);

    return(
        <div style={{margin: "0 16px", padding: "0 0 20px 0", display: "flex"}}>
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
    );
}