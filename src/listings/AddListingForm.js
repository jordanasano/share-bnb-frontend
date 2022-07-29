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
  const [formData, setFormData] = useState(new FormData());
  const [errors, setErrors] = useState(null);
  const inputFile = document.getElementById("files");

  /** Update form input. */
  function handleChange(evt) {
    const { name, value } = evt.target;
    if(name !== 'files'){
      setFormData(st => ({
        ...st,
        [name]: value,
      }));
    } else {
      const files = []
      console.log(inputFile.files)
      for (const file of inputFile.files) {
        files.push(file);
      }
      setFormData(fd => ({...fd, files}))
    }
  }


  /** Call parent function and clear form. */
  async function handleSubmit(evt) {
    evt.preventDefault();
    console.log(formData);
    try {
      await addListing(formData);
    } catch (err) {
      // console.error('errors are ', err)
      setErrors(err);
    }
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
      <label htmlFor="title"></label>
      <input
        id="title"
        name="title"
        onChange={handleChange}
        placeholder="Enter title..." />
      <label htmlFor="pricePerDay"></label>
      <input
        id="pricePerDay"
        name="price_per_day"
        type="float"
        onChange={handleChange}
        placeholder="Enter pricePerDay..." />
      <label htmlFor="location"></label>
      <input
        id="location"
        name="location"
        onChange={handleChange}
        placeholder="Enter location..." />
      <label htmlFor="description"></label>
      <input
        id="description"
        name="description"
        onChange={handleChange}
        placeholder="Enter desciption..." />
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
