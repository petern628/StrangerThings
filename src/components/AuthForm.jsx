import React from 'react';
import { authenticateUser } from '../api/auth';
import { Link } from 'react-router-dom';
import Header from './Header';

const AuthForm = ({ name, buttonName }) => {
    const handleSubmit = (event) => {
        event.preventDefault();
        const formName = event.target.name;
        const username = event.target.username.value;
        const password = event.target.password.value;
        if (!username || !password || password.length < 6) {
            console.log('Either no input or password too short');
            return;
        }
        authenticateUser(username, password, formName);
    };

    return (
        <div>
            <Header />
            <form onSubmit={handleSubmit} name={name}>
                <div>
                    <label htmlFor='username'>Username</label>
                    <input type='text' name='username' />
                </div>
                <div>
                    <label htmlFor='password'>Password</label>
                    <input type='password' name='password' />
                </div>
                <button>{buttonName}</button>
                {name === 'login' ? (
                    <p>
                        Not a user yet? <Link to='/signup'>Sign Up Here</Link>!
                    </p>
                ) : (
                    <p>
                        Alreay have an account? <Link to='/login'>Login Here</Link>!
                    </p>
                )}
            </form>
        </div>
    );
};

export const LogIn = <AuthForm name={'login'} buttonName={'Login'} />;
export const SignUp = <AuthForm name={'register'} buttonName={'Register'} />;
