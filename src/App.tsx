import React from "react";
import Home from "./containers/Home/Home";
import "./App.scss";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Portafolio from "./containers/Portafolio/Portafolio";

const App = () => {
    return (
        <BrowserRouter>
            <div className="App">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/portafolio/:tipo" element={<Portafolio />} />
                    <Route path="*" element={<Home />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
};

export default App;
