/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { NavLink } from 'react-router-dom';

import './navbar.css';

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="container">
                <h3 className="navbar__title">Навигация</h3>
                <ul className="navbar__menu">
                    <li>
                        <NavLink to="/profile">Profile</NavLink>
                    </li>
                    <li>
                        <NavLink to="/dialogs">Message</NavLink>
                    </li>
                    <li>
                        <NavLink to="/news">News</NavLink>
                    </li>
                    <li>
                        <NavLink to="#">Music</NavLink>
                    </li>
                    <li>
                        <NavLink to="#">Setting</NavLink>
                    </li>
                </ul>
            </div>
        </div> 
    );
};

export default Navbar;
