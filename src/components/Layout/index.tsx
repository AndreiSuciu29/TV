import React, { Fragment, memo } from 'react';
import ShowList from '../Show/List';
import Header from './Header';

const Layout = () => {
    return (
        <Fragment>
            <div className="header">
                <Header />
            </div>
            <div className="main-content">
                <ShowList />
            </div>
        </Fragment>
    )

};

export default memo(Layout);