import React, { useState } from 'react';
import NavBar from './NavBar';
import axios from 'axios';

const UserRegister = () => {
  const [data, setData] = useState({
    name: "",
    emailid: "",
    phone: "",
    roomno: "",
    password: "",
    confirm: "" // Ensure confirm is part of the state
  });

  const [errors, setErrors] = useState({}); // To store error messages

  const inputHandler = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };

  const validateFields = () => {
    const errors = {};

    if (!data.name) errors.name = "Name is required.";

    if (!data.emailid) {
      errors.emailid = "Email ID is required.";
    } else {
      // Email validation regex
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(data.emailid)) {
        errors.emailid = "Invalid email format.";
      }
    }

    if (!data.phone) {
      errors.phone = "Phone number is required.";
    } else {
      // Phone number validation regex (10 digits)
      const phoneRegex = /^\d{10}$/;
      if (!phoneRegex.test(data.phone)) {
        errors.phone = "Phone number must be 10 digits.";
      }
    }

    if (!data.roomno) errors.roomno = "Room number is required.";

    // Strong Password validation
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/; // Password regex
    if (!data.password) {
      errors.password = "Password is required.";
    } else if (!passwordRegex.test(data.password)) {
      errors.password = "Password must be at least 8 characters long, and include at least one uppercase letter, one lowercase letter, one number, and one special character.";
    }

    if (data.password !== data.confirm) errors.confirm = "Passwords do not match.";

    return errors;
  };

  const readValue = () => {
    const validationErrors = validateFields();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors); // Set errors to state
      return; // Stop execution if there are validation errors
    }

    console.log(data);
    axios.post("http://localhost:8080/uregister", data)
      .then((response) => {
        console.log(response.data);
        if (response.data.status === "success") {
          alert("Registration successful!");
        } else {
          alert("Registration failed. Please try again.");
        }
      })
      .catch((error) => {
        console.error("Error during registration:", error);
        alert("An error occurred during registration.");
      });
  };

  return (
    <div>
      <NavBar />
      <br /><br />
      <center>
        <h1>USER REGISTRATION</h1>
      </center>
      <br />
      <div className="container">
        <div className="row g-3">
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row">
              <div className="col col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label>NAME</label>
                <input type="text" className="form-control" name='name' value={data.name} onChange={inputHandler} />
                {errors.name && <small className="text-danger">{errors.name}</small>}
              </div>
              <div className="col col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label>EMAIL ID</label>
                <input type="text" className="form-control" name='emailid' value={data.emailid} onChange={inputHandler} />
                {errors.emailid && <small className="text-danger">{errors.emailid}</small>}
              </div>
              <div className="col col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label>PHONE NO</label>
                <input type="text" className="form-control" name='phone' value={data.phone} onChange={inputHandler} />
                {errors.phone && <small className="text-danger">{errors.phone}</small>}
              </div>
              <div className="col col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label>ROOM NO</label>
                <input type="text" className="form-control" name='roomno' value={data.roomno} onChange={inputHandler} />
                {errors.roomno && <small className="text-danger">{errors.roomno}</small>}
              </div>
              <div className="col col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label>PASSWORD</label>
                <input type="password" className="form-control" name='password' value={data.password} onChange={inputHandler} />
                {errors.password && <small className="text-danger">{errors.password}</small>}
              </div>
              <div className="col col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label>CONFIRM PASSWORD</label>
                <input type="password" className="form-control" name='confirm' value={data.confirm} onChange={inputHandler} />
                {errors.confirm && <small className="text-danger">{errors.confirm}</small>}
                <br />
              </div>
            </div>
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
              <center>
                <button className="btn btn-success" onClick={readValue}>REGISTER</button>
              </center>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserRegister;
