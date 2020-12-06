import Episode from "../types/Episode";

const mockEpisodes: Array<Episode> = [{
    id: 1,
    seasonId: 1,
    name: 'Episode 1',
    image: '',
    siteRating: 3,
    moreDetails: {
        director: 'Director 1',
        description: 'The first episode is really good.'
    }
}, {
    id: 2,
    seasonId: 1,
    name: 'Episode 2',
    image: '',
    siteRating: 3,
    moreDetails: {
        director: 'Director 2',
        description: 'The first episode is really good.'
    }
}, {
    id: 3,
    seasonId: 2,
    name: 'Episode 1',
    image: '',
    siteRating: 2,
    moreDetails: {
        director: 'Director 3',
        description: 'The first episode is really good.'
    }
}, {
    id: 4,
    seasonId: 3,
    name: 'Episode 1',
    image: '',
    siteRating: 2,
    moreDetails: {
        director: 'Director 4',
        description: 'The first episode is really good.'
    }
}];

export default mockEpisodes;