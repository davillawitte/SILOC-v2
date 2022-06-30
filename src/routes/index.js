import React from "react";
import Dashboard from "../modules/dashboard";
import Home from "../modules/home";
import { Routes, Route, Link } from "react-router-dom";

function SILOCRoutes() {
  return (
    <Routes>
      <Route path="SILOC-v2" element={<Home></Home>} />
      <Route path="dashboard" element={<Dashboard></Dashboard>} />
    </Routes>
  );
}

export default SILOCRoutes;
