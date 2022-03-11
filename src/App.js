import React, { useEffect } from "react";
import { useState, createContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./assets/styles.scss";
import Footer from './components/Footer'
import Home from "./views/Home";
import PetDetails from "./views/PetDetails";
import axios from "axios";

const petsContext = createContext({
  pets: [],
  setPets: () => { },
});

const adoptionsContext = createContext({
  adoptions: [],
  setAdoptions: () => { },
});

export { petsContext, adoptionsContext };

function App() {
  const [pets, setPets] = useState({});
  const [adoptions, setAdoptions] = useState({});
  const apiURL = process.env.REACT_APP_API_URL;

  useEffect(async () => {
    const petsResponse = await axios.get(`${apiURL}pets/`);
    setPets([...petsResponse.data]);
    const adoptionsResponse = await axios.get(`${apiURL}reservations/`);
    setAdoptions([...adoptionsResponse.data]);
  }, [])

  return (
    <main>
      <BrowserRouter>
        <petsContext.Provider value={{ pets, setPets }}>
          <adoptionsContext.Provider value={{ adoptions, setAdoptions }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/pets/:id/details" element={<PetDetails />} />
            </Routes>
          </adoptionsContext.Provider>
        </petsContext.Provider>
        <Footer />
      </BrowserRouter>
    </main>
  );
}

export default App;
