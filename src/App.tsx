import React, { useEffect } from 'react';
import { BrowserRouter, Navigate, Route, Router, Routes } from 'react-router-dom';

import { useParams, useLocation, useNavigate } from 'react-router-dom';
import LoginPage from './pages/LoginPage/LoginPage';
import SplashPage from './pages/SplashPage/SplashPage';
import styled from 'styled-components';
import MainPage from './pages/MainPage/MainPage';
import LikePage from './pages/LikePage/LikePage';
import { useDispatch } from 'react-redux';
import { GOTO_CHAT_PAGE, GOTO_HOME_PAGE, GOTO_LIKE_PAGE, GOTO_MY_PAGE, GOTO_SEARCH_PAGE } from './common/BottomNavigationBar/BottomNavigationBarActions';
import ChatPage from './pages/ChatPage/ChatPage';
import SearchPage from './pages/SearchPage/SearchPage';
import TodayRecommendPage from './pages/TodayRecommendPage/TodayRecommendPage';
import LiveListPage from './pages/LiveListPage/LiveListPage';
import SearchDetailPage from './pages/SearchDetailPage/SearchDetailPage';


const Background = styled.div`
    max-width: 150px;
`


function App() {
  const params = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  //? 새로고침 했을 때 루트 페이지로 이동?
  // useEffect(() => {
  //   window.addEventListener("beforeunload", refreshApp);
  //   return () => {
  //     window.removeEventListener("beforeunload", refreshApp);
  //   };
  // }, []);

  // const refreshApp = (e: BeforeUnloadEvent) => {
  //   e.preventDefault();
  //   navigate('/');
    
  //   // dispatch(GOTO_HOME_PAGE());
  // };


  return (
    <Background>
      <Routes>
        <Route path='/' element = {<SplashPage />}/>
        <Route path='/main' element = {<MainPage />}/>
        <Route path='/main/todayRecommend' element = {<TodayRecommendPage />}/>
        <Route path='/main/liveList' element = {<LiveListPage />}/>
        <Route path='/like' element = {<LikePage />}/>
        <Route path='/splash' element = {<SplashPage />}/>
        <Route path='/login' element = {<LoginPage />}/>
        <Route path='/chat' element = {<ChatPage />}/>
        <Route path='/search' element = {<SearchPage />}/>
        <Route path='/search/:search' element = {<SearchDetailPage />}/>
        <Route path='/mypage' element = {<SearchPage />}/>
      </Routes>
    </Background>
  );
}


export default App;
