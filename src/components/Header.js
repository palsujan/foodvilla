import React from 'react';
import { useState, useContext } from "react";
import { Link } from 'react-router-dom';
import useOnline from '../utils/useOnline';
import {UserContext} from "../utils/UserContext"
import { useSelector } from 'react-redux';
import store from '../utils/store';

const Title = () =>(
    <Link to="/">
        <img 
            className="logo"
            src="https://yt3.googleusercontent.com/ytc/AL5GRJXudT76175T4x4n7eslWM1YkgNLHDSSqfXGoadl=s900-c-k-c0x00ffffff-no-rj"
            alt="Food villa logo"
        />
    </Link>
);
const Header = () =>{
    const [isLoggedIn, setIsLoggedIn] = useState(true);
    // const isLoggedIn = useAuth();
    const isOnline = useOnline();  
    const {user} =  useContext(UserContext); 
    const cartItems = useSelector( store => store.cart.items);
    console.log(cartItems);
    return(
        <div className='bg-header'>
            <div className='container'>
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
                            Cart - {cartItems.length}
                        </Link>
                    </li>
                    <li> 
                        <Link to="/instamart">
                            Instamart
                        </Link>
                    </li>
                </ul>
            </div>
            <h1>{isOnline ? `✅${user.name}` : " 🔴Offline"}</h1>
            {/* <h2>{user.name}</h2> */}
            {
                isLoggedIn ? (
                <button onClick = { () =>  setIsLoggedIn(false)}>Logout</button>
                ) :  (
                    <button onClick = { () =>  setIsLoggedIn(true)}>Login</button>
                )
            }
           
        </div>
        </div>
        </div>
    )
};

export default Header