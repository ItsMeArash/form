import React, { useState, useEffect } from "react";
import { validator } from "./validator";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { notify } from "./toast";
import styles from "./SignUp.module.css";
import { AwesomeButton } from "react-awesome-button";
import { Link } from "react-router-dom";
import AwesomeButtonStyles from "react-awesome-button/src/styles/styles.scss";

const Login = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  useEffect(() => {
    setErrors(validator(data, "login"));
  }, [data, touched]);

  const changeHandler = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };

  const blurHandler = (event) => {
    setTouched({ ...touched, [event.target.name]: true });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (!Object.keys(errors).length) {
      notify("success", "You have loged in successfully!");
    } else {
      notify("error", "Username or password incorrect!");
      setTouched({
        email: true,
        password: true,
      });
    }
  };

  return (
    <div className={styles.container}>
      <form className={styles.formContainer} onSubmit={submitHandler}>
        <h2 className={styles.header}>Login</h2>

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

        <div className={styles.buttons}>
          <Link to="/">Sign Up</Link>
          <AwesomeButton type="secondary" onClick={submitHandler}>
            Login
          </AwesomeButton>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Login;
