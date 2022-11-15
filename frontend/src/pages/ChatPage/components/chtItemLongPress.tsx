import * as React from "react";
import { useLongPress, LongPressDetectEvents } from "use-long-press";
import { ChatSeperateLine, FarmerNickname, FarmerProfile, NewChatNoti, RecentChat, RecentChatDate } from "../atoms/chatItem";
import farmer from "../../../assets/images/farmer.png";

interface chatPropsType {
    isReaded:boolean;
}

export default function ChatItemComponentLongBtn(props: chatPropsType) {
  const [enabled, setEnabled] = React.useState(true);

  const callback = React.useCallback(() => {
    alert("Long pressed!");
  }, []);
  const bind = useLongPress(enabled ? callback : null, {
    onStart: (event, meta) => console.log("Press started", meta),
    onFinish: (event, meta) => console.log("Long press finished", meta),
    onCancel: (event, meta) => console.log("Press cancelled", meta),
    //onMove: () => console.log("Detected mouse or touch movement"),
    filterEvents: (event) => true, // All events can potentially trigger long press
    threshold: 500,
    captureEvent: true,
    cancelOnMovement: false,
    detect: LongPressDetectEvents.BOTH
  });

  return (
    <div style={{maxWidth: "625px", width: "100vw", overflow:"hidden"}}>
      <div id="container">
        <button
        {...bind("test context")}
        style={{maxWidth: "625px", width: "100vw",display:"flex",position:"relative", padding:"20px 16px 20px 16px",
         alignItems: "center", backgroundColor:"white", border:"none"}}
        >
        <div style={{padding:"0 14px 0 0"}}>   
            <FarmerProfile src={farmer}/>
        </div>

        <div>
            <FarmerNickname> 청년농부 </FarmerNickname>
            <RecentChat> 네 가능합니다~! 15kg로 하시면 40,000...</RecentChat>
        </div>

        <div>
            <div style={{position: "absolute", right:16, top:24}}>
                <RecentChatDate> 3일전 </RecentChatDate>
            </div>
            {props.isReaded? null: <div style={{position: "absolute", right:16, bottom:26}}>
                {NewChatNoti(1)}
            </div>}
            
        </div>
        </button>
        <div></div>
      </div>
      <ChatSeperateLine />
    </div>
  );
}
