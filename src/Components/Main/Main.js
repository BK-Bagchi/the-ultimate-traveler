import React, { useState } from 'react';
import './Main.css'
import Body from '../Body/Body';
import Header from '../Header/Header';
import SignIn from '../Sign/Signin';
import Signup from '../Sign/Signup';
import Location from '../Location/Location';
import Firebase from '../Sign/Firebase';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LocationDetail from '../Location/LocationDetail';

export const GlobalData = React.createContext();
const Main = () => {
    const [loginInfo, setLoginInfo] = useState({});
    console.log(loginInfo);
    return (
        <main className="main-container m-0">
            <GlobalData.Provider value={[loginInfo, setLoginInfo]}>
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
                        <Route path="/booking">
                            <Location />
                        </Route>
                    </Switch>
                </Router>
            </GlobalData.Provider>
        </main>
    );
};

export default Main;