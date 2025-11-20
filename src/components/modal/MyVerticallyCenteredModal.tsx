import React from "react";
import "./Modal.scss";
import Modal from "react-bootstrap/Modal";

const MyVerticallyCenteredModal = (props: any) => {
    const srcImg =
        props.item.imagen !== "" ? "../../../" + props.item.imagen : "";
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
                <img className="imagen-modal zoom" src={srcImg} alt="" />
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
            </Modal.Body>
        </Modal>
    );
};

export default MyVerticallyCenteredModal;
