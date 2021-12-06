import React from 'react';
import {
    Blog,
    Footer,
    Header,
    Features,
    Possobility,
    WhatGTP3,
} from './container';
import { CallToAction, Navbar, Brand } from './components';
import './App.css';

export default function App() {
    return (
        <div className="App">
            <div className="gradient__bg">
                <Navbar />
                <Header />
            </div>
            <Brand />
            <WhatGTP3 />
            <Features />
            <Possobility />
            <CallToAction />
            <Blog />
            <Footer />
        </div>
    );
}
