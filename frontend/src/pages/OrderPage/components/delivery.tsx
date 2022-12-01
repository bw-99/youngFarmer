import React, { useEffect, useState } from "react";
import checkIcon from "../../../assets/images/btn-checkbox-1@3x.webp";
import checkNotIcon from "../../../assets/images/btn-checkbox-2@3x.webp";
import { useDispatch, useSelector } from 'react-redux';
import { db, FirebaseAuth } from './../../../index';
import { DeliveryDataType } from "../../../reducers/DeliveryReducer";
import { RootState } from "../../../reducers";
import { addDoc, collection, getDocs, query, Timestamp, updateDoc, where } from "firebase/firestore";
import { BackgroundWrapper, CenterBackgroundWrapper, TopBackgroundWrapper } from "../../../common/BackgroundWrapper/BackgroundWrapper";
import DaumPostcode from "react-daum-postcode";
import { getDeliveryTry, saveDeliveryAction } from "../DeliveryAction";
import { DeliverCheckAtom, DeliverCheckDefault, DeliveryConPlaceInput, DeliveryConPlaceInputDisabled, DeliveryContentAtom, DeliveryFindAtom, DeliveryListAtom, DeliveryTtitleAtom, SepLineAtom } from "../atoms/delivery";

type DeliveryParam = {
    deliveryInfo: DeliveryDataType | null
}


export const DeliveryComp = () => {
    const dispatch = useDispatch();

    const deliverySelector: DeliveryDataType[] = useSelector((state:RootState) =>
        state.DeliveryReducer.deliveryList
    );     

    const [selectLocation, setSelectLocation] = useState(false);

    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const [selectedDeliveryOption, setSelectedDeliveryOption] = useState<DeliveryDataType | null>({} as DeliveryDataType);
    const [deliverMan, setDeliverMan] = useState("");
    const [deliverPhone, setDeliverPhone] = useState("");
    const [deliverLocationMain, setDeliverLocationMain] = useState("");
    const [deliverLocationSub, setDeliverLocationSub] = useState("");
    const [deliverReq, setDeliverReq] = useState("");
    const [deliveryDefault, setDeliveryDefault] = useState(false);



    // * 기존 default 설정을 모두 OFF
    const undefault = async() => {
        const deliveryRef = collection(db, "delivery");

        let queryTemp = query(deliveryRef, where("is_default","==",true));
        const fbdata = await getDocs(queryTemp);

        if(!fbdata.empty) {
            for (const doc of fbdata.docs) {
                await updateDoc(doc.ref , {
                    is_default: false
                });
            }
        }
    }

    // * 서버 저장 전, 서버에 이미 있는 값인지 확인
    const isDuplicateChekcer = async() => {
        const deliveryRef = collection(db, "delivery");

        let queryTemp = query(deliveryRef, where("name","==",selectedDeliveryOption!.name));
        queryTemp = query(queryTemp, where("phone","==",selectedDeliveryOption!.phone));
        queryTemp = query(queryTemp, where("requirement","==",selectedDeliveryOption!.requirement));
        queryTemp = query(queryTemp, where("uid","==",FirebaseAuth.currentUser!.uid));
        queryTemp = query(queryTemp, where("location_main","==",selectedDeliveryOption!.location_main));
        queryTemp = query(queryTemp, where("location_sub","==",selectedDeliveryOption!.location_sub));

        const fbdata = await getDocs(queryTemp);

        return !fbdata.empty;
    }   

    // * 유저 입력 값을 토대로 default 설정
    const uploadDelivery = async() => {
        const deliveryRef = collection(db, "delivery");
        await addDoc(deliveryRef, {
            location_main: selectedDeliveryOption!.location_main,
            location_sub: selectedDeliveryOption!.location_sub,
            name: selectedDeliveryOption!.name,
            phone: selectedDeliveryOption!.phone,
            requirement: selectedDeliveryOption!.requirement,
            uid: FirebaseAuth.currentUser!.uid,
            is_default: deliveryDefault,
            time_created: Timestamp.now()
        })
    }

    const handleSetDeliveryOption = async () => {
        await undefault();
        const isDuplicated = await isDuplicateChekcer();
        if(!isDuplicated) {
            await uploadDelivery();
        }
    }

    const checkCanSubmit = () => {
        
        return (
            selectedDeliveryOption?.name &&
            selectedDeliveryOption?.phone &&
            selectedDeliveryOption?.location_main &&
            selectedDeliveryOption?.location_sub &&
            selectedDeliveryOption?.requirement
        );
    }

    const handleSendDeliveryOption = () => {
        if(!checkCanSubmit()) {
            return false;
        }

        let devOption:DeliveryDataType = {
            location_main: selectedDeliveryOption!.location_main,
            location_sub: selectedDeliveryOption!.location_sub,
            name: selectedDeliveryOption!.name,
            phone: selectedDeliveryOption!.phone,
            requirement: selectedDeliveryOption!.requirement,
            uid: FirebaseAuth.currentUser!.uid,
            is_default: deliveryDefault,
            time_created: Timestamp.now()
        } 

        dispatch(saveDeliveryAction(devOption));
    }

    useEffect(() => {
        FirebaseAuth.onAuthStateChanged((user) => {
            dispatch(getDeliveryTry(user!.uid));
        })
    }, []);

    useEffect(() => {
        if(deliverySelector && deliverySelector.length > 0) {
            const defaultDeliveryInfo = deliverySelector.filter((dev) => dev.is_default)[0];
            if(defaultDeliveryInfo) {
                setSelectedDeliveryOption(defaultDeliveryInfo);
                setDeliveryDefault(defaultDeliveryInfo.is_default);
            }
        }

       

    }, [deliverySelector])

    useEffect(() => {
        if(deliverySelector) {
            handleSendDeliveryOption();
        }
    }, [
        selectedDeliveryOption!.name,
        selectedDeliveryOption!.phone,
        selectedDeliveryOption!.location_main,
        selectedDeliveryOption!.location_sub,
        selectedDeliveryOption!.requirement,
    ])


    return(
        <div>
            <DeliveryTitleComp selectLocation={selectLocation} setSelectLocation={setSelectLocation} />
            <DeliveryContentomp 
                setDeliverMan={setDeliverMan} setDeliverPhone={setDeliverPhone} setDeliverLocationMain={setDeliverLocationMain}
                setIsPopupOpen={setIsPopupOpen} setDeliverLocationSub={setDeliverLocationSub} setDeliverReq={setDeliverReq}
                setDeliveryDefault={setDeliveryDefault} selectedDeliveryOption={selectedDeliveryOption} deliveryDefault={deliveryDefault} />

            <SepLineAtom style={{marginTop: "25px"}}/>
            <TopBackgroundWrapper 
            onClose={() => {
                setIsPopupOpen(false);
            }}
            backgroundColor={"rgba(255,255,255,0.7)"} isActive={isPopupOpen}>
                {
                    <div onClick={(e) => {
                        e.stopPropagation();
                    }}>
                        <PopupPostCode 
                        selectedDeliveryOption = {selectedDeliveryOption}
                        onClose={() => {
                            setIsPopupOpen(false);
                        } } setDeliverLocationMain={setDeliverLocationMain} />
                    </div>
                    
                }
            </TopBackgroundWrapper>

            <CenterBackgroundWrapper 
            onClose={() => {
                setSelectLocation(false);
            }}
            backgroundColor={"rgba(255,255,255,0.7)"} isActive={selectLocation}>
                {
                    <div onClick={(e) => {
                        e.stopPropagation();
                    }}>
                        {
                            deliverySelector.map((dev) => {
                                return(
                                    <div 
                                    key={Timestamp.now().nanoseconds}
                                    onClick={(e)=>{
                                        setSelectedDeliveryOption(dev);
                                        setSelectLocation(false);
                                    }}>
                                        {
                                            dev.name + "|" + dev.phone + "|" + dev.location_main + " " + dev.location_sub
                                        }
                                    </div>
                                )
                            })
                        }
                    </div>
                    
                }
            </CenterBackgroundWrapper>
            
        </div>
    );
}

type DeliveryTitleProp = {
    selectLocation: boolean,
    setSelectLocation: any
}

const DeliveryTitleComp = ({selectLocation, setSelectLocation}:DeliveryTitleProp) => {
    const deliverySelector: DeliveryDataType[] = useSelector((state:RootState) =>
        state.DeliveryReducer.deliveryList
    );     

    return (
        <div style={{
            margin: "0 16px",
            display: "flex", justifyContent: "space-between", alignItems: "center"}}>
            <DeliveryTtitleAtom> 배송 정보 </DeliveryTtitleAtom>
            <DeliveryListAtom onClick={() => {
                        if(deliverySelector.length > 0) {
                            setSelectLocation(!selectLocation);
                        }
                    }}>
                배송지 목록
            </DeliveryListAtom>
        </div>
    );
}


type DeliveryContentProp = {
    selectedDeliveryOption: any,
    setDeliverMan: any,
    setDeliverPhone: any,
    setDeliverLocationMain: any,
    setIsPopupOpen: any,
    setDeliverLocationSub: any,
    setDeliverReq: any,
    setDeliveryDefault: any,
    deliveryDefault: any
}

const DeliveryContentomp = ({selectedDeliveryOption, setDeliverMan, setDeliverPhone, setDeliverLocationMain, setIsPopupOpen, setDeliverLocationSub, setDeliverReq, setDeliveryDefault, deliveryDefault}:DeliveryContentProp) => {
    const deliverySelector: DeliveryDataType[] = useSelector((state:RootState) =>
        state.DeliveryReducer.deliveryList
    );     

    return (
        <div>
            {/* 수령인 */}
            <div style={{display:"flex", margin: "16px 16px 0 16px", alignItems: "center"}}>
                <DeliveryContentAtom style={{marginRight: "31px"}}>
                    수령인
                </DeliveryContentAtom>
                <DeliveryConPlaceInput placeholder="수령인 성함을 입력하세요" value={selectedDeliveryOption ? selectedDeliveryOption!.name : ""} onChange={(e)=>{
                    setDeliverMan(e.target.value);
                    selectedDeliveryOption!.name = e.target.value;
                }}>
                </DeliveryConPlaceInput>
            </div>

                {/* 휴대폰 */}
                <div style={{display:"flex", margin: "26px 16px 0 16px", alignItems: "center"}}>
                    <DeliveryContentAtom style={{marginRight: "31px"}}>
                        휴대폰
                    </DeliveryContentAtom>
                    <DeliveryConPlaceInput placeholder="휴대폰 번호를 입력하세요" value={selectedDeliveryOption ? selectedDeliveryOption!.phone : ""} onChange={(e)=>{
                        selectedDeliveryOption!.phone = e.target.value;
                        setDeliverPhone(e.target.value);
                    }}>
                    </DeliveryConPlaceInput>
                </div>

                {/* 주소 */}
                <div style={{display:"flex", margin: "26px 16px 0 16px", alignItems: "flex-start"}}>
                    <DeliveryContentAtom style={{marginRight: "43px", padding: "11px 0"}}>
                        주소
                    </DeliveryContentAtom>

                    <div style={{flex: 1}}>
                        <div style={{display:"flex", flex: 1}}>
                            <DeliveryConPlaceInputDisabled disabled={true} value={selectedDeliveryOption ? selectedDeliveryOption!.location_main : ""} onChange={(e)=>{
                                setDeliverLocationMain(e.target.value);
                                selectedDeliveryOption!.location_main = e.target.value;
                            }}>
                            </DeliveryConPlaceInputDisabled>

                            <DeliveryFindAtom 
                            style={{marginLeft: "19.5px"}}
                            onClick={() => {
                                setIsPopupOpen(true);
                            }}>
                                주소 찾기
                            </DeliveryFindAtom>
                        </div>

                        <div style={{display:"flex", flex: 1, marginTop:"8px"}}>
                            <DeliveryConPlaceInput placeholder="세부 주소를 입력하세요" value={selectedDeliveryOption ? selectedDeliveryOption!.location_sub : ""} onChange={(e)=>{
                            setDeliverLocationSub(e.target.value);
                            selectedDeliveryOption!.location_sub = e.target.value;
                        }}>
                            </DeliveryConPlaceInput>     
                        </div>
                    </div>
                </div>

                {/* 배송요청 */}
                <div style={{display:"flex", margin: "26px 16px 0 16px", alignItems: "center"}}>
                    <DeliveryContentAtom style={{marginRight: "19px"}}>
                        배송요청
                    </DeliveryContentAtom>
                    <DeliveryConPlaceInput placeholder="배송 요청사항을 입력하세요" value={selectedDeliveryOption ? selectedDeliveryOption!.requirement : ""} onChange={(e)=>{
                         setDeliverReq(e.target.value);
                         selectedDeliveryOption!.requirement = e.target.value;
                    }}>
                    </DeliveryConPlaceInput>
                </div>


                <div 
                style={{display:"flex", margin: "26px 16px 0 16px", alignItems: "center"}}
                onClick={()=>{
                    setDeliveryDefault(!deliveryDefault);
                }}>
                    {
                        deliveryDefault?
                        <DeliverCheckAtom src={checkIcon}/>
                        :
                        <DeliverCheckAtom src={checkNotIcon}/>
                    }
                    <DeliverCheckDefault style={{marginLeft: "6px", marginTop: "2px"}}>
                        기본 배송지로 설정
                    </DeliverCheckDefault>

                </div>
        </div>
    );
}



type RoadSettingType = {
    // deliverLocationMain:any,
    selectedDeliveryOption: any,
    setDeliverLocationMain:any,
    onClose: any
}


const PopupPostCode = ({selectedDeliveryOption, setDeliverLocationMain, onClose}:RoadSettingType) => {
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
        selectedDeliveryOption.location_main = fullAddress;
        setDeliverLocationMain(fullAddress);
        onClose();
    }
 
    const postCodeStyle:any = {
        display: "block",
        maxWidth: "calc(625px)",
        width: "100vw"
      };
 
    return(
        <DaumPostcode style={{...postCodeStyle}} onComplete={handlePostCode} />
    )
}