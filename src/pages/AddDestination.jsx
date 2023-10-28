import React, { useState } from "react";
import Sidebar from "../components/Sidebar";

function AddDestination() {
  const [formData, setFormData] = useState({
    name: "",
    image: "",
    overview: "",
    description: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = {};

    if (!formData.name.match(/^[A-Za-z\s]+$/)) {
      newErrors.name = "Nama destinasi hanya boleh berisi huruf dan spasi.";
      isValid = false;
    }

    if (formData.overview.length > 110) {
      newErrors.overview = "Overview tidak boleh lebih dari 110 karakter.";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validateForm();

    if (isValid) {
      // Form data is valid, you can proceed with submission or other actions
      // For now, just log the form data
      console.log(formData);
    }
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <Sidebar />
        <div className="col-md-10 p-0">
          <h3>Dashboard Admin</h3>
          <form className="col-md-6 my-5 form-add" onSubmit={handleSubmit}>
            <h2>Add Destination</h2>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Destination Name
              </label>
              <input
                type="text"
                className={`form-control ${errors.name ? "is-invalid" : ""}`}
                id="destinationName"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
              {errors.name && (
                <div className="invalid-feedback">{errors.name}</div>
              )}
            </div>
            <div className="mb-3">
              <label htmlFor="image" className="form-label">
                Image
              </label>
              <input
                type="file"
                className="form-control"
                id="destinationImage"
                name="image"
                value={formData.image}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="overview" className="form-label">
                Overview
              </label>
              <input
                type="text"
                className={`form-control ${
                  errors.overview ? "is-invalid" : ""
                }`}
                id="overview"
                name="overview"
                value={formData.overview}
                onChange={handleChange}
              />
              {errors.overview && (
                <div className="invalid-feedback">{errors.overview}</div>
              )}
            </div>
            <div className="mb-3">
              <label htmlFor="description" className="form-label">
                Long Description
              </label>
              <textarea
                className="form-control"
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddDestination;
