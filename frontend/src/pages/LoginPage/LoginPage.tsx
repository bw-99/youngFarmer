import React from "react";

import { useNavigate} from 'react-router-dom';

import bg from "../../assets/images/login_background@3x.webp";
import kakao from "../../assets/images/icon-ui-sns-kakao@3x.webp";
import naver from "../../assets/images/icon-sns-naver@3x.webp";
import apple from "../../assets/images/icon-sns-apple@3x.webp";


import { AppleBox, BottomBox, KakaoBox, LookAround, LookAroundBeforeLogin, MainBox, MainTextBold, MainTextBox, MainTextLight, NaverBox, SnsText } from "./atoms/Box";
import { LoginWithAnonymous, LoginWithKakaoAction, LoginWithNaverAction, login_result_loading } from "./LoginAction";
import { useDispatch, useSelector } from "react-redux";

import { AppFrame } from "../../App";
import { RootState } from "../../reducers";

  
function LoginPage(props: any) {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleAnonymousLogin = () => {
        dispatch(LoginWithAnonymous(()=>{navigate("/main")}));
    }

    const loginSelector: string|null = useSelector((state:RootState) =>
        state.LoginReducer.result
    );

    

    return (
        <AppFrame>
            <div style={{position:"relative", top: "-56px", backgroundImage: `url(${bg})`,  backgroundRepeat: "no-repeat",  height:"100vh", backgroundSize: "cover"}}>
                <MainBox>
                    <MainTextBox>
                        <div>
                            <MainTextLight>
                                올 가을엔
                            </MainTextLight>
                        </div>
                        <div>
                            <MainTextBold>
                                청송사과
                            </MainTextBold>
                            <MainTextLight>
                                로
                            </MainTextLight>
                        </div>
                        <div>
                            <MainTextLight>
                                비타민 충전
                            </MainTextLight>
                        </div>
                    </MainTextBox>
                    <BottomBox>
                        <a style={{textDecoration: "none"}} href={`https://kauth.kakao.com/oauth/authorize?client_id=${process.env.REACT_APP_KAKAO_REST_API_KEY}&redirect_uri=${encodeURI(window.location.origin + "/login/oauth/kakao")}&response_type=code`}>
                            <KakaoBox>
                                <SnsText>
                                    <img src={kakao} style={{marginRight:'8px'}} width= '24px' height= '24px'/>
                                    <div>
                                    카카오로 계속하기
                                    </div> 
                                </SnsText>
                            </KakaoBox>
                        </a>
                        <a style={{textDecoration: "none"}} href={"http://localhost:52324/login/oauth/naver"}>
                            <NaverBox> 
                                <SnsText>
                                    <img src={naver} style={{marginRight:'8px'}} width= '24px' height= '24px'/>
                                    <div>
                                    네이버로 계속하기
                                    </div>
                                </SnsText> 
                            </NaverBox>
                        </a>
                    <AppleBox> 
                        <SnsText>
                            <img src={apple} style={{marginRight:'8px'}} width= '24px' height= '24px'/>
                            <div>
                            Apple로 계속하기 
                            </div>
                        </SnsText>
                    </AppleBox>
                    <LookAroundBeforeLogin onClick={handleAnonymousLogin}> 
                        <LookAround unselectable="on">
                            로그인 전 둘러보기
                        </LookAround>
                    </LookAroundBeforeLogin>
                </BottomBox>
            </MainBox>
         </div>
         
         {/* <LoadingWrapper backgroundColor={"rgba(255,255,255,0.6)"} isActive={loginSelector === login_result_loading} /> */}
         {/* <BackgroundWrapper backgroundColor="rgba(255,255,255, 0.8)" isActive={loginSelector === login_result_loading}/> */}
        
        
        </AppFrame>
    );
}

export default LoginPage;
