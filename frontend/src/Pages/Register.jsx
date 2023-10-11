import React from "react";
import { useFormik } from "formik";
import { Inputshcema } from "../Components/schema/Inputshcema";
import Header from "../Components/Header/Header";
import "./registration.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
function Register() {
  const navigate = useNavigate();
  const onSubmit = async (values, actions) => {
    // await new Promise((resolve) => setTimeout(resolve, 3000));
    axios
      .post("http://localhost:4000/registered", values)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
    console.log(values);
    actions.resetForm();
    navigate("/loginpage");
  };
  const {
    values,
    touched,
    handleBlur,
    isSubmitting,
    handleChange,
    handleSubmit,
    errors,
  } = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      telephone: "",
    },
    validationSchema: Inputshcema,
    onSubmit,
  });
  console.log(errors);
  return (
    <>
      <Header />
      <div className="RegisterContainer">
        <h1 className="registerheader">Registers</h1>
        <form className="formWraper" onSubmit={handleSubmit} autoComplete="off">
          <div className="inputContainer">
            <label htmlFor="name">Name :</label>
            <input
              id="name"
              value={values.name}
              onBlur={handleBlur}
              onChange={handleChange}
              type="text"
            />
            {errors.name && touched.name ? (
              <span className="inupt-failed">{errors.name}</span>
            ) : (
              ""
            )}
          </div>
          <div className="inputContainer">
            <label htmlFor="email">Email :</label>
            <input
              id="email"
              value={values.email}
              onBlur={handleBlur}
              onChange={handleChange}
              type="email"
            />
            {errors.email && touched.email ? (
              <span className="inupt-failed">{errors.email}</span>
            ) : (
              ""
            )}
          </div>

          <div className="inputContainer">
            <label htmlFor="password">password :</label>
            <input
              id="password"
              type="password"
              value={values.password}
              onBlur={handleBlur}
              onChange={handleChange}
            />
            {errors.password && touched.password ? (
              <span className="inupt-failed">{errors.password}</span>
            ) : (
              ""
            )}
          </div>

          <div className="inputContainer">
            <label htmlFor="confirmPassword">Confirm password :</label>
            <input
              id="confirmPassword"
              type="password"
              value={values.confirmPassword}
              onBlur={handleBlur}
              onChange={handleChange}
            />
            {errors.confirmPassword && touched.confirmPassword ? (
              <span className="inupt-failed">{errors.confirmPassword}</span>
            ) : (
              ""
            )}
          </div>
          <div className="inputContainer">
            <label htmlFor="telephone">Telephone :</label>
            <input
              id="telephone"
              value={values.telephone}
              onBlur={handleBlur}
              onChange={handleChange}
              type="phone"
            />
            {errors.telephone && touched.telephone ? (
              <span className="inupt-failed">{errors.telephone}</span>
            ) : (
              ""
            )}
          </div>

          <button
            className="registerButton"
            disabled={isSubmitting}
            type="submit"
          >
            Register
          </button>
        </form>
      </div>
    </>
  );
}

export default Register;
