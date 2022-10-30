
import React from "react";

import { useSelector } from "react-redux";
import { RootState } from "../../../reducers";
import {AlarmContentBox,AlarmContentBoxSmall,AlarmContentCategoryBox,AlaramContentDateBox,AlarmmContentTitleBox,AlarmCategoryBtn, AlarmCategoryBox} from "../atoms/alarm"

export const AlramContentComp = () => {

    // category(event or community or order)
    // title("오픈이벤트!")
    // date ("2022 12 29")
    // 데이터 정보를 받고 박스내용만 생성
    
    // 테스트용을 변수 설정
    const data = {
        category : "이벤트",
        title : "오픈이벤트",
        date : "2022-12-29"
    }
    

    return(
        <AlarmContentBox>
            <AlarmContentBoxSmall>
                <AlarmContentCategoryBox style={{marginLeft:"16px"}}> {data.category}</AlarmContentCategoryBox>
            </AlarmContentBoxSmall>
            <AlarmContentBoxSmall>
                <AlarmmContentTitleBox style={{marginLeft:"16px"}}>{data.title}</AlarmmContentTitleBox>
            </AlarmContentBoxSmall>
            <AlarmContentBoxSmall>
                <AlaramContentDateBox style={{marginLeft:"16px"}}>{data.date}</AlaramContentDateBox>    
            </AlarmContentBoxSmall>
        </AlarmContentBox>
    );
}


//For reducer


// export interface AlarmContentsType {
//     contents: AlarmContentType[]
// }
// export interface AlarmContentType {
//     category: string,
//     title: string,
//     date:string
// }

// export const AlarmContentsComp = (contentsList: AlarmContentsType[]) => {
    
//     contentsList.forEach((content)=> {
//         // <AlramContentComp></AlramContentComp>
//     });
//     return {

//     }

// }