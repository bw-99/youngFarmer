import React, { useState } from "react";

import { useParams, useLocation, useNavigate } from 'react-router-dom';
import styled from "styled-components";


import alarm from "../../assets/images/alarm@3x.png";
import shopping_bag from "../../assets/images/shopping_bag@3x.png";



import { BottomNavigationBar } from "../../common/BottomNavigationBar/BottomNavigationBar";
import { AppBarComponent } from "./components/appbar";
import { ItemComponent } from "./components/item";


function LikePage(props: any) {
    const params = useParams();
    const location = useLocation();
    const navigate = useNavigate();

    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");

    const onEmailHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.currentTarget.value);
    };
    const onPasswordHanlder = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.currentTarget.value);
    };  

    const onSubmitHandler = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    };

    return (
        <div style={{width: "100vw", height: "100vh"}}>
            <AppBarComponent />
            <ItemComponent />
            <BottomNavigationBar />
        </div>
    );
}

export default LikePage;