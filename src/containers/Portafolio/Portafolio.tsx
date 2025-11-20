import React, { useEffect } from "react";
import "./Portafolio.scss";
import NavbarComp from "../../components/navBar/Navbar";
import { useParams } from "react-router-dom";
import Contact from "../Home/Contact/Contact";
import Proyectos from "../../components/proyectos/Proyectos";

const Portafolio = () => {
    const params = useParams();
    const setearTexto = () => {
        switch (params.tipo) {
            case "tratamiento-de-imagenes":
                return "Tratamiento de Imagenes";
            case "motion-graphics":
                return "Motion Graphics";
            case "ilustraciones":
                return "Ilustraciones";
            case "vfx":
                return "VFX";
            case "3d":
            default:
                return "3D";
        }
    };
    useEffect(() => {
        window.scrollTo({
            top: 0, // or desired vertical position in pixels
            left: 0, // or desired horizontal position in pixels
            behavior: "instant" as ScrollBehavior,
        });
        console.log("entro");
    }, []);

    return (
        <>
            <NavbarComp />
            <div className="portafolio-container">
                <h1>{setearTexto()}</h1>

                <Proyectos />
            </div>

            <Contact page="portafolio-contact" />
        </>
    );
};

export default Portafolio;
