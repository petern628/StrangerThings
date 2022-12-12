import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './Header.css';
import Navbar from './Navbar';
import { Signup, Login } from './AuthForm';

const Header = () => {
    return (
        <header>
            <h1>Welcome to Stranger's Things</h1>
            <Navbar />
            <Routes>
                <Route path='/login' element={Login} />
                <Route path='/signup' element={Signup} />
            </Routes>
        </header>
    );
};

export default Header;