import React, { useEffect, useState } from "react";
import checkIcon from "../../../assets/images/btn-checkbox-1@3x.png";
import checkNotIcon from "../../../assets/images/btn-checkbox-2@3x.png";
import { useDispatch, useSelector } from 'react-redux';
import { getDeliveryTry } from "../OrderAction";
import { db, FirebaseAuth } from './../../../index';
import { DeliveryDataType } from "../../../reducers/DeliveryReducer";
import { RootState } from "../../../reducers";
import { addDoc, collection, getDocs, query, Timestamp, updateDoc, where } from "firebase/firestore";
import { BackgroundWrapper, CenterBackgroundWrapper } from "../../../common/BackgroundWrapper/BackgroundWrapper";

export const DeliveryComp = () => {
    const dispatch = useDispatch();



    const deliverySelector: DeliveryDataType[] = useSelector((state:RootState) =>
        state.DeliveryReducer.deliveryList
    );     

    const [selectLocation, setSelectLocation] = useState(false);

    const [selectedDeliveryOption, setSelectedDeliveryOption] = useState<DeliveryDataType | null>(null);
    const [deliverMan, setDeliverMan] = useState("");
    const [deliverPhone, setDeliverPhone] = useState("");
    const [deliverLocationMain, setDeliverLocationMain] = useState("");
    const [deliverLocationSub, setDeliverLocationSub] = useState("");
    const [deliverReq, setDeliverReq] = useState("");
    const [deliveryDefault, setDeliveryDefault] = useState(false);


    console.log(process.env.REACT_APP_JUSO_KEY);

    // * 기존 default 설정을 모두 OFF
    const undefault = async() => {
        const deliveryRef = collection(db, "delivery");

        const defaultDeliveryInfo = deliverySelector.filter((dev) => dev.is_default)[0];
        
        let queryTemp = query(deliveryRef, where("time_created","==",defaultDeliveryInfo.time_created));
        queryTemp = query(queryTemp, where("is_default","==",true));
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


                // setDeliverMan(defaultDeliveryInfo.name);
                // setDeliverPhone(defaultDeliveryInfo.phone);
                // setDeliverLocationMain(defaultDeliveryInfo.location_main);
                // setDeliverLocationSub(defaultDeliveryInfo.location_sub);
                // setDeliverReq(defaultDeliveryInfo.requirement);
                setDeliveryDefault(defaultDeliveryInfo.is_default);
            }
        }

    }, [deliverySelector])

    if(!selectedDeliveryOption) {
        return(
            <div>

            </div>
        );
    } 

    return(
        <div>
            <div style={{display: "flex"}}>
                <h3> 배송 정보 </h3>
                <button onClick={() => {
                            setSelectLocation(!selectLocation);
                        }}>
                    배송지 목록
                </button>
            </div>
            <div>
                {/* 수령인 */}
                <div style={{display:"flex", margin:"20px"}}>
                    <div>
                        수령인
                    </div>
                    <input placeholder="수령인 성함을 입력하세요" value={selectedDeliveryOption.name} onChange={(e)=>{
                        setDeliverMan(e.target.value);
                        selectedDeliveryOption.name = e.target.value;
                    }}>
                    </input>
                </div>

                {/* 휴대폰 */}
                <div style={{display:"flex", margin:"20px"}}>
                    <div>
                        휴대폰
                    </div>
                    <input placeholder="휴대폰 번호를 입력하세요" value={selectedDeliveryOption.phone} onChange={(e)=>{
                        selectedDeliveryOption.phone = e.target.value;
                        setDeliverPhone(e.target.value);
                    }}>
                    </input>
                </div>

                {/* 주소 */}
                <div style={{display:"flex", margin:"20px"}}>
                    <div>
                        주소
                    </div>
                    <input placeholder="주소를 입력하세요" value={selectedDeliveryOption.location_main} onChange={(e)=>{
                        setDeliverLocationMain(e.target.value);
                        selectedDeliveryOption.location_main = e.target.value;
                    }}>
                    </input>
                    
                </div>


                {/* 배송요청 */}
                <div style={{display:"flex", margin:"20px"}}>
                    <div>
                        배송요청
                    </div>
                    <input placeholder="배송 요청사항을 입력하세요" value={selectedDeliveryOption.requirement} onChange={(e)=>{
                        setDeliverReq(e.target.value);
                        selectedDeliveryOption.requirement = e.target.value;
                    }}>
                    </input>
                </div>

            </div>

            <div onClick={()=>{
                setDeliveryDefault(!deliveryDefault);
            }}>
                {
                    deliveryDefault?
                    <img src={checkIcon}/>
                    :
                    <img src={checkNotIcon}/>
                }

                기본 배송지로 설정
            </div>

            <button onClick={()=>{
                handleSetDeliveryOption();
            }}>
                (임시) 주소 저장
            </button>

            <CenterBackgroundWrapper 
            onClose={() => {
                setSelectLocation(false);
            }}
            backgroundColor={"rgba(0,0,0,0.5)"} isActive={selectLocation}>
                {
                    <div onClick={(e) => {
                        e.stopPropagation();
                    }}>
                        {
                            deliverySelector.map((dev) => {
                                return(
                                    <div 
                                    key={Timestamp.now().toString()}
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