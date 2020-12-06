import React, { useEffect, useState } from 'react';
import mockShows from '../../mock/mockShows';
import Show from '../../types/Show';

interface Props {
    children: React.ReactNode;
}

interface Context {
    shows?: Array<Show>;
    setShows: React.Dispatch<Array<Show> | undefined>
}

const initialValues: Context = {
    shows: [],
    setShows: () => {}
};

const ShowsContext = React.createContext(initialValues);

const ShowsContextProvider = ({children}: Props): JSX.Element => {
    const [shows, setShows] = useState<Array<Show> | undefined>();
    useEffect(() => {
        setShows(mockShows);
    }, []);

    return (
        <ShowsContext.Provider value={{shows, setShows}}>
            { children }
        </ShowsContext.Provider>
    );
};

export {
    ShowsContext,
    ShowsContextProvider
};
