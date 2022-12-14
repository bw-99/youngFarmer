import { BottomBoxAtom, BottomBoxBuy, BottomBoxLikeIcon, BottomBoxLikeText, BottomBoxShoppingCart, } from "../atoms/BottomBar";
import itemLikeOffIcon from "../../../assets/images/like-off@3x.webp";
import itemLikeOnIcon from "../../../assets/images/btn-heart-on@3x.webp";

import React, {useEffect, useState }  from "react";
import {useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../reducers";
import { LikeData } from "../../../reducers/LikeReducer";
import { likeAction, likeCancelAction } from "../../LikePage/LikeAction";
import { closeModalAction, openModalAction } from "../PurchaseAction"
import { cartAddAction } from "../../CartPage/CartAction";
import { setProductOrderTry } from "../../OrderPage/ProductAction";
import { addDoc, collection, deleteDoc, getDocs, query, updateDoc, where } from "firebase/firestore";
import { db, FirebaseAuth } from "../../..";

type bottomBarCompParam = {
    product_id : number
}

// ! Like는 전역 상태 관리로 진행할거라 추후 수정
export const BottomBarComp = ({product_id}:bottomBarCompParam) => {
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

        let canNext: boolean = true;
        Object.keys(modalselector.select_item_info).forEach(key => {
            if (!modalselector.select_item_info[key] && canNext) {
                canNext = false;
            }
        })
        if (canNext) {
            return true;
        } else {
            console.log("추가해세요");
            return false;
        }
    }

    const BottomBoxLikeLikeFunc = () => {
        return isLiked ?
            <BottomBoxLikeIcon src={itemLikeOnIcon} onClick={()=>{dispatch(likeCancelAction(product_id));}}/> 
                :
            <BottomBoxLikeIcon src={itemLikeOffIcon} onClick={()=>{dispatch(likeAction(product_id));}}/>
    }
    
    const setPreOrderInfo =  async (prDataList: any[]) => {
        const preorderRef = collection(db, "preorder");
        console.log(FirebaseAuth.currentUser?.uid);
        const q = query(preorderRef, where("uid", "==", FirebaseAuth.currentUser?.uid));
        const target = await getDocs(q);
        if(target.empty) {
            await addDoc(preorderRef, {
                products: prDataList,
                uid: FirebaseAuth.currentUser?.uid
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
                uid: FirebaseAuth.currentUser?.uid
            });
        }
        
        
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
                    {/* // ! 무게, 개수, 포장 선택 유무에 따라 팝업 창 띄울지 결제/장바구니로 갈지 결정 */}
                    <BottomBoxShoppingCart onClick={(e) => {
                        if(modalselector.open_modal) {
                            dispatch(cartAddAction(product_id, modalselector.select_item_info));
                            dispatch(closeModalAction(modalselector));
                        }
                        else{
                            dispatch(openModalAction(modalselector));
                        }
                    }} style={{marginRight: "9px"}}> 
                    장바구니 </BottomBoxShoppingCart>
                    <BottomBoxBuy onClick={async(e) => {
                        if(modalselector.open_modal) {
                            const canGo = purchaseClickEvent(e);
                            if(canGo){
                                dispatch(closeModalAction(modalselector));
                                const prData = {
                                    count: 1,
                                    product_id: product_id,
                                    option: JSON.stringify(modalselector.select_item_info)
                                };
                                dispatch(setProductOrderTry([prData]));
                                await setPreOrderInfo([prData]);
                                navigate("/order");
                            }
                        }
                        else{
                            dispatch(openModalAction(modalselector));
                        }


                       
                    }} style={{ marginRight: "16px" }}> 구매하기 </BottomBoxBuy>
                </div>
            </BottomBoxAtom>
        </div>
            
    );
}