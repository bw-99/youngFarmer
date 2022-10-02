import React from "react";
import { useParams, useLocation, useNavigate } from 'react-router-dom';


function LandingPage() {
    const params = useParams();
    const location = useLocation();
    const navigate = useNavigate();

    const onClickHandler = () => {};
    const onClickRegisterHandler = () => {navigate("/register")};

    return (
        <div
        style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            height: "100vh",
        }}>
        <h2>시작 페이지</h2>
        <button onClick={onClickHandler}>로그아웃</button>
        <button onClick={onClickRegisterHandler}>회원가입</button>
        </div>
    );
}

export default LandingPage;