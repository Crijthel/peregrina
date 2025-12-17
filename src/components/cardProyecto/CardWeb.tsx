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
                        <img src={srcImg} className={""} alt={item.nombre} />
                        <div className='texto-link'>
                          
                        <a href={item.link} target="_blank" rel="noreferrer">
                            visitar {item.nombre}
                        </a>
                            </div>
                    </div>
                );
            })}
        </div>
    );
};

export default CardWeb;
