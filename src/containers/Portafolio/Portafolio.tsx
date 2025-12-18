import React, { useEffect } from "react";
import "./Portafolio.scss";
import { useParams } from "react-router-dom";
import Proyectos from "../../components/proyectos/Proyectos";

const Portafolio = () => {
    const params = useParams();
    console.log(params)
    const setearTexto = () => {
        switch (params.tipo) {
            case "web":
                return "Diseño Web";
            case "motion-graphics":
                return "Motion Graphics";
            case "diseno-grafico":
                return "Diseño Gráfico";
            case "campana-publicitaria":
                return "Campaña Publicitaria";
            case "vfx":
                return "VFX";
            case "3d":
            default:
                return "3D";
        }
    };
    useEffect(() => {
        window.scrollTo({
            top: 0, 
            left: 0,
            behavior: "instant" as ScrollBehavior,
        });
    }, []);

    return (

            <div className="portafolio-container">
                <h1>{setearTexto()}</h1>
                <Proyectos />
            </div>
    );
};

export default Portafolio;
