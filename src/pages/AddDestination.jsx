import { useDispatch } from "react-redux";
import { useState, useRef } from "react";
import { Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { fetchPostDestination } from "../store/createDestinationSlice";
import Sidebar from "../components/Sidebar";

function AddDestination() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const emptyData = {
    destinationName: "",
    destinationImage: "",
    location: "",
    description: "",
  };

  const [data, setData] = useState(emptyData);
  const inputImg = useRef();
  const [destinationNameError, setDestinationNameError] = useState("");
  const [locationError, setLocationError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    let isFormValid = true;

    // Validasi untuk Destination Name
    if (data.destinationName.length === 0) {
      setDestinationNameError("Form must be filled in!");
      isFormValid = false;
    } else if (data.destinationName.length > 25) {
      setDestinationNameError("Destination Name must not exceed 25 characters");
      isFormValid = false;
    } else if (/[^a-zA-Z\s]/.test(data.destinationName)) {
      setDestinationNameError(
        "Destination Name must not contain symbols or numbers"
      );
      isFormValid = false;
    } else {
      setDestinationNameError("");
    }

    // Validasi untuk Location
    if (data.location.length > 70) {
      setLocationError("Location should not exceed 70 characters");
      isFormValid = false;
    } else {
      setLocationError("");
    }

    if (isFormValid) {
      dispatch(
        fetchPostDestination({
          id: nextId++,
          ...data,
        })
      );
      setData(emptyData);
      inputImg.current.value = "";
      inputImg.current.type = "text";
      inputImg.current.type = "file";
      const returnTo = "/add-destination";
      navigate(returnTo);

      window.alert("Thank You! Destination added successfully");
    }
  };

  const handleInput = (e) => {
    const name = e.target.name;
    const value =
      e.target.type === "file"
        ? URL.createObjectURL(e.target.files[0])
        : e.target.value;

    setData({
      ...data,
      [name]: value,
    });
  };

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <Sidebar />
          <div className="col-md-10 p-0">
            <h3>Admin Dashboard</h3>
            <Form className="col-md-6 my-5 form-add" onSubmit={handleSubmit}>
              <h2>Add Destination</h2>
              <div className="mb-3">
                <label htmlFor="destinationName" className="form-label">
                  Destination Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="destinationName"
                  name="destinationName"
                  value={data.destinationName}
                  onChange={handleInput}
                  required
                />
                {destinationNameError && (
                  <div className="text-danger">{destinationNameError}</div>
                )}
              </div>
              <div className="mb-3">
                <label htmlFor="destinationImage" className="form-label">
                  Image Destination
                </label>
                <input
                  type="file"
                  className="form-control"
                  id="destinationImage"
                  name="destinationImage"
                  accept="image/png, image/jpg, image/jpeg"
                  ref={inputImg}
                  onChange={handleInput}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="location" className="form-label">
                  Location
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="location"
                  name="location"
                  value={data.location}
                  onChange={handleInput}
                  required
                />
                {locationError && (
                  <div className="text-danger">{locationError}</div>
                )}
              </div>
              <div className="mb-3">
                <label htmlFor="description" className="form-label">
                  Description
                </label>
                <textarea
                  className="form-control"
                  id="description"
                  name="description"
                  value={data.description}
                  onChange={handleInput}
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
}

let nextId = 1;

export default AddDestination;
