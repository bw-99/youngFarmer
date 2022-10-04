import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { RootState } from "../../reducers";
import { createTask } from "../LandingPage/LandingActions";
import { taskItem } from "../LandingPage/LandingConstants";
import styled from "styled-components";


const Background = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: #f34c49;
    max-width: 767px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
`


const YoungerFarmerFont = styled.div`
    font-family: RecipekoreaM;
    font-size: 40px;
    font-weight: medium;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #fff;

    
`


function SplashPage() {
    const params = useParams();
    const location = useLocation();
    const navigate = useNavigate();

    const dispatch = useDispatch();

    return (
        <div style={{maxWidth: "767px"}}>
            <Background>
                <YoungerFarmerFont className="-copy">
                청년농부
                </YoungerFarmerFont>
            </Background>
        </div>
        
    );

}

export default SplashPage;