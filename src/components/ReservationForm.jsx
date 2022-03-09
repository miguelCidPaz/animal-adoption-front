import React from "react";
import { useForm } from "react-hook-form";

export default function App() {
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
      province:'',
      adoptionMotive: '',
      petHistory:''
    }
  });
  //const valuesOutOfDatabase = ['petHistory', 'province', 'adoptionMotive',]
  const requiredInputError = 'this is required';
  const onSubmit = (data) => console.log(JSON.stringify(data));
  console.log(errors);

  return (
    <form id="form" className="form" onSubmit={handleSubmit((onSubmit))}>
      <div className="questions">
        <div className="leftside">
          <div className="box">
            <label for="FullName">
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
              {...register("name", { required: { value: true, message: requiredInputError } })}
            />
            <sub className="error-message">{errors.name?.message}</sub>
          </div>
          <br />

          <br />

          <div className="box">
            <label for="DNI">
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
              {...register("personalID", { required: { value: true, message: requiredInputError }, maxLength: 9 })}
            />
            <sub className="error-message">{errors.personalID?.message}</sub>
          </div>
          <br />
          <br />
          <div className="box">
            <label for="Age">
              <b>Adopter's age </b>
              <span className="required">*</span>
              <br />
            </label>
            <br />
            <input
              type="number"
              placeholder="18"
              id="Age"
              {...register("age", { required: { value: true, message: requiredInputError }, min: 18 })}
            />
            <sub className="error-message">{errors.age?.message}</sub>
            <br />
            <br />
            <br />
          </div>

          <div className="box">
            <label for="Residence">
              <b>Place of residence</b>
              <span className="required">*</span>
              <br />
            </label>
            <br />
            <input
              type="text"
              id="Residence"
              placeholder="Enter your place of residence"
              {...register("address", { required: { value: true, message: requiredInputError } })}
            />
            <sub className="error-message">{errors.address?.message}</sub>
          </div>
          <br />
          <br />
        </div>
        <div className="rightside">
          <div className="box">
            <label for="Province">
              <b>Province</b>
              <br />
            </label>
            <br />
            <input
              type="text"
              id="Province"
              placeholder="Enter your province"
              {...register("province")}
            />
            <br />
            <br />
          </div>

          <div className="box">
            <label for="Question1">
              <b>
                Why do you want to adopt a pet? Who lives together in the family
                home?
              </b>
              <span className="required">*</span>
            </label>
          </div>
          <br />
          <div className="box">
            <textarea
              rows={5}
              id="Question1"
              placeholder="Enter your answer"
              {...register("adoptionMotive", {
                required: { value: true, message: requiredInputError },
              })}
            />
            <sub className="error-message">{errors.adoptionMotive?.message}</sub>
          </div>
          <br />
          <br />

          <div className="box">
            <label for="Question2">
              <b>
                Have you had animals before, do you still have them, and if not,
                why not, and do you have experience with animals?
              </b>
              <span className="required">*</span>
            </label>
          </div>
          <br />
          <div className="box">
            <textarea
              rows={5}
              id="Question2"
              placeholder="Enter your answer"
              {...register("petHistory", { required: { value: true, message: requiredInputError } })}
            />
            <sub className="error-message">{errors.petHistory?.message}</sub>
          </div>
        </div>
      </div>
      <br />
      <br />
      {/* Botón de enviar */}
      <button type="submit" className="submitButton">
        <div class="svg-wrapper-1">
          <div class="svg-wrapper">
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
