import { useState } from "react";
import { useNavigate } from 'react-router-dom';


/**
 *  AddListingForm
 *
 *  Props:
 *    - addListing: function to call in parent.
 *
 *  State:
 *    - formData
 *
 *  RouteList -> AddListingForm
 */

function AddListingForm({ addListing }) {
  const [formData, setFormData] = useState(new FormData());
  const [errors, setErrors] = useState(null);
  const inputFile = document.getElementById("files");
  const navigate = useNavigate();

  /** Update form input. */
  function handleChange(evt) {
    const { name, value } = evt.target;

    if (name !== 'files') {
      setFormData(st => ({
        ...st,
        [name]: value,
      }));
    } else {
      // Add files to form data
      const files = [];
      for (const file of inputFile.files) {
        files.push(file);
      }
      setFormData(fd => ({ ...fd, files }));
    }
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
    navigate("/listings");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className='Signup-container'
      encType="multipart/form-data">
      {errors && (
        errors.map((err, idx) =>
          <p key={idx} className='Signup-error'>{err.slice(8)}</p>)
      )}
      <label htmlFor="title">Title</label>
      <input
        id="title"
        name="title"
        onChange={handleChange}
      />
      <label htmlFor="pricePerDay">Price Per Day</label>
      <input
        id="pricePerDay"
        name="price_per_day"
        type="number"
        onChange={handleChange}
      />
      <label htmlFor="location">Location</label>
      <input
        id="location"
        name="location"
        onChange={handleChange}
      />
      <label htmlFor="description">Description</label>
      <input
        id="description"
        name="description"
        onChange={handleChange}
      />
      <label htmlFor="files"></label>
      <input
        type="file"
        name="files"
        id="files"
        onChange={handleChange}
        multiple />
      <button>Add Listing!</button>
    </form>
  );

}

export default AddListingForm;
