import * as React from "react";
import { Link } from "react-router-dom";
import MapContainer from "./MapContainer";

export default function Footer() {
    const mapSrc = "https://maps.google.com/maps?q=P.%C2%BA%20de%20Recoletos,%2015,%2028004%20Madrid&t=&z=13&ie=UTF8&iwloc=&output=embed";

    return (
        <footer>
            <section className="contact">
                <ul>
                    <li>tel. 666 66 66 66</li>
                    <li>email: adoption@thebridge.com</li>
                    <li>schedule: </li>
                </ul>
            </section>
            <section className="aboutUsLink">
                <Link to={'/about-us'}>
                    learn more about our shelter
                </Link>
            </section>
            <section className="maps">
                <div className="gmap_canvas">
                    <iframe title='gmap'
                        id="gmap_canvas"
                        src={mapSrc}
                        frameBorder="0"
                        scrolling="no" >
                    </iframe>
                </div>
            </section>
        </footer>
    )

}