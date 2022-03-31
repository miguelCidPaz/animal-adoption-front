import { useForm } from "react-hook-form";
import axios from "axios";
import md5 from 'md5';

const RegisterShelter = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const registerShelter = async (dataForm) => {
        dataForm.pass = md5(dataForm.pass)
        await axios.post(`${process.env.REACT_APP_API_URL}pets/filter`,
            { data: dataForm })


    }

    return (
        <section className="register--main">

            <form onSubmit={handleSubmit(registerShelter)}>

                <label htmlFor="name" className="register--title">Name</label>
                <input type="text" name="name" className="register--input" {
                    ...register("name",
                        {
                            value: ""
                        })
                } />

                <label htmlFor="email" className="register--title">Email</label>
                <input type="email" name="email" className="register--input" {
                    ...register("email",
                        {
                            value: ""
                        })
                } />

                <label htmlFor="phone" className="register--title">Phone</label>
                <input type="tel" name="phone" className="register--input" {
                    ...register("phone",
                        {
                            value: ""
                        })
                } />

                <label htmlFor="pass" className="register--title">Pass</label>
                <input type="password" name="pass" className="register--input" {
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