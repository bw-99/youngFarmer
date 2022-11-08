import React, { useState } from "react"
import DaumPostcode from "react-daum-postcode";
import ReactDom from 'react-dom';

const DeliveryPopUp = () => {
    // 팝업창 상태 관리
    const [isPopupOpen, setIsPopupOpen] = useState(false)

    // 팝업창 열기
    const openPostCode = () => {
        setIsPopupOpen(true)
    }
 
    // 팝업창 닫기
    const closePostCode = () => {
        setIsPopupOpen(false)
    }
 
    return(
        <div>
            // 버튼 클릭 시 팝업 생성
            <button type='button' onClick={openPostCode}>우편번호 검색</button>
            // 팝업 생성 기준 div
            <div id='popupDom'>
                {isPopupOpen && (
                    <PopupDom>
                        <PopupPostCode onClose={closePostCode} />
                    </PopupDom>
                )}
            </div>
        </div>
    )
}

const PopupDom = ({ children }:any) => {
const el:any = document.getElementById('popupDom');
return ReactDom.createPortal(children, el);
};


const PopupPostCode = (props:any) => {
// 우편번호 검색 후 주소 클릭 시 실행될 함수, data callback 용
const handlePostCode = (data:any) => {
    let fullAddress = data.address;
    let extraAddress = ''; 
    
    if (data.addressType === 'R') {
      if (data.bname !== '') {
        extraAddress += data.bname;
      }
      if (data.buildingName !== '') {
        extraAddress += (extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName);
      }
      fullAddress += (extraAddress !== '' ? ` (${extraAddress})` : '');
    }
    console.log(data)
    console.log(fullAddress)
    console.log(data.zonecode)
    props.onClose()
}

const postCodeStyle:any = {
    display: "block",
    position: "absolute",
    top: "10%",
    width: "600px",
    height: "600px",
    padding: "7px",
  };

return(
    <div>
        <DaumPostcode style={{...postCodeStyle}} onComplete={handlePostCode} />
        {/* 닫기 버튼 생성 */}
        <button type='button' onClick={() => {props.onClose()}} className='postCode_btn'>닫기</button>
    </div>
)
}