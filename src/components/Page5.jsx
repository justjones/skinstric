import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from './Header';
import rombuses_center from '../assets/rombuses_center.png';
import BackFooter from './BackFooter';
import ForwardFooter from './ForwardFooter';
import './Page5.css';

export default function Page5() {
  const { state } = useLocation();
  const name = state?.name || '';
  const location = state?.location || '';

  return (
    <div className="page5">
      <Header rightButtonText={null} />

      <h2 className="page5__intro-text">To start analysis</h2>

      <div className="page5__main">
        <div className="page5__diamond-container">
          <img
            src={rombuses_center}
            alt="rombuses_center"
            className="page5__diamond-image"
          />
          <div className="page5__diamond-text">
            <p>Where are you from?</p>
            <h3>{location}</h3>
          </div>
        </div>
      </div>

      <ForwardFooter
        to="/phasetwo/startAnalysis"
        state={{ name, location }}
      />
      <BackFooter />
    </div>
  );
}
