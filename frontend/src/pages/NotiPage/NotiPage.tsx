import React, { useEffect, useState } from "react";
import { useParams, Link, useLocation, useNavigate } from 'react-router-dom';
import {AlaramContentDateBox,AlarmCategoryBox,AlarmCategoryBtn,AlarmContentBox,AlarmContentBoxSmall,AlarmContentCategoryBox,AlarmContentsContainer,AlarmmContentTitleBox} from "../MyPage/atoms/alarm";
import {AlramContentComp} from "../MyPage/components/alarmContent"
import { AppFrame } from "../../App";
import { AppBarComponentOnlyBack } from "../../common/AppBar/AppBar";



function Notipage () {

    const params = useParams();
    const [isAll, setIsAll] = useState(false);
    const [isEvent, setIsEvent] = useState(true);
    const [isCommu, setIsCommu] = useState(true);
    const [isOrder, setIsOrder] = useState(true);
    
    useEffect(
        () => {
            if(isAll) {
                setIsEvent(false);
                setIsCommu(false);
                setIsOrder(false);
            }
        },
        [isAll]
    )
    useEffect(
        () => {
            if(isEvent) {
                setIsAll(false);
                setIsEvent(isEvent);
                setIsCommu(false);
                setIsOrder(false);
            }
        },
        [isEvent]
    )

    useEffect(
        () => {
            if(isCommu) {
                setIsAll(false);
                setIsEvent(false);
                setIsCommu(isCommu);
                setIsOrder(false);
            }
        },
        [isCommu]
    )
    useEffect(
        () => {
            if(isOrder) {
                setIsAll(false);
                setIsEvent(false);
                setIsCommu(false);
                setIsOrder(isOrder);
            }
        },
        [isOrder]
    )




    return (
        <AppFrame>
            <AppBarComponentOnlyBack title="알림"/>
            <AlarmContentsContainer>
                <AlarmCategoryBox>
                    <AlarmCategoryBtn onClick={() => { setIsAll(!isAll);}} 
                     style={isAll? {backgroundColor: "#fff",
                             border: "solid 1px red",
                             color : "red",
                             padding:"9px 15px"} 
                             :
                             {backgroundColor: "#f5f5f5",
                             border: "none",
                             color : "black"}
                    }>
                        전체</AlarmCategoryBtn>

                    <AlarmCategoryBtn onClick={() => { setIsEvent(!isEvent);}} 
                            style={isEvent? {backgroundColor: "#fff",
                            border: "solid 1px red",
                            color : "red",
                            padding:"9px 15px"} 
                           :
                           {backgroundColor: "#f5f5f5",
                           border: "none",
                           color : "black"}
                    }>
                        이벤트</AlarmCategoryBtn>

                    <AlarmCategoryBtn onClick={() => { setIsCommu(!isCommu);}} 
                            style={isCommu? {backgroundColor: "#fff",
                            border: "solid 1px red",
                            color : "red",
                            padding:"9px 15px"} 
                           :
                           {backgroundColor: "#f5f5f5",
                           border: "none",
                           color : "black"}
                    }>
                        커뮤니티</AlarmCategoryBtn>

                    <AlarmCategoryBtn onClick={() => { setIsOrder(!isOrder);}} 
                            style={isOrder? {backgroundColor: "#fff",
                            border: "solid 1px red",
                            color : "red",
                            padding:"9px 15px"
                            } 
                            
                           :
                           {backgroundColor: "#f5f5f5",
                           border: "none",
                           color : "black"}
                    }>
                        주문</AlarmCategoryBtn>
                </AlarmCategoryBox>

                <div>
                    
                     <AlramContentComp/>
                     <AlramContentComp/>
                     <AlramContentComp/>
                    {/* <AlramContentComp/> */}   
                    {/* <AlramContentComp/> */}
                </div>
                    
            </AlarmContentsContainer>
            
                     

        </AppFrame>
    );
}
export default Notipage;