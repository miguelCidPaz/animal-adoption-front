const RegisterShelter = () => {

    return (
        <section>
            <form action="meh" method="post">

                <label htmlFor="name" className="register--title">Name</label>
                <input type="text" name="name" className="register--input" />

                <label htmlFor="email" className="register--title">Email</label>
                <input type="email" name="email" className="register--input" />

                <label htmlFor="phone" className="register--title">Phone</label>
                <input type="tel" name="phone" className="register--input" />

                <label htmlFor="pass" className="register--title">Pass</label>
                <input type="password" name="pass" className="register--input" />

                <input type="submit" value="meh" />

            </form>
        </section>
    )
}