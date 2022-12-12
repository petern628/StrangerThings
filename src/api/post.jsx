const APIURL = "https://strangers-things.herokuapp.com/api/2211-FTB-ET-WEB-FT";

export const getAllPosts = async () => {
    try {
        const response = await fetch(`${APIURL}/posts`);
        const data = await response.json();
        return data;
    } catch (error) {
        throw error;
    }
};

export const createNewPost = async (post, token) => {
    try {
        const response = await fetch(`${APIURL}/posts`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(post),
        });
        const data = await response.json();
        console.log('data from create: ', data);
        return data;
    } catch (error) {
        throw error;
    }
};

export const updateEntirePost = async (postId, post, token) => {
    try {
        const response = await fetch(`${APIURL}/posts/${postId}`, {
            method: 'PUT',
            body: JSON.stringify(post),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        });
        const data = await response.json();
        console.log('data from post: ', data);
        return data;
    } catch (error) {
        throw error;
    }
};

export const updatePartialPost = async (postId, updatedFields, token) => {
    try {
        const response = await fetch(`${APIURL}/posts/${postId}`, {
            method: 'PATCH',
            body: JSON.stringify(updatedFields),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        });
        const data = await response.json();
        console.log('data from patch: ', data);
        return data;
    } catch (error) {
        throw error;
    }
};

export const deletePost = async (postId) => {
    try {
        const response = await fetch(`${APIURL}/posts/101`, {
            method: 'DELETE',
        });
        const data = await response.json();
        console.log('data from delete: ', data);
        return { id: postId };
    } catch (error) {
        throw error;
    }
};