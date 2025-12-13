import React from "react";
import { useParams } from "react-router";
import CardProyecto from "../cardProyecto/CardProyecto";
import "./Proyectos.scss";
import data from "../../assets/proyectos/info.json";
import CardWeb from "../cardProyecto/CardWeb";

const Proyectos = () => {
    const { tipo } = useParams();
    const setearTexto = () => {
        switch (tipo) {
            case "web":
                return "web";
            case "motion-graphics":
                return "motion";
            case "diseno-grafico":
                return "diseno";
            case "campana-publicitaria":
                return "campana";
            case "3d":
            default:
                return "tresd";
        }
    };

    const tipoProyecto = setearTexto();
    return (
        <div className="proyectos-container">
            {tipoProyecto !== "web" ? (
                data.portafolio[tipoProyecto].proyectos.map((item: any) => {
                    return <CardProyecto item={item} key={item.imagen} />;
                })
            ) : (
                <CardWeb data ={data.portafolio.web.proyectos} />
            )}
        </div>
    );
};

export default Proyectos;
