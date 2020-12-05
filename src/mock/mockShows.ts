import Show from "../types/Show";

const mockShows: Array<Show> = [
    {
        id: 1,
        name: 'Family Guy',
        image: 'https://m.media-amazon.com/images/M/MV5BODEwZjEzMjAtNjQxMy00Yjc4LWFlMDAtYjhjZTAxNDU3OTg3XkEyXkFqcGdeQXVyOTM2NTM4MjA@._V1_.jpg',
        status: 'Continuing',
        firstAired: '05.12.2020, at 20:00',
        networks: ['Netflix'],
        description: 'Short description',
        genre: ['Romance', 'Comedy'],
        siteRating: 5,
    },
    {
        id: 2,
        name: 'How I met your mother',
        image: 'https://miro.medium.com/max/3200/1*NwthyMSOHc8vi0wBLfcakA.jpeg',
        status: 'Continuing',
        firstAired: '07.12.2020, at 22:00',
        networks: ['Netflix', 'HBO GO'],
        description: 'Lorem Ipsum is simply dummy text em Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
        genre: ['Family', 'Comedy'],
        siteRating: 5,
    },
    {
        id: 3,
        name: 'The walking dead',
        status: 'Continuing',
        firstAired: '29.01.2021, at 15:00',
        networks: ['HBO GO'],
        description: 'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
        genre: ['Family', 'Comedy'],
        siteRating: 5,
    }
];

export default mockShows;