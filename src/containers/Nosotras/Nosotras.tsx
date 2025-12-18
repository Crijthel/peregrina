import React from "react";
import "./Nosotras.scss";
import personaje1 from "../../assets/proyectos/personajes/personajes1.png";
import personaje2 from "../../assets/proyectos/personajes/personajes2.png";
import personaje3 from "../../assets/proyectos/personajes/personajes3.png";
import personaje4 from "../../assets/proyectos/personajes/personajes4.png";
import personaje5 from "../../assets/proyectos/personajes/personajes5.png";
import personaje6 from "../../assets/proyectos/personajes/personajes6.png";
import personaje7 from "../../assets/proyectos/personajes/personajes7.png";
const Nosotras = () => {
    return (
        <div className="container-nosotras">
            <h1>NOSOTRAS</h1>

            <div className="contenido">
                <div className="textos">
                    <span>
                        Nuestra realidad se crea en BASE a nuestro impulso
                        curioso y la búsqueda de lo extraordinario.
                    </span>
                    <span>“Caminamos a la par de una mente curiosa”</span>
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
            </div>
        </div>
    );
};

export default Nosotras;
