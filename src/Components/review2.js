import React, { useState } from 'react';
import Bganimation from './Bganimation';
import axios from "axios";
import Dashboard from "./dashboard.js";
import "../style.css";
import Review2Submit from './review2Submit.js';

const Review2 = ({ onViewReview2 }) => {
  const [redirect, setRedirect] = useState(false);
  const [showSubmitPopup, setShowSubmitPopup] = useState(false); // State to manage visibility of Review2Submit
  const [formData, setFormData] = useState({
    githubLink: "",
    figmaLink: "",
    deploymentLink: "",
    otherLink: "",
    progressSinceReviewOne: "",
  });
  const teamID = localStorage.getItem("teamID");
  const authToken = localStorage.getItem("authToken");
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `https://hackathon.centralindia.cloudapp.azure.com/api/reviews/${teamID}/2`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        }
      );
    
      if (response.status === 200) {
        // Show the Review2Submit popup
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
        <div className="rect66">
          <h1 className="reviewtitle">Review 2</h1>
          <form onSubmit={handleSubmit}>
            <label htmlFor="gitlink" className="revlab">
              GitHub Link<span className="mandatory">*</span>
            </label>
            <input
              required
              type="text"
              id="gitlink"
              name="githubLink"
              className="revinput"
              placeholder="GitHub Link here"
              onChange={handleChange}
              value={formData.githubLink}
            />

            <label htmlFor="figmalink" className="revlab">
              Figma Link<span className="mandatory">*</span>
            </label>
            <input
              required
              type="text"
              id="figmalink"
              name="figmaLink"
              className="revinput"
              placeholder="Figma Link here"
              onChange={handleChange}
              value={formData.figmaLink}
            />

            <label htmlFor="otherlink" className="revlab">
              Other
            </label>
            <input
              required
              type="text"
              id="otherlink"
              name="otherLink"
              className="revinput"
              placeholder="NA or Other Link here"
              onChange={handleChange}
              value={formData.otherLink}
            />

            <label htmlFor="deploymentLink" className="revlab">
              Deployment Link
            </label>
            <input
              required
              type="text"
              id="deploymentLink"
              name="deploymentLink"
              className="revinput"
              placeholder="Project Link Here"
              onChange={handleChange}
              value={formData.deploymentLink}
            />

            <label htmlFor="idea" className="revlab">
              Progress Since Review 1<span className="mandatory">*</span>
            </label>
            <input
              required
              type="text"
              id="idea"
              name="progressSinceReviewOne"
              className="revidea revinput"
              placeholder="Describe your progress here"
              onChange={handleChange}
              value={formData.progressSinceReviewOne}
            />

            <button className="submitbtn" type="submit">
              SUBMIT
            </button>
          </form>
        </div>
        {showSubmitPopup && <Review2Submit />} {/* Show Review2Submit component if showSubmitPopup is true */}
      </div>
    </>
  );
};

export default Review2;
