import React from "react";
import "./assets/styles.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import Details from "./components/Details";
function App() {
  return (
    <main>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details/:id" element={<Details />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
