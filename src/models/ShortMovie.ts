import { FavoriteMovie } from "./FavoriteMovie"

export interface ShortMovie extends FavoriteMovie {
    id: number
    title: string
    posterUrl: string
    releaseDate: string
    genres: string
    voteAverage: number
    voteCount: number
}