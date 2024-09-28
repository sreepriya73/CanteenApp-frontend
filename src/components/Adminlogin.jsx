import React, { useState } from 'react';
import NavBar from './NavBar';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Adminlogin = () => {
  const [data, setData] = useState({
    emailid: "",
    password: ""
  });

  const [errors, setErrors] = useState({}); // To store error messages
  const [loginError, setLoginError] = useState(""); // To store incorrect password message

  const inputHandler = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
    setLoginError(""); // Reset login error when input changes
  };

  let navigate = useNavigate();

  const validateFields = () => {
    const errors = {};

    // Check if email is provided
    if (!data.emailid) {
      errors.emailid = "Email ID is required.";
    } else {
      // Email validation regex
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(data.emailid)) {
        errors.emailid = "Invalid email format.";
      }
    }

    // Check if password is provided
    if (!data.password) {
      errors.password = "Password is required.";
    }

    return errors;
  };

  const readValue = (event) => {
    event.preventDefault(); // Prevent form submission

    const validationErrors = validateFields();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors); // Set errors to state
      return; // Stop execution if there are validation errors
    }

    const loginData = {
      emailid: data.emailid,
      password: data.password
    };

    console.log(loginData);

    axios.post('http://localhost:8080/ALogin', loginData) // Ensure the route name matches the backend
      .then((response) => {
        console.log(response.data);
        if (response.data.status === 'success') {
          // Store token and userId in sessionStorage
          sessionStorage.setItem('token', response.data.token);
          sessionStorage.setItem('userId', response.data.userId);

          // Redirect to admin dashboard
          navigate('/admindash');
        } else {
          // Handle incorrect password or other login errors
          setLoginError('Incorrect email or password. Please try again.');
        }
      })
      .catch((error) => {
        console.error('Error during login:', error);
        alert('An error occurred during login.');
      });
  };

  return (
    <div>
      <NavBar />
      <br />
      <h1><center>ADMIN LOGIN</center></h1>
      <br /><br />
      <div className="container">
        <form onSubmit={readValue} className="label-control">
          <div className="row g-3">
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
              <label>USERNAME</label>
              <input 
                type="text" 
                className="form-control" 
                name='emailid' 
                value={data.emailid} 
                onChange={inputHandler} 
                id="emailid" // Add an id for easy access if needed
              />
              {errors.emailid && <small className="text-danger">{errors.emailid}</small>} {/* Display email errors */}
            </div>
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
              <label>PASSWORD</label>
              <input 
                type="password" // Change to password type
                className="form-control" 
                name='password' 
                value={data.password} 
                onChange={inputHandler} 
                id="password" // Add an id for easy access if needed
              />
              {errors.password && <small className="text-danger">{errors.password}</small>} {/* Display password errors */}
            </div>
            <br />
            {loginError && <div className="col col-12"><small className="text-danger">{loginError}</small></div>} {/* Display login error */}
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
              <center>
                <button type="submit" className="btn btn-success">LOGIN</button>
              </center>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Adminlogin;
