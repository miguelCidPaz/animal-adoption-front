import * as React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
    const mapSrc = "https://maps.google.com/maps?q=P.%C2%BA%20de%20Recoletos,%2015,%2028004%20Madrid&t=&z=13&ie=UTF8&iwloc=&output=embed";

    return (
        <footer>
            <section className="footer-contact">
                <div className="footer-title">Contact us</div>
                <ul>
                    <li>tel: 666 66 66 66</li>
                    <li>email: adoption@thebridge.com</li>
                    <li>opening hours: weekdays from 9:00 to 14:00</li>
                </ul>
            </section>
            <section className="footer-aboutUs">
                <div className="footer-title">About us</div>
                <div className="routerLinkBox">
                    <Link to={'/about-us'} className="routerLink">
                        learn more about our shelter
                    </Link>
                </div>
            </section>
            <section className="footer-maps">
                <div className="footer-title">Find us</div>
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