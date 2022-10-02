import React, { useState } from "react";

import { useParams, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { changeText, registerUser } from "./RegisterActions";
import {RootState} from "../../reducers/index";

function RegisterPage() {
    const params = useParams();
    const location = useLocation();
    const navigate = useNavigate();

    const dispatch = useDispatch();

    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");
    const [Name, setName] = useState("");
    const [ConfirmPasword, setConfirmPasword] = useState("");

    const onEmailHandler = (e:any) => {
        setEmail(e.currentTarget.value);
    };

    const onNameHandler = (e:any) => {
        setName(e.currentTarget.value);
    };

    const onPasswordHanlder = (e:any) => {
        setPassword(e.currentTarget.value);
    };

    const onConfirmPasswordHandler = (e:any) => {
        setConfirmPasword(e.currentTarget.value);
    };

    const text = useSelector((state:RootState) =>
        state.textReducer.text
    );

    const onSubmitHandler = (e:any) => {
        e.preventDefault();
        if (Password === ConfirmPasword) {
            let body = {
                email: Email,
                name: Name,
                password: Password,
            };
            dispatch(registerUser(body)).payload.then((res) => {
                navigate("/login");
            });
        } else {
            alert("비밀번호가 일치하지 않습니다");
        }
    };

    return (
    <div
        style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100vh",
        }}>

        <button onClick={()=>{dispatch(changeText("fff"))}}>{text}</button>

        <form
        onSubmit={onSubmitHandler}
        style={{ display: "flex", flexDirection: "column" }}>
        <label>Email</label>
        <input type="email" value={Email} onChange={onEmailHandler} />

        <label>Name</label>
        <input type="test" value={Name} onChange={onNameHandler} />

        <label>Password</label>
        <input type="password" value={Password} onChange={onPasswordHanlder} />

        <label>ConfirmPasword</label>
        <input
            type="password"
            value={ConfirmPasword}
            onChange={onConfirmPasswordHandler}
        />
        <br />
        <button type="submit">회원 가입</button>
        </form>
    </div>
    );
}

export default RegisterPage;