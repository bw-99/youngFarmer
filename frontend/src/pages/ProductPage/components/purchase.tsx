import {
    PurchaseBoxAtom, PurchaseText, PurchaseDetailBox, PurchaseDetailText,
    SepLine, PurchaseDetailArrow, PurchaseBackGround, BackIconArrow, SelectTitleText,
    NonSelectContentText, SelectContentText, SelectCheckImg,
    SelectCompleteBox, SelectCompleteTitle, SelectCompleteDetailText, SelectCompleteNumberBox, SelectCompleteDetailDot,
    SelectCompleteNumberSign, SelectCompleteNumber,

} from "../atoms/purchase";
import rightArrowIcon from "../../../assets/images/btn-arrow-r-20-px@3x.webp";
import backIcon from "../../../assets/images/btn-back@3x.webp";
import checkIcon from "../../../assets/images/btn-checkbox-1@3x.webp";
import plusIcon from "../../../assets/images/icon-plus@3x.webp";

import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../reducers";
import { likeAction, likeCancelAction } from "../../LikePage/LikeAction";
import { closeModalAction, selectWeight, selectNumberOfItem, selectWannaPave } from "../PurchaseAction"
import { select } from "redux-saga/effects";
import { Color } from "@mui/material";

const ITEM_WEIGHT: string = "item_weight";
const NUMBER_OF_ITEM: string = "number_of_item";
const WANNA_PAVE: string = "wanna_pave";

//필요한 선언
interface SelectCompProps {
    actionType: string;
    setIndexFn: Dispatch<SetStateAction<number>>,
}

interface PurchaseMainSelectCompProps {
    setIndexFn: Dispatch<SetStateAction<number>>,
    setIndexNum: number,
    marginTop: string,
    purchaseText: string,
    purchaseDetailText: string,
    purchaseDetailTextColor: string,
}

interface selectListProps {
    [index: string]: (string | null)[],
    item_weight: (string | null)[],
    number_of_item: (string | null)[], 
    wanna_pave: (string | null)[], 
}

const selectList: selectListProps = {
    item_weight: [null, "3kg", "5kg", "10kg", "20kg" ],
    number_of_item: [null,"12개입", "18개입", "20개입", "24개입",],
    wanna_pave: [null, "안함", "선물용 포장", "단순 포장", "테스트용"],
}

//main 함수
export const PurchaseComp = () => {
    const dispatch = useDispatch();

    const [purchaseIndex, SetIndex] = useState(0);
    const [parentBottomState, ChangeState] = useState("82px");
    const [completeNum, setComplete] = useState(1);

    const modalselector: any = useSelector((state: RootState) =>
        state.PurchaseReducer.purchaseInfo
    );

    useEffect(() => {
        if (purchaseIndex != 0) {
            ChangeState("0px");
        }
        else {
            ChangeState("82px");
        }
    }, [purchaseIndex]);

    return (
        <div style={{ display: "flex", height: "100vh", flexDirection: "column", position: "fixed", bottom: parentBottomState, zIndex: "10000", width: "100vw", maxWidth: "625px", }}>
            <div style={{ zIndex: "0", height: "100vh" }}>
                <PurchaseBackGround onClick={()=> {
                    dispatch(closeModalAction(modalselector));
                }} style={{ maxWidth: "625px" }} />
            </div>
            <div style={{ zIndex: "2", } }>
                {
                    purchaseIndex === 0 ?

                        <div style={{backgroundColor: "white", borderTopLeftRadius: "12px", borderTopRightRadius: "12px", }} >
                            <div style={{ maxWidth: "625px", /*padding: " 32px 16px 0 16px"*/ padding:"0 16px", }}>
                                <div style={{ maxWidth: "625px", display: "flex", alignItems: "center", height: "32px", }}>
                                    {/* <BackIconArrow onClick={(e: React.MouseEvent) => { e.preventDefault(); dispatch(closeModalAction(modalselector)) }} src={backIcon} /> */}
                                </div>
                                <PurchaseBoxAtom style={{ maxWidth: "625px", flexDirection: "column" }}>
                                    <PurchaseMainSelectComp setIndexFn={SetIndex} setIndexNum={1} marginTop={"0px"} purchaseText={"무게 선택"}
                                        purchaseDetailText={modalselector.select_item_info.item_weight ? modalselector.select_item_info.item_weight : "무게를 선택해주세요"}
                                        purchaseDetailTextColor={modalselector.select_item_info.item_weight ? "#272727" : "#b5b5b5" } 
                                    />
                                    <SepLine style={{ marginTop: "24px" }} />

                                    <PurchaseMainSelectComp setIndexFn={SetIndex} setIndexNum={2} marginTop={"24px"} purchaseText={"개수 선택"}
                                        purchaseDetailText={modalselector.select_item_info.number_of_item ? modalselector.select_item_info.number_of_item : "개수를 선택해주세요"}
                                        purchaseDetailTextColor={modalselector.select_item_info.number_of_item ? "#444" : "#b5b5b5"}
                                    />
                                    <SepLine style={{ marginTop: "24px" }} />

                                    <PurchaseMainSelectComp setIndexFn={SetIndex} setIndexNum={3} marginTop={"24px"} purchaseText={"포장 선택"}
                                        purchaseDetailText={modalselector.select_item_info.wanna_pave ? modalselector.select_item_info.wanna_pave : "포장 여부를 선택해주세요"}
                                        purchaseDetailTextColor={modalselector.select_item_info.wanna_pave ? "#444" : "#b5b5b5"}
                                    />
                                </PurchaseBoxAtom>
                            </div>

                            <div>
                                {
                                    modalselector.select_num === 0 ?
                                        <div style={{ padding: "0 16px", marginTop: "24px", /*display: "flex", flexDirection: "column",*/ maxWidth: "625px" , } }>
                                            <SelectCompleteBox style={{maxWidth: "625px"} }>
                                                <div style={{ marginTop: "20px", marginLeft: "16px" }}>
                                                    <SelectCompleteTitle >
                                                        친환경 복숭아 5kg/10kg
                                                    </SelectCompleteTitle>
                                                </div>
                                                <div style={{ marginTop: "8px", display: "flex", alignItems: "center", marginLeft: "16px" }} >
                                                    <SelectCompleteDetailText>
                                                        무게: {modalselector.select_item_info.item_weight}
                                                    </SelectCompleteDetailText>
                                                    <SelectCompleteDetailDot style={{marginLeft: "6px"} }/>

                                                    <SelectCompleteDetailText style={{marginLeft: "6px"} }>
                                                        개수: {modalselector.select_item_info.number_of_item}
                                                    </SelectCompleteDetailText>
                                                    <SelectCompleteDetailDot style={{ marginLeft: "6px" }} />

                                                    <SelectCompleteDetailText style={{ marginLeft: "6px" }}>
                                                        포장: {modalselector.select_item_info.wanna_pave}
                                                    </SelectCompleteDetailText>
                                                </div>
                                                <div style={{ margin: "20px 0 0 16px" }}>
                                                    <SelectCompleteNumberBox style={{display:"flex", alignItems:"center", justifyContent:"space-around"} }>
                                                        {/*<SelectCompleteNumberSign src={plusIcon} />*/}
                                                        <SelectCompleteNumber> - </SelectCompleteNumber>
                                                        <SelectCompleteNumber> 1 </SelectCompleteNumber>
                                                        <SelectCompleteNumber> + </SelectCompleteNumber>
                                                        {/*<SelectCompleteNumberSign src={plusIcon} />*/}
                                                    </SelectCompleteNumberBox>
                                                </div>  
                                            </SelectCompleteBox>
                                        </div>
                                        :
                                        null
                                }
                            </div>

                            <div style={{ zIndex: "1", paddingTop: "23px", backgroundColor: "white", }} >
                                <SepLine />
                            </div>
                            
                        </div>
                        :
                    purchaseIndex === 1 ?
                        <SelectComp actionType={ITEM_WEIGHT} setIndexFn={SetIndex} />

                    :
                    purchaseIndex === 2 ?
                        <SelectComp actionType={NUMBER_OF_ITEM}  setIndexFn={SetIndex} />
                    :
                        <SelectComp actionType={WANNA_PAVE} setIndexFn={SetIndex} />
            }
            </div>
        </div>
    );
}

//메인 함수를 위한 component
const PurchaseMainSelectComp = (props: PurchaseMainSelectCompProps) => {
    return (
        <div>
            <PurchaseText style={{ marginTop: props.marginTop }}>
                {props.purchaseText}
            </PurchaseText>
            <PurchaseDetailBox onClick={() => { props.setIndexFn(props.setIndexNum); }} style={{ display: "flex", alignItems: "center", maxWidth: "625px", justifyContent: "space-between" }}>
                <PurchaseDetailText style={{ marginLeft: "16px", color: props.purchaseDetailTextColor }}>
                    {props.purchaseDetailText}
                </PurchaseDetailText>
                <PurchaseDetailArrow style={{ marginRight: "12px" }} src={rightArrowIcon} />
            </PurchaseDetailBox>
        </div>
    );
}

const SelectComp = (props: SelectCompProps) => {
    const [selectItem, setSelectItem] = useState(-1);

    const itemSelector = useSelector((state: RootState) =>
        state.PurchaseReducer.purchaseInfo
    )

    const dispatch = useDispatch();

    useEffect(() => {
        if (itemSelector.select_item_info[props.actionType]) {
            for (let i: number = 1; i < 5; i++) {
                
                if (itemSelector.select_item_info[props.actionType] === selectList[props.actionType][i]) {
                    setSelectItem(i);
                    break;
                }
            }
        }
    }, [])

    
    useEffect(() => {
        if (selectItem != -1) {
            switch (props.actionType) {
                case ITEM_WEIGHT:
                    dispatch(selectWeight(itemSelector, selectList[props.actionType][selectItem]));
                    break;
                case NUMBER_OF_ITEM:
                    dispatch(selectNumberOfItem(itemSelector, selectList[props.actionType][selectItem]));
                    break;
                case WANNA_PAVE:
                    dispatch(selectWannaPave(itemSelector, selectList[props.actionType][selectItem]));
            }
        }
    }, [selectItem])

    return (
        <div style={{ display: "flex", flexDirection: "column", backgroundColor: "white", top: "82px", maxWidth: "625px", borderTopLeftRadius: "12px", borderTopRightRadius: "12px" }} >
            <div style={{ display: "flex", height: "56px", width: "100vw", maxWidth: "625px", marginLeft: "16px", alignItems: "center" }}>
                <BackIconArrow onClick={(e: React.MouseEvent) => { e.preventDefault(); props.setIndexFn(0); }} src={backIcon} />
                <SelectTitleText style={{ marginLeft: "calc(50% - 40px - 34px)" }}>
                    무게 선택
                </SelectTitleText>
            </div>
            <SepLine />

            <div onClick={() => { if (selectItem === 1) { setSelectItem(0); } else { setSelectItem(1); } }}
                style={{ display: "flex", height: "64px", width: "100vw", maxWidth: "625px", marginLeft: "16px", alignItems: "center",justifyContent:"space-between" }}>
                {
                    selectItem === 1 ?
                        <>
                            <SelectContentText> {selectList[props.actionType][1]} </SelectContentText>
                        <SelectCheckImg src={checkIcon} />
                        </>
                        :
                        <NonSelectContentText> {selectList[props.actionType][1]} </NonSelectContentText>
                }
            </div>
            <SepLine />

            <div onClick={() => { if (selectItem === 2) { setSelectItem(0); } else { setSelectItem(2); } }}
                style={{ display: "flex", height: "64px", width: "100vw", maxWidth: "625px", marginLeft: "16px", alignItems: "center", justifyContent: "space-between" }}>
                {
                    selectItem === 2 ?
                        <>
                            <SelectContentText> {selectList[props.actionType][2]} </SelectContentText>
                            <SelectCheckImg src={checkIcon} />
                        </>
                        :
                        <NonSelectContentText> {selectList[props.actionType][2]} </NonSelectContentText>
                }
            </div>
            <SepLine />

            <div onClick={() => { if (selectItem === 3) { setSelectItem(0); } else { setSelectItem(3); } }}
                style={{ display: "flex", height: "64px", width: "100vw", maxWidth: "625px", marginLeft: "16px", alignItems: "center", justifyContent: "space-between" }}>
                {
                    selectItem === 3 ?
                        <>
                            <SelectContentText> {selectList[props.actionType][3]} </SelectContentText>
                            <SelectCheckImg src={checkIcon} />
                        </>
                        :
                        <NonSelectContentText> {selectList[props.actionType][3]} </NonSelectContentText>
                }
            </div>
            <SepLine />

            <div onClick={() => { if (selectItem === 4) { setSelectItem(0); } else { setSelectItem(4); } }}
                style={{ display: "flex", height: "64px", width: "100vw", maxWidth: "625px", marginLeft: "16px", alignItems: "center", justifyContent: "space-between" }}>
                {
                    selectItem === 4 ?
                        <>
                            <SelectContentText> {selectList[props.actionType][4]} </SelectContentText>
                            <SelectCheckImg src={checkIcon} />
                        </>
                        :
                        <NonSelectContentText> {selectList[props.actionType][4]} </NonSelectContentText>
                }
            </div>
        </div>
    );
}
