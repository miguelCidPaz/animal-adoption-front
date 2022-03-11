import React from "react";
import { useState, useContext, useEffect } from "react";
import { petsContext } from "../App";
import PetCard from "../components/PetCard";
function MainView() {
  const {pets, setPets} = useContext(petsContext) 
  
  return (
    <div >
      <p>Estas en la home</p>  
      <div className="home">     
      {pets.length > 0 && pets.map(pet => <PetCard data = {pet} key = {pet.id} />) }       
      </div>
      
    </div>
  );
}
export default MainView;