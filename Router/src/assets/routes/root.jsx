
// Import the React core library to enable JSX syntax and use React components.
import React from 'react';

// Import Outlet from react-router-dom to act as a placeholder for the nested routes' components.
import { Outlet } from 'react-router-dom';

// Import CSS stylesheets for styling the application.
import '../style.css';
import '../App.css';

// Define and export a functional component named Root. This component serves as the layout component for your app.
export default function Root() {
    return (
        // A React fragment (<></>) is used to return multiple elements without adding an extra node to the DOM.
        <>
            {/* Navigation bar for the site */}
            <nav className='topnav'>
                {/* Website title or logo */}
                <h2>FookBest.com</h2>
                {/* Navigation links to different sections of the app. */}
                <div>
                    <a href="/video">Videos</a> {/* Link to the Videos section */}
                    <a href="/market">Markets</a> {/* Link to the Markets section */}
                    <a href="/group">Groups</a> {/* Link to the Groups section */}
                    <a href="/gaming">Gaming</a> {/* Link to the Gaming section */}
                </div>
            </nav>

            {/* Main content area where the Outlet component is used. */}
            <div id='main-content'>
                {/* Outlet acts as a placeholder that renders the matched child route component. */}
                <Outlet/>
            </div>
        </>
    );
}
