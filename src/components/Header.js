import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <NavLink exact to="/" className="item" activeClassName="active">To do</NavLink>
            <NavLink to="/stopwatch" className="item" activeClassName="active">스톱워치</NavLink>
            <NavLink to="/timer" className="item" activeClassName="active">타이머</NavLink>
        </div>
    );
};
 
export default Header;