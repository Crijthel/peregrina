import "./TextAnimations.scss";
import * as motion from "motion/react-client";
//import { useInView } from "motion/react";
import fondo from "../../../assets/fondo/FondoHome3.png";

//import { useRef } from "react";
const TextAnimations = () => {
  //    const container = useRef(null)
  //const ref = useRef(null)
 // const isInView = useInView({ root: container })

  //  const mostrarTexto = () => {
    //   return  <div ref={container} style={{ overflow: "scroll" }}>
      //<div ref={ref} />
    //</div>
    //};

    return (
        <div className="text-a-container">
            <img alt="fondo" src={fondo} className="fondo" />
            <div className="espacio"></div>

            <motion.div
                style={{ width: 200, height: 100, backgroundColor: "#5686F5" }}
            //    initial={{ opacity: 0, scale: 0 }}
               initial="offscreen" 
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                    duration: 0.4,
                    scale: { type: "spring", visualDuration: 1, bounce: 0.5 },
                }}
               
            whileInView="onscreen"
            >
                <span className="texto text-part left">Somosss</span>
            </motion.div>
            {//mostrarTexto()
            }
            <div className="textos-container">
                <div className="split-text-container uno">
                    <span className="texto text-part left">Somos</span>
                    <span className="texto text-part right">curiosidad</span>
                </div>
                <div className="split-text-container-dos">
                    <span className="texto text-part left">Somos</span>
                    <span className="texto text-part right">aventura</span>
                </div>
                <div className="split-text-container tres">
                    <span className="texto text-part left">Somos</span>
                    <span className="texto text-part right">PEREGRINA</span>
                </div>
            </div>
        </div>
    );
};

export default TextAnimations;
