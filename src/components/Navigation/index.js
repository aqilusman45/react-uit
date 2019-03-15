import React from 'react';
import { Link , withRouter } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';

import './styles.css';


const Navigation1 = (props) => {
    return (<header className="header">
        <a href={props.location.pathname} className="logo">{props.location.pathname}</a>
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label className="menu-icon" htmlFor="menu-btn"><span className="navicon"></span></label>
        <ul className="menu">
            <li>
                <Link to={ROUTES.HOME}>Home</Link>
            </li>
            <li>
                <Link to={ROUTES.ABOUT}>About</Link>
            </li>
            <li>
                <Link to={ROUTES.TODO}>Todo</Link>
            </li>
            <li>
                <Link to={ROUTES.USERS}>Users</Link>
            </li>
        </ul>
    </header>
);
}

const Navigation = withRouter(Navigation1);

export {Navigation};