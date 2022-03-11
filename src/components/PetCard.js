import { Link } from "react-router-dom";
import { useState, useContext, useEffect } from "react";
import useFindCurrentPet from "./hooks/useFindCurrentPet";
import {adoptionsContext}  from "../App";

export default function PetCard({data}) {  
  const { adoptions, setAdoptions } = useContext(adoptionsContext)
  const [currentCard, setCurrentCard] = useState({});
  const findCurrentPet = useFindCurrentPet();  
  const currentPet = findCurrentPet(data.id, adoptions)
  const printPet = (adoptions.length > 0 ? currentPet : false )
  console.log(adoptions,"ADOPTIONS");
  console.log(printPet,"CURRENT");
  return (
    <div className="petcard-box" >
    <div id="petcard-img_box"> 
    <img
      className="petcard-img_bottom"
      src={data.images[0]}
      alt="Default Image"
    />

    <img
      className="petcard-img_top"
      src={data.images[1]}
      alt="Profile Image"
    />
    </div>      

    <div className="petcard-options">
      <p>{data.name}</p>
      <div className="petcard-options_buttons">
      <Link to={`/api/pet/${data.id}/reservation`}><button>adopt</button></Link>
      <Link to={`/api/pets/${data.id}/details`}><button>details</button></Link>
      </div>        
    </div>
  </div>
  );
}
