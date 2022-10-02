import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Main} from "./pages/Main/Main";
import {CounterFunction} from "./pages/counter/Counter";
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation';
import Nav from './components/Navigation';

const AppRouter = () => {
    return (
        <>
        <BrowserRouter>
            {/* <Navigation /> */}
            <Routes>
                <Route path='/main/*' element={<Main />} />
                <Route path='/counter/*' element={<CounterFunction />} />
            </Routes>
            <Nav />
        </BrowserRouter>
        </>
    )
}

export default AppRouter;