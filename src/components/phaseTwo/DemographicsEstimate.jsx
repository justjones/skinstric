import React from 'react';
import './DemographicsEstimate.css';
import { useNavigate } from 'react-router-dom';
import BackFooter from '../BackFooter';
import Header from '../Header';
import ForwardFooter from '../ForwardFooter';
import fixEEstimate from '../../assets/fixEstimate.png';

export default function DemographicsEstimate() {
  const navigate = useNavigate();

  return (
    <>
      <Header title="Analysis" rightButtonText={null} />

      <div className="estimate">
        <h1>A.I. Analysis</h1>
        <p>A.I. has estimated the following.</p>
        <p>Fix Estimated Information If Needed</p>

        <div className="estimate__image-wrapper">
          <img
            src={fixEEstimate}
            alt="AI Demographics Estimate"
            className="estimate__merged-image"
          />
        </div>
      </div>

      <BackFooter />
      <ForwardFooter to="/phasetwo/DemographicSummary" text="GET SUMMARY" />
    </>
  );
}
