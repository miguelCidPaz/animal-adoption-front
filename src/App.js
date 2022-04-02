import React, { useEffect } from "react";
import { useState, createContext, useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import axios from "axios";

import "./assets/styles.scss";
import Footer from './components/Footer'
import Home from "./views/Home";
import Reservation from "./views/Reservation";
import PetDetails from "./views/PetDetails";
import NavBar from "./components/NavBar";
import Completed from "./views/Completed";
import RegisterPet from "./components/RegisterPet";
import RegisterShelter from "./components/RegisterShelter";
import AboutUs from "./components/AboutUs";
import AdminPets from "./components/AdminPets";

const petsContext = createContext({
  pets: [],
  setPets: () => { },
});

const adoptionsContext = createContext({
  adoptions: [],
  setAdoptions: () => { },
});

const validationContext = createContext({
  validate: false,
  setValidate: () => { }
})

export { petsContext, adoptionsContext, validationContext };

/**
 * Componente Central App
 * @returns
 */
function App() {
  const [pets, setPets] = useState({});
  const [adoptions, setAdoptions] = useState({});
  const [validate, setValidate] = useState(false)
  const apiURL = process.env.REACT_APP_API_URL;
  const [viewLogin, setViewLogin] = useState(null)

  console.log('RENDER APP')

  useEffect(async () => {
    const petsResponse = await axios.get(`${apiURL}pets/`);
    setPets([...petsResponse.data]);
    const adoptionsResponse = await axios.get(`${apiURL}reservations/`);
    setAdoptions([...adoptionsResponse.data]);
    setValidate(false)
  }, [])

  useEffect(() => {

  }, [adoptions])

  return (
    <main>
      <BrowserRouter>
        <petsContext.Provider value={{ pets, setPets }}>
          <adoptionsContext.Provider value={{ adoptions, setAdoptions }}>
            <validationContext.Provider value={{ validate, setValidate }}>
              <NavBar viewLogin={viewLogin} setViewLogin={setViewLogin} />
              <Routes>
                <Route path="/" element={<Home viewLogin={viewLogin} />} />
                <Route path="/about-us" element={<AboutUs />} />
                <Route path="/admin-pets" element={<AdminPets />} />
                <Route path="/register-pet" element={<RegisterPet />} />
                <Route path="/register-shelter" element={<RegisterShelter />} />
                <Route path="/pets/:id/reservation" element={<Reservation setAdoptions={setAdoptions} adoptions={adoptions} />} />
                <Route path="/pets/:id/reservation-completed" element={<Completed />} />
                <Route path="/pets/:id/details" element={<PetDetails />} />
                <Route path="*" element={<Home />} />
              </Routes>
            </validationContext.Provider>
          </adoptionsContext.Provider>
        </petsContext.Provider>
        <Footer />
      </BrowserRouter>
    </main>
  );
}

export default App;
