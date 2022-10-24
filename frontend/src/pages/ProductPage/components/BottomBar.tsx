import { BottomBoxAtom, BottomBoxBuy, BottomBoxLikeIcon, BottomBoxLikeText, BottomBoxShoppingCart } from "../atoms/BottomBar";
import itemLikeOffIcon from "../../../assets/images/like-off@3x.png";
import itemLikeOnIcon from "../../../assets/images/btn-heart-on@3x.png";
import { storeLike} from "../../../reducers/ProductReducer";

import React from "react";

export const BottomBarComp = () => {
    const changeHeartIcon = (event: React.MouseEvent) => {
        !storeLike.getState() ? storeLike.dispatch({ type: 'CHANGETRUE' }) : storeLike.dispatch({ type: 'CHANGEFALSE' });
    }

    return (
        <div>
            <div style={{height: "100px"}}></div>
            <BottomBoxAtom style={{maxWidth: "625px", }}>
                <div style={{marginLeft:"16px", display:"flex", alignItems:"center", flexDirection: "column"}}>
                    <BottomBoxLikeIcon onClick={changeHeartIcon} src={storeLike.getState() ? itemLikeOnIcon : itemLikeOffIcon} />
                    <BottomBoxLikeText> 20 </BottomBoxLikeText>
                </div>

                <BottomBoxShoppingCart> 장바구니 </BottomBoxShoppingCart>
                <BottomBoxBuy style={{marginRight: "16px"}}> 구매하기 </BottomBoxBuy>
            </BottomBoxAtom>
        </div>
            
    );
}