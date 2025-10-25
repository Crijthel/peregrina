import React from "react";
import "./Portafolio.scss";
import NavbarComp from "../../components/navBar/Navbar";
import { useParams } from "react-router-dom";

const Portafolio = () => {

    const params = useParams()
    return (
        <div>
            <NavbarComp />
            Portafolio 
            {params.tipo}
        </div>
    );
};

export default Portafolio;
