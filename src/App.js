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

const adoptionsContext = createContext({
  adoptions: [],
  setAdoptions: () => { },
});

export { petsContext };

function App() {
  const [pets, setPets] = useState({});
  const [adoptions, setAdoptions] = useState({});
  const apiURL = process.env.REACT_APP_API_URL;

  useEffect(async () => {
    const petsResponse = await axios.get(`${apiURL}pets/`);
    const adoptionsResponse = await axios.get(`${apiURL}reservations/`);
    setAdoptions([...adoptionsResponse]);
    setPets([...petsResponse.data]);
  }, [])
console.log(adoptions);

  return (
    <main>
      <BrowserRouter>
        <petsContext.Provider value={{ pets, setPets }}>
          <adoptionsContext.Provider value={{ adoptions, setAdoptions }}>
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </adoptionsContext.Provider>
        </petsContext.Provider>
      </BrowserRouter>
    </main>
  );
}

export default App;
