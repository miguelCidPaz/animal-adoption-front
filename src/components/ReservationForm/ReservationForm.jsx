import React from "react";
import { useForm } from "react-hook-form";

export default function App() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);

  console.log(watch("FullName")); // podemos ver el valor de lo que pasamos

  return (
    <form id="form" className="form" onSubmit={handleSubmit(onSubmit)}>
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
              {...register("FullName", { required: true })}
            />
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
              {...register("DNI", { required: true, max: 0, maxLength: 9 })}
            />
          </div>
          <br />
          <br />
          <div className="box">
            <label for="Age">
              <b>Adopter's age </b>
              <br />
            </label>
            <br />
            <input
              type="number"
              placeholder="18"
              id="Age"
              {...register("Age", { required: true, min: 18 })}
            />
            <br />
            <br />
            <br />
          </div>

          <div className="box">
            <label for="Residence">
              <b>Place of residence</b>
              <br />
            </label>
            <br />
            <input
              type="text"
              id="Residence"
              placeholder="Enter your place of residence"
              {...register("Place of residence", {})}
            />
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
              {...register("Province", {})}
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
              {...register("Why do you want to adopt a pet?", {
                required: true,
              })}
            />
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
              {...register("Have you had animals before?", { required: true })}
            />
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
