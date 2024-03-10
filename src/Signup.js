import React, { useState } from 'react';
import './style.css';

const Signup = ({ onSignupSuccess }) => {
  const [isSignupSuccessful, setIsSignupSuccessful] = useState(false);
  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSignupSuccessful(true);
    onSignupSuccess();
  };
  return (
    <>
      <header>
        <h1 className="technica">TECH<span className="nica">NICA</span></h1>
      </header>
      <div className="rectangle">
        <h1 className="sign-up-text">Welcome to Technica!</h1>
        {isSignupSuccessful ? (
          <p>Signup successful</p>
        ) : (
          <form onSubmit={handleSubmit}>
            <label htmlFor="name" class="l1">Full Name</label>
            <input type="text" id="name" name="name" class="input1" />
            <label htmlFor="email" class="l1">VIT Email Address</label>
            <input type="email" id="email" name="email" class="input1" />
            <label htmlFor="phone" class="l1">Phone Number</label>
            <input type="tel" id="phone" name="phone" class="input1" />
            <label htmlFor="password" class="l1">Password</label>
            <input type="password" id="password" class="input1" name="password" />
            <label htmlFor="confirm-password" class="l1">Confirm Password</label>
            <input type="password" id="confirm-password" class="input1" name="confirm-password"/>
            <div className="flex-links-container cont2">
            <a href="#" className="a1">Already have an account?  </a>
            <a href="#" className="a2">Sign In</a>
          </div>
            <button className="button1" type="submit">Sign Up</button>
          </form>
        )}
      </div>
      
    </>
  );
};
export default Signup;