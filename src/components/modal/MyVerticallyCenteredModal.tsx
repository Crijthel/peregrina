import React from "react";
import "./Modal.scss";
import Modal from "react-bootstrap/Modal";

const MyVerticallyCenteredModal = (props: any) => {
    return (
        <Modal
            className="modaaaal"
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
                hecho por {props.item.autora}
                {props.item.video ? (
                    <iframe
                        className="video-modal"
                        loading="eager"
                        width="560"
                        height="315"
                        src={props.item.video}
                        title={props.item.nombre}
                        allowTransparency
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                    ></iframe>
                ) : (
                    <img
                        className="imagen-modal"
                        src={props.item.imagen}
                        alt={props.item.nombre}
                    />
                )}
                <span>{props.item.descripcion}</span>
                <span>Programas utilizados: </span>
                <div>
                    {props.item.stack.map((elemento: any) => {
                        return <span>{elemento}</span>;
                    })}
                </div>
            </Modal.Body>
        </Modal>
    );
};

export default MyVerticallyCenteredModal;
