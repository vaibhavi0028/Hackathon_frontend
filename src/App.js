import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./Components/dashboard.js";
import Signup from "./Components/Signup.js";
import Message1 from "./Components/signupmessage.jsx";
import RegSuccess from "./Components/RegSuccess.js";
import Signinuser from "./Components/Signinuser.js";
import Jointeam from "./Components/jointeam.js";
import Teamdetailsuser from "./Components/Teamdetailsuser.js";
import SignupSuccesspage from "./Components/SignupSuccesspage.js";
import Errorpage1 from "./Components/errorpage1.js";
import Errorpage2 from "./Components/errorpage2.js";
import Errorpage3 from "./Components/errorpage3.js";
import Errorpage4 from "./Components/errorpage4.js";
import Review1 from "./Components/review1.js";
import Review2 from "./Components/review2.js";
import Reviewhw1 from "./Components/reviewhw1.js";
import Reviewhw2 from "./Components/reviewhw2.js";
import AdminDashboard from "./Components/adminDashboard.js";
import AdminLogin from "./Components/Adminlogin.js";
import { Message } from "@mui/icons-material";

function App() {
  const [currentPage, setCurrentPage] = useState("jointeam");

  const handleViewDashboard = () => {
    setCurrentPage("dashboard");
  };

  const handleViewSignup = () => {
    setCurrentPage("signup");
  };

  const handleSignupSuccess = () => {
    setCurrentPage("regSuccess");
  };

  const handleSignInUser = () => {
    setCurrentPage("signinuser");
  };

  const handleViewJoinTeam = () => {
    setCurrentPage("jointeam");
  };

  const handleTeamDetailsUser = () => {
    setCurrentPage("teamdetailsuser");
  };

  const handleViewSignupSuccess = () => {
    setCurrentPage("SignupSuccesspage");
  };

  const handleError1 = () => {
    setCurrentPage("Errorpage1");
  };

  const handleError2 = () => {
    setCurrentPage("Errorpage2");
  };

  const handleReview1 = () => {
    setCurrentPage("Review1");
  };

  const handleReview2 = () => {
    setCurrentPage("Review2");
  };

  const handleReview3 = () => {
    setCurrentPage("Review3");
  };

  const handleReviewhw1 = () => {
    setCurrentPage("Reviewhw1");
  };

  const handleReviewhw2 = () => {
    setCurrentPage("Reviewhw2");
  };

  const handleReviewhw3 = () => {
    setCurrentPage("Reviewhw3");
  };

  const currentTime = new Date();
  const isReviewTime1 =
    currentTime.getMonth() === 2 &&
    currentTime.getDate() === 15 &&
    (currentTime.getHours() === 5 || currentTime.getHours() === 6 ||currentTime.getHours() === 7
    || currentTime.getHours() === 8 || currentTime.getHours() === 9 || currentTime.getHours() === 10
    || currentTime.getHours() === 11 || currentTime.getHours() === 12 || currentTime.getHours() === 13
    || currentTime.getHours() === 14 || currentTime.getHours() === 14 );
  const isReviewTime2 =
    currentTime.getMonth() === 2 &&
    currentTime.getDate() === 16 &&
    (currentTime.getHours() === 13|| currentTime.getHours() === 14);
  return (
    <div>
      <Routes>
        <Route path="/" element={<Signinuser />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/errorpage1" element={<Errorpage1 />} />
        <Route path="/errorpage2" element={<Errorpage2 />} />
        <Route path="/jointeam" element={<Jointeam />} />
        <Route path="/regsuccess" element={<RegSuccess />} />
        <Route path="/message" element={<Message1 />} />
        {isReviewTime1 ? (
          <Route path="/review1" element={<Review1 />} />
        ) : (
          <Route path="//  " element={<Errorpage3 />} />
        )}
        {isReviewTime1 ? (
          <Route path="/reviewhw1" element={<Reviewhw1 />} />
        ) : (
          <Route path="/reviewhw1" element={<Errorpage3 />} />
        )}
        {isReviewTime2 ? (
          <Route path="/review2" element={<Review2 />} />
        ) : (
          <Route path="/review2" element={<Errorpage4 />} />
        )}
        {isReviewTime2 ? (
          <Route path="/reviewhw2" element={<Review2 />} />
        ) : (
          <Route path="/reviewhw2" element={<Errorpage4 />} />
        )}
        <Route path="/signupsuccess" element={<SignupSuccesspage />} />
        <Route path="/teamdetailsuser" element={<Teamdetailsuser />} />

        <Route path="/adminlogin9025" element={<AdminLogin />} />
      </Routes>
    </div>
  );
}

export default App;
