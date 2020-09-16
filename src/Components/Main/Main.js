import React from 'react';
import './Main.css'
import Body from '../Body/Body';
import Header from '../Header/Header';
import SignIn from '../Sign/Signin';
import Signup from '../Sign/Signup';
import Location from '../Location/Location';
import Firebase from '../Sign/Firebase';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LocationDetail from '../Location/LocationDetail';

const Main = () => {
    return (
        <main className="main-container m-0">
            <Router>
                <Header />
                <Switch>
                    <Route exact path="/">
                        <Body />
                    </Route>
                    <Route path="/login">
                        <SignIn />
                        <Firebase />
                    </Route>
                    <Route path="/signup">
                        <Signup />
                        <Firebase />
                    </Route>
                    <Route path="/booking">
                        <LocationDetail />
                    </Route>
                </Switch>
                {/* <Location /> */}
            </Router>
        </main>
    );
};

export default Main;