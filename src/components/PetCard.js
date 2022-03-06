import { Link } from "react-router-dom";
export default function PetCard(props) {
  return (
    <div className="petcard-box" >
      <div id="petcard-img_box"> 
      <img
        class="petcard-img_bottom"
        src="https://adopcionanimal.es/wp-content/uploads/2022/02/Galo_1.jpg"
        alt="Default Image"
      />

      <img
        class="petcard-img_top"
        src="https://adopcionanimal.es/wp-content/uploads/2022/02/Galo_2.jpg"
        alt="Profile Image"
      />
      </div>      

      <div className="petcard-options">
        <p>Richi</p>
        <div className="petcard-options_buttons">
        <Link to=""><button>adopt</button></Link>
        <Link to={`/api/pets/${props.id}`}><button>details</button></Link>
        </div>        
      </div>
    </div>
  );
}
