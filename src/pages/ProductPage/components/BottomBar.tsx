import { BottomBoxAtom, BottomBoxBuy, BottomBoxLikeIcon, BottomBoxLikeText, BottomBoxShoppingCart } from "../atoms/BottomBar";
import itemLikeIcon from "../../../assets/images/like-off@3x.png";



export const BottomBarComp = () => {
    return(
        <div>
            <div style={{height: "100px"}}></div>
            <BottomBoxAtom>
                <div style={{marginLeft:"16px", display:"flex", alignItems:"center", flexDirection: "column"}}>
                    <BottomBoxLikeIcon src={itemLikeIcon} />
                    <BottomBoxLikeText> 20 </BottomBoxLikeText>
                </div>

                <BottomBoxShoppingCart> 장바구니 </BottomBoxShoppingCart>
                <BottomBoxBuy style={{marginRight: "16px"}}> 구매하기 </BottomBoxBuy>
            </BottomBoxAtom>
        </div>
            
    );
}