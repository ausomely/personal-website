import './App.css';
import React from 'react';
import Navbar from './components/navbar.js';
import Home from './components/home.js';

export default function App() {

    return (
        <div className = 'App'> 
            <Navbar/>
            <Home/>
        </div>
    );
}
