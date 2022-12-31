const APIURL = "https://strangers-things.herokuapp.com/api/2211-FTB-ET-WEB-FT";

export const authenticateUser = async (username, password, method) => {
    try {
        const response = await fetch(`${APIURL}/users/${method}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
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
            window.localStorage.setItem('token', result.data.token);

            return await me();
        }
    } catch (error) {
        console.error(error);
    }
};

export const me = async () => {
    try {
        const token = window.localStorage.getItem('token');

        if (token) {
            const response = await fetch(`${APIURL}/users/me`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                },
            });

            const { data: user } = await response.json();
            console.log('hey look it is me: ', user);
            return user;
        }
        return;
    } catch (error) {
        console.error(error);
    }
};