import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';

import {
    Route,
    Navigate,
    createBrowserRouter,
    createRoutesFromElements,
    RouterProvider,
} from 'react-router-dom';

import { SignUp, LogIn } from './components/AuthForm'
import { Home } from './components';
import './index.css'


const App = () => {
    return;
}

const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={LogIn} />
            {/* <Route path="/logout" element={Logout} /> */}
            <Route path='/signup' element={SignUp} />
            <Route path='*' element={<Navigate replace to='/' />} />
        </>
    )
);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);