import Episode from "./Episode";

export default interface Season {
    id: number;
    showId: number;
    name: string;
    image?: string;
    number: number;
    siteRating: number;
    description: string;
    episodes?: Array<Episode>
};
