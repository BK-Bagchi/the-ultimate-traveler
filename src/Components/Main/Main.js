import React, { useState } from 'react';
import './Main.css'
import Body from '../Body/Body';
import Header from '../Header/Header';
import SignIn from '../Sign/Signin';
import Location from '../Location/Location';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LocationDetail from '../Location/LocationDetail';
import PrivateRouter from '../PrivateRouter/PrivateRouter';
import NotFound from '../NotFound/NotFound';

export const GlobalData = React.createContext();
const Main = () => {
    const [loginInfo, setLoginInfo] = useState({});

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
                        </Route>
                        <Route path="/booking/:id">
                            <LocationDetail />
                        </Route>
                        <PrivateRouter path="/location/:id">
                            <Location />
                        </PrivateRouter>
                        <Route path="*">
                            <NotFound />
                        </Route>
                    </Switch>
                </Router>
            </GlobalData.Provider>
        </main>
    );
};

export default Main;