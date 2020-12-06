import mockShows from "../mock/mockShows";

const fetchShows = () => {
    return mockShows;
}

const searchShows = (search: string) => {
    // Without API call
    return mockShows.filter(show => show.name.toLowerCase().includes(search.toLowerCase()));
};

const fetchShow = (id: number) => {
    return mockShows.find(show => show.id === id);
}

export {
    fetchShow,
    fetchShows,
    searchShows
};
