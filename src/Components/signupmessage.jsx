import React, { useState } from "react";
import Bganimation from "./Bganimation";
import axios from "axios";
import { JoinFull } from "@mui/icons-material";
import { redirect } from "react-router-dom";
function Message1() {
  const [joinedTeam, setJoinedTeam] = useState(false);
  const [redirect1, setRedirect] = useState(false);
  const handleSubmit = async (e) => {
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
      alert(error.response.data.message);
    }
  };
  if (redirect1) {
    if (joinedTeam) {
      window.location.href = "/dashboard";
    } else {
      window.location.href = "/jointeam";
    }
  }
  return (
    <div>
      <Bganimation />
      <div className="totalmain">
        <header>
          <h1 className="technica">
            TECH<span className="nica">NICA</span>
          </h1>
        </header>
        <div className="rect2">
          <div>
            <h1 className="reg-success-text">Registration Successful</h1>
          </div>
          <div className="success-box-1">
            <h1 className="msg">
              Verify your Mail ID by clicking on the link sent to your mail
            </h1>
            <h1 className="val">Then Sign IN</h1>
          </div>
          <button className="button4" onClick={handleSubmit}>
            Verified
          </button>
        </div>
      </div>
    </div>
  );
}

export default Message1;
