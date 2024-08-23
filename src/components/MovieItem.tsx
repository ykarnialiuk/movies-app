import { Button, Card } from "react-bootstrap"
import { ShortMovie } from "../models/ShortMovie"
import { FaStar, FaCalendarAlt } from 'react-icons/fa';
import './MovieItem.css';
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addFavorite, removeFavorite } from "../slices/favoritesSlice";
import { FavoriteMovie } from "../models/FavoriteMovie";

interface MovieItemProps {
    movie: ShortMovie
    favorites: FavoriteMovie[]
}

const MovieItem: React.FC<MovieItemProps> = (props) => {
    const dispatch = useDispatch();

    const handleToggleFavorite = (movie: ShortMovie) => {
        if (props.favorites.some(fav => fav.id === movie.id)) {
            dispatch(removeFavorite(movie.id));
        } else {
            dispatch(addFavorite(movie));
        }
    };

    const isExist = props.favorites.some(fav => fav.id === props.movie.id);

    return (
        <Card className="movie-card h-100 d-flex flex-column border-0">
            <div className="image-wrapper">
                <Link to={`/movies/${props.movie.id}`}>
                    <Card.Img
                        variant="top"
                        src={props.movie.posterUrl}
                        alt={props.movie.title}
                        className="img-fluid"
                    />
                </Link>
            </div>
            <Card.Body className="d-flex flex-column p-3">
                <Card.Title className="mb-2 text-truncate movie-title">
                    {props.movie.title}
                </Card.Title>
                <Card.Text className="mb-2 d-flex align-items-center movie-release">
                    <FaCalendarAlt className="me-2 icon" />
                    {props.movie.releaseDate}
                </Card.Text>
                <Card.Text className="mb-2 movie-genres">
                    <strong>Genres:</strong> {props.movie.genres}
                </Card.Text>
                <Card.Text className="mb-3 d-flex align-items-center movie-rating">
                    <FaStar className="me-2 star" />
                    {props.movie.voteAverage} ({props.movie.voteCount} votes)
                </Card.Text>
                <div className="d-flex justify-content-between">
                    <Button
                        variant={isExist ? 'danger' : 'success'}
                        className="mt-auto align-self-start more-info-button"
                        onClick={() => handleToggleFavorite(props.movie)}>
                        {isExist ? 'Remove from Favorites' : 'Add to Favorites'}
                    </Button>
                    <Button variant="outline-primary" className="mt-auto align-self-start more-info-button">
                        <Link to={`/movies/${props.movie.id}`}>
                            More Info
                        </Link>
                    </Button>
                </div>
            </Card.Body>
        </Card>
    );
};

export default MovieItem;