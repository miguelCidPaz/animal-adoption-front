import React from "react";
import { useContext } from "react";
import { petsContext } from "../App";
import PetCard from "../components/PetCard";
import Login from "../components/Login";

function MainView(props) {
  const { pets } = useContext(petsContext)
  return (
    <div>
      <div className="home">
        {pets.length > 0 && pets.map(pet => <PetCard data={pet} key={pet.id} />)}
        {props.viewLogin ? <Login /> : null}
      </div>
    </div>
  );
}

export default MainView;