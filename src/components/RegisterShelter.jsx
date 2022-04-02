import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import md5 from 'md5';

const RegisterShelter = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();

    const registerShelter = async (dataForm) => {
        dataForm.pass = md5(dataForm.pass)
        await axios.post(`${process.env.REACT_APP_API_URL}shelters/create`,
            { data: dataForm })
        navigate('/')
    }

    return (
        <section className="register--main">

            <form onSubmit={handleSubmit(registerShelter)}>

                <h2>Register your shelter</h2>

                <label htmlFor="name" className="register--title">Name</label>
                <input type="text" name="name" className="register--input" required {
                    ...register("name",
                        {
                            value: "",
                            required: { value: true, message: 'Campo requerido' },
                            maxLength: { value: 80, message: 'Tamaño maximo 80' }
                        })
                } />

                <label htmlFor="email" className="register--title">Email</label>
                <input type="email" name="email" className="register--input" required {
                    ...register("email",
                        {
                            value: "",
                            required: { value: true, message: 'Campo requerido' },
                            pattern: { value: /^\S+@\S+$/i, message: 'Formato no correcto' }
                        })
                } />

                <label htmlFor="phone" className="register--title">Phone</label>
                <input type="tel" name="phone" className="register--input" required {
                    ...register("phone",
                        {
                            value: ""
                        })
                } />

                <label htmlFor="pass" className="register--title">Pass</label>
                <input type="password" minLength={4} name="pass" className="register--input" required {
                    ...register("pass",
                        {
                            value: ""
                        })
                } />

                <input className="submit-button" type="submit" method="get" value="Register" />

            </form>

        </section>
    )
}

export default RegisterShelter