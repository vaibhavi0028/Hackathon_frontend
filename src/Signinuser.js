import React, { useState } from 'react';
import './style.css';

const Signinuser = ({ onViewJoinTeam }) => {

  return (
    <>
      <header>
        <h1 className="technica">TECH<span className="nica">NICA</span></h1>
      </header>
      <div className="rect3">
        <h1 className="sign-in-text">Welcome Back!</h1>
        <form>
          <label htmlFor="email" class="l2">VIT Email Address</label>
          <input type="email" id="email" name="email" class="input2"/>
          <label htmlFor="password" class="l2">Password</label>
          <input id="password" type="password" name="password" class="input2"/>
          <div className="flex-links-container">
            <a href="#" className="a1">Don't have an account?  </a>
            <a href="#" className="a2">Sign Up</a>
          </div>
          <button className="button11" type="submit" onClick={onViewJoinTeam}>Sign In</button>
        </form>
      </div>
    </>
  );
};

export default Signinuser;
