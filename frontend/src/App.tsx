import React, { createContext, FC, ReactElement, ReactNode, useContext, useEffect } from 'react';
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
import ProductPage from './pages/ProductPage/ProductPage';
import { BottomNavBarChanger } from './services/BottomNavBarChanger';
import { ScrollToTop } from './services/ScrollToTop';
import MyPage from './pages/MyPage/MyPage';
import StorePage from './pages/StorePage/StorePage';
import { AuthProvider, LoginRoute, PrivateRoute } from './services/firebase';
import LoginKakaoPage from './pages/LoginPage/LoginPageKakao';

export const AuthContext = createContext(false);

function App() {
  const params = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  


  return (
    <div style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
      <BottomNavBarChanger>
          <ScrollToTop>
            <AuthProvider>
              <Routes>
                <Route path="/" element = {<PrivateRoute />} >
                    <Route path="/" element = {<MainPage />}/>
                    <Route path='/main' element = {<MainPage />}/>
                    <Route path='/main/todayRecommend' element = {<TodayRecommendPage />}/>
                    <Route path='/main/liveList' element = {<LiveListPage />}/>
                    <Route path='/like' element = {<LikePage />}/>
                    <Route path='/splash' element = {<SplashPage />}/>
                    <Route path='/chat' element = {<ChatPage />}/>
                    <Route path='/search' element = {<SearchPage />}/>
                    <Route path='/search/:search' element = {<SearchDetailPage />}/>
                    <Route path='/mypage' element = {<MyPage />}/>
                    <Route path='/product/:productId' element = {<ProductPage />}/>
                    <Route path='/store' element={<StorePage />} />
                  </Route>

                  <Route path="/login" element = {<LoginRoute />}>
                    <Route path="/login" element = {<LoginPage />}/>
                    <Route path="/login/oauth/kakao" element = {<LoginKakaoPage />}/>
                  </Route>
                <Route path="*" element = {<h1>Page Not Found</h1>}/>
              </Routes>
          </AuthProvider>
        </ScrollToTop>
      </BottomNavBarChanger>  
    </div>
          
  );
}



export default App;

interface Props {
  children?: ReactNode
  // any props that come into the component
}


export const AppFrame:FC<Props> = ({ children, ...props }) => {
    return (
        <div style={{ maxWidth: "625px", width: "100vw", height: "100vh", marginTop: "56px"}}>
      {children}
    </div>
  );
}