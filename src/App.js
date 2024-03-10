import React, { useState } from 'react';
import Dashboard from './dashboard';
import Signup from './Signup';
import RegSuccess from './RegSuccess';
import Signinuser from './Signinuser';
import Jointeam from './jointeam';
import Teamdetailsuser from './Teamdetailsuser';
import SignupSuccesspage from './SignupSuccesspage';
import Errorpage1 from './errorpage1';
import Errorpage2 from './errorpage2';
import Review1 from './review1';
import Review2 from './review2';
import Review3 from './review3';
import Reviewhw1 from './reviewhw1';
import Reviewhw2 from './reviewhw2';
import Reviewhw3 from './reviewhw3';

function App() {
  const [currentPage, setCurrentPage] = useState('jointeam');

  const handleViewDashboard = () => {
    setCurrentPage('dashboard');
  };
  
  const handleViewSignup = () => {
    setCurrentPage('signup');
  };

  const handleSignupSuccess = () => {
    setCurrentPage('regSuccess');
  };

  const handleSignInUser = () => {
    setCurrentPage('signinuser');
  };

  const handleViewJoinTeam = () => {
    setCurrentPage('jointeam');
  };

  const handleTeamDetailsUser = () => {
    setCurrentPage('teamdetailsuser');
  };

  const handleViewSignupSuccess = () => {
    setCurrentPage('SignupSuccesspage');
  };

  const handleError1 = () => {
    setCurrentPage('Errorpage1');
  };

  const handleError2 = () => {
    setCurrentPage('Errorpage2');
  };

  const handleReview1 = () => {
    setCurrentPage('Review1');
  };

  const handleReview2 = () => {
    setCurrentPage('Review2');
  };

  const handleReview3 = () => {
    setCurrentPage('Review3');
  };

  const handleReviewhw1 = () => {
    setCurrentPage('Reviewhw1');
  };

  const handleReviewhw2 = () => {
    setCurrentPage('Reviewhw2');
  };

  const handleReviewhw3 = () => {
    setCurrentPage('Reviewhw3');
  };

  return (
    <div>
      {currentPage === 'dashboard' && <Dashboard onViewDashboard={handleViewDashboard} />}
      {currentPage === 'signup' && <Signup onSignupSuccess={handleViewSignupSuccess} />}
      {currentPage === 'SignupSuccesspage' && <SignupSuccesspage />}
      {currentPage === 'Errorpage1' && <Errorpage1 />}
      {currentPage === 'Errorpage2' && <Errorpage2 />}
      {currentPage === 'signinuser' && <Signinuser onViewJoinTeam={handleViewJoinTeam} />}
      {currentPage === 'jointeam' && <Jointeam onViewTeamDetailsUser={handleSignupSuccess} />}
      {currentPage === 'regSuccess' && <RegSuccess onViewSignIn={handleTeamDetailsUser} />}
      {currentPage === 'teamdetailsuser' && <Teamdetailsuser onViewSignInAdmin={handleSignupSuccess} />}
      {currentPage === 'Review1' && <Review1 onViewReview1={handleReview1} />}
      {currentPage === 'Review2' && <Review2 onViewReview2={handleReview2} />}
      {currentPage === 'Review3' && <Review3 onViewReview3={handleReview3} />}
      {currentPage === 'Reviewhw1' && <Reviewhw1 onViewReviewhw1={handleReviewhw1} />}
      {currentPage === 'Reviewhw2' && <Reviewhw2 onViewReviewhw2={handleReviewhw2} />}
      {currentPage === 'Reviewhw3' && <Reviewhw3 onViewReviewhw3={handleReviewhw3} />}
    </div>
  );
}

export default App;
