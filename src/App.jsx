import React, { useState } from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes, } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects"
import Home from "./pages/Home";
import Login from "./pages/Login";
import Registration from "./pages/Registration";
import CurrencyCon from "./pages/CurrencyCon";
import Inseed from "./pages/Inseed"
const App = () => {
  return (
    <>
      <div className="w-full min-h-screen bg-zinc-900 absolute">
        <Router>
        <Navbar/>
          <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="projects" element={<Projects />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Registration/>}/>
            <Route path="currencyconvertor" element={<CurrencyCon/>}/>
            <Route path="inseed" element={<Inseed/>}/>
          </Routes>
          </Router>
      </div>
    </>
  );
};

export default App;
