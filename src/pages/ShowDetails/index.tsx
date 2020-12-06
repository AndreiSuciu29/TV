import { Card, CardContent, Container } from '@material-ui/core';
import React, { PureComponent } from 'react';
import { withRouter } from "react-router";
import {RouteComponentProps} from "react-router";
import { fetchShow } from '../../actions/shows';
import Show from '../../types/Show';
import './ShowDetails.css';
import Season from '../../types/Season';
import { fetchSeasonsForShow } from '../../actions/seasons';
import Details from '../../components/Show/Details';
import Seasons from '../../components/Show/Details/Seasons';

type PathParamsType = {
    id: string,
};

type Props = RouteComponentProps<PathParamsType> & {
    id: string,
};

interface State {
    details: Show | undefined;
    seasons: Array<Season> | undefined;
};

class ShowDetails extends PureComponent<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            details: undefined,
            seasons: undefined
        };
    }

    componentDidMount() {
        const { match: { params } } = this.props;
        const id = parseInt(params.id, 10);
        this.setState({details: fetchShow(id)});
        this.setState({seasons: fetchSeasonsForShow(id)});
    }

    componentWillUnmount() {
        // Add clean-up functions
        this.setState({});
    }

    render() {
        const { details, seasons } = this.state;

        return (
            <Container maxWidth="md">
                <Card>
                    <CardContent>
                        <div className="details-content">
                            <div className="flex-container">
                                <Details details={details} />
                            </div>
                            <Seasons seasons={seasons} />
                        </div>
                    </CardContent>
                </Card>
            </Container>
        );
    }
};

export default withRouter(ShowDetails);
