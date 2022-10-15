import React from "react";
import useFormValidation from "./useFormValidation";
import validateLogin from "./validateLogin";
import firebase from "../../firebase";
import { Link } from "react-router-dom";

const INITIAL_STATE = {
  name: "",
  email: "",
  password: "",
};
function Login(props) {
  const {
    handleChange,
    handleBlur,
    handleSubmit,
    isSubmitting,
    values,
    errors,
  } = useFormValidation(INITIAL_STATE, validateLogin, authenticateUser);
  const [login, setLogin] = React.useState(true);
  const [firebaseError, setFirebaseError] = React.useState(null);
  async function authenticateUser() {
    const { name, email, password } = values;
    try {
      const response = login
        ? await firebase.login(email, password)
        : await firebase.register(name, email, password);
      props.history.push("/");
      console.log({ response });
    } catch (error) {
      console.log("Authentication error", error);
      setFirebaseError((error.message = "incrorrect credentials"));
    }
  }
  return (
    <div>
      <h2 className="mv3"> {login ? "Login" : "Create Account"}</h2>
      <form onSubmit={handleSubmit} className="flex flex-column">
        {!login && (
          <input
            type="text"
            placeholder="Your Name"
            autoComplete="off"
            value={values.name}
            name="name"
            onChange={handleChange}
          />
        )}
        {errors.email && <p className="error-text">{errors.email}</p>}

        <input
          type="email"
          placeholder="Your Email"
          autoComplete="off"
          onBlur={handleBlur}
          value={values.email}
          className={errors.email && "error-input"}
          name="email"
          onChange={handleChange}
        />
        {errors.password && <p className="error-text">{errors.password}</p>}
        <input
          type="password"
          placeholder="Choose your password"
          name="password"
          value={values.password}
          className={errors.password && "error-input"}
          onBlur={handleBlur}
          onChange={handleChange}
        />
        {firebaseError && <p className="error-text">{firebaseError}</p>}
        <div className="flex mt3">
          <button
            type="submit"
            className="button pointer mr2"
            disabled={isSubmitting}
            style={{ background: isSubmitting ? "grey" : "orange" }}
          >
            Submit
          </button>
          <button
            className="pointer button"
            type="button"
            onClick={() => setLogin((prevLogin) => !prevLogin)}
          >
            {login ? "need to create an account" : "Already have an account?"}
          </button>
        </div>
      </form>
      <div className="forgot-password">
        <Link to="/forgot">Forgot password?</Link>
      </div>
    </div>
  );
}

export default Login;
