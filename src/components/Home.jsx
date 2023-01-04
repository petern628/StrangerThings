import React, { useEffect, useState } from 'react';
import Posts from './Posts';
import { createMessage, createNewPost, deletePost, getAllPosts, getAllPostsWithAuth } from '../api/Utils';
import NewPost from './NewPost';

const Home = () => {
    const token = window.localStorage.getItem("token");
    const [posts, setPosts] = useState([]);
    const postSubmit = (post) => {
        createNewPost(post);
        setPosts([{ ...post, _id: posts.length }, ...posts]);
    }
    const handleDelete = (id) => {
        deletePost(id, token)
        setPosts(posts.filter((post) => post._id !== id))
    }
    const handlePostMessage = (postId, message) => {
        const newMessage = createMessage(postId, token, { message: { content: message } });
        const post = posts.filter(post => post._id === postId)[0];
        const messages = posts.message ?? [];
        const newPost = { ...post, message: [newMessage, ...messages] };
        setPosts(posts.map((post) => post._id === postId ? newPost : post));
    }
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        if (localStorage.getItem('token'))
            setIsLoggedIn(true)
    }, []);
    useEffect(() => {
        const fetchInitialData = async () => {
            if (token) {
                setPosts(await getAllPostsWithAuth(token));
            }
            else {
                setPosts(await getAllPosts());
            }
        };
        fetchInitialData();
    }, []);
    return (
        <>
            {token ? (
                <NewPost postSubmit={postSubmit} />
            ) : (
                ''
            )}
            <Posts allPosts={posts} handleDelete={handleDelete} handlePostMessage={handlePostMessage} isLoggedIn={isLoggedIn} />
        </>
    );
};

export default Home;