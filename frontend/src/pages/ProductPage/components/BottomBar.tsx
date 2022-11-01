import { BottomBoxAtom, BottomBoxBuy, BottomBoxLikeIcon, BottomBoxLikeText, BottomBoxShoppingCart, } from "../atoms/BottomBar";
import itemLikeOffIcon from "../../../assets/images/like-off@3x.png";
import itemLikeOnIcon from "../../../assets/images/btn-heart-on@3x.png";

import React, {useEffect, useState }  from "react";
import {useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../reducers";
import { LikeData } from "../../../reducers/LikeReducer";
import { likeAction, likeCancelAction } from "../../LikePage/LikeAction";
import { openModalAction } from "../PurchaseAction"

// ! Like는 전역 상태 관리로 진행할거라 추후 수정
export const BottomBarComp = () => {
    // const changeHeartIcon = (event: React.MouseEvent) => {
    //     !storeLike.getState() ? storeLike.dispatch({ type: 'CHANGETRUE' }) : storeLike.dispatch({ type: 'CHANGEFALSE' });
    // }
    interface BottomBarTopUi {
        borderTopLeftRad: string,
        borderTopRightRad: string,
    }

    const barTopUiOpen: BottomBarTopUi = {
        borderTopLeftRad: "0px",
        borderTopRightRad: "0px",
    }

    const barTopUiClose: BottomBarTopUi = {
        borderTopLeftRad: "12px",
        borderTopRightRad: "12px",
    }

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [isLiked, setIsLiked]  = useState(false);
    const [barTopUI, setbarTopUI] = useState(barTopUiClose);
    const product_id = 1;

    const likeselector: LikeData[] = useSelector((state:RootState) =>
        state.LikeReducer.likes
    );  

    const modalselector: any = useSelector((state: RootState) =>
        state.PurchaseReducer.purchaseInfo
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

    useEffect(() => {
        if (modalselector.open_modal) {
            //모달 열려있을 때 바텀바 UI
            setbarTopUI(barTopUiOpen);
        }
        else {
            //닫혀있을 때
            setbarTopUI(barTopUiClose);
        }
    }, [modalselector.open_modal]);

    const purchaseClickEvent = (e: React.MouseEvent) => {
        e.preventDefault();
        if (modalselector.open_modal) {
            //when modal open
            navigate(`/purchase`);
        }
        else {
            //when modal close
            dispatch(openModalAction(modalselector));
        }
    }

    const BottomBoxLikeLikeFunc = () => {
        return isLiked ?
            <BottomBoxLikeIcon src={itemLikeOnIcon} onClick={()=>{dispatch(likeCancelAction(product_id));}}/> 
                :
            <BottomBoxLikeIcon src={itemLikeOffIcon} onClick={()=>{dispatch(likeAction(product_id));}}/>
    }

    return (
        <div>
            <div style={{height: "100px"}}></div>
            <BottomBoxAtom style={{ maxWidth: "625px", borderTopLeftRadius: barTopUI.borderTopLeftRad, borderTopRightRadius: barTopUI.borderTopRightRad, }}>
                <div style={{marginLeft:"16px", display:"flex", alignItems:"center", flexDirection: "column"}}>
                    <BottomBoxLikeLikeFunc />
                    <BottomBoxLikeText> 20 </BottomBoxLikeText>
                </div>
                <div style={{display: "flex"}}>
                    <BottomBoxShoppingCart style={{marginRight: "9px"}}> 장바구니 </BottomBoxShoppingCart>
                    <BottomBoxBuy onClick={purchaseClickEvent} style={{ marginRight: "16px" }}> 구매하기 </BottomBoxBuy>
                </div>
            </BottomBoxAtom>
        </div>
            
    );
}