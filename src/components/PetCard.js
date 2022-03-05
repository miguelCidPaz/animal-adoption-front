export default function PetCard() {
  return (
    <div className="cardBox" >
      <div id="imageBox"> 
      <img
        className="bottomimg"
        src="https://adopcionanimal.es/wp-content/uploads/2022/02/Galo_1.jpg"
        alt="Default Image"
      />

      <img
        class="topimg"
        src="https://adopcionanimal.es/wp-content/uploads/2022/02/Galo_2.jpg"
        alt="Profile Image"
      />
      </div>      

      <div className="options">
        <p>Richi</p>
        <div className="buttonsFlex">
        <button>adopt</button>
        <button>details</button>
        </div>        
      </div>
    </div>
  );
}
