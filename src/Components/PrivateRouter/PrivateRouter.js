import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { GlobalData } from '../Main/Main';

const PrivateRouter = ({ children, ...rest }) => {
    const [loginInfo] = useContext(GlobalData);
    return (
        <Route
            {...rest}
            render={({ location }) =>
                loginInfo.isLoggedIn ? (
                    children
                ) : (
                        <Redirect
                            to={{
                                pathname: "/login",
                                state: { from: location }
                            }}
                        />
                    )
            }
        />
    );
};

export default PrivateRouter;