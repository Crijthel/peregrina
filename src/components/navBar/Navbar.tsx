import React from "react";
import logo from "../../assets/logo_texto_negro.png";
import "./NavBar.scss";
import { NavDropdown, Navbar, Nav, Container } from "react-bootstrap";

const NavbarComp = () => {
    return (
        <Navbar expand="lg" className="navbar-container">
            <Container>
                <Navbar.Brand href="/">
                    <img alt="" src={logo} className="logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <NavDropdown
                            title="Portafolio"
                            id="navbarScrollingDropdown"
                        >
                            <NavDropdown.Item href="/portafolio/tratamiento-de-imagenes">
                                Tratamiento de imágenes
                            </NavDropdown.Item>
                            <NavDropdown.Item href="/portafolio/vfx">
                                VFX
                            </NavDropdown.Item>
                            <NavDropdown.Item href="/portafolio/3d">
                                3D
                            </NavDropdown.Item>
                            <NavDropdown.Item href="/portafolio/motion-graphics">
                                Motion graphics
                            </NavDropdown.Item>
                            <NavDropdown.Item href="/portafolio/ilustraciones">
                                Ilustraciones
                            </NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#contacto">Contacto</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavbarComp;
