import { useContext, useEffect, useState } from "react";
import { validationContext } from "../App";
import { useNavigate } from "react-router-dom";

const AdminPets = () => {
    const navigate = useNavigate();
    const [pets, setPets] = useState([]);
    const { validate, setValidate } = useContext(validationContext);

    const redirect = () => {
        return validate ? null : navigate('/')
    }

    useEffect(() => {
        redirect();
    })


    return (
        <section className="adminpets--main">

            {pets.map(e => {
                return (
                    <div>
                        JAJA
                    </div>
                )
            })}

        </section>
    )
}

export default AdminPets