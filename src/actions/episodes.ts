import mockEpisodes from "../mock/mockEpisodes";

const fetchEpisodesForSeason = (id: number) => {
    return mockEpisodes.filter(episode => episode.seasonId === id);
}

export {
    fetchEpisodesForSeason
};
