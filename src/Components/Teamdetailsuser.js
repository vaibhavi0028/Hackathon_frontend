import React, { useState } from 'react';
import '../style.css';
import CardImage1 from '../img/icon1.png';
import CardImage2 from '../img/icon2.png';
import CardImage3 from '../img/icon3.png';
import CardImage4 from '../img/icon4.png';
import Bganimation from './Bganimation';

const Teamdetailsuser = ({ onViewSignInAdmin }) => {

  return (
    <>
      <Bganimation/>
      <header>
        <h1 className="technica">TECH<span className="nica">NICA</span></h1>
      </header>
      <div className="rect5">
        <h1 className="teamname">Team Name</h1>
        <div className="card">
          <div className="teamdetails">
            <div className="memname">
              Member name
            </div>
            <div className="memdetails">
              <div className="detailname">
                Email-ID
              </div>
              <div className="detailval">
                lorem.ipsum2023@vitstudent.ac.in
              </div>
              <div className="detailname">
                Registration Number
              </div>
              <div className="detailval">
                23BCEXXXX
              </div>
              <div className="detailname">
                Phone Number
              </div>
              <div className="detailval">
                9999XXXXXX
              </div>
            </div>
          </div>
          <img src={CardImage1} alt="Image" className="cardimg"/>
        </div>
        <div className="card">
          <div className="teamdetails">
            <div className="memname">
              Member name
            </div>
            <div className="memdetails">
              <div className="detailname">
                Email-ID
              </div>
              <div className="detailval">
                lorem.ipsum2023@vitstudent.ac.in
              </div>
              <div className="detailname">
                Registration Number
              </div>
              <div className="detailval">
                23BCEXXXX
              </div>
              <div className="detailname">
                Phone Number
              </div>
              <div className="detailval">
                9999XXXXXX
              </div>
            </div>
          </div>
          <img src={CardImage2} alt="Image" className="cardimg"/>
        </div>
        <div className="card">
          <div className="teamdetails">
            <div className="memname">
              Member name
            </div>
            <div className="memdetails">
              <div className="detailname">
                Email-ID
              </div>
              <div className="detailval">
                lorem.ipsum2023@vitstudent.ac.in
              </div>
              <div className="detailname">
                Registration Number
              </div>
              <div className="detailval">
                23BCEXXXX
              </div>
              <div className="detailname">
                Phone Number
              </div>
              <div className="detailval">
                9999XXXXXX
              </div>
            </div>
          </div>
          <img src={CardImage3} alt="Image" className="cardimg"/>
        </div>
        <div className="card">
          <div className="teamdetails">
            <div className="memname">
              Member name
            </div>
            <div className="memdetails">
              <div className="detailname">
                Email-ID
              </div>
              <div className="detailval">
                lorem.ipsum2023@vitstudent.ac.in
              </div>
              <div className="detailname">
                Registration Number
              </div>
              <div className="detailval">
                23BCEXXXX
              </div>
              <div className="detailname">
                Phone Number
              </div>
              <div className="detailval">
                9999XXXXXX
              </div>
            </div>
          </div>
          <img src={CardImage4} alt="Image" className="cardimg"/>
        </div>  
        <button onClick={onViewSignInAdmin} className="button2">Back</button>              
      </div>
      
    </>
  );
};
export default Teamdetailsuser;