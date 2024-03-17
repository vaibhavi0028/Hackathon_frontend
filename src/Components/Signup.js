import React, { useState, useEffect } from "react";
import axios from "axios";
import "../style.css";
import Bganimation from "./Bganimation";
import Signinuser from "./Signinuser.js"; // Import the Signinuser component
import Message from "./signupmessage.jsx";
import { useNavigate } from "react-router-dom";
const Signup = ({ onSignupSuccess }) => {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmpassword: "",
  });

  const [redirectSuccess, setRedirectSuccess] = useState(false);
  const [redirectSignIn, setRedirectSignIn] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  useEffect(()=>{
    const user = localStorage.getItem("authToken");
    if(user){
      navigate("/dashboard");
    }
  },[]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (inputs.password === inputs.confirmpassword) {
      try {
        const response = await axios.post(
          "https://hackathon.centralindia.cloudapp.azure.com/api/auth/register",
          {
            email: inputs.email,
            password: inputs.password,
            username: inputs.name,
            phone: inputs.phone,
          }
        );

        if (response.data.success) {
          const authToken = response.data.data.token;
          localStorage.setItem("authToken", authToken);

          setRedirectSuccess(true);
        }
      } catch (error) {
        if (error.response.data.errors === undefined) {
          alert(error.response.data.message);
        } else {
          alert(error.response.data.errors[0].message);
        }
      }
    } else {
      alert("password and confirmpassword does'nt match");
    }
  }; 

  if (redirectSuccess) {
    window.location.href = "/message";
  }
  if (redirectSignIn) {
    return <Signinuser />;
  }

  const setSignIn = () => {
    setRedirectSignIn(true);
  };

  return (
    <>
      <Bganimation />
      <div className="totalmain">
        <header>
          <h1 className="technica">
            TECH<span className="nica">NICA</span>
          </h1>
        </header>
        <div className="rectangle">
          <h1 className="sign-up-text">Welcome To Technica</h1>

          <form onSubmit={handleSubmit}>
            <label htmlFor="name" className="l1">
              Enter UserName:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="input1"
              onChange={handleChange}
              value={inputs.name}
            />
            <label htmlFor="email" className="l1">
              VIT Email-ID:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="input1"
              onChange={handleChange}
              value={inputs.email}
            />
            <label htmlFor="phone" className="l1">
              Enter Phone Number:
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              className="input1"
              onChange={handleChange}
              value={inputs.phone}
            />
            <label htmlFor="password" className="l1">
              Enter Password:
            </label>
            <input
              type="password"
              id="password"
              className="input1"
              name="password"
              onChange={handleChange}
              value={inputs.password}
            />
            <label htmlFor="confirm-password" className="l1">
              Confirm Password:
            </label>
            <input
              type="password"
              id="confirm-password"
              className="input1"
              name="confirmpassword"
              onChange={handleChange}
              value={inputs.confirmpassword}
            />
            <div className="flex-links-container">
              <a href="/" className="a1">
                Already have an account?
              </a>
              <a href="/" className="a2" onClick={setSignIn}>
                Sign In
              </a>
            </div>
            <button className="button1" type="submit">
              SIGN UP
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Signup;
