import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';

import {
    Route,
    Navigate,
    createBrowserRouter,
    createRoutesFromElements,
    RouterProvider,
} from 'react-router-dom';

import { Header, AllPosts } from './components';
import { getAllPosts } from './api/post';
import './index.css'
// import login from './components/AuthForm'
// import register from './components/AuthForm'


const App = () => {
    const [allPosts, setAllPosts] = useState([]);
    const fetchAllPost = async () => {
        const { data } = await getAllPosts();
        setAllPosts(data.posts)
    }
    useEffect(() => {
        fetchAllPost();
    }, []);

    return (
        <div id='App'>
            <Header />
            <AllPosts allPosts={allPosts} setAllPosts={setAllPosts} />
        </div>
    );
};

const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path='/' element={<App />} />
            {/* <Route path='/login' element={login} />
            <Route path='/register' element={register} /> */}
        </>
    )
);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);