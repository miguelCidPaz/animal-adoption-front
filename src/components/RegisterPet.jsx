import { useState } from "react"
import MultiRangeSlider from "./MultiRangeSlider"

const RegisterPet = () => {
    const [weight, setWeight] = useState(10)

    return (
        <section className="register--main">

            <form action="post">

                <div className="register--contact">
                    <p className="register--title">CONTACT</p>
                    <label htmlFor="email">Email</label>
                    <input type="text" placeholder="Type your email..." name="email" className="register--input" />
                    <label htmlFor="phone">Phone</label>
                    <input type="text" placeholder="Type your phone number..." name="phone" className="register--input" />
                </div>

                <div className="register--pet">
                    <p className="register--title">PET</p>

                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" className="register--input" />

                    <div className="register--row">

                        <div className="register--slot">
                            <label htmlFor="size">Size</label>
                            <select name="size">
                                <option value="1">Small</option>
                                <option value="2">Medium</option>
                                <option value="3">Large</option>
                            </select>
                        </div>

                        <div className="register--slot">
                            <label htmlFor="size">Gender</label>
                            <select name="size">
                                <option value="1">Male</option>
                                <option value="2">Female</option>
                            </select>
                        </div>

                        <div className="register--slot">
                            <label htmlFor="size">Species</label>
                            <select name="size">
                                <option value="1">Dog</option>
                                <option value="2">Cat</option>
                            </select>
                        </div>

                    </div>

                    <label>Weight</label>
                    <MultiRangeSlider value={weight} setValue={setWeight} />

                    <label htmlFor="image1">Image 1</label>
                    <input type="url" name="image1" className="register--input" />

                    <label htmlFor="image2">Image 2</label>
                    <input type="url" name="image2" className="register--input" />

                    <label htmlFor="description">Description Pet</label>
                    <textarea name="description" cols="30" rows="10" className="register--input" ></textarea>

                </div>

            </form>

        </section>
    )
}

export default RegisterPet