import { useDispatch } from "react-redux";
import { useState, useRef, useEffect } from "react";
import { Form } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { fetchUpdateDestination } from "../store/updateDestination"
import Sidebar from "../components/Sidebar";
import { APIDestination } from "../apis/APIDestination";

function EditDestination() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();

  const [data, setData] = useState({
    destinationName: "",
    destinationImage: "",
    location: "",
    description: "",
  });


  
  const inputImg = useRef();
  const [destinationNameError, setDestinationNameError] = useState("");
  const [locationError, setLocationError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const destinationData = await APIDestination.getDestinationById(id);
        setData(destinationData);
      } catch (error) {
        console.error("Error fetching destination data:", error);
      }
    };
    fetchData();
  }, [id]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    let isFormValid = true;

    // Validation for Destination Name
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

    // Validation for Location
    if (data.location.length > 70) {
      setLocationError("Location should not exceed 70 characters");
      isFormValid = false;
    } else {
      setLocationError("");
    }

    if (isFormValid) {
      try {
        await dispatch(fetchUpdateDestination({ id, data}))
        const returnTo = "/manage-destination"
        navigate(returnTo);
        window.alert("Thank You! Destination Updated successfully");
      } catch (error) {
        console.error("Error updatinf destination:", error);
      }
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
          <div className="col-md-10 p-0 content-add">
            <h3>Admin Dashboard</h3>
            <Form className="col-md-6 my-5 form-add" onSubmit={handleSubmit}>
              <h2>Update Destination</h2>
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
                  className="form-control description-form"
                  id="description"
                  name="description"
                  value={data.description}
                  onChange={handleInput}
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Update
              </button>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
}

export default EditDestination;
