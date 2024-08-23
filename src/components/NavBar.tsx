import { Navbar as BoostrapNavbar, Container, Nav } from "react-bootstrap";
import { Link } from 'react-router-dom';
import React from 'react';
import Logo from '../assets/logo.svg';
import SearchBar from "./SearchBar";

const NavBar: React.FC = () => (
    <BoostrapNavbar bg="black" className="py-3" variant="dark" expand="lg">
        <Container fluid>
            <BoostrapNavbar.Brand as={Link} to="/">
                <img src={Logo} width={70} height={50} />
            </BoostrapNavbar.Brand>
            <BoostrapNavbar.Toggle aria-controls="basic-navbar-nav" />
            <BoostrapNavbar.Collapse id="basic-navbar-nav" className="d-flex justify-content-between align-items-center">
                <Nav className="d-lg-flex flex-lg-row">
                    <Nav.Link className="fs-5" as={Link} to="/">
                        Home
                    </Nav.Link>
                </Nav>
                <div className="d-none d-lg-block mx-auto" style={{ width: '100%', paddingRight: '15%' }}>
                    <SearchBar />
                </div>
            </BoostrapNavbar.Collapse>
        </Container>
    </BoostrapNavbar>
)

export default NavBar;