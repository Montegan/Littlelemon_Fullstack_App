import React from "react";
import { useFormik } from "formik";
import { Inputshcema } from "../Components/schema/Inputshcema";
import Header from "../Components/Header/Header";
import "./registration.css";
function Login() {
  const onSubmit = async (values,actions) => {
    await new Promise((resolve) => setTimeout(resolve, 3000));
    console.log(values);
    actions.resetForm();
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
    <Header/>
    <div className="RegisterContainer">
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
        <button className="registerButton" disabled={isSubmitting} type="submit">
        Register
        </button>
      </form>
    </div>
    </>
  );
}

export default Login;
