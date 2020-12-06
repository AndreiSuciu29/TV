import React, { ChangeEvent, Fragment, SyntheticEvent, useContext, useState } from 'react';
import { Button, Input} from '@material-ui/core';
import styled from "styled-components";
import { searchShows } from '../../actions/shows';
import { ShowsContext } from '../Context/ShowsContext';
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
    const {setShows} = useContext(ShowsContext);
    const [searchTerm, setSearchTerm] = useState('');

    const onSubmitHandler = (event: SyntheticEvent) => {
        event.preventDefault();
        const shows = searchShows(searchTerm);
        setShows(shows);
        setSearchTerm('');
    };

    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    }

    return (
        <Fragment>
            <form onSubmit={onSubmitHandler} className="search-form">
                <StyledInput onChange={onChangeHandler} value={searchTerm}/>
                <StyledButton onClick={onSubmitHandler}>Search</StyledButton>
            </form>
        </Fragment>
    )
};

export default SearchShow;
