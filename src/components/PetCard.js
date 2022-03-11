import { Link } from "react-router-dom";
import { useState, useContext, useEffect } from "react";
import useFindCurrentPet from "./hooks/useFindCurrentPet";

export default function PetCard({data}) {
  const [currentCard, setCurrentCard] = useState({});
  const findCurrentPet = useFindCurrentPet();  
  
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
      <p>Richi</p>
      <div className="petcard-options_buttons">
      <Link to="/api/pet/:id/reservation"><button>adopt</button></Link>
      <Link to={`/api/pets/:id${data.id}/details`}><button>details</button></Link>
      </div>        
    </div>
  </div>
  );
}
