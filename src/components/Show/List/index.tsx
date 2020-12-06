import React from 'react';
import ShowCard from '../Card';
import './List.css';
import Show from '../../../types/Show';
import NotFound from '../NotFound';

interface Props {
    shows: Array<Show> | undefined;
}

const ShowList = (props: Props) => {
    const { shows } = props;

    return (
        <div className="show-list">
            {shows && shows.length > 0 ? shows.map((show) => (
                <ShowCard key={show.id} {...show}/>
            )): <NotFound />}
        </div>
    )
};

export default ShowList;
