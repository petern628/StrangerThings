const BASE_URL = "https://strangers-things.herokuapp.com/api/";
const COHORT_NAME = "2211-FTB-ET-WEB-FT";
const API_URL = BASE_URL + COHORT_NAME;

export const authenticateUser = async (username, password, method) => {

    try {
        const response = await fetch(`${API_URL}/users/${method}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                user: {
                    username: username,
                    password: password,
                },
            }),
        });

        const result = await response.json();
        if (!result.data.token) {
            return;
        } else {
            window.localStorage.setItem("token", result.data.token);
            return await me();
        }
    } catch (error) {
        console.error(error);
    }
};

export const me = async () => {

    try {
        const token = window.localStorage.getItem("token");

        if (token) {
            const response = await fetch(`${API_URL}/users/me`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`,
                },
            });

            const { data: user } = await response.json();
            console.log("hey look it is me: ", user);
            return user;
        }
        return;
    } catch (error) {
        console.error(error);
    }
};

export async function registerUser(user) {
    return authenticateUser(user.name, user.password, "register");
};

export async function logIn(user) {
    return authenticateUser(user.name, user.password, "login");
};
