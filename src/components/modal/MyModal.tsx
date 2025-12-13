import React, { JSX, useState } from "react";
import "./Modal.scss";
import Modal from "react-bootstrap/Modal";
import tresdmax from "../../assets/icons/3dsmax.webp";
import loading from "../../assets/loading.svg";
import aftereffects from "../../assets/icons/after-effects.svg";
import blender from "../../assets/icons/blender.svg";
import illustrator from "../../assets/icons/illustrator.svg";
import PFTrack from "../../assets/icons/PFTrack.png";
import photoshop from "../../assets/icons/photoshop.svg";
import RizomUV from "../../assets/icons/RizomUV.png";
import SubstancePainter from "../../assets/icons/SubstancePainter.webp";
import zbrush from "../../assets/icons/zbrush.svg";
import tentaculoIzquierda from "../../assets/proyectos/Tentaculo1.png";
import tentaculoDerecha from "../../assets/proyectos/Tentaculo2.png";

const MyModal = (props: any) => {
    const switchIcons = (elemento: string) => {
        switch (elemento) {
            case "3DMax":
                return <img src={tresdmax} alt="3DMax" title="3DMax" />;
            case "After Effects":
                return (
                    <img
                        src={aftereffects}
                        alt="After Effects"
                        title="After Effects"
                    />
                );
            case "Blender":
                return <img src={blender} alt="Blender" title="Blender" />;
            case "Illustrator":
                return (
                    <img
                        src={illustrator}
                        alt="Illustrator"
                        title="Illustrator"
                    />
                );
            case "PfTrack":
                return <img src={PFTrack} alt="PfTrack" title="PfTrack" />;
            case "Photoshop":
                return (
                    <img src={photoshop} alt="photoshop" title="photoshop" />
                );
            case "RizomUV":
                return <img src={RizomUV} alt="RizomUV" title="RizomUV" />;
            case "Substance Painter":
                return (
                    <img
                        src={SubstancePainter}
                        alt="Substance Painter"
                        title="Substance Painter"
                    />
                );
            case "ZBrush":
                return <img src={zbrush} alt="ZBrush" title="ZBrush" />;

            default:
                return <></>;
        }
    };

    const handleIcons = (): JSX.Element => {
        return props.item.stack.map((elemento: any) => {
            return switchIcons(elemento);
        });
    };

    const [isLoading, setIsLoading] = useState(true);

    const handleIframeLoad = () => {
        setIsLoading(false);
    };
    return (
        <Modal
            className="my-modal"
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    {props.item.nombre}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <img
                    src={tentaculoIzquierda}
                    alt="tentaculoIzquierda"
                    title="After Effects"
                    className="tentaculoIzquierda"
                />
                <img
                    className="tentaculoDerecha"
                    src={tentaculoDerecha}
                    alt="tentaculoDerecha"
                />
                Hecho por {props.item.autora}
                {props.item.video ? (
                    <div className="video-modal">
                        {isLoading && (
                            <img
                                src={loading}
                                className="loading"
                                alt="loading"
                            />
                        )}
                        <iframe
                            loading="eager"
                            src={props.item.video}
                            title={props.item.nombre}
                            allowTransparency
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                            onLoad={handleIframeLoad}
                            style={{ display: isLoading ? "none" : "block" }}
                        ></iframe>
                    </div>
                ) : (
                    <img
                        className={
                            props.item.verticalImage
                                ? "imagen-modal verticalImage"
                                : "imagen-modal"
                        }
                        src={props.item.imagen}
                        alt={props.item.nombre}
                    />
                )}
                {props.item.imagen2 && (
                    <img
                        className={"imagen-modal"}
                        src={props.item.imagen2}
                        alt={props.item.nombre}
                    />
                )}
                {props.item.imagen3 && (
                    <img
                        className={"imagen-modal"}
                        src={props.item.imagen3}
                        alt={props.item.nombre}
                    />
                )}
                <span className="desc">{props.item.descripcion}</span>
                <div className="iconos-proyectos">
                    <span>Programas utilizados: </span>
                    <div>{handleIcons()}</div>
                </div>
            </Modal.Body>
        </Modal>
    );
};

export default MyModal;
