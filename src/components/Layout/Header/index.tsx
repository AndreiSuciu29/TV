import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div className="header-container">
            <div className="logo">
                <img src={process.env.PUBLIC_URL + '/logo192.png'} alt="Logo" />
            </div>
            <div className="title">
                <p>Application designed to view TV shows and movies</p>
            </div>
        </div>
    );
};

export default Header;