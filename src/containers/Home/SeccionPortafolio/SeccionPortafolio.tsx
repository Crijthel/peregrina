import React from "react";
import "./SeccionPortafolio.scss";
import ProductivitySlider from "../../../components/productivitySlider/ProductivitySlider";

const SeccionPortafolio = () => {
    return (
        <div className="portfolio-container">
            <h1 className="d-flex w-100  justify-content-center">
                Nuestro trabajo
            </h1>
            <div className="botones-container">
                <ProductivitySlider />
            </div>
        </div>
    );
};

export default SeccionPortafolio;
