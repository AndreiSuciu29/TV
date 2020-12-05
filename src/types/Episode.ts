export default interface Episode {
    name: string;
    firstAired: string;
    image?: string;
    siteRating: number;
    moreDetails: {
        director: string;
        image?: string;
        description: string;
    };
};
