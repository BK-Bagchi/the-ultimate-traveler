import React, { useState, useContext } from 'react';
import './Sing.css';
import { useHistory, useLocation } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGoogle } from '@fortawesome/free-brands-svg-icons'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'

import firebaseConfig from './FirebaseConfig';
import * as firebase from "firebase/app";
import "firebase/auth";
import { GlobalData } from '../Main/Main';

let tempPassword = ''
firebase.initializeApp(firebaseConfig);
const SignIn = () => {
    const [switchForm, setSwitchForm] = useState(true)
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    const [loginInfo, setLoginInfo] = useContext(GlobalData);
    const receivedLoginInfo = (name, email) => {
        setLoginInfo({
            ...loginInfo,
            isLoggedIn: true,
            displayName: name,
            email: email
        })
        history.replace(from);
    }

    /*------------------sign in page activity------------------ */
    const [signInError, setSignInError] = useState({
        email: '',
        password: '',
    });
    const [sinInFormData, getSignInFormData] = useState({
        email: '',
        password: ''
    })
    const signInCrossCheck = (errorKey, formKey, value, err) => {
        getSignInFormData({ ...sinInFormData, [formKey]: value })
        setSignInError({ ...signInError, [errorKey]: err })
    }
    const loginFormFieldValidation = (e) => {
        const fieldName = e.target.name;
        const fieldValue = e.target.value;

        if (fieldName === "email") {
            if (/\S+@\S+\.\S+/.test(fieldValue)) {
                signInCrossCheck('email', 'email', fieldValue, '')
            }
            else {
                signInCrossCheck('email', 'email', '', 'Email not valid')
            }
        }
        else if (fieldName === 'password') {
            if (fieldValue.length >= 8 && /[a-zA-Z]{3,}/.test(fieldValue)) {
                signInCrossCheck('password', 'password', fieldValue, '')
            }
            else {
                signInCrossCheck('password', 'password', '', 'Must use 3 or more letter. Total 8 or more digit')
            }
        }

    }
    const loginIntoAccount = (e) => {
        e.preventDefault();
        const { email, password } = sinInFormData;
        if (email && password) {
            firebase.auth().signInWithEmailAndPassword(email, password)
                .then(res => {
                    receivedLoginInfo(res.user.displayName, res.user.email)
                })
                .catch((error) => {
                    const { code, message, email, credential } = error;
                    console.log(code, "| |", message, "| |", email, "| |", credential);
                    signInCrossCheck('password', 'password', '', message)
                });
        }
    }
    /*------------------sign in page activity------------------ */


    /*------------------sign up page activity------------------ */
    const [singUpError, setSignUpError] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    });
    const [signUpFormData, getFormData] = useState({
        displayName: '',
        email: '',
        password: ''
    })

    const signUpCrossCheck = (errorKey, formKey, value, err) => {
        getFormData({ ...signUpFormData, [formKey]: value })
        setSignUpError({ ...singUpError, [errorKey]: err })
    }

    const signUpFormFieldValidation = (e) => {
        const fieldName = e.target.name;
        const fieldValue = e.target.value;

        if (fieldName === 'userEmail') {
            if (/\S+@\S+\.\S+/.test(fieldValue)) {
                signUpCrossCheck('email', 'email', fieldValue, '')
            }
            else {
                signUpCrossCheck('email', 'email', '', 'Email not valid')
            }
        }
        else if (fieldName === 'password') {
            if (fieldValue.length >= 8 && /[a-zA-Z]{3,}/.test(fieldValue)) {
                tempPassword = fieldValue
                setSignUpError({ ...singUpError, password: '' })
            }
            else {
                setSignUpError({ ...singUpError, password: 'Must use 3 or more letter. Total 8 or more digit' })
            }
        }
        else if (fieldName === 'confirmPassword') {
            if (tempPassword === fieldValue) {
                signUpCrossCheck('confirmPassword', 'password', fieldValue, '')
            }
            else {
                signUpCrossCheck('confirmPassword', 'password', '', 'Enter same password in 2 fields')
            }
        }
        else if (fieldName === 'userName') {
            if (fieldValue !== " " && fieldValue.length >= 3 && /[a-zA-Z]{3,}/.test(fieldValue)) {
                signUpCrossCheck('name', 'displayName', fieldValue, '')
            }
            else {
                signUpCrossCheck('name', 'displayName', '', 'Enter your valid name')
            }
        }
    }

    const updateUserInfo = displayName => {
        const user = firebase.auth().currentUser;
        user.updateProfile({
            displayName: displayName,
        })
            .then(() => {
                console.log("User Info Updated");
            })
            .catch((error) => {
                const { code, message, email, credential } = error;
                console.log(code, "| |", message, "| |", email, "| |", credential);
            });
    }

    const createAccount = (e) => {
        e.preventDefault()
        const { displayName, email, password } = signUpFormData
        if (displayName && email && password) {
            firebase.auth().createUserWithEmailAndPassword(email, password)
                .then(response => {
                    setSwitchForm(true)
                    updateUserInfo(displayName)
                    receivedLoginInfo(displayName, email)
                })
                .catch((error) => {
                    const { code, message, email, credential } = error;
                    console.log(code, "| |", message, "| |", email, "| |", credential);
                    signUpCrossCheck('confirmPassword', 'password', '', message)
                });
        }
    }
    /*------------------sign up page activity------------------ */



    /*-----------------online accounts login--------------------- */
    /*---------------google authentication-----------------*/
    const google = new firebase.auth.GoogleAuthProvider();
    const googleAuth = () => {
        firebase.auth().signInWithPopup(google)
            .then((result) => {
                const { displayName, email } = result.user
                receivedLoginInfo(displayName, email)
            })
            .catch((error) => {
                const { code, message, email, credential } = error;
                console.log(code, "| |", message, "| |", email, "| |", credential);
            });
    }
    /*---------------google authentication-----------------*/


    /*----------------facebook authentication-----------------*/
    const facebook = new firebase.auth.FacebookAuthProvider();
    const facebookAuth = () => {
        firebase.auth().signInWithPopup(facebook)
            .then((result) => {
                const { displayName, email } = result.user
                receivedLoginInfo(displayName, email)
            })
            .catch((error) => {
                const { code, message, email, credential } = error;
                console.log(code, "| |", message, "| |", email, "| |", credential);
            });
    }
    /*---------------facebook authentication-----------------*/


    /*---------------twitter authentication-----------------*/
    const twitter = new firebase.auth.TwitterAuthProvider();
    const twitterAuth = () => {
        firebase.auth().signInWithPopup(twitter)
            .then((result) => {
                const { displayName, email } = result.user
                receivedLoginInfo(displayName, email)
            })
            .catch((error) => {
                const { code, message, email, credential } = error;
                console.log(code, "| |", message, "| |", email, "| |", credential);
            });
    }
    /*---------------twitter authentication-----------------*/
    /*-----------------online accounts login--------------------- */




    return (
        <>
            {
                switchForm ?
                    <section className="sign mx-auto d-flex flex-column align-items-center">
                        <div className="form">
                            <h5 className="text-center mb-4">Login into your account</h5>
                            <form className="d-flex flex-column align-items-center">
                                <input name="email" type="email" placeholder="Enter email" onBlur={loginFormFieldValidation} />
                                <span className="align-self-start">{signInError.email}</span>

                                <input name="password" type="password" placeholder="Enter password" onBlur={loginFormFieldValidation} />
                                <span className="align-self-start">{signInError.password}</span>

                                <input type="submit" value="Sign In" onClick={loginIntoAccount} />
                            </form>
                        </div>
                        <span onClick={() => { setSwitchForm(false); }}>Don't have an account?</span>
                    </section> :
                    <section className="sign mx-auto d-flex flex-column align-items-center">
                        <div className="form">
                            <h5 className="text-center mb-4">Create a new account</h5>
                            <form className="d-flex flex-column align-items-center" onSubmit={createAccount}>
                                <input name="userName" type="text" placeholder="Enter name" onBlur={signUpFormFieldValidation} />
                                <span className="align-self-start">{singUpError.name}</span>

                                <input name="userEmail" type="text" placeholder="Enter email" onBlur={signUpFormFieldValidation} />
                                <span className="align-self-start">{singUpError.email}</span>

                                <input name="password" type="password" placeholder="Enter password" onBlur={signUpFormFieldValidation} />
                                <span className="align-self-start">{singUpError.password}</span>

                                <input name="confirmPassword" type="password" placeholder="Confirm password" onBlur={signUpFormFieldValidation} />
                                <span className="align-self-start">{singUpError.confirmPassword}</span>
                                <input type="submit" value="Sign Up" />
                            </form>
                        </div>
                        <span onClick={() => { setSwitchForm(true) }}>Already have an account?</span>
                    </section>
            }
            <section className="firebase-online-accounts mx-auto">
                <p className="my-4 text-center continue-with">or continue with</p>
                <div className="row">
                    <div className="col-md-4 brands google" onClick={googleAuth}>
                        <FontAwesomeIcon icon={faGoogle} />
                    </div>
                    <div className="col-md-4 brands facebook" onClick={facebookAuth}>
                        <FontAwesomeIcon icon={faFacebook} />
                    </div>
                    <div className="col-md-4 brands twitter" onClick={twitterAuth}>
                        <FontAwesomeIcon icon={faTwitter} />
                    </div>
                </div>
            </section>
        </>
    );
};

export default SignIn;