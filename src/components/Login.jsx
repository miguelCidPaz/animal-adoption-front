import { useRef } from "react"

const Login = () => {
    const name = useRef("")
    const pass = useRef("")

    const comprobate = () => {
        if (name === process.env.NAME_SUPERUSER && pass === process.env.PASS_SUPERUSER) {
            console.log("Hello master")
        }
    }

    console.log(process.env)
    console.log(process.env.REACT_APP_NAME_SUPERUSER)
    console.log(process.env.REACT_APP_PASS_SUPERUSERR)
    console.log(process.env.REACT_APP_API_URL)

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