import React, { useState } from 'react';
import NavBar from './NavBar';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const LoginUser = () => {
  const [data, setData] = useState({
    emailid: "",
    password: "",
  });

  const [errors, setErrors] = useState({}); // To store error messages
  const [loginError, setLoginError] = useState(""); // To store login error message

  const navigate = useNavigate(); // useNavigate hook for navigation

  const inputHandler = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
    setLoginError(""); // Reset login error when input changes
  };

  const validateFields = () => {
    const errors = {};
    
    // Email validation
    if (!data.emailid) {
      errors.emailid = "Email ID is required.";
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Email regex
      if (!emailRegex.test(data.emailid)) {
        errors.emailid = "Invalid email format.";
      }
    }

    // Password validation
    if (!data.password) {
      errors.password = "Password is required.";
    } else if (data.password.length < 6) {
      errors.password = "Password must be at least 6 characters.";
    }

    return errors;
  };

  const readValue = () => {
    const validationErrors = validateFields();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors); // Set errors to state
      return; // Stop execution if there are validation errors
    }

    console.log(data);
    axios
      .post('http://localhost:8080/ulogin', data)
      .then((response) => {
        console.log(response.data);
        if (response.data.status === 'success') {
          sessionStorage.setItem('token', response.data.token);
          sessionStorage.setItem('userId', response.data.userId);
          navigate('/dash'); // Correct navigation
        } else {
          // Set the login error message if credentials are incorrect
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
      <h1>
        <center>USER LOGIN</center>
      </h1>
      <br />
      <br />
      <div className="container">
        <div className="row g-3">
          <div className="col-12">
            <label htmlFor="email" className="form-label">Email</label>
            <input
              type="text"
              className="form-control"
              name="emailid"
              value={data.emailid}
              onChange={inputHandler}
            />
            {errors.emailid && <small className="text-danger">{errors.emailid}</small>}
          </div>
          <div className="col-12">
            <label htmlFor="password" className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              name="password"
              value={data.password}
              onChange={inputHandler}
            />
            {errors.password && <small className="text-danger">{errors.password}</small>}
          </div>
          <br />
          {loginError && <div className="col-12"><small className="text-danger">{loginError}</small></div>} {/* Display login error */}
          <div className="col-12">
            <center>
              <button className="btn btn-success" onClick={readValue}>
                LOGIN
              </button>
            </center>
          </div>
          <div className="col-12">
            <center>
              <a href="/register">New User?</a>
            </center>
          </div>
          <div className="col-12">
            <center>
              <a href="/adminlogin">Admin login</a>
            </center>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginUser;
