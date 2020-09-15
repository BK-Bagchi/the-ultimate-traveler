import React from 'react';
import './Sing.css';
import { useHistory } from 'react-router-dom';
const Signup = () => {
    const history = useHistory();
    return (
        <section className="sign mx-auto d-flex flex-column align-items-center">
            <div className="form">
                <h5 className="text-center mb-4">Create a new account</h5>
                <form className="d-flex flex-column align-items-center">
                    <input type="text" placeholder="Enter name" />
                    <input type="email" placeholder="Enter email" />
                    <input type="password" placeholder="Enter password" />
                    <input type="password" placeholder="Confirm password" />
                    <input type="submit" value="Sign Up" />
                </form>
            </div>
            <span onClick={() => history.push("/logIn")}>Already have an account?</span>
        </section>
    );
};

export default Signup;