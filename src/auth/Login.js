import { useState } from "react";
import "./Login.css";

/**
 *  LoginForm
 *
 *  Props:
 *    - initialFormData: { username, password }
 *    - login: function to call in parent.
 *
 *  State:
 *    - formData
 *
 *  Context:
 *    - user { username, id, first_name, last_name }
 *
 *  RouteList -> LoginForm
 */

//TODO: pass in initial form data?. check
function Login({ login }) {

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
      await login(formData);
    } catch (err) {
      // console.error('errors are ', err)
      setErrors(err);
    }
  }

  return (
    <form onSubmit={handleSubmit} className='Login-container'>
      {errors && (
        errors.map((err, idx) =>
          <p key={idx} className='Login-error'>{err}</p>)
      )}
      <label htmlFor="username">Username</label>
      <input
        id="username"
        name="username"
        onChange={handleChange}
        placeholder="Enter username..." />
      <label htmlFor="password">Password</label>
      <input
        id="password"
        name="password"
        onChange={handleChange}
        placeholder="Enter password..." />
      <button>Login</button>
    </form>
  );

}

export default Login;
