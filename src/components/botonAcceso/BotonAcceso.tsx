import React, { useState } from "react";
import "./BotonAcceso.scss";
import CircularText from "../CircularText/CircularText";
const BotonAcceso = ({ imagen, nombre, hover }: any) => {

    const [isHovering, setIsHovering] = useState(false)
    return (
        <div className="boton-acceso">
            <img
                alt={nombre}
                src={imagen}
                className="imagen"
                id={nombre}
                onMouseOver={(e) => (e.currentTarget.src = hover)}
                onMouseOut={(e) => (e.currentTarget.src = imagen)}
            />
          
            <CircularText
                text={nombre+ ' * '+ nombre + ' * '}
                onHover="speedUp"
                spinDuration={20}
                className="custom-class"
            />
        </div>
    );
};

export default BotonAcceso;
