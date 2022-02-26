import * as React from "react";
import { Link, useParams } from "react-router-dom";

import Button from '@mui/material/Button';

export default function Details() {
    const { id } = useParams();
    const { pets, setPets } = useContext(petsDataContext);
    return (
        <section>
            {/* image component */}
            <div className="details-petName"></div>
            <div className="details-petDescription"></div>
            <div className="details-petCategory"></div>
            <Button variant="contained">Adopt</Button>
        </section>
    )
}