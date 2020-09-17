import React, { useState } from 'react';
import './Sing.css';
import { useHistory } from 'react-router-dom';

const SignIn = () => {
    const history = useHistory();
    const [error, setErrorMessage] = useState({
        email: '',
        password: '',
    });
    const [formData, getFormData] = useState({
        email: '',
        password: ''
    })

    const crossCheck = (errorKey, formKey, value, err) => {
        getFormData({ ...formData, [formKey]: value })
        setErrorMessage({ ...error, [errorKey]: err })
    }

    const formFieldValidation = (e) => {
        const fieldName = e.target.name;
        const fieldValue = e.target.value;

        if (fieldName === "email") {
            if (/\S+@\S+\.\S+/.test(fieldValue)) {
                crossCheck('email', 'email', fieldValue, '')
            }
            else {
                crossCheck('email', 'email', '', 'Email not valid')
            }
        }
        else if (fieldName === 'password') {
            if (fieldValue.length >= 8 && /[a-zA-Z]{3,}/.test(fieldValue)) {
                crossCheck('password', 'password', fieldValue, '')
            }
            else {
                crossCheck('password', 'password', '', 'Enter same password in 2 fields')
            }
        }

    }

    console.log(formData);
    const loginIntoAccount = (e) => {
        e.preventDefault();
        const { email, password } = formData;
        if (email && password) {
            console.log(formData);
            console.log(error);
        }
    }
    return (
        <section className="sign mx-auto d-flex flex-column align-items-center">
            <div className="form">
                <h5 className="text-center mb-4">Login into your account</h5>
                <form className="d-flex flex-column align-items-center">
                    <input name="email" type="email" placeholder="Enter email" onBlur={formFieldValidation} />
                    <span className="align-self-start">{error.email}</span>

                    <input name="password" type="password" placeholder="Enter password" onBlur={formFieldValidation} />
                    <span className="align-self-start">{error.password}</span>

                    <input type="submit" value="Sign In" onClick={loginIntoAccount} />
                </form>
            </div>
            <span onClick={() => history.push("/signUp")}>Don't have an account?</span>
        </section>
    );
};

export default SignIn;