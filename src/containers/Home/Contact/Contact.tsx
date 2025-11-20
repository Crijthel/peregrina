import React from "react";
import Formw from "../../../components/Form/Form";
import ig from "../../../assets/icons/IG-01.avif";
import art from "../../../assets/icons/ARTSTATIOn-01.avif";
import "./Contact.scss";
//import Form from "./Form";
const Contact = ({page}: any) => {
    return (
        <div id="contacto" className={page}>
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
