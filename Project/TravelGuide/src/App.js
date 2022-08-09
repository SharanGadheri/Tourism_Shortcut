import React from "react";

import ReactDOM from "react-dom/client";
import "../src/components/Nav.css";
import Home from "../src/components/Home";
import Book from "../src/components/Book";
import Packages from "../src/components/Packages";
import Registration from "./components/Registeration";
import Services from "../src/components/Services";
import Map from "./components/Map";
import SignUp from "../src/components/SignUp";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../src/components/Singnup.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import { Footer } from "./components/Footer";
import Login from "./components/Login/Login";
import View from "./components/View";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Book" element={<Book />} />
          <Route path="/packages" element={<Packages />} />
          <Route path="/Services" element={<Services />} />
          {/* <Route path="/Registration" element={<Registration />} /> */}
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/Map" element={<Map />} />
          <Route path="/login" element={<Login />} />
          <Route path="/View" element={<View />} />
         </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
};

export default App;
