import React from 'react';
import { BrowserRouter, Navigate, Route, Router, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage/LandingPage';

import { useParams, useLocation, useNavigate } from 'react-router-dom';
import RegisterPage from './pages/Register/RegisterPage';
import LoginPage from './pages/LoginPage/LoginPage';
import SplashPage from './pages/SplashPage/SplashPage';
import styled from 'styled-components';
import MainPage from './pages/MainPage/MainPage';


const Background = styled.div`
    max-width: 150px;
`


function App() {
  const params = useParams();
  const location = useLocation();
  const navigate = useNavigate();


  return (
    <Background>
      <Routes>
        <Route path='/' element = {<MainPage />}/>
        <Route path='/main' element = {<MainPage />}/>
        <Route path='/splash' element = {<SplashPage />}/>
        <Route path='/login' element = {<LoginPage />}/>
      </Routes>
    </Background>
  );
}


export default App;
