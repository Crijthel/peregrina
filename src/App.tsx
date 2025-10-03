import React from "react";
import Home from "./containers/Home/Home";
import "./App.scss";
import TextAnimations from "./containers/TextAnimations/TextAnimations";
import Portfolio from "./containers/portfolio/Portfolio";

const App = () => {
    return (
        <div className="App">
            <Home />
            <TextAnimations />
            <Portfolio/>
        </div>
    );
};

export default App;
