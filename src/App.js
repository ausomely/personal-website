import './App.css';
import React from 'react';
import Logo from './components/logo';
import Navbar from './components/navbar';
import Home from './components/home';
import About from './components/about';
import Skills from './components/skills';
import Portfolio from './components/portfolio';
import Contact from './components/contact';
import Aos from 'aos';
import 'aos/dist/aos.css';


Aos.init();

window.onbeforeunload = function () {
    window.scrollTo(0, 0);
};

export default function App() {
    return (
        <div className = 'App'> 
            <Logo/>
            <Navbar/>
            <Home /> 
            <About/>
            <Skills/>
            <Portfolio/>
            <Contact/>
        </div>
        
    );
}
