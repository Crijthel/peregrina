import React from "react";
import Formw from "../../../components/Form/Form";
import ig from "../../../assets/icons/IG-01.avif";
import art from "../../../assets/icons/ARTSTATIOn-01.avif";
import fondo from "../../../assets/fondo/OndaWebeditada.png";

import "./Contact.scss";
import { useParams } from "react-router";

const Contact = ({ page }: any) => {
    const params = useParams();

    console.log(params);
    return (
        <div id="contacto" className={page}>
            <img alt="fondo" src={fondo} className="fondo" />

            <div className="contact_container">
                <Formw />
                <div className="links">
                    <h1 className="chusmea">Chusmeá</h1>
                    <div className="d-flex">
                        <a
                            href="https://www.instagram.com/peregrina_dm/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <img src={ig} alt="" />
                        </a>
                        <a
                            href="https://www.artstation.com/peregrina"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <img src={art} alt="" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
