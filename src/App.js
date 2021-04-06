import './App.css';
import React from 'react';
import Logo from './components/logo';
import Navbar from './components/navbar';
import Home from './components/home';
import About from './components/about';
import Skills from './components/skills';
import Portfolio from './components/portfolio';



export default function App() {

    return (
        <div className = 'App'> 
            <Logo/>
            <Navbar/>
            <Home/>
            <About/>
            <Skills/>
            <Portfolio/>
        </div>
    );
}
