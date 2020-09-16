import React, { useState } from 'react';
import './Sing.css';
import { useHistory } from 'react-router-dom';

let tempPassword = '', isFormValid = false;
const Signup = () => {
    const history = useHistory();
    const [error, setErrorMessage] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    });
    const [formData, getFormData] = useState({
        displayName: '',
        email: '',
        password: ''
    })

    const crossCheck = (errorKey, formKey, value, boolean, err) => {
        getFormData({ ...formData, [formKey]: value })
        setErrorMessage({ ...error, [errorKey]: err })
        isFormValid = boolean
    }

    const formFieldValidation = (e) => {
        const fieldName = e.target.name;
        const fieldValue = e.target.value;

        if (fieldName === 'userEmail') {
            const regex = /\S+@\S+\.\S+/;
            if (/\S+@\S+\.\S+/.test(fieldValue)) {
                crossCheck('email', 'email', fieldValue, true, '')
            }
            else {
                crossCheck('email', 'email', '', false, 'Email not valid')
            }
        }
        else if (fieldName === 'password') {
            if (fieldValue.length >= 8 && /[a-zA-Z]{3,}/.test(fieldValue)) {
                tempPassword = fieldValue
                isFormValid = true
                setErrorMessage({ ...error, password: '' })
            }
            else {
                isFormValid = false
                setErrorMessage({ ...error, password: 'Must use 3 or more letter. Total 8 or more digit' })
            }
        }
        else if (fieldName === 'confirmPassword') {
            if (tempPassword === fieldValue) {
                crossCheck('confirmPassword', 'password', fieldValue, true, '')
            }
            else {
                crossCheck('confirmPassword', 'password', '', false, 'Enter same password in 2 fields')
            }
        }
        else if (fieldName === 'userName') {
            if (fieldValue !== " " && fieldValue.length >= 3 && /[a-zA-Z]{3,}/.test(fieldValue)) {
                crossCheck('name', 'displayName', fieldValue, true, '')
            }
            else {
                crossCheck('name', 'displayName', '', false, 'Enter your valid name')
            }
        }
    }


    // console.log(formData);
    const createAccount = (e) => {
        e.preventDefault();
        if (isFormValid) {
            console.log(formData);
            console.log(error);
        }
    }

    return (
        <section className="sign mx-auto d-flex flex-column align-items-center">
            <div className="form">
                <h5 className="text-center mb-4">Create a new account</h5>
                <form className="d-flex flex-column align-items-center" onSubmit={createAccount}>
                    <input name="userName" type="text" placeholder="Enter name" onBlur={formFieldValidation} />
                    <span className="align-self-start">{error.name}</span>

                    <input name="userEmail" type="text" placeholder="Enter email" onBlur={formFieldValidation} />
                    <span className="align-self-start">{error.email}</span>

                    <input name="password" type="password" placeholder="Enter password" onBlur={formFieldValidation} />
                    <span className="align-self-start">{error.password}</span>

                    <input name="confirmPassword" type="password" placeholder="Confirm password" onBlur={formFieldValidation} />
                    <span className="align-self-start">{error.confirmPassword}</span>
                    <input type="submit" value="Sign Up" />
                </form>
            </div>
            <span onClick={() => history.push("/logIn")}>Already have an account?</span>
        </section>
    );
};

export default Signup;