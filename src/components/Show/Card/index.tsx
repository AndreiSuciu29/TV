import React from 'react';
import { Link } from 'react-router-dom';
import Show from '../../../types/Show';
import './Card.css';

const DESCRIPTION_NUMBER_OF_CHARACTERS = 45;

const getOverviewByDescription = (description: string) => {
    if (description.length > DESCRIPTION_NUMBER_OF_CHARACTERS) {
        return `${description?.substr(0, DESCRIPTION_NUMBER_OF_CHARACTERS)}...`;
    }

    return description;
}

const attributeDescription = (attributeName: string, attributeValue: string | undefined) => {
    if (!attributeValue) {
        return 'null';
    }

    return (
        <div className="attribute-container">
            <div className="attribute-name">{attributeName}</div>
            <div className="attribute-value">{attributeValue}</div>
        </div>
    );
};

const ShowCard = (props: Show) => {
    return (
        <Link to={`/details/${props.id}`}>
            <div className="card">
                <div className="card-poster">
                    <img src={props.image || process.env.PUBLIC_URL + '/logo192.png'} />
                </div>
                <div className="show-highlight">
                    <h2>{props.name}</h2>
                    {attributeDescription('First aired:', props.firstAired)}
                    {attributeDescription('Networks:', props.networks?.join(','))}
                    {attributeDescription('First aired:', props.firstAired)}
                    {attributeDescription('Overview:', getOverviewByDescription(props.description))}
                </div>
            </div>
        </Link>
    )
};

export default ShowCard;
