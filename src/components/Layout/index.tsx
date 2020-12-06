import React, { Fragment } from 'react';
import Routes from '../Routes';
import Header from './Header';
import './Layout.css';

const Layout = () => {
    return (
        <Fragment>
            <div className="header">
                <Header />
            </div>
            <div className="main-content" style={{
                background: `url('${process.env.PUBLIC_URL}/tv_shows_background.jpg')`,
                backgroundRepeat: 'repeat',
                paddingTop: 20
            }}>
                <Routes />
            </div>
        </Fragment>
    );
};

export default Layout;
