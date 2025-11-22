import bosque from "../../assets/fondo/bosqueanimado2.gif";
//C:/Users/Andrea/OneDrive/Escritorio/peregrina/public/bosqueanimado.gif
import NavbarComp from "../../components/navBar/Navbar";
import Contact from "./Contact/Contact";
import SeccionPortafolio from "./SeccionPortafolio/SeccionPortafolio";
import TextAnimations from "./TextAnimations/TextAnimations";
import "./Home.scss";
const Home = () => {
    return (
        <>
            <div className="container-home">
                <NavbarComp />
                <img alt="bosque" src={bosque} className="bosque" />
            </div>
            <TextAnimations />
            <SeccionPortafolio />
            <Contact />
        </>
    );
};

export default Home;
