import React, { useEffect, useState, memo } from 'react';
import ShowCard from '../Card';
import mockShows from '../../../mock/mockShows';
import { Show } from '../../../types';
import './List.css';

const ShowList = () => {
    const [showList, setShowList] = useState<Show[]>([]);
    useEffect(() => {
        setShowList(mockShows);
    }, []);

    return (
        <div className="show-list">
            {showList.map(({id, ...restProps}) => (
                <ShowCard key={id} {...restProps}/>
            ))}
        </div>
    )
};

export default memo(ShowList);
