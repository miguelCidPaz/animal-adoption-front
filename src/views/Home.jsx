import React from "react";
import Pet from '../components/PetCard'
import { useState, useContext, useEffect } from "react";
import { petsContext } from "../App";
import axios from "axios";
import PetCard from "../components/PetCard";
function MainView() {
  const {pets, setPets} = useContext(petsContext) 
  
  return (
    <div >
      <p>Estas en la home</p>  
      <div className="home">     
      {pets.length > 0 && pets.map(pet => <Pet data = {pet} />) }       
      </div>
      
    </div>
  );
}
export default MainView;