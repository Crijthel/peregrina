import React, { useState } from "react";
import loading from "../../assets/loading.svg";
import "./Identidad.scss";

const Identidad = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [isLoading2, setIsLoading2] = useState(true);
    const [isLoading3, setIsLoading3] = useState(true);

    const handleIframeLoad = () => {
        setIsLoading(false);
    };

    const handleIframeLoad2 = () => {
        setIsLoading2(false);
    };
    const handleIframeLoad3 = () => {
        setIsLoading3(false);
    };
    return (
        <div className="container-identidad">
            <h1>Identidad</h1>

            <div className="item-identidad">
                <h2>Manifiesto</h2>

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
            <div className="item-identidad">
                <h2>Brandboard</h2>

                <div className="video-id">
                    {isLoading2 && (
                        <img src={loading} className="loading" alt="loading" />
                    )}
                    <iframe
                        loading="eager"
                        src={
                            "https://www.youtube.com/embed/IA-IGhmg_XU?si=-JABe0s0oZYVCiFI&loop=1&playlist=IA-IGhmg_XU"
                        }
                        title={"BRANDBOARD"}
                        allowTransparency
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                        onLoad={handleIframeLoad2}
                        style={{ display: isLoading2 ? "none" : "block" }}
                    ></iframe>
                </div>
            </div>
            <div className="item-identidad">
                <h2>Demoreel</h2>

                <div className="video-id">
                    {isLoading3 && (
                        <img src={loading} className="loading" alt="loading" />
                    )}
                    <iframe
                        loading="eager"
                        src={
                            "https://www.youtube.com/embed/PG7k1HJmRsk?si=v3MO5mi4YDctwFdN&loop=1&playlist=PG7k1HJmRsk"
                        }
                        title={"DEMOREEL"}
                        allowTransparency
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                        onLoad={handleIframeLoad3}
                        style={{ display: isLoading3 ? "none" : "block" }}
                    ></iframe>
                </div>
            </div>
        </div>
    );
};

export default Identidad;
