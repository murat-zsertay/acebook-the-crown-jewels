//import React from 'react';
import './navBar.css';
import React, { useState } from 'react';



const NavBar = ({currentPage}) => {

    return(
        <>
            <div class="topnav">
                <div id="logo">
                    <h1>ACEBOOK</h1>
                </div>
                <div class="topnav-right">
                    <a href="/">Home</a>
                    <a href="/login">Login</a>
                    <a href="/signup">Sign-Up</a>
                    <a href="/posts">Posts</a>
                </div>
            </div>
            {currentPage}
        </>
    )
}

export default NavBar;