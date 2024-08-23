import React, { useState } from "react";
import MovieList from "../components/MovieList";
import { Button } from "react-bootstrap";
import { FaFilter } from "react-icons/fa";
import SideBar from "../components/SideBar";
import './Home.css';

const Home: React.FC = () => {
    const [showSidebar, setShowSidebar] = useState(false);

    const handleToggleSidebar = () => {
        setShowSidebar(prevShow => !prevShow);
    };

    return (
        <>
            <h2 className="text-center my-5 text-dark">Explore Our Film Selection</h2>

            <div className="filter-button-container text-end">
                <Button variant="outline-dark" onClick={handleToggleSidebar} className="filter-icon">
                    <FaFilter />
                </Button>
            </div>

            <SideBar show={showSidebar} onHide={handleToggleSidebar} />

            <MovieList />
        </>
    )
}

export default Home;