import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";

import axios from "axios";

export default function ReservationForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name:'',
      personalID: '',
      age:'18',
      address:'',
    }
  });
  const requiredInputErrorMessage = 'this is required';
  const { id } = useParams();
  const navigate = useNavigate();

  async function submitReservation(userInput) {
    const apiURL = process.env.REACT_APP_API_URL;
    const response = await axios.post(`${apiURL}reservations/${id}`, userInput);
    navigate(`/pets/${id}/reservation-completed`);
  }

  return (
    <form id="form" className="form" onSubmit={handleSubmit(submitReservation)}>
      <div className="questions">
        <div className="leftside">
          <div className="box">
            <label htmlFor="FullName">
              <b>
                Full Name of the adopter<span className="required">*</span>
              </b>
              <br />
            </label>
            <br />
            <input
              type="text"
              placeholder="Enter your full name"
              id="FullName"
              {...register("name", { required: { value: true, message: requiredInputErrorMessage } })}
            />
            <sub className="error-message">{errors.name?.message}</sub>
          </div>
          <br />

          <br />

          <div className="box">
            <label htmlFor="DNI">
              <b>
                DNI<span className="required">*</span>
              </b>
              <br />
            </label>
            <br />
            <input
              type="text"
              id="DNI"
              placeholder="Enter your DNI"
              {...register("personalID", { required: { value: true, message: requiredInputErrorMessage }, maxLength: 9 })}
            />
            <sub className="error-message">{errors.personalID?.message}</sub>
          </div>
          <br />
          <br />
          <div className="box">
            <label htmlFor="Age">
              <b>Adopter's age </b>
              <span className="required">*</span>
              <br />
            </label>
            <br />
            <input
              type="number"
              placeholder="18"
              id="Age"
              {...register("age", { required: { value: true, message: requiredInputErrorMessage }, min: 18 })}
            />
            <sub className="error-message">{errors.age?.message}</sub>
            <br />
            <br />
            <br />
          </div>

          <div className="box">
            <label htmlFor="Residence">
              <b>Place of residence</b>
              <span className="required">*</span>
              <br />
            </label>
            <br />
            <input
              type="text"
              id="Residence"
              placeholder="Enter your place of residence"
              {...register("address", { required: { value: true, message: requiredInputErrorMessage } })}
            />
            <sub className="error-message">{errors.address?.message}</sub>
          </div>
          <br />
          <br />
        </div>
        <div className="rightside">
          <div className="box">
            <label htmlFor="Province">
              <b>Province</b>
              <br />
            </label>
            <br />
            <input
              type="text"
              id="Province"
              placeholder="Enter your province"
            />
            <br />
            <br />
          </div>

          <div className="box">
            <label htmlFor="Question1">
              <b>
                Why do you want to adopt a pet? Who lives together in the family
                home?
              </b>
            </label>
          </div>
          <br />
          <div className="box">
            <textarea
              rows={5}
              id="Question1"
              placeholder="Enter your answer"
            />
            <sub className="error-message">{errors.adoptionMotive?.message}</sub>
          </div>
          <br />
          <br />

          <div className="box">
            <label htmlFor="Question2">
              <b>
                Have you had animals before, do you still have them, and if not,
                why not, and do you have experience with animals?
              </b>
            </label>
          </div>
          <br />
          <div className="box">
            <textarea
              rows={5}
              id="Question2"
              placeholder="Enter your answer"
            />
            <sub className="error-message">{errors.petHistory?.message}</sub>
          </div>
        </div>
      </div>
      <br />
      <br />
      <button type="submit" className="submitButton">
        <div className="svg-wrapper-1">
          <div className="svg-wrapper">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
            >
              <path fill="none" d="M0 0h24v24H0z"></path>
              <path
                fill="currentColor"
                d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
              ></path>
            </svg>
          </div>
        </div>
        <span>Submit</span>
      </button>
    </form>
  );
}
