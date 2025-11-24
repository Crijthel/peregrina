import "./TextAnimations.scss";
import fondo from "../../../assets/fondo/FondoHome3cortado.png";
import React from "react";
import { useCenterObserver } from "../../../hooks/useCenterObserver";

const TextAnimations: React.FC = () => {
    const [unoRef, isUnoActive] = useCenterObserver();
    const [dosRef, isDosActive] = useCenterObserver();
    const [tresRef, isTresActive] = useCenterObserver();

    return (
        <div className="text-a-container">
            <img alt="fondo" src={fondo} className="fondo" />
            <div className="espacio"></div>
            <div className="textos-container">
                <div
                    ref={unoRef}
                    className={
                        "split-text-container uno" +
                        (isUnoActive ? " active" : "")
                    }
                >
                    <span className="texto text-part left">Somos</span>
                    <span className="texto text-part right">curiosidad</span>
                </div>

                <div
                    ref={dosRef}
                    className={
                        "split-text-container dos" +
                        (isDosActive ? " active" : "")
                    }
                >
                    <span className="texto text-part left">Somos</span>
                    <span className="texto text-part right">aventura</span>
                </div>

                <div
                    ref={tresRef}
                    className={
                        "split-text-container tres" +
                        (isTresActive ? " active" : "")
                    }
                >
                    <span className="texto text-part left">Somos</span>
                    <span className="texto text-part right">PEREGRINA</span>
                </div>
            </div>
        </div>
    );
};

export default TextAnimations;
