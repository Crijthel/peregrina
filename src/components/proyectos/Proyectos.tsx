import React from "react";
import { useParams } from "react-router";
import CardProyecto from "../cardProyecto/CardProyecto";
import "./Proyectos.scss";
import data from "../../assets/proyectos/info.json";

const Proyectos = () => {
    const { tipo } = useParams();
    const setearTexto = () => {
        switch (tipo) {
            case "tratamiento-de-imagenes":
                return "tratamiento";
            case "motion-graphics":
                return "motion";
            case "ilustraciones":
                return "ilustraciones";
            case "vfx":
                return "vfx";
            case "3d":
            default:
                return "tresd";
        }
    };

    const tipoProyecto = setearTexto();
    return (
        <div className="proyectos-container">
            {data.portafolio[tipoProyecto].proyectos.map((item: any) => {
                return <CardProyecto item={item} key={item.imagen} />;
            })}
        </div>
    );
};

export default Proyectos;
