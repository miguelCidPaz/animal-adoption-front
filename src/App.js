import React, { useEffect } from "react";
import { useState, useContext, createContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./assets/styles.scss";
import Home from "./views/Home";
import axios from "axios";

const petsContext = createContext({
  pets: [],
  setPets: () => { },
});

export { petsContext };

function App() {
  const [pets, setPets] = useState({});
  const apiURL = process.env.REACT_APP_API_URL;
  useEffect(async () => {
    const response = await axios.get(`${apiURL}pets/`);
    setPets([...response.data]);
  }, [])


  return (
    <main>
      <BrowserRouter>
        <petsContext.Provider value={{ pets, setPets }}>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </petsContext.Provider>
      </BrowserRouter>
    </main>
  );
}

export default App;
