import React, { useContext, memo } from 'react';
import ShowCard from '../Card';
import './List.css';
import { ApplicationContext } from '../../Context';

const ShowList = () => {
    const {shows} = useContext(ApplicationContext);

    return (
        <div className="show-list">
            {shows && shows.length ?
                shows.map(({id, ...restProps}) => (
                    <ShowCard key={id} {...restProps}/>
                )):
                <div className="no-shows-found">
                    No shows found
                </div>
            }
        </div>
    )
};

export default memo(ShowList);
