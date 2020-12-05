import React, { ChangeEvent, Fragment, SyntheticEvent, useContext, useState } from 'react';
import { Button } from '@material-ui/core';
import fetchShows from '../../actions/fetchShows';
import { ApplicationContext } from '../Context';

const SearchShow = () => {
    const {setShows} = useContext(ApplicationContext);
    const [searchTerm, setSearchTerm] = useState('');

    const onSubmitHandler = (event: SyntheticEvent) => {
        event.preventDefault();
        const shows = fetchShows(searchTerm);
        setShows(shows);
    };

    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    }

    return (
        <Fragment>
            <form onSubmit={onSubmitHandler}>
                <input onChange={onChangeHandler} type="text" placeholder="Search for a show that you like" name="search-show" value={searchTerm}/>
                <Button>Search</Button>
            </form>
        </Fragment>
    )
};

export default SearchShow;