import React, { Fragment, memo, useEffect } from 'react';
import { ApplicationContextProvider } from '../Context';
import SearchShow from '../SearchShow';
import ShowList from '../Show/List';
import Header from './Header';
import './Layout.css';

const Layout = () => {
    return (
        <Fragment>
            <div className="header">
                <Header />
            </div>
            <ApplicationContextProvider>
                <div className="main-content" style={{ background: `url('${process.env.PUBLIC_URL}/tv_shows_background.jpg')`, backgroundRepeat: 'repeat'}}>
                    <SearchShow />
                    <ShowList />
                </div>
            </ApplicationContextProvider>
        </Fragment>
    )

};

export default memo(Layout);