export default interface Episode {
    id: number;
    seasonId: number;
    name: string;
    image?: string;
    siteRating: number;
    moreDetails: {
        director: string;
        image?: string;
        description: string;
    };
};
