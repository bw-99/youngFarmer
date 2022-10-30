import React, { useEffect, useState } from "react";
import { useParams, Link, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import {AlaramContentDateBox,AlarmCategoryBox,AlarmCategoryBtn,AlarmContentBox,AlarmContentBoxSmall,AlarmContentCategoryBox,AlarmContentsContainer,AlarmmContentTitleBox} from "./atoms/alarm";
import {AlramContentComp} from "./components/alarmContent"
import { AppFrame } from "../../App";
import { AppBarComponentOnlyBack } from "../../common/AppBar/AppBar";



export const MyAlarmpage = () => {

    const params = useParams();
    const [isAll, setIsAll] = useState(false);
    const [isEvent, setIsEvent] = useState(true);
    const [isCommu, setIsCommu] = useState(true);
    const [isOrder, setIsOrder] = useState(true);
    
    // useEffect(
    //     () => {
    //         setIsAll(isAll);
    //         setIsEvent(false);
    //         setIsCommu(false);
    //         setIsOrder(false);
    //     },
    //     [isAll]
    // )
    // useEffect(
    //     () => {
    //         setIsAll(false);
    //         setIsEvent(isEvent);
    //         setIsCommu(false);
    //         setIsOrder(false);
    //     },
    //     [isEvent]
    // )
    // useEffect(
    //     () => {
    //         setIsAll(false);
    //         setIsEvent(isCommu);
    //         setIsCommu(false);
    //         setIsOrder(false);
    //     },
    //     [isCommu]
    // )
    // useEffect(
    //     () => {
    //         setIsAll(false);
    //         setIsEvent(false);
    //         setIsCommu(false);
    //         setIsOrder(isOrder);
    //     },
    //     [isOrder]
    // )




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

export default MyAlarmpage;