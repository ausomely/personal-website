import './App.css';
import React from 'react';
import Logo from './components/logo';
import Navbar from './components/navbar.js';
import Home from './components/home.js';
import About from './components/about.js';

export default function App() {

    return (
        <div className = 'App'> 
            <Logo/>
            <Navbar/>
            <Home/>
            <About/>
        </div>
    );
}
