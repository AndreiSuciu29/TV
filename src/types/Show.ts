import Schedule from './Schedule';

export default interface Show {
    id: number;
    name: string;
    image?: string;
    status: string;
    firstAired: string;
    networks?: Array<string>;
    description: string;
    genre: Array<string>;
    siteRating: number;
    schedule?: Schedule;
};
