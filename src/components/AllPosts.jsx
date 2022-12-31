import React from 'react';
import {
    createNewPost,
    updateEntirePost,
    updatePartialPost,
    deletePost,
} from '../api/post';
import Button from './Button.jsx';

const AllPosts = ({ allPosts, setAllPosts }) => {
    const postId = 1;
    const postId2 = 2;
    const postId3 = 3;
    const postToCreate = {
        title: 'Our New Post',
        description: 'This post is mostly about the bestestest kitten, my Grim!',
        price: 'free',
    };
    const postToCompletelyUpdate = {
        title: 'Our Updated Post with id: 1',
        body: 'I also have a slither puppy named Nagini!',
        userId: 1,
    };
    const fieldsToUpdate = {
        title: 'Nagini Has Taken the Spot Light! This is id: 2',
    };

    return (
        <div className='user-posts'>
            <h2>
                All Posts
            </h2>

            {/* <Button
                nameOfClass={'create-button'}
                action={async () => {
                    const newPost = await createNewPost(postToCreate);
                    setAllPosts([newPost, ...allPosts]);
                }}
                content={'My New Button Name'}
            /> */}

            <Button
                action={async () => {
                    const newPost = await createNewPost(postToCreate);
                    setAllPosts([newPost, ...allPosts]);
                }}
                content={'Create New Post'}
            />

            <Button
                action={async () => {
                    const updatedPost = await updateEntirePost(
                        postId,
                        postToCompletelyUpdate
                    );
                    const listToReturn = await allPosts.filter(
                        (post) => post.id !== updatedPost.id
                    );
                    setAllPosts([updatedPost, ...listToReturn]);
                }}
                content={'Update PUT Post'}
            />

            <Button
                action={async () => {
                    const updatedPost = await updatePartialPost(postId2, fieldsToUpdate);
                    const listToReturn = await allPosts.filter(
                        (post) => post.id !== updatedPost.id
                    );
                    setAllPosts([updatedPost, ...listToReturn]);
                }}
                content={'Update PATCH Post'}
            />

            <Button
                action={async () => {
                    const postDeleted = await deletePost(postId3);
                    setAllPosts([
                        ...allPosts.filter((post) => post.id !== postDeleted.id),
                    ]);
                }}
                content={'DELETE Post'}
            />

            {allPosts.length ? (
                allPosts.map(({ id, title, description, price }) => (
                    <div key={id} className='post'>
                        <h3>{title} [{price}]</h3>
                        <p>{description}</p>
                    </div>
                ))
            ) : (
                <h3>No Posts Here</h3>
            )}
        </div>
    );
};

export default AllPosts;