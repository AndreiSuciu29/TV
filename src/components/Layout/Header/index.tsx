import React from 'react';
import { Link } from 'react-router-dom';
import SearchShow from '../../SearchShow';
import './Header.css';

const Header = () => {
    return (
        <div className="header-container">
            <Link to="/">
            <div className="logo">
                <img src={process.env.PUBLIC_URL + '/logo192.png'} alt="Logo" />
            </div>
            </Link>
            <div className="search-container">
                <SearchShow />
            </div>
        </div>
    );
};

export default Header;
