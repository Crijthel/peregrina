import React, { useState, useEffect } from "react";
import "./BackToTopButton.scss";

const BackToTopButton: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);

    // Lógica para mostrar/ocultar el botón según el scroll
    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);

        // Limpieza del evento al desmontar el componente
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    // Lógica para hacer scroll hacia arriba
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth", // Esto reemplaza el .animate() de jQuery
        });
    };

    return (
        <button
            id="back-to-top"
            className={isVisible ? "show" : ""}
            onClick={scrollToTop}
            aria-label="Back to top"
        ></button>
    );
};

export default BackToTopButton;
