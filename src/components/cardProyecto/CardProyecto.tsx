import React from "react";
import "./CardProyecto.scss";

const CardProyecto = ({ item }: any) => {
    const srcImg = item.imagen !== "" ? "../../../" + item.imagen : "";
    console.log(srcImg);
    return (
        <div className="card-proyecto-container">
            {item.nombre !== "" && <h1>{item.nombre}</h1>}
            <img src={srcImg} alt="" />
            <img src={item.imagen} alt="" />
        </div>
    );
};

export default CardProyecto;
