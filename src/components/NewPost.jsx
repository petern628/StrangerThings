import React, { useState } from "react";
import Header from "./Header"

const NewPost = ({ postSubmit }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [location, setLocation] = useState('');
    const [willDeliver, setWillDeliver] = useState(false);
    const changeTitle = (event) => {
        setTitle(event.target.value);
    }
    const changeDescription = (event) => {
        setDescription(event.target.value);
    }
    const changePrice = (event) => {
        setPrice(event.target.value);
    }
    const changeLocation = (event) => {
        setLocation(event.target.value);
    }
    const changeWillDeliver = (event) => {
        setWillDeliver(event.target.checked);
    }
    const formSubmit = () => {
        const post = {
            title,
            description,
            price,
            location,
            willDeliver
        }
        postSubmit(post);
    }

    return (<form onSubmit={(ev) => ev.preventDefault()}>
        <Header />
        <h3>Create a New Post</h3>
        <input name="title" type='text' placeholder="Item Title"
            value={title} onChange={changeTitle} />
        <input name='description' type='text' placeholder="Item Description"
            value={description} onChange={changeDescription} />
        <input name='price' type='text' placeholder='Item Price'
            value={price} onChange={changePrice} />
        <input name='location' type='text' placeholder='location'
            value={location} onChange={changeLocation} />
        <label>
            Will deliver?
            <input name='will-deliver' type='checkbox'
                checked={willDeliver} onChange={changeWillDeliver} />
        </label>
        <input type="submit" value='Create Post' onClick={formSubmit} />
    </form>);
}

export default NewPost;