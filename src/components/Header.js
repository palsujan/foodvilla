import React from 'react';
import { useState } from "react";
import { Link } from 'react-router-dom';

const Title = () =>(
    <a href="/">
        <img 
            className="logo"
            src="https://yt3.googleusercontent.com/ytc/AL5GRJXudT76175T4x4n7eslWM1YkgNLHDSSqfXGoadl=s900-c-k-c0x00ffffff-no-rj"
            alt="Food villa logo"
        />
    </a>
);
const Header = () =>{
    const [isLoggedIn, setIsLoggedIn] = useState(true)
    return(
        <div className="header">
            <Title/>
            <div className="nav-items">
                <ul>
                    <li>
                        <Link to="/">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/about">
                            About
                        </Link>
                    </li>
                    <li> <Link to="/contact">
                            Contact
                        </Link>
                    </li>
                    <li> 
                        <Link to="/cart">
                            Cart
                        </Link>
                    </li>
                </ul>
            </div>
            {
                isLoggedIn ? (
                <button onClick = { () =>  setIsLoggedIn(false)}>Logout</button>
                ) :  (
                    <button onClick = { () =>  setIsLoggedIn(true)}>Login</button>
                )
            }
           
        </div>
    )
};

export default Header