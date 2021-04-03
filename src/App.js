import './App.css';
import React from 'react';
import Navbar from './components/navbar.js';
import Home from './components/home.js';
import Logo from './components/logo';

export default function App() {

    return (
        <div className = 'App'> 
            <Logo/>
            <Navbar/>
            <Home/>
        </div>
    );
}
