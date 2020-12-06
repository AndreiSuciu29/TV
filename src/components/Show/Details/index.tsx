import { Card, CardContent, Container, Typography } from '@material-ui/core';
import React, { PureComponent } from 'react';
import { withRouter } from "react-router";
import {RouteComponentProps} from "react-router";
import { fetchShow } from '../../../actions/shows';
import Show from '../../../types/Show';
import { StyledTypography } from './styles';
import './Details.css';

type PathParamsType = {
    id: string,
};

type Props = RouteComponentProps<PathParamsType> & {
    id: string,
};

interface State {
    details: Show | undefined;
};

class ShowDetails extends PureComponent<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = { details: undefined }
    }

    componentDidMount() {
        const { match: { params : { id } } } = this.props;
        this.setState({details: fetchShow(parseInt(id, 10))});
    }

    componentWillUnmount() {
        // Add clean-up functions
        this.setState({});
    }

    render() {
        const { details } = this.state;

        return (
            <Container maxWidth="md">
                {/* ceva details*/}
                <Card>
                    <CardContent>
                        <div className="details-content">
                            <div className="information">
                                <div className="details-information">
                                    <StyledTypography header={true}>Name</StyledTypography>
                                    <StyledTypography>{ details?.name }</StyledTypography>
                                </div>
                                <div className="details-information">
                                    <StyledTypography header={true}>Status</StyledTypography>
                                    <StyledTypography>{ details?.status }</StyledTypography>
                                </div>
                                <div className="details-information">
                                    <StyledTypography header={true}>Genre</StyledTypography>
                                    <StyledTypography>{ details?.genre }</StyledTypography>
                                </div>
                                <div className="details-information">
                                    <StyledTypography header={true}>Site Rating</StyledTypography>
                                    <StyledTypography>{ details?.siteRating }</StyledTypography>
                                </div>
                                <div className="details-information">
                                    <StyledTypography header={true}>Description</StyledTypography>
                                    <StyledTypography>{ details?.description }</StyledTypography>
                                </div>
                            </div>
                            <div className="details-image">
                                <img src={details?.image || process.env.PUBLIC_URL + '/logo192.png'} />
                            </div>
                        </div>
                    </CardContent>
                </Card>
                {/* <GridList cellHeight={160} cols={3}>
                    {details && details.seasons && details?.seasons.map(season => (
                        <GridListTile key={season.id}>
                            <img src={season.image} alt={season.name} />
                        </GridListTile>
                    ))}
                </GridList> */}
            </Container>
        );
    }
};

export default withRouter(ShowDetails);
