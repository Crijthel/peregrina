import React from "react";
import Formw from "../../components/Form/Form";
import ig from "../../assets/img/IG-01.avif";
import art from "../../assets/img/ARTSTATIOn-01.avif";
import "./Contact.scss";
//import Form from "./Form";
const Contact = () => {
    return (
        <div id="Contact">
            <h1 className="title">Contacto</h1>
            <div className="contact_container">
                <Formw />
                <div className="links">
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
    );
};

export default Contact;
