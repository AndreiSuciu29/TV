import React, { ChangeEvent, Fragment, SyntheticEvent, useContext, useState } from 'react';
import { Button, Input, } from '@material-ui/core';
import styled from "styled-components";
import fetchShows from '../../actions/fetchShows';
import { ApplicationContext } from '../Context';
import './SearchShow.css';

const StyledInput = styled(Input)`
    && {
        color: #000;
        display: flex;
        padding-right: 20px;
        background-color: #fff;
    }
`;

const StyledButton = styled(Button)`
    && {
        color: #fff;
    }
`;

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
            <form onSubmit={onSubmitHandler} className="search-form">
                <StyledInput onChange={onChangeHandler}/>
                <StyledButton onClick={onSubmitHandler}>Search</StyledButton>
            </form>
        </Fragment>
    )
};

export default SearchShow;