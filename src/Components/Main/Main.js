import React from 'react';
import Body from '../Body/Body';
import Header from '../Header/Header';
import SignIn from '../Sign/Signin';
import Signup from '../Sign/Signup';
import './Main.css'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Location from '../Location/Location';

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
                    </Route>
                    <Route path="/signup">
                        <Signup />
                    </Route>
                </Switch>
                <Location />
            </Router>
        </main>
    );
};

export default Main;