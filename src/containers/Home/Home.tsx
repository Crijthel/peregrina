import bosque from "../../assets/fondo/bosque.gif";
import NavbarComp from "../../components/navBar/Navbar";
import SeccionPortafolio from "./SeccionPortafolio/SeccionPortafolio";
import TextAnimations from "./TextAnimations/TextAnimations";
import "./Home.scss";
const Home = () => {
    return (
        <>
            <div className="container-home">
                {/* <NavbarComp /> */}
                <img alt="bosque" src={bosque} className="bosque" />
            </div>
            <TextAnimations />
            <SeccionPortafolio />
        </>
    );
};

export default Home;
