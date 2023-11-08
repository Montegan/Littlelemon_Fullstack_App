import React, { useState } from "react";
import { replace, useFormik } from "formik";
import { LogInshcema } from "../Components/schema/Inputshcema";
import Header from "../Components/Header/Header";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "./registration.css";

function Login({loggedin,setLoggedin}) {
  const [loginstatus, setloginStatus] = useState("");
  const navigate = useNavigate();
  const onSubmit = async(values, actions) => {
    axios
      .post("https://final-deploy-d74j.onrender.com/users", values)
      .then((res) => {
        if ("Success" === res.data.message) {
          setloginStatus(res.data.message);
          setLoggedin(true)
          actions.resetForm();
          navigate("/Homepage", {replace:true});
        } else if ("Failed" === res.data.message) {
          setloginStatus("Login not succeful, Please check your credentials");
        }
      })
      .catch((err) => console.log(err));
    // await new Promise((resolve) => setTimeout(resolve, 3000));
    // console.log(values);
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
    },
    validationSchema: LogInshcema,
    onSubmit,
  });
  console.log(errors);
  return (
    <>
      <div className="RegisterContainer">
        {loginstatus}
        <h1 className="registerheader">Log in</h1>
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
          <button
            className="registerButton"
            disabled={isSubmitting}
            type="submit"
          >
            Login
          </button>
        </form>
        <span style={{fontSize:"20px"}}>Don't have an acoount?
        <Link  to={"/Register"}> Register </Link>
        instead
        </span>
      </div>
    </>
  );
}

export default Login;
