import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from "react-redux";
import { legacy_createStore as createStore, applyMiddleware} from 'redux'
import {BrowserRouter as Router} from 'react-router-dom'

import createSagaMiddleware from 'redux-saga'
import rootReducer from './reducers';
import rootSaga from './sagas/index';

import './index.css';
import configInfo from "./firebaseConfig.json";
import kakaoConfigInfo from "./kakaoConfig.json";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: configInfo.apiKey,
  authDomain: configInfo.authDomain,
  projectId: configInfo.projectId,
  storageBucket: configInfo.storageBucket,
  messagingSenderId: configInfo.messagingSenderId,
  appId: configInfo.appId,
  measurementId: configInfo.measurementId
};

export const kakaoConfig = {
  nativeAppKey: kakaoConfigInfo.nativeAppKey,
  restAPIKey: kakaoConfigInfo.restAPIKey,
  javascriptKey: kakaoConfigInfo.javascriptKey,
  adminKey: kakaoConfigInfo.adminKey,
  kakaoAuthUri: `https://kauth.kakao.com/oauth/authorize?client_id=${kakaoConfigInfo.restAPIKey}&redirect_uri=${"http://localhost:52324/login"}&response_type=code`,
  redirectUri: "/oauth/callback/kakao"
}

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga)

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);



root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>
);