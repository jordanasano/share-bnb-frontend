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

      <h2>Signup</h2>

      {errors && (
        errors.map((err, idx) =>
          <p key={idx} className='SignupForm-error'>{err.slice(8)}</p>)
      )}

      <label htmlFor="username">Username</label>
      <input
        id="username"
        name="username"
        onChange={handleChange}
      />
      <label htmlFor="password">Password</label>
      <input
        id="password"
        name="password"
        type="password"
        onChange={handleChange}
      />
      <label htmlFor="firstName">First Name</label>
      <input
        id="firstName"
        name="first_name"
        onChange={handleChange}
      />
      <label htmlFor="lastName">Last Name</label>
      <input
        id="lastName"
        name="last_name"
        onChange={handleChange}
      />
      <button>Create Account!</button>
    </form>
  );

}

export default SignupForm;
