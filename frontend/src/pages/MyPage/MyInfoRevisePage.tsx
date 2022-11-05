import React, { useEffect, useState } from "react";
import { useParams, Link, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";

import { NavigationBox, AssignPage3Text1Box, AssignPage3Text1, AssignPage3FormBox, AssignPageForm, AssignPageFormLabel, AssignPageFormSpan, AssignPageFormInputForName, AssignPageFormInputForEmail, AssignPageFormInputForNum, AssignPageFormInputButton, ButtonText, AssignPageFormInputForCertificationNum, AssignPageSubmitButton2, SubmitButtonText } from "../LoginPage/atoms/Assignp2";
import { AppFrame } from "../../App";
import { AppBarComponentOnlyBack } from "../../common/AppBar/AppBar";
import { RootState } from "../../reducers";
import { MyPageDataType } from "../../reducers/MypageReducer";
import { db, FirebaseAuth } from "../..";
import { getProfileAction } from "./MyAction";
import { collection, query, where, limit, getDocs, updateDoc } from "firebase/firestore";



export const MyInfoRevisePage = () => {

    const params = useParams();
    const navigate = useNavigate();
    const [isCertify, setCertify] = useState(false);

    const [nickname, setNickname] = useState<null | string>(null);
    const [email, setEmail] = useState<null | string>(null);
    const [phoneNum, setPhoneNum] = useState<null | string>(null);

    const dispatch = useDispatch();
    
    const selector: MyPageDataType = useSelector((state:RootState) =>
        state.ProfileReducer!.mypageInfo
    );    

    useEffect(() => {
        if(!selector) {
            FirebaseAuth.onAuthStateChanged((data)=> {
                if(data){
                    dispatch(getProfileAction(data.uid));
                }
            })
        }
        else{
            setNickname(selector.profileData.profile_nickname);
            setEmail(selector.profileData.profile_email);
        }
    }, [selector])

    return (
        <AppFrame>
            <AppBarComponentOnlyBack title="내 정보 수정"/>
            <AssignPage3FormBox>
                <AssignPageForm>
                    <AssignPageFormLabel>
                        닉네임
                        <AssignPageFormSpan> *</AssignPageFormSpan>           
                    </AssignPageFormLabel>
                    <div style={{display: "flex"}}>
                        <AssignPageFormInputForName
                        value={nickname!}
                        onChange = {
                            (e) => {
                                setNickname(e.target.value);
                            }
                        }
                        ></AssignPageFormInputForName>             
                    </div>
                </AssignPageForm>

                <AssignPageForm>
                    <AssignPageFormLabel>
                        이메일
                        <AssignPageFormSpan> *</AssignPageFormSpan>           
                    </AssignPageFormLabel>
                    <div style={{display: "flex"}}>
                        <AssignPageFormInputForEmail
                        value={email!}
                        onChange = {
                            (e) => {
                                setEmail(e.target.value!);
                                console.log(email);
                                
                            }
                        }
                        ></AssignPageFormInputForEmail>             
                    </div>
                </AssignPageForm>

                <AssignPageForm>
                    <AssignPageFormLabel>
                        휴대폰 번호
                        <AssignPageFormSpan> *</AssignPageFormSpan>           
                    </AssignPageFormLabel>
                    <div style={{display:"flex"}}>
                        <AssignPageFormInputForNum></AssignPageFormInputForNum>
                        <AssignPageFormInputButton >
                           인증
                        </AssignPageFormInputButton> 

                    </div>
                                
                </AssignPageForm>    
        

               <AssignPageForm style={{display:"flex", marginTop:"12px"}}>
                    <AssignPageFormInputForCertificationNum></AssignPageFormInputForCertificationNum>             
                </AssignPageForm>

                
                
            
            </AssignPage3FormBox>

            <AssignPageSubmitButton2 onClick= {async () => {
                        {

                            const userRef = collection(db, "user");
                            const q = query(userRef, where("uid", "==", selector.uid), limit(1));
                            const fbdata = await getDocs(q);

                            const profileRef = collection(fbdata.docs[0].ref, "profile");
                            const q2 = query(profileRef);
                            const fbdata2 = await getDocs(q2);

                            console.log(email);
                            console.log(nickname);
                            

                            await updateDoc(fbdata2.docs[0].ref, {
                                profile_nickname: nickname!,
                                profile_email: email!
                            });

                            dispatch(getProfileAction(selector.uid));
                            // navigate("/mypage/setting");
                        }
                    }}>
                    수정 완료
            </AssignPageSubmitButton2>

        </AppFrame>
    );
}

export default MyInfoRevisePage;