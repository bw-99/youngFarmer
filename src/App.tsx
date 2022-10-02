import React from 'react';
import logo from './logo.svg';
import './App.css';
import { CounterFunction } from './pages/counter/Counter';
import { Main } from './pages/Main/Main';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import AppRouter from './AppRouter';
// import Counter from './components/counter/Counter';

const background = {
  // width: 360,
  height: 704,
  backgroundColor: "#e7f5ff",
  maxWidth: 360
};


function App() {
  return (
    <AppRouter />
    // <div className="App" style={background}>
    //   <Main></Main>
    //   {/* <CounterFunction></CounterFunction> */}
    // </div>
  );
}


export default App;
