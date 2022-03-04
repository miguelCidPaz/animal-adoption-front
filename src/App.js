import React from "react";
import "./assets/styles.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import PetDetails from "./views/PetDetails";
function App() {
  return (
    <main>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="pet/:id/details" element={<PetDetails />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
