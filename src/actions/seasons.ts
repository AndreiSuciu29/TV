import mockEpisodes from "../mock/mockEpisodes";
import mockSeasons from "../mock/mockSeasons";

const fetchSeasonsForShow = (id: number) => {
    const seasons = mockSeasons.filter(season => season.showId === id);

    return seasons.map(season => {
        const episodes = mockEpisodes.filter(episode => episode.seasonId === season.id);

        return {
            ...season,
            episodes
        }
    })
}

export {
    fetchSeasonsForShow
};
