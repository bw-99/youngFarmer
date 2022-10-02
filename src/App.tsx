import React from 'react';
import { BrowserRouter, Navigate, Route, Router, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage/LandingPage';

import { useParams, useLocation, useNavigate } from 'react-router-dom';
import RegisterPage from './pages/Register/RegisterPage';
import LoginPage from './pages/LoginPage/LoginPage';


const background = {
  // width: 360,
  height: 704,
  backgroundColor: "#e7f5ff",
  maxWidth: 360
};


function App() {
  const params = useParams();
  const location = useLocation();
  const navigate = useNavigate();


  return (
    <div>
      <Routes>
        <Route path='/' element = {<LandingPage />}/>
        <Route path='/register' element = {<RegisterPage />}/>
        <Route path='/login' element = {<LoginPage />}/>
        
      </Routes>
    </div>
  );
}


export default App;
