import React, { useContext } from 'react';
import MainLogo from '../../Resources/Logo.png'
import './Header.css'
import { Link, useHistory } from 'react-router-dom';
import { GlobalData } from '../Main/Main';

const Header = () => {
    const [loginInfo] = useContext(GlobalData);
    const history = useHistory();
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <img className="main-logo" src={MainLogo} alt="" />
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <form className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2 search" type="search" placeholder="Search" aria-label="Search" />
                </form>
                <ul className="navbar-nav ml-auto d-flex align-items-center">
                    <Link to="/"><li className="nav-item active"> Home</li></Link>
                    <li className="nav-item active"> News</li>
                    <li className="nav-item active"> Destination</li>
                    <li className="nav-item active"> Blog</li>
                    <li className="nav-item active"> Contact</li>
                    {
                        loginInfo.isLoggedIn ?
                            <button className="login" onClick={() => history.push("/")}>Profile</button> :
                            <button className="login" onClick={() => history.push("/login")}>Login</button>
                    }
                </ul>
            </div>
        </nav>
    );
};

export default Header;