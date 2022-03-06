import React from "react";
import Pet from '../components/PetCard'
function MainView() {
  return (
    <div >
      <p>Estas en la home</p>  
      <div className="home">
      <Pet id="a"/> 
      <Pet/>
      <Pet/>
      <Pet/>
      <Pet/>
      <Pet/>
      <Pet/>
      <Pet/>
      <Pet/>
      </div>
      
    </div>
  );
}
export default MainView;