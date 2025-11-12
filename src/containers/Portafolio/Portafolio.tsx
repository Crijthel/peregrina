import React from "react";
import "./Portafolio.scss";
import NavbarComp from "../../components/navBar/Navbar";
import { useParams } from "react-router-dom";
import Contact from "../Home/Contact/Contact";
import Proyectos from "../../components/proyectos/Proyectos";

const Portafolio = () => {
    const params = useParams();

    return (
        <>
            <NavbarComp />
            <div className="portafolio-container">
                <h1>{params.tipo}</h1>
            </div>

            <Proyectos />
            <Contact />
        </>
    );
};

export default Portafolio;
