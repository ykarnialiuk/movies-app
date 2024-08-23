import { Genre } from "../models/Genre";

export const getGenres = (genres: Genre[], genreIds: number[]): Genre[] => {
    return genreIds.map(id => genres.find(genre => genre.id === id)).filter(Boolean) as Genre[];
}