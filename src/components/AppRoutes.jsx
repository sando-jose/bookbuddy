import React from "react";
import { Routes, Route } from "react-router-dom";
import Books from "./Books";
import BookDetails from "./BookDetails";

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Books />} />
    <Route path="/books" element={<AllBooks />} />
    <Route path="/books/:id" element={<BookDetails />} />
  </Routes>
);

export default AppRoutes;
