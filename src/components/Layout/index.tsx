import React, { Fragment, memo, useEffect } from 'react';
import { ApplicationContextProvider } from '../Context';
import SearchShow from '../SearchShow';
import ShowList from '../Show/List';
import Header from './Header';

const Layout = () => {
    return (
        <Fragment>
            <div className="header">
                <Header />
            </div>
            <ApplicationContextProvider>
                <div className="main-content">
                    <SearchShow />
                    <ShowList />
                </div>
            </ApplicationContextProvider>
        </Fragment>
    )

};

export default memo(Layout);