import React from "react";
import Home from "./containers/Home/Home";
import "./App.scss";
import TextAnimations from "./containers/TextAnimations/TextAnimations";
import Portfolio from "./containers/portfolio/Portfolio";
import Contact from "./containers/contact/Contact";

const App = () => {
    return (
        <div className="App">
            <Home />
            <TextAnimations />
            <Portfolio/>
            <Contact/>
        </div>
    );
};

export default App;
