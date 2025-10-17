import bosque from "../../assets/fondo/bosque.png";
import NavbarComp from "../../components/navBar/Navbar";
import Contact from "./Contact/Contact";
import Portfolio from "./Portfolio/Portfolio";
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
            <Portfolio />
            <Contact />
        </>
    );
};

export default Home;
