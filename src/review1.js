import React, { useState } from 'react';
import './style.css';

const Review1 = ({ onViewReview1 }) => {

  return (
    <>
      <header>
        <h1 className="technica">TECH<span className="nica">NICA</span></h1>
      </header>
      <div className="rect6">
        <h1 className="reviewtitle">Review 1</h1>
        <form>
            <label htmlFor="gitlink" className="revlab">GitHub Link<span className="mandatory">*</span></label>
            <input type="text" id="gitlink" name="gitlink" className="revinput"  />
            <label htmlFor="figmalink" className="revlab">Figma Link<span className="mandatory">*</span></label>
            <input type="text" id="figmalink" name="figmalink" className="revinput"  />
            <label htmlFor="otherlink" className="revlab">Other</label>
            <input type="text" id="otherlink" name="otherlink" className="revinput" />
            <label htmlFor="idea" className="revlab">Idea Description<span className="mandatory">*</span></label>
            <input type="text" id="idea" name="idea" className="revidea revinput"  />
          <button className="submitbtn" type="submit" onClick={onViewReview1}>Submit</button>
        </form>
      </div>
    </>
  );
};

export default Review1;

