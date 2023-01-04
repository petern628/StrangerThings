const BASE_URL = "https://strangers-things.herokuapp.com/api/";
const COHORT_NAME = "2211-FTB-ET-WEB-FT";
const API_URL = BASE_URL + COHORT_NAME;

export const getAllPosts = async () => {

    try {
        const response = await fetch(`${API_URL}/posts`);
        const data = await response.json();
        console.log(data)
        return data;
    } catch (error) {
        console.error("Couldn't get all post.");
    }
};

export const getAllPostsWithAuth = async (token) => {
    try {
        const response = await fetch(`${API_URL}/posts/`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`,
            },
        });

        const result = await response.json();

        if (result.error)
            throw result.error;

        return result.data.posts;
    } catch (error) {
        console.error("Couldn't get all post with auth.", error);
    }
}

export const getSinglePost = async (postId) => {
    try {
        const response = await fetch(`${API_URL}/posts/`);
        const result = await response.json();

        if (result.error)
            throw result.error;

        const posts = result.data.posts;

        const filteredResult = posts.filter((x) => x._id === postId);

        return filteredResult;
    } catch (error) {
        console.error("Couldn't get post.", error);
    }
}

export const getUserData = async (token) => {
    try {
        const response = await fetch(`${API_URL}/users/me/`, {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
        });

        const result = await response.json();

        if (result.error)
            throw result.error;

        return result.data;
    } catch (error) {
        console.error(
            "Couldn't get User's data.",
            error
        );
    }
}

export const createNewPost = async (post, token) => {

    try {
        const token = window.localStorage.getItem("token");

        if (!token) {
            const error = new Error('Must login to create post.');
            throw error;
        }
        const response = await fetch(`${API_URL}/posts/`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`,
            },
            body: JSON.stringify({ post }),
        });

        const result = await response.json();

        if (result.error) throw result.error;

        return result.data.post;
    } catch (error) {
        console.error(`Couldn't create post.`, error);
    }
}

export const deletePost = async (id, token) => {
    try {
        const response = await fetch(`${API_URL}/posts/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
        });

        const result = await response.json();

        return result;
    } catch (error) {
        console.error("Could't delete post.", error);
    }
}

export const createMessage = async (postId, token, message) => {
    try {
        const response = await fetch(`${API_URL}/posts/${postId}/messages/`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify(message),
        });

        const result = await response.json();

        return result.data;
    } catch (error) {
        console.error(`Could't create message.`, error);
    }
}