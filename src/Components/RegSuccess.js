import React, { useState, useEffect } from "react";
import "../style.css";
import axios from "axios";
import Bganimation from "./Bganimation";
import Dashboard from "./dashboard";

import { IoMdArrowRoundBack } from "react-icons/io";
import { ContentCopy } from "@mui/icons-material";

import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';

const RegSuccess = ({ onViewSignIn }) => {
  const [redirect, setRedirect] = useState(false);
  const [token, setUsertoken] = useState("");
  const [copied, setCopied] = useState(false); // State to track if copied
  const teamID = localStorage.getItem("teamID");
  const authToken = localStorage.getItem("authToken");

  useEffect(() => {
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
          setUsertoken("Only Team Leaders can see the Referral Code");
        }
      }
    };
    fetchToken();
  }, [authToken, teamID]);

  function goToDash() {
    setRedirect(true);
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText(token);
    setCopied(true); // Set copied to true after copying
  };

  const handleMouseEnter = () => {
    if (copied) {
      setCopied(false);
    }
  };

  if (redirect) {
    return <Dashboard />;
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
        <div className="rect">
          <div className="return-back">
            <form>
              <button className="button5" type="submit" onClick={goToDash}>
                <IoMdArrowRoundBack size={30}/>
              </button>
            </form>
          </div>
          <div className="referal-content">
            <div>
              <h1 className="reg-success-text">Team Referral Code</h1>
            </div>
            <div className="success-box">
              <div className="referral-code-container">
                <h1 className="val">{token.substring(0, 6)}...</h1>
              </div>
              <div>
               <Tooltip title={copied ? 'Copied' : 'Copy'}>
              <Button
                className="copy-button"
                onClick={copyToClipboard}
                onMouseEnter={handleMouseEnter}
              >
                <ContentCopy style={{ color: '#fff' }} />
              </Button>
            </Tooltip>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegSuccess;