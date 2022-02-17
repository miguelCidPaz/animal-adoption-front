import React from "react";
import "./styles.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import Footer from './components/Footer'
function App() {
  return (
    <main>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Footer />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
