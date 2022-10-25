import { BottomBoxAtom, BottomBoxBuy, BottomBoxLikeIcon, BottomBoxLikeText, BottomBoxShoppingCart, } from "../atoms/BottomBar";
import itemLikeOffIcon from "../../../assets/images/like-off@3x.png";
import itemLikeOnIcon from "../../../assets/images/btn-heart-on@3x.png";

import React, {useEffect, useState }  from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../reducers";
import { LikeData } from "../../../reducers/LikeReducer";
import { likeAction, likeCancelAction } from "../../LikePage/LikeAction";

// ! Like는 전역 상태 관리로 진행할거라 추후 수정
export const BottomBarComp = () => {
    // const changeHeartIcon = (event: React.MouseEvent) => {
    //     !storeLike.getState() ? storeLike.dispatch({ type: 'CHANGETRUE' }) : storeLike.dispatch({ type: 'CHANGEFALSE' });
    // }
    const [isLiked, setIsLiked]  = useState(false);
    const product_id = 1;

    const likeselector: LikeData[] = useSelector((state:RootState) =>
        state.LikeReducer.likes
    );  

    useEffect(() => {
        if(likeselector){
            setIsLiked(false);
            likeselector.forEach((val) => {
                if(val.product_id === product_id){
                    setIsLiked(true);
                }
            })
        }

    }, [likeselector])
    
    const dispatch = useDispatch();
    
    const BottomBoxLikeLikeFunc = () => {
        return isLiked ?
            <BottomBoxLikeIcon src={itemLikeOnIcon} onClick={()=>{dispatch(likeCancelAction(product_id));}}/> 
                :
                <BottomBoxLikeIcon src={itemLikeOffIcon} onClick={()=>{dispatch(likeAction(product_id));}}/>
    }

    return (
        <div>
            <div style={{height: "100px"}}></div>
            <BottomBoxAtom style={{maxWidth: "625px", }}>
                <div style={{marginLeft:"16px", display:"flex", alignItems:"center", flexDirection: "column"}}>
                    <BottomBoxLikeLikeFunc />
                    <BottomBoxLikeText> 20 </BottomBoxLikeText>
                </div>
                <div style={{display: "flex"}}>
                    <BottomBoxShoppingCart style={{marginRight: "9px"}}> 장바구니 </BottomBoxShoppingCart>
                    <BottomBoxBuy style={{marginRight: "16px"}}> 구매하기 </BottomBoxBuy>
                </div>
            </BottomBoxAtom>
        </div>
            
    );
}