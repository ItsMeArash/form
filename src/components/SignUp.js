import React, { useState, useEffect } from "react";
import { validator } from "./validator";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { notify } from "./toast";
import styles from "./SignUp.module.css";
import { AwesomeButton } from "react-awesome-button";
import { Link } from "react-router-dom";
import AwesomeButtonStyles from "react-awesome-button/src/styles/styles.scss";

const SignUp = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    isAccepted: false,
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  useEffect(() => {
    setErrors(validator(data, "signup"));
  }, [data, touched]);

  const changeHandler = (event) => {
    if (event.target.type === "checkbox") {
      setData({ ...data, [event.target.name]: event.target.checked });
    } else {
      setData({ ...data, [event.target.name]: event.target.value });
    }
  };

  const blurHandler = (event) => {
    setTouched({ ...touched, [event.target.name]: true });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (!Object.keys(errors).length) {
      notify("success", "You have signed up successfully!");
    } else {
      notify("error", "Invalid data entered!");
      setTouched({
        name: true,
        email: true,
        password: true,
        confirmPassword: true,
        isAccepted: true,
      });
    }
  };

  return (
    <div className={styles.container}>
      <form className={styles.formContainer} onSubmit={submitHandler}>
        <h2 className={styles.header}>Sign Up</h2>
        <div className={styles.formField}>
          <label>Name</label>
          <input
            className={
              errors.name && touched.name
                ? styles.uncompleted
                : styles.formInput
            }
            type="text"
            name="name"
            value={data.name}
            onChange={changeHandler}
            onBlur={blurHandler}
          />
          {errors.name && touched.name && <span>{errors.name}</span>}
        </div>

        <div className={styles.formField}>
          <label>Email</label>
          <input
            className={
              errors.email && touched.email
                ? styles.uncompleted
                : styles.formInput
            }
            type="text"
            name="email"
            value={data.email}
            onChange={changeHandler}
            onBlur={blurHandler}
          />
          {errors.email && touched.email && <span>{errors.email}</span>}
        </div>

        <div className={styles.formField}>
          <label>Password</label>
          <input
            className={
              errors.password && touched.password
                ? styles.uncompleted
                : styles.formInput
            }
            type="password"
            name="password"
            value={data.password}
            onChange={changeHandler}
            onBlur={blurHandler}
          />
          {errors.password && touched.password && (
            <span>{errors.password}</span>
          )}
        </div>

        <div className={styles.formField}>
          <label>Confirm Password</label>
          <input
            className={
              errors.confirmPassword && touched.confirmPassword
                ? styles.uncompleted
                : styles.formInput
            }
            type="password"
            name="confirmPassword"
            value={data.confirmPassword}
            onChange={changeHandler}
            onBlur={blurHandler}
          />
          {errors.confirmPassword && touched.confirmPassword && (
            <span>{errors.confirmPassword}</span>
          )}
        </div>

        <div className={styles.formField}>
          <div className={styles.checkboxContainer}>
            <label>I accept terms of privacy policy</label>
            <input
              className={
                errors.isAccepted && touched.isAccepted
                  ? styles.uncompleted
                  : styles.formInput
              }
              type="checkbox"
              name="isAccepted"
              value={data.isAccepted}
              onChange={changeHandler}
              onBlur={blurHandler}
            />
          </div>
          {errors.isAccepted && touched.isAccepted && (
            <span>{errors.isAccepted}</span>
          )}
        </div>

        <div className={styles.buttons}>
          <Link to="/login">Login</Link>
          <AwesomeButton type="secondary" onClick={submitHandler}>
            Login
          </AwesomeButton>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default SignUp;
