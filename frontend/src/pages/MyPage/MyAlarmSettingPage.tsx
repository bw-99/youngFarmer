import React from "react";

//import Switch from "react-switch"

import { AppFrame } from "../../App";
import { AppBarComponentOnlyBack } from "../../common/AppBar/AppBar";
import {AlarmSettingHalfBox2,AlarmSettingBigBox,AlarmSettingHalfBox,AlarmSettingLeftBox1,AlarmSettingLeftBox2} from "./atoms/alarmSetting"
import {AlarmContentsContainer} from "./atoms/alarm"
import Switch from '@mui/material/Switch';

  

  
export const MyAlarmSettingpage = () => {

    const [state, setState] = React.useState({
        opt1: true,
        opt2: true,
        opt3: true,
        opt4: true,
      });
    
      const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setState({
          ...state,
          [event.target.name]: event.target.checked,
        });
      };
    


    return (
        <AppFrame>
            {/*  */}
            <AppBarComponentOnlyBack title="알림 설정"/>
            <AlarmContentsContainer>
                <AlarmSettingBigBox>
                     <AlarmSettingHalfBox>
                        <AlarmSettingLeftBox1>공지사항/이벤트 알림</AlarmSettingLeftBox1>
                        <AlarmSettingLeftBox2>새로운 공지/이벤트 등</AlarmSettingLeftBox2>
                        </AlarmSettingHalfBox>
                    <AlarmSettingHalfBox2>
                      <Switch checked={state.opt1} onChange={handleChange} name="opt1" />
                    </AlarmSettingHalfBox2>
                </AlarmSettingBigBox>

                <AlarmSettingBigBox>
                    <AlarmSettingHalfBox>
                        <AlarmSettingLeftBox1>리뷰 알림</AlarmSettingLeftBox1>
                        <AlarmSettingLeftBox2>리뷰 쓰기 알림, 리뷰 댓글 알림 등 </AlarmSettingLeftBox2>
                    </AlarmSettingHalfBox>
                    <AlarmSettingHalfBox2>
                        <Switch checked={state.opt2} onChange={handleChange} name="opt2" />
                    </AlarmSettingHalfBox2>
                </AlarmSettingBigBox>

                <AlarmSettingBigBox>
                    <AlarmSettingHalfBox>
                        <AlarmSettingLeftBox1>배송 현황 알림</AlarmSettingLeftBox1>
                        <AlarmSettingLeftBox2>배송 상태 알림 등</AlarmSettingLeftBox2>
                    </AlarmSettingHalfBox>
                    <AlarmSettingHalfBox2>
                        <Switch checked={state.opt3} onChange={handleChange} name="opt3" />
                    </AlarmSettingHalfBox2>
                </AlarmSettingBigBox>

                <AlarmSettingBigBox>
                    <AlarmSettingHalfBox>
                        <AlarmSettingLeftBox1>공지사항/이벤트 알림</AlarmSettingLeftBox1>
                        <AlarmSettingLeftBox2>새로운 공지/이벤트 등</AlarmSettingLeftBox2>
                    </AlarmSettingHalfBox>
                    <AlarmSettingHalfBox2>
                        <Switch checked={state.opt4} onChange={handleChange} name="opt4" />
                    </AlarmSettingHalfBox2>
                </AlarmSettingBigBox>

                
            </AlarmContentsContainer>
            
            

        </AppFrame>
    );
}

export default MyAlarmSettingpage;