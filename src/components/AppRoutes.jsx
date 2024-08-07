import React from "react";
import { Routes, Route } from "react-router-dom";
import Books from "./Books";
import BookDetails from "./BookDetails";
import Login from "./Login";
import Register from "./Register";
import Account from "./Account";

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Books />} />
    <Route path="/books" element={<Books />} />
  </Routes>
);

export default AppRoutes;
