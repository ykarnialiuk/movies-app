import { Genre } from "../models/Genre";
import { Movie } from "../models/Movie";
import { ShortMovie } from "../models/ShortMovie";
import { getGenres } from "./genreUtils";
import { getFullImageUrl } from "./imageUtils";

export const mapToShortMovie = (movie: Movie, genres: Genre[]): ShortMovie => {
    return {
        id: movie.id,
        title: movie.title,
        posterUrl: getFullImageUrl(movie.poster_path),
        releaseDate: movie.release_date,
        voteAverage: movie.vote_average,
        voteCount: movie.vote_count,
        genres: getGenres(genres, movie.genre_ids).map(genre => genre.name).join(', '),
        watched: false,
        notes: '',
        userRating: 0
    };
};