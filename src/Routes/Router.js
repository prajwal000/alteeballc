import React from "react";
import Home from "../Components/Home";
import { Routes, Route } from "react-router-dom";
import Contactus from "../Components/Contactus";
import Services from "../Components/Services";
import Detail from "../Components/Detail";

function Router() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contactus />} />
        <Route path="/service" element={<Services />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </>
  );
}

export default Router;
