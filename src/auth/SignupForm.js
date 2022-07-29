import { useState } from "react";
import "./SignupForm.css";

/**
 *  SignupForm
 *
 *  Props:
 *    - initialFormData: { username, password, first_name, last_name }
 *    - signup: function to call in parent.
 *
 *  State:
 *    - formData
 *
 *  RouteList -> SignupForm
 */

 function SignupForm({ signup }) {
  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState(null);


  /** Update form input. */
  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData(st => ({
      ...st,
      [name]: value,
    }));
  }

  /** Call parent function and clear form. */
  async function handleSubmit(evt) {
    evt.preventDefault();
    try {
      await signup(formData);
    } catch(err) {
      // console.error('errors are ', err)
      setErrors(err);
    }
  }

  return (
    <form onSubmit={handleSubmit} className='SignupForm-container'>
      {errors && (
        errors.map((err, idx) =>
          <p key={idx} className='SignupForm-error'>{err.slice(8)}</p>)
      )}
      <label htmlFor="username"></label>
      <input
        id="username"
        name="username"
        onChange={handleChange}
        placeholder="Enter username..." />
      <label htmlFor="password"></label>
      <input
        id="password"
        name="password"
        onChange={handleChange}
        placeholder="Enter password..." />
      <label htmlFor="firstName"></label>
      <input
        id="firstName"
        name="first_name"
        onChange={handleChange}
        placeholder="Enter first name..." />
      <label htmlFor="lastName"></label>
      <input
        id="lastName"
        name="last_name"
        onChange={handleChange}
        placeholder="Enter last name..." />
      <button>Create Account!</button>
    </form>
  );

}

export default SignupForm;
