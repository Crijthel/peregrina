import React, { useState } from "react";
import "./Nosotras.scss";
import personaje1 from "../../assets/proyectos/personajes/personajes1.png";
import personaje2 from "../../assets/proyectos/personajes/personajes2.png";
import personaje3 from "../../assets/proyectos/personajes/personajes3.png";
import personaje4 from "../../assets/proyectos/personajes/personajes4.png";
import personaje5 from "../../assets/proyectos/personajes/personajes5.png";
import personaje6 from "../../assets/proyectos/personajes/personajes6.png";
import personaje7 from "../../assets/proyectos/personajes/personajes7.png";
import loading from "../../assets/loading.svg";

const Nosotras = () => {
    const [isLoading, setIsLoading] = useState(true);
    const handleIframeLoad = () => {
        setIsLoading(false);
    };
    return (
        <div className="container-nosotras">
            <h1>NOSOTRAS</h1>

            <div className="contenido">
                <div className="textos">
                    <span>
                        Nuestra realidad se crea en BASE a nuestro impulso
                        curioso y la búsqueda de lo extraordinario.
                    </span>
                    <span className="cambiamos">
                        “Caminamos a la par de una mente curiosa”
                    </span>
                    <span>
                        Somos una agencia que genera productos más allá de la
                        imaginación. Todos tenemos una historia que contar,
                        nosotras nos encargamos de traerla a la realidad sin que
                        pierda su esencia original.
                    </span>
                </div>
                <div className="personajes">
                    <img src={personaje1} alt="personaje" />
                    <img src={personaje2} alt="personaje" />
                    <img src={personaje3} alt="personaje" />
                    <img src={personaje5} alt="personaje" />
                    <img src={personaje4} alt="personaje" />
                    <img src={personaje7} alt="personaje" />
                    <img src={personaje6} className="last" alt="personaje" />
                </div>

                <h2>Video Caso </h2>

                <div className="video-id">
                    {isLoading && (
                        <img src={loading} className="loading" alt="loading" />
                    )}
                    <iframe
                        loading="eager"
                        src={
                            "https://www.youtube.com/embed/bdo0WmerAP0?si=BnNmF5kwqlVYdO6s&loop=1&playlist=bdo0WmerAP0&autoplay=1&muted=1"
                        }
                        title={"MANIFIESTO"}
                        allowTransparency
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                        onLoad={handleIframeLoad}
                        style={{ display: isLoading ? "none" : "block" }}
                    ></iframe>
                </div>
            </div>
        </div>
    );
};

export default Nosotras;
