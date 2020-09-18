import React from 'react';
import { useHistory } from 'react-router-dom';
import './NotFound.css'

const NotFound = () => {
    const history = useHistory();
    return (
        <section className="not-found w-50 text-center mx-auto">
            <h1>Sorry, no page was found</h1>
            <button className="back-to-home" onClick={() => history.push("/")}>Go back to home</button>
        </section>
    );
};

export default NotFound;