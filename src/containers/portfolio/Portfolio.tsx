import React from "react";
import "./Portfolio.scss";
import tresd from "../../assets/img/toyplane_portada.png";
import BotonAcceso from "../../components/botonAcceso/BotonAcceso";

const Portfolio = () => {
    return (
        <div className="portfolio-container">
            <div className="espacio"></div>
            <h1 className="d-flex w-100  justify-content-center">Nuestro trabajo </h1>
            <div className="botones-container">
                <div className="d-flex tres ">
                    <BotonAcceso imagen={tresd} nombre={"3D"} />
                    <BotonAcceso imagen={tresd} nombre={"3D"} />
                    <BotonAcceso imagen={tresd} nombre={"3D"} />
                </div>
                <div className='d-flex dos'>
                    <BotonAcceso imagen={tresd} nombre={"3D"} />
                    <BotonAcceso imagen={tresd} nombre={"3D"} />
                </div>
            </div>
        </div>
    );
};

export default Portfolio;
