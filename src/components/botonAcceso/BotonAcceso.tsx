import React from "react";
import './BotonAcceso.scss'
const BotonAcceso = ({ imagen, nombre }: any) => {
    return (
        <div className="boton-acceso">
            <img alt={nombre} src={imagen} className="imagen" id={nombre} />
        </div>
    );
};

export default BotonAcceso;
