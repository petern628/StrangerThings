import React from 'react';
import { useState } from "react";

const Posts = ({ allPosts, deleteMessage, postMessage, loggedIn }) => {
    const [message, setMessage] = useState('');
    const messageChange = ev => {
        setMessage(ev.target.value);
    }

    return allPosts.map((post) => {

        return (<div key={post._id} className="post">
            <h2><a href="#">{post.title}</a> {post.price}</h2>
            <span><b>Location:</b> {post.location} Will Deliver: {!post.willDeliver ? "Yes" : "No"}</span>
            <p>{post.description}</p>
            {
                post.isAuthor ?
                    <div><button onClick={() => deleteMessage(post._id)}>Delete</button></div> : ''
            }
            {
                loggedIn && !post.isAuthor ?
                    <div>
                        <input type="text" onChange={messageChange} />
                        <button onClick={() => postMessage(post._id, message)}>Create Message</button>
                    </div> : ''
            }
            {
                post.isAuthor ?
                    (post.message ?? []).map(msg => {
                        return (
                            <div key={msg._id}>
                                <p>{msg.content}</p>
                            </div>
                        )
                    }) : ''
            }
        </div>)
    });

}

export default Posts;