import React, { useEffect, useState } from "react";
import "../style.css";
import axios from "axios";
import Image from "../img/arrow.svg";
import Mem from "../img/mem.svg";
import Bganimation from "./Bganimation";
import RegSuccess from "./RegSuccess";
import Signinuser from "./Signinuser";
import { GoSignOut } from "react-icons/go";
import { FaUser } from "react-icons/fa";
import { RiTeamFill } from "react-icons/ri";

const Dashboard = ({ onViewDashboard }) => {
  const [team, setTeamDetails] = useState([]);
  const [teamName, setTeamname] = useState();
  const [track, setTrackname] = useState();
  const [refral, setGetRef] = useState(false);
  const [clr, setClrData] = useState(false);
  const [token, setUsertoken] = useState();
  const [review, setReview] = useState();

  const authToken = localStorage.getItem("authToken");
  const teamID = localStorage.getItem("teamID");
  const [joinedTeam, setJoinedTeam] = useState(false);
  const [redirect1, setRedirect] = useState(false);
  useEffect(() => {
    const team = async () => {
      try {
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
          setJoinedTeam(true);
        }
        setRedirect(true);
      } catch (error) {
        setJoinedTeam(true);
        setRedirect(true);

        // alert(error.response.data.message);
      }
    };
    team();
  }, [teamID, token]);

  if (redirect1) {
    if (joinedTeam) {
      window.location.href = "/";
    }
  }
  useEffect(() => {
    // Fetch all teams when the component mounts

    const fetchTeams = async () => {
      try {
        const response = await axios.get(
          `https://hackathon.centralindia.cloudapp.azure.com/api/teams/${teamID}`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("authToken")}`,
            },
          }
        );

        setTeamname(response.data.data.team.teamName);
        setTeamDetails(response.data.data.team.members);
        setTrackname(response.data.data.track);
        setReview(response.data.data.reviewStatus.review2);
        localStorage.setItem("track", response.data.data.track);
      } catch (error) {
        console.error("Error fetching teams:", error);
      }
    };
    const fetchToken = async () => {
      try {
        const response = await axios.get(
          `https://hackathon.centralindia.cloudapp.azure.com/api/teams/token/${teamID}`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("authToken")}`,
            },
          }
        );

        setUsertoken(response.data.data.token);
      } catch (error) {
        if (error.response && error.response.status === 403) {
          setUsertoken(-1);
        }
      }
    };

    fetchTeams();
    fetchToken();
  }, [teamID, token]);

  function clear() {
    setClrData(true);
  }
  function getRefreal() {
    setGetRef(true);
  }

  // Define review schedules
  const reviewOneStartTime = new Date("2024-03-15T05:00:00"); // Review 1 start time
  const reviewOneEndTime = new Date("2024-03-15T15:00:00"); // Review 1 end time
  const reviewTwoStartTime = new Date("2024-03-16T13:00:00"); // Review 2 start time
  const reviewTwoEndTime = new Date("2024-03-16T15:00:00"); // Review 2 end time

  // Calculate time until the next review
  function getTimeUntilNextReview() {
    // Get the current date
    const currentDate = new Date();

    // Check if the current time is within the review period
    if (
      (currentDate >= reviewOneStartTime && currentDate <= reviewOneEndTime) ||
      (currentDate >= reviewTwoStartTime && currentDate <= reviewTwoEndTime)
    ) {
      return "Review is ongoing";
    }

    // Calculate the time difference in milliseconds for both reviews
    const timeDiffReviewOne = reviewOneStartTime - currentDate;
    const timeDiffReviewTwo = reviewTwoStartTime - currentDate;

    // Check if any of the reviews have passed
    if (timeDiffReviewOne < 0 && timeDiffReviewTwo < 0) {
      return "All reviews ended";
    }

    // Calculate days, hours, and minutes until the next review
    const timeDiffToNextReview =
      timeDiffReviewOne < 0 ? timeDiffReviewTwo : timeDiffReviewOne;
    const days = Math.floor(timeDiffToNextReview / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (timeDiffToNextReview % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor(
      (timeDiffToNextReview % (1000 * 60 * 60)) / (1000 * 60)
    );

    // Determine the upcoming review and return formatted time remaining
    if (timeDiffReviewOne < 0) {
      return `Time until review 2: ${days} days, ${hours} hours, ${minutes} minutes`;
    } else {
      return `Time until review 1: ${days} days, ${hours} hours, ${minutes} minutes`;
    }
  }

  // Determine the endpoint for the next review based on track
  function getReviewEndpoint() {
    const currentTime = new Date();
    const track = localStorage.getItem("track");

    if (currentTime >= reviewOneStartTime && currentTime <= reviewOneEndTime) {
      return track === "Hardware" ? "/reviewhw1" : "/review1";
    } else if (
      currentTime >= reviewTwoStartTime &&
      currentTime <= reviewTwoEndTime
    ) {
      return track === "Hardware" ? "/reviewhw2" : "/review2";
    } else if (currentTime < reviewOneStartTime) {
      return track === "Hardware" ? "/reviewhw1" : "/review1";
    } else if (currentTime < reviewTwoStartTime) {
      return track === "Hardware" ? "/reviewhw2" : "/review2";
    } else {
      return "#"; // No review currently scheduled
    }
  }

  // Determine the review heading dynamically
  function getReviewHeading() {
    // Get the current date
    const currentDate = new Date();

    // Check if both reviews have ended
    if (currentDate > reviewTwoEndTime) {
      return "All reviews ended"; // All reviews ended
    }

    // Determine which review is ongoing
    if (currentDate >= reviewOneStartTime && currentDate <= reviewOneEndTime) {
      return "Review 1 (Ongoing)"; // Heading for Review 1
    } else if (
      currentDate >= reviewTwoStartTime &&
      currentDate <= reviewTwoEndTime
    ) {
      return "Review 2 (Ongoing)"; // Heading for Review 2
    } else if (currentDate < reviewOneStartTime) {
      return "Review 1"; // Heading for Review 1
    } else if (currentDate < reviewTwoStartTime) {
      return "Review 2"; // Heading for Review 2
    }
  }

  // Define review timings
  const reviewTimings = {
    review1: "3:00 a.m. - 5:00 a.m.",
    review2: "3:00 a.m. - 5:00 a.m.",
  };

  // Determine the review timing
  function getReviewTiming() {
    const currentReview = getReviewHeading().toLowerCase().includes("review 1")
      ? "review1"
      : "review2";
    return reviewTimings[currentReview];
  }

  // Define criteria data for each review
  const criteriaDataReview1 = [
    "Feasibility of Product",
    "Impact and Relevance",
    "Idea Quality",
    "Tech Stack",
    "Novelty",
    "UI/UX",
  ];
  const criteriaDataReview2 = ["Implementation", "Business Model", "UI/UX"];

  // Choose criteria data based on the current review time
  const criteriaData = getReviewHeading().includes("Review 1")
    ? criteriaDataReview1
    : criteriaDataReview2;

  // Function to display a popup indicating Review 1 is not ongoing
  function showReviewNotGoingPopup() {
    const currentTT = new Date();
    if (review !== 0) {
      alert("Review Submitted");
      return;
    }
    if (currentTT < reviewOneStartTime) {
      alert("Review 1 is not ongoing");
    } else if (currentTT > reviewOneEndTime && currentTT > reviewTwoStartTime) {
      alert("Review 1 is not ongoing");
    } else if (currentTT > reviewOneEndTime && currentTT < reviewTwoStartTime) {
      alert("Review 2 is not ongoing");
    }
  }

  if (refral) {
    return <RegSuccess />;
  }
  if (clr) {
    localStorage.clear();
    window.location.href = "/";
  }
  return (
    <>
      <Bganimation />
      <header className="header1">
        <h1 className="technica">
          TECH<span className="nica">NICA</span>
        </h1>
      </header>
      <div className="container1">
        <div className="signup-options">
          {token !== -1 && (
            <button className="button111" onClick={getRefreal}>
              <div>
                {" "}
                <RiTeamFill size={40} />{" "}
              </div>
              <div className="reffcode">Referral Code</div>
            </button>
          )}
          <button className="button6" onClick={clear}>
            <GoSignOut size={40} />
          </button>
        </div>
        <div className="other-content">
          <div className="left-box">
            <div className="teambox">
              <div className="teamnamebox">
                <h1>{teamName}</h1>
              </div>
              <div className="teamdetailbox">
                {team.map((memb) => {
                  return (
                    <div className="teammembox1 teammembox" key={memb.id}>
                      <div className="logo">
                        <img src={Mem} alt="logo" />
                      </div>
                      <div className="teammemdetail">
                        <h2>{Object.values(memb)[1]}</h2>
                        <h1>{Object.values(memb)[3]}</h1>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          {/* Conditionally make the right box clickable */}
          <div
            className={
              getTimeUntilNextReview().includes("ongoing")
                ? "right-box clickable"
                : "right-box"
            }
          >
            <div
              className="reviewrect"
              onClick={() =>
                getTimeUntilNextReview().includes("ongoing") && review == 0
                  ? (window.location.href = getReviewEndpoint())
                  : showReviewNotGoingPopup()
              }
            >
              <div>
                <h1 className="reviewtxt">Reviews</h1>
                <h2 className="reviewtime">
                  {getReviewHeading().includes("All reviews ended")
                    ? "Reviews Ended"
                    : getTimeUntilNextReview()}
                </h2>{" "}
                {/* Dynamic time */}
              </div>
              <div className="reviewrect2">
                <div className="reviewdesc">
                  <h1>{getReviewHeading()}</h1> {/* Review heading */}
                  {!getReviewHeading().includes("All reviews ended") ? (
                    <p style={{ fontWeight: "bold", fontSize: "1.2em" }}>
                      {getReviewTiming()}
                    </p>
                  ) : null}
                  {criteriaData.length > 0 &&
                  !getReviewHeading().includes("All reviews ended") ? (
                    <>
                      <h3 style={{ fontWeight: "bold", fontSize: "1.7em" }}>
                        Judging Criteria
                      </h3>
                      <h4>
                        <ul className="list">
                          {criteriaData.map((criteria, index) => (
                            <li key={index}>{criteria}</li>
                          ))}
                        </ul>
                      </h4>
                    </>
                  ) : null}
                </div>
                <div className="arrow">
                  <img src={Image} alt="arrow" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
