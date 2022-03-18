import React from "react";
import ReservationForm from "../components/ReservationForm";

function Reservation(props) {
  return (
    <div>
      <ReservationForm setAdoptions={props.setAdoptions} adoptions={props.adoptions} />
    </div>
  );
}
export default Reservation;
