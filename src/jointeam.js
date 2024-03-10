import React, { useState } from 'react';
import './style.css';
import Img1 from './img/mem.svg';
import Img2 from './img/mems.svg';

const JoinTeam = ({ onViewTeamDetailsUser }) => {
  const [showForm1, setShowForm1] = useState(true);

  const handleButtonClick = (formNumber) => {
    setShowForm1(formNumber === 1);
  };

  return (
    <>
      <header>
        <h1 className="technica">TECH<span className="nica">NICA</span></h1>
      </header>
      <div className="rect4">
      <h1 className="join-text">Make a Team</h1>
        <div className="button-container">
          <button
            className="button3"
            onClick={() => handleButtonClick(1)}
            style={{ background: showForm1 ? 'rgba(39, 165, 239, 0.50)' : '' }}
          >
            Register as Team Leader
            <img src={Img1} className="img2"></img>
          </button>
          <button
            className="button3"
            onClick={() => handleButtonClick(2)}
            style={{ background: showForm1 ? '' : 'rgba(39, 165, 239, 0.50)' }}
          >
            Register as Team Member
            <img src={Img2} className="img2"></img>
          </button>
        </div>
        <form style={{ display: showForm1 ? 'block' : 'none' }}>
          <div>
            <label htmlFor="name" className="join-label">Full Name</label>
            <input type="text" id="name" name="name" className="join" />
          </div>
          <div>
            <label htmlFor="regno" className="join-label">Registration Number</label>
            <input type="text" id="regno" name="regno" className="join" />
          </div>
          <div>
            <label htmlFor="email" className="join-label">VIT Email Address</label>
            <input type="email" id="email" name="email" className="join" />
          </div>
          <div>
            <label htmlFor="teamName" className="join-label">Team Name</label>
            <input type="text" id="teamName" name="teamName" className="join" />
          </div>
          <div>
            <label htmlFor="phoneNumber" className="join-label">Phone Number</label>
            <input type="tel" id="phoneNumber" name="phoneNumber" className="join" />
          </div>
          <div>
            <label htmlFor="track" className="join-label">Select your Track</label>
            <select id="track" name="track" class="joinselect">
              <option value="FinTech" class="selectoption">FinTech</option>
              <option value="AI" class="selectoption">AI</option>
              <option value="Hardware" class="selectoption">Hardware</option>
              <option value="OpenInnovation" class="selectoption">Open Innovation</option>
            </select>
          </div>
        </form>
        <form style={{ display: !showForm1 ? 'block' : 'none' }}>
          <div>
            <label htmlFor="refcode" className="join-label">Referral Code</label>
            <input type="text" id="refcode" name="refcode" className="join" />
          </div>
          <div>
            <label htmlFor="name" className="join-label">Full Name</label>
            <input type="text" id="name" name="name" className="join" />
          </div>
          <div>
            <label htmlFor="email" className="join-label">VIT Email Address</label>
            <input type="text" id="teamName" name="teamName" className="join" />
          </div>
          <div>
            <label htmlFor="phoneNumber" className="join-label">Enter Phone Number</label>
            <input type="tel" id="phoneNumber" name="phoneNumber" className="join" />
          </div>
          
        </form>
        <button className="button1" type="submit" onClick={onViewTeamDetailsUser}>Register</button>
      </div>
    </>
  );
};

export default JoinTeam;
