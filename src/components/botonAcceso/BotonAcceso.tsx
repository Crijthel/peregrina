import React, { useState } from "react";
import "./BotonAcceso.scss";
import CircularText from "../CircularText/CircularText";
import { Link } from "react-router";
const BotonAcceso = ({ imagen, nombre, hover, repeate, link }: any) => {
    const [isHovering, setIsHovering] = useState(false);

    const texto = repeate
        ? nombre + " * " + nombre + " * " + nombre + " * " + nombre + " * "
        : nombre + " * " + nombre + " * ";
    return (
        <Link className="boton-acceso"  to={'portafolio/'+link}  > 
     
            <img
                alt={nombre}
                src={isHovering ? hover : imagen}
                className="imagen"
                id={nombre}
                onMouseOver={(e) => (e.currentTarget.src = hover)}
                onMouseOut={(e) => (e.currentTarget.src = imagen)}
                />

            <CircularText
                text={texto}
                onHover="speedUp"
                spinDuration={20}
                className="custom-class"
                setIsHovering={setIsHovering}
                />
     
                </Link>
    );
};

export default BotonAcceso;
