import { useContext, useEffect, useState } from "react";
import { validationContext } from "../App";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AdminPets = () => {
    const navigate = useNavigate();
    const [pets, setPets] = useState([]);
    const { validate, setValidate } = useContext(validationContext);

    const redirect = () => {
        return validate ? null : navigate('/')
    }

    const updatePets = async () => {
        if (pets.length === 0) await axios.get(`${process.env.REACT_APP_API_URL}pets/getlockeds/all`).then(response => setPets(response.data)).catch(err => console.error(err))
    }

    useEffect(() => {
        redirect();
        if (validate && pets.length === 0) {
            updatePets()
        }
    }, [])


    return (
        <section className="adminpets--main">

            {pets.map(e => {
                return (
                    <AdminPets pet={e} />
                )
            })}

        </section>
    )
}

export default AdminPets