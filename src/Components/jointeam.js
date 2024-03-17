import React, { useState } from "react";
import "../style.css";
import Img1 from "../img/mem.svg";
import Img2 from "../img/mems.svg";
import Bganimation from "./Bganimation";
import axios from "axios";
import Dashboard from "./dashboard.js";

const JoinTeam = () => {
  <Bganimation />;
  const [showForm1, setShowForm1] = useState(true);
  const [teamCreated, setTeamCreated] = useState(false);
  const [redirectToDashboard, setRedirectToDashboard] = useState(false);
  // Before making the request, set the Authorization header
  const authToken = localStorage.getItem("authToken");

  const [formData, setFormData] = useState({
    name: "",
    regno: "",
    email: "",
    teamName: "",
    phoneNumber: "",
    track: "FinTech", // default track
    refcode: "",
  });

  const handleButtonClick = (formNumber) => {
    setShowForm1(formNumber === 1);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleCreateTeam = async () => {
    try {
      const response = await axios.post(
        "https://hackathon.centralindia.cloudapp.azure.com/api/teams",
        {
          teamName: formData.teamName,
          regNo: formData.regno,
          track: formData.track,
        },
        {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        }
      );

      setTeamCreated(true);
      const teamID = response.data.data._id;
      localStorage.setItem("teamID", teamID); // Store the team ID in localStorage
      setRedirectToDashboard(true);

      if (response.status === 200) {
      }
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  const handleRegisterMember = async () => {
    try {
      const response = await axios.post(
        "https://hackathon.centralindia.cloudapp.azure.com/api/teams/members",
        {
          code: formData.refcode,
          regNo: formData.regno,
        },
        {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        }
      );
      const teamID = response.data.data.teamId;
      localStorage.setItem("teamID", teamID);
      setRedirectToDashboard(true);

      // Handle team member registration response appropriately
    } catch (error) {
      console.log(formData);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (showForm1) {
      await handleCreateTeam();
    } else {
      await handleRegisterMember();
    }
  };

  if (redirectToDashboard) {
    return (window.location.href = "/dashboard");
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
        <div className="rect4">
          <h1 className="join-text">Join a Team</h1>
          <div className="button-container">
            <button
              className="button3"
              onClick={() => handleButtonClick(1)}
              style={{
                background: showForm1 ? "rgba(39, 165, 239, 0.50)" : "",
              }}
            >
              REGISTER AS TEAM LEADER
            </button>
            <button
              className="button3"
              onClick={() => handleButtonClick(2)}
              style={{
                background: showForm1 ? "" : "rgba(39, 165, 239, 0.50)",
              }}
            >
              REGISTER AS TEAM MEMBER
            </button>
          </div>
          <form
            style={{ display: showForm1 ? "block" : "none" }}
            onSubmit={handleSubmit}
          >
            {/* Other form fields for team leader */}
            <div>
              <label htmlFor="regno" className="join-label">
                Enter Registration Number
              </label>
              <input
                type="text"
                id="regno"
                name="regno"
                placeholder="Your registration number here"
                className="join"
                onChange={handleChange}
              />
            </div>

            <div>
              <label htmlFor="teamName" className="join-label">
                Enter Team Name
              </label>
              <input
                type="text"
                id="teamName"
                name="teamName"
                placeholder="Your team name here"
                className="join"
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="track" className="join-label">
                Select your Track
              </label>
              <select
                id="track"
                name="track"
                className="joinselect"
                placeholder=""
                onChange={handleChange}
                style={{ color: "white" }}
              >
                <option value="FinTech" className="selectoption">
                  FinTech
                </option>
                <option value="AI" className="selectoption">
                  AI
                </option>
                <option value="Hardware" className="selectoption">
                  Hardware
                </option>
                <option value="OpenInnovation" className="selectoption">
                  Open Innovation
                </option>
              </select>
            </div>
            <button className="button1" type="submit">
              REGISTER
            </button>
          </form>
          <form
            style={{ display: !showForm1 ? "block" : "none" }}
            onSubmit={handleSubmit}
          >
            {/* Other form fields for team member */}
            <div>
              <label htmlFor="regno2" className="join-label">
                Enter Registration Number
              </label>
              <input
                type="text"
                id="regno2"
                name="regno"
                placeholder="Your registration number here"
                className="join"
                onChange={handleChange}
              />
            </div>

            <div>
              <label htmlFor="refcode" className="join-label">
                Enter The Referral Code
              </label>
              <input
                type="text"
                id="refcode"
                name="refcode"
                placeholder="Team Referral Number Here"
                className="join"
                onChange={handleChange}
              />
            </div>
            {/* ... Other form fields for team member */}
            <button className="button1" type="submit">
              REGISTER
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default JoinTeam;
