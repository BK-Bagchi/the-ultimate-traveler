import React from 'react';
import './Sing.css';
import { useHistory } from 'react-router-dom';

const SignIn = () => {
    const history = useHistory();
    return (
        <section className="sign mx-auto d-flex flex-column align-items-center">
            <div className="form">
                <h5 className="text-center mb-4">Login into your account</h5>
                <form className="d-flex flex-column align-items-center">
                    <input type="text" placeholder="Enter name" />
                    <input type="email" placeholder="Enter email" />
                    <input type="password" placeholder="Enter password" />
                    <input type="submit" value="Sign In" />
                </form>
            </div>
            <span onClick={() => history.push("/signUp")}>Don't have an account?</span>
        </section>
    );
};

export default SignIn;