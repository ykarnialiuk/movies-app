import { Col, Container, Row } from "react-bootstrap";
import { useGetGenresQuery, useGetMoviesByFilterQuery } from "../sevices/moviesApi";
import MovieItem from "./MovieItem";
import Spinner from "./Spinner";
import { mapToShortMovie } from "../utils/movieUtils";
import { ShortMovie } from "../models/ShortMovie";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

const MovieList: React.FC = () => {
    const title = useSelector((state: RootState) => state.search.searchQuery);
    const realeseYear = useSelector((state: RootState) => state.filter.filterQuery);
    const favorites = useSelector((state: RootState) => state.favorites.movies);

    const { data: movies, isLoading: moviesLoading } = useGetMoviesByFilterQuery({ title: title, releaseYear: realeseYear });
    const { data: genres, isLoading: genresLoading } = useGetGenresQuery();

    const isLoading = moviesLoading || genresLoading;

    if (isLoading) return <Spinner />;
    if (!movies || !genres) return <div>Error loading movie details.</div>;

    const shortMovies: ShortMovie[] = movies.map(movie => mapToShortMovie(movie, genres));

    return (
        <Container fluid>
            <Row className="gy-4">
                {shortMovies?.map(movie => (
                    <Col lg={3} md={6} sm={12} key={movie.id}>
                        <MovieItem key={movie.id} movie={movie} favorites={favorites} />
                    </Col>
                ))}
            </Row>
        </Container>
    )
}

export default MovieList;