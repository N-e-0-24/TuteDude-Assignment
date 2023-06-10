import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Page1, Page2 } from "../Pages";

const Approuter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Page1 />} />
        <Route path="/dashboard" element={<Page2 />} />
      </Routes>
    </Router>
  );
};

export default Approuter;
