import { useParams } from "react-router-dom";
import { useGetMovieByIdQuery } from "../sevices/moviesApi";
import { Badge, Button, Card, Col, Container, ListGroup, Row, Form } from "react-bootstrap";
import { FaStar } from "react-icons/fa";
import './MovieDetails.css'
import Spinner from "./Spinner";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { addFavorite, removeFavorite, toggleWatched, updateNotes, updateRating } from "../slices/favoritesSlice";
import { getFullImageUrl } from "../utils/imageUtils"
import { useState } from "react";

const MovieDetails: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const favorites = useSelector((state: RootState) => state.favorites.movies);

    const [notes, setNotes] = useState('');
    const [rating, setRating] = useState(0);

    const { data: movie, isLoading } = useGetMovieByIdQuery(id ?? '0');

    console.log(movie)

    const dispatch = useDispatch();

    if (isLoading) return <Spinner />;
    if (!movie) return <div>Error loading movie details.</div>;

    const isExist = favorites.some(favorite => favorite.id === movie.id);
    const favoriteMovie = favorites.find(favorite => favorite.id == movie.id);
    const directingCrew = movie.credits.crew.filter(member => member.job === 'Director');


    const handleToggleWatched = () => {
        dispatch(toggleWatched(movie.id));
    };

    const handleToggleCollection = () => {
        if (isExist) {
            dispatch(removeFavorite(movie.id));
            setNotes('');
            setRating(0);
        } else {
            dispatch(addFavorite(movie));
        }
    };

    const handleUpdateNotes = () => {
        dispatch(updateNotes({ id: movie.id, notes }));
    };

    const handleRatingChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = Number(e.target.value);
        if (value >= 0 && value <= 10) {
            setRating(value);
        }
    };

    const handleUpdateRating = () => {
        dispatch(updateRating({ id: movie.id, rating }));
    };

    return (
        <Container className="my-5">
            <Row className="align-items-start">

                <Col md={4}>
                    <Card className="movie-card">
                        <Card.Img
                            variant="top"
                            src={getFullImageUrl(movie.poster_path)}
                            alt={movie.title}
                            className="movie-image"
                        />
                    </Card>
                </Col>

                <Col md={8}>
                    <div className="movie-info">
                        <h1 className="movie-title">{movie.title}</h1>
                        {movie.tagline && <h5 className="movie-tagline"><em>{movie.tagline}</em></h5>}
                        <p className="movie-overview">{movie.overview}</p>

                        <ListGroup className="movie-details-list">
                            <ListGroup.Item className="movie-detail-item">
                                <strong>Genres:</strong> {movie.genres.map(genre => genre.name).join(', ')}
                            </ListGroup.Item>
                            <ListGroup.Item className="movie-detail-item">
                                <strong>Release Date:</strong> {movie.release_date}
                            </ListGroup.Item>
                            <ListGroup.Item className="movie-detail-item">
                                <strong>Runtime:</strong> {movie.runtime} minutes
                            </ListGroup.Item>
                            <ListGroup.Item className="movie-detail-item">
                                <strong>Average Rating:</strong>
                                <Badge pill bg="success" className="ms-2 d-flex align-items-center">
                                    <FaStar className="me-1 star-icon" />
                                    {movie.vote_average}
                                </Badge>
                            </ListGroup.Item>
                            <ListGroup.Item className="movie-detail-item">
                                <strong>Watched:</strong> {favoriteMovie?.watched ? 'Yes' : 'No'}
                            </ListGroup.Item>
                            <ListGroup.Item className="movie-detail-item">
                                <strong>Your Rating:</strong> {favoriteMovie?.userRating || 'Not rated'}
                            </ListGroup.Item>
                        </ListGroup>

                        <h2 className="mt-4">Directors</h2>
                        {directingCrew.length > 0 ? (
                            <ListGroup>
                                {directingCrew.map(crewMember => (
                                    <ListGroup.Item key={crewMember.id} className="movie-directing-crew-item">
                                        <span>{crewMember.name}</span>
                                        <span className="text-muted">{crewMember.job}</span>
                                    </ListGroup.Item>
                                ))}
                            </ListGroup>
                        ) : (
                            <p>No directing information available.</p>
                        )}

                        <Row className="mt-4">
                            <Col md={6}>
                                <Card className="mb-4 border-0 shadow-sm rounded-3">
                                    <Card.Body>
                                        <Card.Title className="text-muted">Personal Notes</Card.Title>
                                        <Form.Group controlId="personalNotes">
                                            <Form.Control
                                                as="textarea"
                                                value={notes}
                                                onChange={(e) => setNotes(e.target.value)}
                                                rows={4}
                                                placeholder="Write your thoughts here..."
                                                className="border-0 p-3 bg-light rounded-3"
                                            />
                                        </Form.Group>
                                        <Button
                                            disabled={!isExist}
                                            variant="outline-primary"
                                            onClick={handleUpdateNotes}
                                            className="mt-3 w-100"
                                            style={{ borderRadius: '20px', fontWeight: 'bold' }}
                                        >
                                            Save Notes
                                        </Button>
                                    </Card.Body>
                                </Card>

                                <Card className="border-0 shadow-sm rounded-3">
                                    <Card.Body>
                                        <Card.Title className="text-muted">Personalized Rating</Card.Title>
                                        <Form.Group controlId="personalRating">
                                            <Form.Control
                                                type="number"
                                                value={rating}
                                                onChange={handleRatingChange}
                                                min="0"
                                                max="10"
                                                placeholder="Rate (0-10)"
                                                className="border-0 p-3 bg-light rounded-3"
                                            />
                                        </Form.Group>
                                        <Button
                                            disabled={!isExist}
                                            variant="outline-primary"
                                            onClick={handleUpdateRating}
                                            className="mt-3 w-100"
                                            style={{ borderRadius: '20px', fontWeight: 'bold' }}
                                        >
                                            Save Rating
                                        </Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col md={6}>
                                <Card className="border-0 shadow-sm rounded-3">
                                    <Card.Body>
                                        <ListGroup variant="flush">
                                            <ListGroup.Item className="d-flex justify-content-between align-items-center border-0">
                                                <Button
                                                    disabled={!isExist}
                                                    variant={favoriteMovie?.watched ? 'danger' : 'success'}
                                                    onClick={handleToggleWatched}
                                                    className="w-100"
                                                    style={{ borderRadius: '20px', fontWeight: 'bold' }}
                                                >
                                                    {favoriteMovie?.watched ? 'Unwatched' : 'Watched'}
                                                </Button>
                                            </ListGroup.Item>
                                            <ListGroup.Item className="d-flex justify-content-between align-items-center border-0">
                                                <Button
                                                    variant={isExist ? 'danger' : 'success'}
                                                    onClick={handleToggleCollection}
                                                    className="w-100"
                                                    style={{ borderRadius: '20px', fontWeight: 'bold' }}
                                                >
                                                    {isExist ? 'Remove from Favorites' : 'Add to Favorites'}
                                                </Button>
                                            </ListGroup.Item>
                                        </ListGroup>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </div>
                </Col>
            </Row >
        </Container >
    );
}

export default MovieDetails;