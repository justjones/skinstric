import React from 'react';
import './ImagePage2.css';
import Page1 from '../../assets/imagePage1.png';
import BackFooter from '../BackFooter';
import ForwardFooter from '../ForwardFooter';

export default function ImagePage2() {
  return (
    <>
      <div className="phase-three-image1">
        <header>skinstric &nbsp; [ &nbsp;&nbsp;&nbsp;&nbsp; ]</header>

        <div className="img-wrapper">
          <img src={Page1} alt="Page Background" />
          <p className="shot-text">Great Shot!</p>
        </div>

        {/* Custom footer tips (middle text + list) */}
        <div className="footer-wrapper">
          <p className="footer-text">To get better results make sure to have</p>
          <ul className="footer-list">
            <li>neutral expression</li>
            <li>frontal pose</li>
            <li>adequate lighting</li>
          </ul>
        </div>

        {/* Use shared footer components */}
        <BackFooter to="/phasetwo/DemographicAnalysis" white={true} />
        <ForwardFooter to="/phasethree/analysis" white={true} />
      </div>
    </>
  );
}
