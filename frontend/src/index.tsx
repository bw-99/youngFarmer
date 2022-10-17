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
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_CONFIG_API_KEY!,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN!,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID!,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET!,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID!,
  appId: process.env.REACT_APP_FIREBASE_APP_ID!,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID!,
};

export const kakaoConfig = {
  nativeAppKey: process.env.REACT_APP_KAKAO_NATIVE_APP_KEY!,
  restAPIKey: process.env.REACT_APP_KAKAO_REST_API_KEY!,
  javascriptKey: process.env.REACT_APP_KAKAO_JAVASCRIPT_KEY!,
  adminKey: process.env.REACT_APP_KAKAO_ADMIN_KEY!,
  kakaoAuthUri: `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.REACT_APP_KAKAO_REST_API_KEY}&redirect_uri=${encodeURI(window.location.origin + "/login")}&response_type=code`,
  redirectUri: encodeURI(window.location.origin + "/login")
}

export const app = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(app);
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