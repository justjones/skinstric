import React from 'react';
import './ImagePage2.css'; 
import Page1 from '../../assets/imagePage1.png';

export default function ImagePage2() {
  return (
    <>
      <div className="phase-three-image1">
        <header>skinstric &nbsp; [ &nbsp;&nbsp;&nbsp;&nbsp; ]</header>

        <div className="img-wrapper">
          <img src={Page1} alt="Page Background" /><p className="shot-text">Great Shot!</p>
        </div>

        <div className="footer-wrapper">
          {/* Back Button */}
          <div className="back-btn">
            <div className="diamond-button">
              <div className="triangle left" />
            </div>
            <span className="back-text">BACK</span>
          </div>

          {/* Footer Text and List */}
          <p className="footer-text">To get better results make sure to have</p>
          <ul className="footer-list">
            <li>neutral expression</li>
            <li>frontal pose</li>
            <li>adequate lighting</li>
          </ul>

        </div>
        {/* Proceed Button */}
        <div className="proceed-btn">
          <span className="proceed-text">PROCEED</span>
          <div className="diamond-button">
            <div className="triangle right" />
          </div>
        </div>
      </div>
    </>
  );
}
