import React from 'react';
import { NavLink } from 'react-router-dom';
import '../index.css'

const Navbar = () => {
    return (
        <nav>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/login'>Login</NavLink>
            <NavLink to='/signup'>Register</NavLink>
        </nav>
    );
};

export default Navbar;