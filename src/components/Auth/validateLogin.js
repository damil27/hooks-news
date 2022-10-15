export default function validateLogin(values) {
  let errors = {};

  // email errors
  if (!values.email) {
    errors.email = "email required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  //password errors
  if (!values.password) {
    errors.password = "password is required";
  } else if (values.password.length < 6) {
    errors.password = "Password must at least 6 characters";
  }

  return errors;
}
