import React, { useState } from 'react';
import Bganimation from './Bganimation';
import axios from "axios";
import Dashboard from "./dashboard.js";
import Review1Submit from './review1Submit.js';
import "../style.css";

const Review1 = () => {
  const authToken = localStorage.getItem("authToken");
  const teamID = localStorage.getItem("teamID");
  const review1submit = "12345";
  const [redirect, setRedirect] = useState(false);
  const [showSubmitPopup, setShowSubmitPopup] = useState(false); // State to manage visibility of Review1Submit
  const [formData, setFormData] = useState({
    githubLink: "",
    figmaLink: "",
    otherLink: "",
    ideaDescription: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `https://hackathon.centralindia.cloudapp.azure.com/api/reviews/${teamID}/1`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        }
      );
      
      if (response.status === 201 || response.status === 200) {
        // Show the Review1Submit popup
        setShowSubmitPopup(true);

        // Redirect after 5000 milliseconds
        setTimeout(() => {
          setRedirect(true);
        }, 5000);
      }
    } catch (error) {
      if (error.response) {
        console.error(
          "Server responded with an error status:",
          error.response.status
        );
        console.error("Error data:", error.response.data);
      } else if (error.request) {
        console.error("Request made but no response received:", error.request);
      } else {
        console.error("Error during request setup:", error.message);
      }
      console.error("Error config:", error.config);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  if (redirect) {
    window.location.href = "/dashboard";
  }

  return (
    <>
      <Bganimation/>
      <div className="totalmain">
        <header>
          <h1 className="technica">
            TECH<span className="nica">NICA</span>
          </h1>
        </header>
        <div className="rect6">
          <h1 className="reviewtitle">Review 1</h1>
          <form onSubmit={handleSubmit}>
            <label htmlFor="githubLink" className="revlab">
              Google Drive Link (Flowchart, Circuit Diagram)<span className="mandatory">*</span>
            </label>
            <input
              required
              type="text"
              id="githubLink"
              name="githubLink"
              className="revinput"
              placeholder="Google Drive Link here"
              onChange={handleChange}
              value={formData.githubLink}
            />
            <label htmlFor="figmaLink" className="revlab">
              Figma Link (If Website or App Integration)<span className="mandatory">*</span>
            </label>
            <input
              required
              type="text"
              id="figmaLink"
              name="figmaLink"
              className="revinput"
              placeholder="Figma Link here"
              onChange={handleChange}
              value={formData.figmaLink}
            />
            <label htmlFor="otherLink" className="revlab">
              Other
            </label>
            <input
              required
              type="text"
              id="otherLink"
              name="otherLink"
              className="revinput"
              placeholder="NA or Other Link here"
              onChange={handleChange}
              value={formData.otherLink}
            />
            <label htmlFor="ideaDescription" className="revlab">
              Idea Description<span className="mandatory">*</span>
            </label>
            <input
              required
              type="text"
              id="ideaDescription"
              name="ideaDescription"
              className="revidea revinput"
              placeholder="Briefly describe your idea here"
              onChange={handleChange}
              value={formData.ideaDescription}
            />
            <button className="submitbtn" type="submit">
              SUBMIT
            </button>
          </form>
        </div>
        {showSubmitPopup && <Review1Submit />} {/* Show Review1Submit component if showSubmitPopup is true */}
      </div>
    </>
  );
};

export default Review1;
