import mockShows from "../mock/mockShows";

export default (search: string) => {
    // Without API call
    return mockShows.filter(show => show.name.toLowerCase().includes(search.toLowerCase()));
};
