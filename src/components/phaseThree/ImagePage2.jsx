import React from 'react';
import { useLocation } from 'react-router-dom';
import './ImagePage2.css';
import BackFooter from '../BackFooter';
import ForwardFooter from '../ForwardFooter';

export default function ImagePage2() {
  const location = useLocation();
  const selfie = location.state?.selfie; 
  const isFromGallery = selfie?.startsWith('data:image');

  return (
    <>
      <div className="phase-three-image1">
        <header>skinstric &nbsp; [ &nbsp;&nbsp;&nbsp;&nbsp; ]</header>

        <div className="wrapper-img">
          {selfie ? (
            <img
            src={selfie}
            alt="Captured Selfie"
            className={`captured-selfie ${isFromGallery ? 'from-gallery' : 'from-camera'}`}
/>
          ) : (
            <p className="error-text">No image found</p>
          )}
          <p className="shot-text">Great Shot!</p>
        </div>

        <div className="footer-wrapper">
          <p className="footer-text">To get better results make sure to have</p>
          <ul className="footer-list">
            <li>neutral expression</li>
            <li>frontal pose</li>
            <li>adequate lighting</li>
          </ul>
        </div>

        <BackFooter to="/phasetwo/DemographicAnalysis" white />
        <ForwardFooter to="/phasetwo/demographicsEstimate" white />
      </div>
    </>
  );
}
