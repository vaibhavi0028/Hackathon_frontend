import React, { useEffect } from 'react';
import Lottie from 'react-lottie';
import wrongAnimationData from './img/wrong-animation.json';
import './style.css';

const Errorpage1 = () => {
  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: wrongAnimationData,
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
          <h1 className="errortext">ERROR</h1>
          <h2 className="errormsg">Use your VIT Email-ID</h2>
        </div>
        <div className="wrong-image">
          <Lottie options={defaultOptions} />
        </div>
      </div>
    </>
  );
};
export default Errorpage1;