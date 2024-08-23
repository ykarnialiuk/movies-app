import { FaSearch } from 'react-icons/fa'; // Импортируем иконку для поиска
import { InputGroup, Button, Form } from 'react-bootstrap'; // Импортируем компоненты из react-bootstrap
import { setSearchQuery } from '../slices/searchSlice'; // Импортируем действие для установки поискового запроса
import { useDispatch } from 'react-redux'; // Импортируем useDispatch из redux
import { useState } from 'react'; // Импортируем useState для управления локальным состоянием
import './SearchBar.css'; // Импортируем стили

const Searchbar: React.FC = () => {
    const dispatch = useDispatch(); 
    const [query, setQuery] = useState('');

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        dispatch(setSearchQuery(query));
    };

    return (
        <Form onSubmit={handleSubmit} className="search-form">
            <InputGroup className="search-input-group"> 
                <Form.Control 
                    type="text" 
                    placeholder="Search for movies..."
                    value={query} 
                    onChange={(e) => setQuery(e.target.value)} 
                    className="form-control search-input"
                />
                <Button type="submit" className="search-button" variant="primary">
                    <FaSearch />
                </Button>
            </InputGroup>
        </Form>
    );
};

export default Searchbar; 
