import React, { useState, useEffect } from "react";
import axios from "axios";
import Teamdetailsuser from "./Teamdetailsuser.js";

const AdminDashboard = () => {
  const [teams, setTeams] = useState([]);
  const [selectedTeam, setSelectedTeam] = useState(null);
  const [myteam, setmyteam] = useState(false);
  const [page, setPageNo] = useState();

  const handleSubmit = async (teamId) => {
    try {
      const response = await axios.get(
        `https://hackathon.centralindia.cloudapp.azure.com/api/admin/teams?page=${page}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("adminAuth")}`,
          },
        }
      );
      console.log("Fetched teams:", response.data.data);
      setTeams(response.data.data);
    } catch (error) {
      console.error("Error fetching teams:", error);
    }
  };

  const handleChange = (e) => {
    setPageNo(e.target.value);
  };

  const handleEnableReview = async (reviewNumber) => {
    // Enable review based on the review number
    try {
      await axios.get(
        `http://hackathon.centralindia.cloudapp.azure.com/api/admin/review/${reviewNumber}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("adminAuth")}`,
          },
        }
      );
      console.log(`Review ${reviewNumber} enabled.`);
    } catch (error) {
      console.error("Error enabling review:", error);
    }
  };

  return (
    <div className="admin">
      <h2 style={{ fontSize: "24px", color: "blue" }}>Admin Dashboard</h2>
      <div>
        <h3 style={{ fontSize: "20px", color: "green" }}>Teams</h3>
        <div
          className="scroll"
          style={{ maxHeight: "500px", overflowY: "auto" }}
        >
          <table
            className="review-table admin"
            style={{ fontSize: "20px", color: "white" }}
          >
            <thead>
              <tr className="">
                <th>Team Name</th>
                <th>Team Tracks</th>
                <th>Members</th>
                <th>Reg No</th>
                <th>Email id</th>
                <th>figmaLink</th>
                <th>GitHub Repo</th>
                <th>Other Link</th>
                <th style={{ width: "300px" }}>Idea Description</th>
                <th style={{ width: "300px" }}>Progress Since Review One</th>
              </tr>
            </thead>
            <tbody>
              {teams.map((team, index) => {
                console.log(team.reviews);
                console.log(typeof team.reviews);
                return (
                  <tr key={index}>
                    <td>{team.team.teamName}</td>
                    <td>{team.team.track}</td>
                    <td>
                      <ol>
                        {team.team.members.map((member, memberIndex) => (
                          <li key={memberIndex}>{member.username}</li>
                        ))}
                      </ol>
                    </td>

                    <td>
                      <ul>
                        {team.team.members.map((member, memberIndex) => (
                          <li key={memberIndex}>{member.regNo}</li>
                        ))}
                      </ul>
                    </td>
                    <td>
                      <ul>
                        {team.team.members.map((member, memberIndex) => (
                          <li key={memberIndex}>{member.regNo}</li>
                        ))}
                      </ul>
                    </td>
                    <td>
                      <ul>
                        {team.reviews.map((member, memberIndex) => (
                          <li key={memberIndex}>
                            {" "}
                            <a href={member.figmaLink} target="_blank">
                              {member.reviewNumber} {member.figmaLink}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </td>
                    <td>
                      <ul>
                        {team.reviews.map((member, memberIndex) => (
                          <li key={memberIndex}>
                            <a href={member.githubLink} target="_blank">
                              {member.reviewNumber} {member.githubLink}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </td>

                    <td>
                      <ul>
                        {team.reviews.map((member, memberIndex) => (
                          <li key={memberIndex}>
                            <a href={member.otherLink} target="_blank">
                              {member.reviewNumber} {member.otherLink}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </td>
                    <td style={{ width: "300px" }}>
                      <ul>
                        {team.reviews.map((member, memberIndex) => (
                          <li key={memberIndex}>
                            {member.reviewNumber} {member.ideaDescription}
                          </li>
                        ))}
                      </ul>
                    </td>
                    <td style={{ width: "300px" }}>
                      <ul>
                        {team.reviews.map((member, memberIndex) => (
                          <li key={memberIndex}>
                            {member.reviewNumber}{" "}
                            {member.progressSinceReviewOne}
                          </li>
                        ))}
                      </ul>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
      {selectedTeam && <Teamdetailsuser team={selectedTeam} />}
      <div>
        <h3 style={{ fontSize: "20px", color: "orange" }}>Review Management</h3>
        <button
          onClick={() => handleEnableReview(1)}
          style={{
            backgroundColor: "skyblue",
            padding: "5px 10px",
            marginRight: "10px",
          }}
        >
          Enable Review 1
        </button>

        <button
          onClick={() => handleEnableReview(2)}
          style={{ backgroundColor: "lightgreen", padding: "5px 10px" }}
        >
          Enable Review 2
        </button>

        <input
          type="txt"
          name="pageno"
          onChange={handleChange}
          value={page}
        />
        <button onClick={handleSubmit}>Get Team</button>
      </div>
    </div>
  );
};

const Admin = () => {
  // State to hold teams data
  const [teams, setTeams] = useState([]);

  // Function to add a new team
  const addTeam = () => {
    // Assuming team data includes team name and members
    const newTeam = {
      name: "New Team", // Replace with actual team name input
      members: [], // Add team members here
      review1: { submitted: false, link: null },
      review2: { submitted: false, link: null },
    };
    setTeams((prevTeams) => [...prevTeams, newTeam]);
  };

  // Function to update review status
  const updateReviewStatus = (teamIndex, reviewNumber, link) => {
    setTeams((prevTeams) => {
      const updatedTeams = [...prevTeams];
      const reviewKey = `review${reviewNumber}`;
      updatedTeams[teamIndex][reviewKey] = {
        submitted: true,
        link: link,
      };
      return updatedTeams;
    });
  };

  return (
    <div>
      <h1 style={{ fontSize: "28px", color: "purple" }}>Admin Dashboard</h1>
      <button
        onClick={addTeam}
        style={{
          backgroundColor: "lightcoral",
          color: "white",
          padding: "5px 10px",
          marginBottom: "20px",
        }}
      >
        Add Team
      </button>
    </div>
  );
};

export default AdminDashboard;
