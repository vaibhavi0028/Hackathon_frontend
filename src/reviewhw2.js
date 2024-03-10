import React, { useState } from 'react';
import './style.css';
import Image from './img/upload.svg';

const Reviewhw2 = ({ onViewReviewhw2 }) => {
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
  };

  const handleFileButtonClick1 = () => {
    document.getElementById('diagram').click();
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
        <h1 className="reviewtitle">Review 2</h1>
        <form>
            <label htmlFor="diagram" className="revlab">Circuit Diagram/ Schematic (PDF)<span className="mandatory">*</span></label>
            <input type="file" id="diagram" name="diagram" className="fileupload" onChange={handleFileChange} />
            <button type="button" className="uploadbtn" onClick={handleFileButtonClick1}>Upload<img src={Image} className="img1"></img></button>
            <label htmlFor="gitlink" className="revlab">GitHub Link<span className="mandatory">*</span></label>
            <input type="text" id="gitlink" name="gitlink" className="revinput" />
            <label htmlFor="figmalink" className="revlab">Figma Link (If website or app integration)<span className="mandatory">*</span></label>
            <input type="text" id="figmalink" name="figmalink" className="revinput"  />
            <label htmlFor="otherlink" className="revlab">Other</label>
            <div className="othergroup">
            <input type="file" id="otherfile" name="otherfile" className="fileupload" onChange={handleFileChange} />
            <input type="text" id="otherlink" name="otherlink" className="revinput1 revinput"  />
            <button type="button" className="f1 uploadbtn" onClick={handleFileButtonClick2}>Upload<img src={Image} className="img1"></img></button>
            </div>
            <label htmlFor="idea" className="revlab">Progress Since Review 1<span className="mandatory">*</span></label>
            <input type="text" id="idea" name="idea" className="revidea revinput" />
          <button className="button1" type="submit" onClick={onViewReviewhw2}>Submit</button>
        </form>
      </div>
    </>
  );
};

export default Reviewhw2;

