import React, { useState, useEffect } from "react";
import axios from "axios";
import { disableValidation } from "schema-utils";
function Team() {
  const [teams, setTeams] = useState([]);
  const [selectedTeam, setSelectedTeam] = useState(null);

  useEffect(() => {
    // Fetch all teams when the component mounts
    const fetchTeams = async () => {
      try {
        const response = await axios.get(
          `https://hackathon.centralindia.cloudapp.azure.com/api/admin/${localStorage.getItem(
            "teamId"
          )}`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("adminAuth")}`,
            },
          }
        );

        setTeams(response.data.data);
      } catch (error) {
        console.error("Error fetching teams:", error);
      }
    };

    fetchTeams();
  }, []);

  return <div>Hello</div>;
}

export default Team;
