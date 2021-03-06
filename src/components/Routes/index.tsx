import React, { useContext } from 'react';
import { Route, Switch } from 'react-router-dom';
import { ShowsContext } from '../Context/ShowsContext';
import ShowDetails from '../../pages/ShowDetails';
import ShowList from '../Show/List';
import NotFound from '../Show/NotFound';

const Routes = () => {
    const { shows } = useContext(ShowsContext);

    return (
        <Switch>
            <Route path="/" exact>
                <ShowList shows={shows} />
            </Route>
            <Route exact path="/details/:id" component={ShowDetails} />
            <Route path="*" component={NotFound} />
        </Switch>
    );
};

export default Routes;
