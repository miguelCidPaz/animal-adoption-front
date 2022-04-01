import axios from "axios";
import md5 from 'md5';
import { useEffect, useState, useRef } from "react"
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import MultiRangeSlider from "./MultiRangeSlider"

const RegisterPet = () => {
    const [weight, setWeight] = useState(10)
    const [img1, setImg1] = useState("");
    const [img2, setImg2] = useState("");
    const [id, setId] = useState("");
    const [shelters, setShelters] = useState([]);
    const [valid, setValid] = useState(false);
    const [layout, setLayout] = useState(true);
    const pass = useRef("");
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();

    const verifyUser = async (data) => {
        /*         const login = await axios.get(`${process.env.REACT_APP_API_URL}shelters/login?id=${data.nameshelter}`)
                    .then((response) => {
        
                    }).catch((error) => {
        
                    }) */
        setId(data.nameShelter);
        if (data.nameShelter !== "anonymous") {
            setValid(true)
        } else {
            setLayout(false)
        }

    }

    const loginShelter = async (data) => {
        const thisPass = md5(pass.current.value)
        await axios.post(`${process.env.REACT_APP_API_URL}shelters/login`,
            { data: { id: id, pass: thisPass } })
            .then((response) => {
                if (response.data) {
                    setLayout(false)
                    setValid(false)
                } else {
                    navigate('/')
                }
            }).catch((error) => {
                navigate('/')
            })
    }

    const verifyPet = async (data) => {

        var date = new Date();
        const formatDate = (date) => {
            let formatted_date = date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear()
            return formatted_date;
        }

        const rescue = {
            nameShelter: data.nameShelter,
            email: data.email,
            phone: data.phone,
            observations: data.observations
        }

        const pet = {
            name: data.name,
            size: data.size,
            gender: data.gender,
            weightkg: weight,
            rescuedat: data.rescuedat || formatDate(date),
            birthday: data.birthday || formatDate(date),
            species: data.species,
            images: [img1, img2],
            description: data.description
        }


        const apiURL = process.env.REACT_APP_API_URL;
        await axios.post(`${apiURL}pets/create-pet`,
            { newPet: [rescue, pet] }).then((res) => {
                /* 🖕 it already works suckers 🖕 */
                const response = await axios.get(`${apiURL}pets/`);
                setPets(response.data);
                navigate('/')
            })
    }

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_URL}shelters/`)
            .then((response) => {
                setShelters(response.data)
            }).catch((error) => {
                console.error(error)
            })
    }, [])

    return (
        <section className="register--main">
            {valid ?
                <div className="register--found">
                    <div className="register--modal">
                        <p className="register--modal-title">Welcome</p>
                        <label htmlFor="pass-shelter">Input your pass</label>
                        <input ref={pass} type="password" minLength={4} name="pass-shelter" className="register--input" />
                        <button className="submit-button" onClick={loginShelter}>Enter</button>
                    </div>
                </div>
                : null}
            <div className="register--forms">
                {layout ?
                    <form className="register--contact" onSubmit={handleSubmit(verifyUser)}>
                        <p className="register--title">CONTACT</p>

                        <label htmlFor="nameShelter">Name</label>
                        <select ref={id} name="nameShelter" required {...register("nameShelter")}>
                            <option value={"anonymous"} >Anonymous</option>
                            {shelters.length > 0
                                ? shelters.map((e, i) => {
                                    if (e.nameshelter !== "Anonymous") {
                                        return <option value={e.idshelter} key={i}>{e.nameshelter}</option>
                                    }
                                })
                                : null}
                        </select>

                        <label htmlFor="email">Email</label>
                        <input type="text" placeholder="Type your email..." name="email" className="register--input" required {...register("email",
                            {
                                required: { value: true, message: 'Campo requerido' },
                                pattern: { value: /^\S+@\S+$/i, message: 'Formato no correcto' }
                            })} />

                        <label htmlFor="phone">Phone</label>
                        <input type="text" placeholder="Type your phone number..." name="phone" className="register--input" required {...register("phone")} />

                        <label htmlFor="observations">Observations</label>
                        <textarea name="observations" id="" cols="30" rows="10" {...register('observations')}></textarea>

                        <input className="submit-button" type="submit" method="get" value="Enter" />
                    </form>
                    :
                    <form className="register--pet" onSubmit={handleSubmit(verifyPet)}>
                        <p className="register--title">PET</p>

                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" className="register--input" required {...register("name")} />

                        <div className="register--row">

                            <div className="register--slot">
                                <label htmlFor="size">Size</label>
                                <select name="size" {
                                    ...register("size")
                                }>
                                    <option value="1">Small</option>
                                    <option value="2">Medium</option>
                                    <option value="3">Large</option>
                                </select>
                            </div>

                            <div className="register--slot">
                                <label htmlFor="gender">Gender</label>
                                <select name="gender" {...register('gender')}>
                                    <option value="1">Male</option>
                                    <option value="2">Female</option>
                                </select>
                            </div>

                            <div className="register--slot">
                                <label htmlFor="species">Species</label>
                                <select name="species" {...register('species')}>
                                    <option value="1">Dog</option>
                                    <option value="2">Cat</option>
                                </select>
                            </div>

                        </div>

                        <label>Weight</label>
                        <MultiRangeSlider value={weight} setValue={setWeight} />

                        <div className="register--photos">
                            <label htmlFor="image1">Image 1</label>
                            <input type="url" name="image1" maxLength={250} className="register--input" onChangeCapture={e => setImg1(e.target.value)} {...register('image1')} />
                            <img src={img1} alt="Imagen No Valida" />
                        </div>

                        <div className="register--photos">
                            <label htmlFor="image2">Image 2</label>
                            <input type="url" name="image2" maxLength={250} className="register--input" onChangeCapture={e => setImg2(e.target.value)} {...register('image2')} />
                            <img src={img2} alt="Imagen No Valida" />
                        </div>

                        <label htmlFor="description">Description Pet</label>
                        <textarea name="description" maxLength={250} cols="30" rows="10" className="register--input" {...register('description')}></textarea>
                        <input className="submit-button" type="submit" method="get" value="Register" />
                    </form>
                }
            </div>
        </section>
    )
}

export default RegisterPet