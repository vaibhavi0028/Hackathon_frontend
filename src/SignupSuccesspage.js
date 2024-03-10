import React, { useEffect } from 'react';
import Lottie from 'react-lottie';
import tickAnimationData from './img/tick-animation.json';
import './style.css';

const SignupSuccesspage = () => {

  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: tickAnimationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <>
      <header>
        <h1 className="technica">TECH<span className="nica">NICA</span></h1>
      </header>
      <div className="rect2">
        <div>
          <h1 className="reg-success-text">Sign Up Successful</h1>
        </div>
        <div className="tick-image">
          <Lottie options={defaultOptions} />
        </div>
      </div>
    </>
  );
};

export default SignupSuccesspage;
