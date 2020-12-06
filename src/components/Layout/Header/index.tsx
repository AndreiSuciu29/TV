import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import SearchShow from '../../SearchShow';
import './Header.css';

const Header = () => {
    let location = useLocation<any>();

    return (
        <div className="header-container">
            <Link to="/">
            <div className="logo">
                <img src={process.env.PUBLIC_URL + '/logo192.png'} alt="Logo" />
            </div>
            </Link>
            { location.pathname === '/' && <div className="search-container">
                <SearchShow />
            </div>
            }
        </div>
    );
};

export default Header;
