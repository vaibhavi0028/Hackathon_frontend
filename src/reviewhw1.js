import React, { useState } from 'react';
import './style.css';
import Image from './img/upload.svg';

const Reviewhw1 = ({ onViewReviewhw1 }) => {
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
  };

  const handleFileButtonClick1 = () => {
    document.getElementById('flowchart').click();
  };

  const handleFileButtonClick2 = () => {
    document.getElementById('otherfile').click();
  };

  return (
    <>
      <header>
        <h1 className="technica">TECH<span className="nica">NICA</span></h1>
      </header>
      <div className="rect6">
        <h1 className="reviewtitle">Review 1</h1>
        <form>
            <label htmlFor="flowchart" className="revlab">Flowchart<span className="mandatory">*</span></label>
            <input type="file" id="flowchart" name="flowchart" className="fileupload" onChange={handleFileChange} />
            <button type="button" className="uploadbtn" onClick={handleFileButtonClick1}>Upload<img src={Image} className="img1"></img></button>
            <label htmlFor="figmalink" className="revlab">Figma Link (if there is a website or app intergration)</label>
            <input type="text" id="figmalink" name="figmalink" className="revinput" />
            <label htmlFor="otherlink" className="revlab">Other</label>
            <div className="othergroup">
            <input type="file" id="otherfile" name="otherfile" className="fileupload" onChange={handleFileChange} />
            <input type="text" id="otherlink" name="otherlink" className="revinput1 revinput" />
            <button type="button" className="f1 uploadbtn" onClick={handleFileButtonClick2}>Upload<img src={Image} className="img1"></img></button>
            </div>
            <label htmlFor="idea" className="revlab">Idea Description<span className="mandatory">*</span></label>
            <input type="text" id="idea" name="idea" className="revidea revinput" />
          <button className="submitbtn" type="submit" onClick={onViewReviewhw1}>Submit</button>
        </form>
      </div>
    </>
  );
};

export default Reviewhw1;

