import React from "react";
import Home from "./containers/Home/Home";
import "./App.scss";

import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Portafolio from "./containers/Portafolio/Portafolio";
import Identidad from "./containers/Identidad/Identidad";
import Nosotras from "./containers/Nosotras/Nosotras";
import NavbarComp from "./components/navBar/Navbar";
import Contact from "./containers/Home/Contact/Contact";
import BackToTopButton from "./components/backTotopButton/BackToTopButton";

const App = () => {
    return (
        <BrowserRouter>
            <div className="App">
                <NavbarComp />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/portfolio/:tipo" element={<Portafolio />} />
                    <Route path="/nosotras" element={<Nosotras />} />
                    <Route path="/identidad" element={<Identidad />} />
                    <Route path="*" element={<Navigate to="/" replace />} />
                </Routes>
                <BackToTopButton />
                <Contact />
            </div>
        </BrowserRouter>
    );
};

export default App;
