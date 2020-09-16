import React, { useContext, useEffect } from 'react';
import './Sing.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGoogle } from '@fortawesome/free-brands-svg-icons'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'

import firebaseConfig from './FirebaseConfig';
import * as firebase from "firebase/app";
import "firebase/auth";
import { GlobalData } from '../Main/Main';

firebase.initializeApp(firebaseConfig);
const Firebase = () => {
    const [loginInfo, setLoginInfo] = useContext(GlobalData);
    const receivedLoginInfo = (name, email) => {
        setLoginInfo({
            ...loginInfo,
            isLoggedIn: true,
            displayName: name,
            email: email
        })
    }


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

    return (
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
    );
};

export default Firebase;