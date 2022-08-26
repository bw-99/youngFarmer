import React from 'react';
import logo from './logo.svg';
import './App.css';
import { CounterFunction } from './component/counter/Counter';
import { Main } from './component/Main/Main';
// import Counter from './components/counter/Counter';

const background = {
  // width: 360,
  height: 704,
  backgroundColor: "#e7f5ff",
  maxWidth: 360
};


function App() {
  return (
    <div className="App" style={background}>
      <Main></Main>
      {/* <CounterFunction></CounterFunction> */}
    </div>
  );
}


export default App;
