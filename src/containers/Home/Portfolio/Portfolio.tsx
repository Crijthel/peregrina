import React from "react";
import "./Portfolio.scss";
import ilustraciones from "../../../assets/proyectos/tratamiento/areli_gomila_final.jpg";
import ilustracionesHover from "../../../assets/proyectos/tratamiento/ilustraciones.gif";
import vfx from "../../../assets/proyectos/vfx/HarryPotter(VFX)_00113.png";
import vfxHover from "../../../assets/proyectos/vfx/vfx.gif";
import BotonAcceso from "../../../components/botonAcceso/BotonAcceso";

const Portfolio = () => {
    return (
        <div className="portfolio-container">
            <div className="espacio"></div>
            <h1 className="d-flex w-100  justify-content-center">
                Nuestro trabajo
            </h1>
            <div className="botones-container">
                <div className="d-flex tres ">
                    <BotonAcceso
                        imagen={ilustraciones}
                        nombre={"Tratamiento de imágenes"}
                        hover={ilustracionesHover}
                        repeate={false}
                    />
                    <BotonAcceso
                        imagen={ilustraciones}
                        nombre={"Motion Graphics"}
                        hover={ilustracionesHover}
                        repeate={false}
                    />
                    <BotonAcceso
                        imagen={ilustraciones}
                        nombre={"Ilustraciones"}
                        hover={ilustracionesHover}
                        repeate={false}
                    />
                </div>
                <div className="dos">
                    <div className="contenedor-dos">
                        <BotonAcceso
                            imagen={vfx}
                            nombre={"VFX"}
                            hover={vfxHover}
                            repeate={true}
                        />
                    </div>
                    <div className="contenedor-dos">
                        <BotonAcceso
                            imagen={ilustraciones}
                            nombre={"3D"}
                            hover={ilustracionesHover}
                            repeate={true}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;
