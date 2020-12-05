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
    setShows: () => {}
};

const ApplicationContext = React.createContext(initialValues);

const ApplicationContextProvider = ({children}: Props): JSX.Element => {
    const [shows, setShows] = useState<Array<Show> | undefined>();
    useEffect(() => {
        setShows(mockShows);
    }, []);

    return (
        <ApplicationContext.Provider value={{shows, setShows}}>
            { children }
        </ApplicationContext.Provider>
    );
};

export {
    ApplicationContext,
    ApplicationContextProvider
};
