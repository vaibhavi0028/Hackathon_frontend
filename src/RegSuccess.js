import React from 'react';
import './style.css';

const RegSuccess = ({ onViewSignIn  }) => {
  return (
    <>
      <header>
        <h1 className="technica">TECH<span className="nica">NICA</span></h1>
      </header>
      <div className="rect">
        <div>
          <h1 className="reg-success-text">Registration Successful</h1>
        </div>
        <div className="success-box">
            <h1 className="msg">Team Referral Code</h1>
            <h1 className="val">1AB9588NVP234</h1>
        </div>
        <div>
        <form>
          <button className="button2" type="submit" onClick={onViewSignIn}>View Team Details</button>
        </form>
        </div>
      </div>
    </>
  );
};

export default RegSuccess;
