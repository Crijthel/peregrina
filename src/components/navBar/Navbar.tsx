import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import logo from "../../assets/logo_texto_negro.png";
import "./NavBar.scss";
import { NavDropdown } from "react-bootstrap";
const NavbarComp = () => {
    return (
        <Navbar expand="lg" className="navbar-container">
            <Container>
                <Navbar.Brand href="#home">
                    <img alt="" src={logo} className="logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <NavDropdown
                            title="Portfolio"
                            id="navbarScrollingDropdown"
                        >
                            <NavDropdown.Item href="#action4">
                                Tratamiento de imágenes
                            </NavDropdown.Item>

                            <NavDropdown.Item href="#action5">
                                VFX
                            </NavDropdown.Item>

                            <NavDropdown.Item href="#action5">
                                3D
                            </NavDropdown.Item>

                            <NavDropdown.Item href="#action3">
                                Motion graphics
                            </NavDropdown.Item>

                            <NavDropdown.Item href="#action5">
                                Ilustraciones
                            </NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#link">Contacto</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavbarComp;
