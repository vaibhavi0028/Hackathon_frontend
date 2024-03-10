import React, { useState } from 'react';
import './style.css';
import Image from './img/upload.svg';

const Reviewhw3 = ({ onViewReviewhw3 }) => {
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
  };

  const handleFileButtonClick1 = () => {
    document.getElementById('mainfile').click();
  };

  const handleFileButtonClick2 = () => {
    document.getElementById('otherfile').click();
  };

  return (
    <>
      <header>
        <h1 className="technica">TECH<span className="nica">NICA</span></h1>
      </header>
      <div className="rect7 rect6">
        <h1 className="reviewtitle">Review 3</h1>
        <form>
            <label htmlFor="mainfile" className="revlab">App Credentials<span className="mandatory">*</span></label>
            <div className="ins">Instructions :-
              <div className="ins1">
              1. If the app is made by your team,<br></br> - add the <boldeffect>QR Code</boldeffect> and <boldeffect>Authentication</boldeffect>.               
              </div>
              <div className="ins1">
              2. If the app is made using Blynk or MIT <br></br>- Upload the <boldeffect>Template ID</boldeffect>, <boldeffect>Username</boldeffect>, <boldeffect>Password</boldeffect> and <boldeffect>QR code</boldeffect> for mod apk file respectively on a <boldeffect>pdf</boldeffect> in jpeg or jpg format.
              </div>
            </div>
            <input type="file" id="mainfile" name="mainfile" className="fileupload" onChange={handleFileChange} />
            <button type="button" className="uploadbtn" onClick={handleFileButtonClick1}>Upload<img src={Image} className="img1"></img></button>
            <label htmlFor="otherlink" className="revlab">Other</label>
            <div className="othergroup">
            <input type="file" id="otherfile" name="otherfile" className="fileupload" onChange={handleFileChange} />
            <input type="text" id="otherlink" name="otherlink" className="revinput2 revinput"  />
            <button type="button" className="f1 uploadbtn" onClick={handleFileButtonClick2}>Upload<img src={Image} className="img1"></img></button>
            </div>
            <label htmlFor="idea" className="revlab">Progress Since Review 2<span className="mandatory">*</span></label>
            <input type="text" id="idea" name="idea" className="revidea revinput" />
          <button className="button1" type="submit" onClick={onViewReviewhw3}>Submit</button>
        </form>
      </div>
    </>
  );
};

export default Reviewhw3;

