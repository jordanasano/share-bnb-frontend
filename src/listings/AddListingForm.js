import { useState } from "react";


/**
 *  AddListingForm
 *
 *  Props:
 *    - initialFormData: TODO:?
 *    - addListing: function to call in parent.
 *
 *  State:
 *    - formData
 *
 *  RouteList -> AddListingForm
 */

function AddListingForm({ addListing }) {
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
      await addListing(formData);
    } catch (err) {
      // console.error('errors are ', err)
      setErrors(err);
    }
  }

  return (
    <form onSubmit={handleSubmit} className='Signup-container'>
      {errors && (
        errors.map((err, idx) =>
          <p key={idx} className='Signup-error'>{err.slice(8)}</p>)
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
        name="firstName"
        onChange={handleChange}
        placeholder="Enter first name..." />
      <label htmlFor="lastName"></label>
      <input
        id="lastName"
        name="lastName"
        onChange={handleChange}
        placeholder="Enter last name..." />
      <label htmlFor="email"></label>
      <input
        id="email"
        name="email"
        onChange={handleChange}
        placeholder="Enter email..." />
      <button>Create Account!</button>
    </form>
  );

}

export default AddListingForm;
