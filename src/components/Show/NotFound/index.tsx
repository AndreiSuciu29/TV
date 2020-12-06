import React from 'react';
import { fetchShows } from '../../../actions/shows';
import mockShows from '../../../mock/mockShows';
import ShowList from '../List';
import './NotFound.css';


const NotFound = () => {
    const shows = fetchShows();
    const randomIndex = Math.floor(Math.random() * shows.length);
    const randomShow = shows[randomIndex];

    return (
        <div className="not-found-container">
            <div className="not-found-title">
                <h2>No TV show found</h2>
            </div>
            <div className="not-found-description">
                <p>We sorry, we could not find any shows you are searching for. You can check this show:</p>
                <ShowList shows={[randomShow]} />
            </div>
        </div>
    );
};

export default NotFound;
