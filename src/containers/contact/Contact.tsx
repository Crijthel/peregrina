import React from 'react'
import Formw from '../../components/Form/Form'
//import Form from "./Form";
const Contact = () => {
  return (
     <div id="Contact">
      <h1 className="title">Contact</h1>
      <div className="contact_container">
        <Formw/>
        <div className="links">
          <a
            href="https://www.linkedin.com/in/andreaibt/"
            target="_blank"
            rel="noreferrer"
          >
            <img src="assets/linkedin.svg" alt="" />
          </a>
          <a
            href="https://codepen.io/andreaibt21"
            target="_blank"
            rel="noreferrer"
          >
            <img src="assets/codepen.svg" alt="" />
          </a>
          <a
            href="https://github.com/andreaibt21"
            target="_blank"
            rel="noreferrer"
          >
            <img src="assets/github.svg" alt="" />
          </a>
        </div>
      </div>
    </div>  
  )
}

export default Contact