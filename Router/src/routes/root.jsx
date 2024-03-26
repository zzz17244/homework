import React from 'react';
import { Outlet } from 'react-router-dom';
import '../style.css';
import '../App.css';

export default function Root() {
    return (
        <>
            <nav className='topnav'>
                <h2>FookBest.com</h2>
                <div>
                    <a href="/About">About</a>
                    <a href="/Job">Job</a>
                    <a href="/Portfolio">Portfolio</a>
                    <a href="/Skill">Skill</a>
                </div>
            </nav>
            <div id='main-content'>
                <Outlet/>
            </div>
        </>
    );
}

