import { Icon, ShoppingItemAtom, ShoppingItemRightArrow, ShoppingItemText, ShoppingSepLine, ShoppingText } from "../atoms/shopping";
import questionIcon from "../../../assets/images/icon-question@3x.png";
import btnRightIcon from "../../../assets/images/btn-arrow-r-14-px@3x.png";
import plusIcon from "../../../assets/images/icon-plus@3x.png";

export const ShoppingComp = () => {
    return(
        <div style={{margin: "30px 16px 0 16px"}}>
            <ShoppingText style={{marginBottom: "10px"}}> 쇼핑 </ShoppingText>
            {ShoppingItemComp(questionIcon, "문의 내역")}
            {ShoppingItemComp(plusIcon, "최근 본 상품")}
            <ShoppingSepLine  style={{marginTop:"20px"}}/>
        </div>
    );
}

export const ShoppingItemComp = (image:any, text: string) => {
    return(
        <ShoppingItemAtom>
            <div style={{display:"flex", alignItems:"center"}}>
                <Icon src={image}/>
                <ShoppingItemText style={{marginLeft: "10px"}}> {text} </ShoppingItemText>
            </div>
            <ShoppingItemRightArrow src={btnRightIcon}/>
        </ShoppingItemAtom>
    );
}