import React from "react";

import Home from "./containers/Home/Home";
import "./App.scss";
// import NavbarComp from "./components/navBar/Navbar";
import TextAnimations from "./containers/TextAnimations/TextAnimations";

const App = () => {
    return (
        <div className="App">
            <Home />
            <TextAnimations />
        </div>
    );
};

export default App;
