import React, { useState } from 'react';
import Episode from '../../../types/Episode';
import Season from '../../../types/Season';
import './Seasons.css';

interface Props {
    seasons: Array<Season> | undefined;
}

const Seasons = (props: Props) => {
    const [seasonNumber, setSeasonNumber] = useState(0);

    const changeSeason = (seasonNumber: number) => () => {
        setSeasonNumber(seasonNumber);
    }

    const { seasons } = props;

    return (
        <div className="seasons-container">
            <div className="seasons-tabs">
                {seasons && seasons.map((season: Season) => (
                    <div key={season.id} onClick={changeSeason(season.number - 1)} className="season-tab">Season {season.number}</div>
                ))}
            </div>
            <div className="season-episodes">
                {seasons && seasons[seasonNumber] && seasons[seasonNumber]?.episodes && seasons[seasonNumber].episodes?.map((episode: Episode) => (
                <div key={episode.id} style={{
                        background: `url('${episode.image || process.env.PUBLIC_URL}/logo192.png')`,
                        backgroundRepeat: 'no-repeat',
                        width: '200px',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <h2 className="removePadding">{episode.name}</h2>
                        <p className="removePadding">Rating: {episode.siteRating}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Seasons;
