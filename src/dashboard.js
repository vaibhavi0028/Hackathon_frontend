import React from 'react';
import './style.css';

const Dashboard = ({ onViewDashboard }) => {
  return (
    <>
    <header className='header1'>
        <h1 className="technica">TECH<span className="nica">NICA</span></h1>
    </header>
    <div className="container1">
        <div className="left-box">
            <div className="username">
              USER NAME
            </div>
            <div className="memdetails">
            <div className="userdetail">
                Team Name
              </div>
              <div className="userval">
                Name of team
              </div>
              <div className="userdetail">
                Track
              </div>
              <div className="userval">
                FinTech
              </div>
              <div className="userdetail">
                Registration Number
              </div>
              <div className="userval">
                23BCEXXXX
              </div>
              <div className="userdetail">
                Phone Number
              </div>
              <div className="userval">
                9999XXXXXX
              </div>
              <div className="userdetail">
                Email-ID
              </div>
              <div className="userval">
                lorem.ipsum2023@vitstudent.ac.in
              </div>
            </div>
            <div className="teamlink">
                View Team Details
            </div>
            <button className="logoutbtn">LOGOUT</button>
        </div>
        <div className="right-box">
          <div className="reviewrect">
            <div>
              <h1 className="reviewtxt">REVIEWS</h1>
            </div>
            <div>
              <table className="review-table">
                <thead>
                  <tr>
                    <th>Review</th>
                    <th>Judging Criteria</th>
                    <th>Time</th>
                    <th> </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Review 1</td>
                    <td>Judging Criteria</td>
                    <td>Time</td>
                    <td>
                      <button className="button4" type="submit" onClick={onViewDashboard}>
                        SUBMIT
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>Review 2</td>
                    <td>Judging Criteria</td>
                    <td>Time</td>
                    <td>
                      <button className="button4" type="submit" onClick={onViewDashboard}>
                        SUBMIT
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>Review 3</td>
                    <td>Judging Criteria</td>
                    <td>Time</td>
                    <td>
                      <button className="button4" type="submit" onClick={onViewDashboard}>
                        SUBMIT
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
