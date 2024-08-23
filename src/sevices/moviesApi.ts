import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Genre } from "../models/Genre";
import { MovieFilter } from "../models/MovieFilter";
import createMovieSearchQuery from "../utils/queryUtils";
import { MovieDetail } from "../models/MovieDetail";
import { Movie } from "../models/Movie";

const BASE_URL = import.meta.env.VITE_TMDB_BASE_URL;
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

export const moviesApi = createApi({
    reducerPath: "moviesApi",
    baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
    endpoints: (builder) => ({
        getMovieById: builder.query<MovieDetail, string>({
            query: (id) => ({
                url: `movie/${id}?append_to_response=credits`,
                params: {
                    api_key: API_KEY,
                },
            }),
        }),
        getMoviesByFilter: builder.query<Movie[], MovieFilter>({
            query: ({title, releaseYear}) => `search/movie?api_key=${API_KEY}&${createMovieSearchQuery(title, releaseYear)}`,
            transformResponse: (response: { results: Movie[] }) => response.results,
        }),
        getGenres: builder.query<Genre[], void>({
            query: () => ({
                url: `genre/movie/list`,
                params: {
                    api_key: API_KEY
                },
            }),
            transformResponse: (response: { genres: Genre[]}) => response.genres,
        }),
    })
})

export const { useGetMovieByIdQuery, useGetMoviesByFilterQuery, useGetGenresQuery } = moviesApi;
