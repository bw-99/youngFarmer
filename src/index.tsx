import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from "react-redux";
import { legacy_createStore as createStore, applyMiddleware} from 'redux'
import {BrowserRouter as Router} from 'react-router-dom'

import createSagaMiddleware from 'redux-saga'
import rootReducer from './reducers';
import rootSaga from './sagas/index';


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