import React from 'react';
import './style.css';
import Image from './img/arrow.svg';
import Mem from './img/mem.svg';
const Dashboard = ({ onViewDashboard }) => {
  return (
    <>
    <header className='header1'>
        <h1 className="technica">TECH<span className="nica">NICA</span></h1>
    </header>
    <div className="container1">
        <div className="left-box">
          <div className="teambox">
            <div className="teamnamebox">
              <h1>Team Name</h1>
            </div>
            <div className="teamdetailbox">
              <div className="teammembox1 teammembox">
                <div className="logo">
                  <img src={Mem}></img>
                </div>
                <div className="teammemdetail">
                  <h1>Name</h1>
                  <h2>XXABCXXXX</h2>
                </div>
              </div>
              <div className="teammembox">
                <div className="logo">
                  <img src={Mem}></img>
                </div>
                <div className="teammemdetail">
                  <h1>Name</h1>
                  <h2>XXABCXXXX</h2>
                </div>
              </div>
              <div className="teammembox">
                <div className="logo">
                  <img src={Mem}></img>
                </div>
                <div className="teammemdetail">
                  <h1>Name</h1>
                  <h2>XXABCXXXX</h2>
                </div>
              </div>
              <div className="teammembox2 teammembox">
                <div className="logo">
                  <img src={Mem}></img>
                </div>
                <div className="teammemdetail">
                  <h1>Name</h1>
                  <h2>XXABCXXXX</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="right-box">
          <div className="reviewrect">
            <div>
              <h1 className="reviewtxt">Reviews</h1>
              <h2 className="reviewtime">Time until review 2: HH:MM:SS</h2>
            </div>
            <div className="reviewrect2">
              <div className='reviewdesc'>
                <h1>Review 1</h1>
                <h2>12:00am - 3:00pm</h2>
                <h3>Judging Criteria</h3>
                <h4>
                <ul className="list">
                    <li>Criteria 1</li>
                    <li>Criteria 2</li>
                    <li>Criteria 3</li>
                    <li>Criteria 4</li>
                  </ul>
                </h4>
              </div>
              <div className='arrow'>
                <img src={Image}></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
