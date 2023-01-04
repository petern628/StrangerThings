import React from 'react';
import { NavLink } from 'react-router-dom';
import '../index.css'

const Navbar = () => {
    return (
        <nav>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/login'>Login</NavLink>
            <NavLink to='/logout'>LogOut</NavLink>
        </nav>
    );
};

export default Navbar;