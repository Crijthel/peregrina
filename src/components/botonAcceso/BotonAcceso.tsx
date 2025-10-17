import React from "react";
import "./BotonAcceso.scss";
const BotonAcceso = ({ imagen, nombre, hover }: any) => {
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
        </div>
    );
};

export default BotonAcceso;
