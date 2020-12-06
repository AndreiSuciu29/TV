import React from 'react';
import { StyledTypography } from './styles';

const Details = (props: any) => {
    return (
        <>
            <div className="information">
                <div className="details-information">
                    <StyledTypography type="header">Name</StyledTypography>
                    <StyledTypography>{ props.details?.name }</StyledTypography>
                </div>
                <div className="details-information">
                    <StyledTypography type="header">Status</StyledTypography>
                    <StyledTypography>{ props.details?.status }</StyledTypography>
                </div>
                <div className="details-information">
                    <StyledTypography type="header">Genre</StyledTypography>
                    <StyledTypography>{ props.details?.genre }</StyledTypography>
                </div>
                <div className="details-information">
                    <StyledTypography type="header">Site Rating</StyledTypography>
                    <StyledTypography>{ props.details?.siteRating }</StyledTypography>
                </div>
                <div className="details-information">
                    <StyledTypography type="header">Description</StyledTypography>
                    <StyledTypography>{ props.details?.description }</StyledTypography>
                </div>
            </div>
            <div className="details-image">
                <img src={props.details?.image || process.env.PUBLIC_URL + '/logo192.png'} />
            </div>
        </>
    )
};

export default Details;
