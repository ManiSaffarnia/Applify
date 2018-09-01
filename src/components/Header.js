import React from 'react';
import {NavLink} from 'react-router-dom'
import ApplifyDashboard from './ApplifyDashboard';

const Header = () => (
    <div className="header-container">
        <div className="container">
            <h1 className="logo">Applify</h1>
            <div className="line"/>
            <div>
                <NavLink to="/" exact activeClassName="is-active" className="nav-link">Search</NavLink><span className="nav-link">|</span>
                <NavLink to="/fav" activeClassName="is-active" className="nav-link">Favorite</NavLink>
            </div>

            <br/>
        </div>
    </div>
);

export default Header;