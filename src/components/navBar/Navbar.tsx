import React from "react";
import logo from "../../assets/logo_texto_negro.png";
import "./NavBar.scss";
import { NavDropdown, Navbar, Nav } from "react-bootstrap";

const NavbarComp = () => {
    return (
        <Navbar expand="lg" className="navbar-container">
            <Navbar.Brand href="/">
                <img alt="" src={logo} className="logo" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto ">
                    <NavDropdown
                        className="estilo-portafolio"
                        title="Portfolio"
                        id="navbarScrollingDropdown"
                    >
                        <NavDropdown.Item
                            className="estilo-link"
                            href="/portfolio/tratamiento-de-imagenes"
                        >
                            Tratamiento de imágenes
                        </NavDropdown.Item>
                        <NavDropdown.Item
                            className="estilo-link"
                            href="/portfolio/motion-graphics"
                        >
                            Motion graphics
                        </NavDropdown.Item>
                        <NavDropdown.Item
                            className="estilo-link"
                            href="/portfolio/ilustraciones"
                        >
                            Ilustraciones
                        </NavDropdown.Item>
                        <NavDropdown.Item
                            className="estilo-link"
                            href="/portfolio/vfx"
                        >
                            VFX
                        </NavDropdown.Item>
                        <NavDropdown.Item
                            className="estilo-link"
                            href="/portfolio/3d"
                        >
                            3D
                        </NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href="#contacto" className="contacto estilo-link">
                        Contacto
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default NavbarComp;
