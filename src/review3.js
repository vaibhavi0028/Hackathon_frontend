import React, { useState } from 'react';
import './style.css';

const Review3 = ({ onViewReview3 }) => {

  return (
    <>
      <header>
        <h1 className="technica">TECH<span className="nica">NICA</span></h1>
      </header>
      <div className="rect6">
        <h1 className="reviewtitle">Review 3</h1>
        <form>
            <label htmlFor="gitlink" className="revlab">GitHub Link<span className="mandatory">*</span></label>
            <input type="text" id="gitlink" name="gitlink" className="revinput" />
            <label htmlFor="figmalink" className="revlab">Figma Link<span className="mandatory">*</span></label>
            <input type="text" id="figmalink" name="figmalink" className="revinput"  />
            <label htmlFor="deplink" className="revlab">Deployment Link<span className="mandatory">*</span></label>
            <input type="text" id="deplink" name="deplink" className="revinput"  />
            <label htmlFor="otherlink" className="revlab">Other</label>
            <input type="text" id="otherlink" name="otherlink" className="revinput"  />
            <label htmlFor="idea" className="revlab">Progress Since Review 2<span className="mandatory">*</span></label>
            <input type="text" id="idea" name="idea" className="revidea revinput"  />
          <button className="submitbtn" type="submit" onClick={onViewReview3}>Submit</button>
        </form>
      </div>
    </>
  );
};

export default Review3;

