import React, { useState, useEffect } from "react";
import axios from "axios";
import "../style.css";
import Bganimation from "./Bganimation";

const Signinuser = ({ onViewJoinTeam }) => {
  const [redirect, setRedirect] = useState(false);
  const [redirectSignUp, setRedirectSignUp] = useState(false);
  const [joinedTeam, setJoinedTeam] = useState(true);
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });
  useEffect(() => {
    localStorage.clear();
  }, []);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://hackathon.centralindia.cloudapp.azure.com/api/auth/login",
        {
          email: inputs.email,
          password: inputs.password,
        }
      );

      if (response.status === 200) {
        const authToken = response.data.data.token;
        localStorage.setItem("authToken", authToken);
      }

      const authToken2 = localStorage.getItem("authToken");
      const response2 = await axios.get(
        "https://hackathon.centralindia.cloudapp.azure.com/api/user",
        {
          headers: {
            Authorization: `Bearer ${authToken2}`,
          },
        }
      );

      if (
        response2.data.data.team === null ||
        response2.data.data.team === undefined ||
        typeof response2.data.data.team !== "object"
      ) {
        setJoinedTeam(false);
      } else {
        const teamID = response2.data.data.team._id;
        localStorage.setItem("teamID", teamID);
      }

      setRedirect(true);
    } catch (error) {
      
      if (error.response.status === 400) {
        alert("User doesn't exist \nCheck your email or password");
      }
    }
  };

  if (redirect) {
    if (joinedTeam) {
      window.location.href = "/dashboard";
    } else {
      window.location.href = "/jointeam";
    }
  }

  return (
    <>
      <Bganimation />
      <div className="totalmain">
        <header>
          <h1 className="technica">
            TECH<span className="nica">NICA</span>
          </h1>
        </header>
        <div className="rect3">
          <h1 className="sign-in-text">Welcome Back!</h1>
          <form onSubmit={handleSubmit}>
            <label htmlFor="email" className="l2">
              VIT Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="input2"
              onChange={handleChange}
              value={inputs.email}
            />
            <label htmlFor="password" className="l2">
              Password
            </label>
            <input
              id="password"
              type="password"
              name="password"
              className="input2"
              onChange={handleChange}
              value={inputs.password}
            />
            <div className="flex-links-container">
              <a href="/signup" className="a1">
                Don't have an account?{" "}
              </a>
              <a href="/signup" className="a2">
                Sign Up
              </a>
            </div>
            <button className="button11" type="submit">
              Sign In
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Signinuser;
