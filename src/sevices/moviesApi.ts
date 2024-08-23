import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Movie } from "../models/Movie";
import { getFullImageUrl } from "../utils/ImageUtils";
import { Genre } from "../models/Genre";
import { MovieFilterModel } from "../models/MovieFilterModel";
import { getMovieQuery } from "../utils/movieFilterUtils";
import { Person } from "../models/Person";

const BASE_URL = import.meta.env.VITE_TMDB_BASE_URL;
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

export const moviesApi = createApi({
    reducerPath: "moviesApi",
    baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
    endpoints: (builder) => ({
        getMovieById: builder.query<Movie, number>({
            query: (id) => ({
                url: `movie/${id}`,
                params: {
                    api_key: API_KEY,
                },
            }),
        }),
        getMoviesByFilter: builder.query<Movie[], MovieFilterModel>({
            query: async (filter) => {
                var result = await getMovieQuery(filter);
            },
            transformResponse: (response: { results: Movie[] }) => {
                return response.results.map(movie => ({
                    ...movie,
                    poster_path: getFullImageUrl(movie.poster_path)
                }))
            }
        }),
        getGenres: builder.query<Genre[], void>({
            query: () => ({
                url: `genre/movie/list`,
                params: {
                    api_key: API_KEY
                },
            }),
        }),
    })
})

export const { useGetMovieByIdQuery, useGetMoviesByFilterQuery, useGetGenresQuery } = moviesApi;
