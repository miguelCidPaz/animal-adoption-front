import { useRef } from "react"
import { useNavigate } from "react-router-dom"
import { useContext } from "react";
import { validationContext } from "../App";

const Login = () => {
    const navigate = useNavigate();
    const name = useRef("")
    const pass = useRef("")
    const { validate, setValidate } = useContext(validationContext);


    const comprobate = async () => {

        if (name.current.value === process.env.REACT_APP_NAME_SUPERUSER && pass.current.value === process.env.REACT_APP_PASS_SUPERUSER) {
            console.log("Hello master")
            setValidate(true)
            navigate("/admin-pets");
        }
    }

    return (
        <section className="login--background">
            <div className="login--modal">
                <p>Enter username and password</p>
                <input type="text" ref={name} placeholder="Name..." />
                <input type="password" ref={pass} placeholder="Pass..." />
                <button onClick={e => comprobate()}>Login</button>

            </div>
        </section>
    )
}

export default Login