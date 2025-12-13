import React from "react";
import "./CardWeb.scss";

const CardWeb = ({ data }: any) => {
    return (
        <div className="cardweb-container">
            {data?.map((item: any) => {
                const srcImg =
                    item.imagen !== "" ? "../../../" + item.imagen : "";
                return (
                    <div className="card-item-web">
                        <span>{item.nombre}</span>
                        <img src={srcImg} className={""} alt={item.nombre} />
                        <a href={item.link} target="_blank" rel="noreferrer">
                            visitar
                        </a>
                    </div>
                );
            })}
        </div>
    );
};

export default CardWeb;
