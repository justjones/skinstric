import React from 'react';
import './StartPhaseThreeAnalysis.css';
import Header from '../Header';
import BackFooter from '../BackFooter';
import ForwardFooter from '../ForwardFooter';

export default function StartPhaseThreeAnalysis() {
  return (
    <>
      <Header rightButtonText={null} />
      <div className="start-phase-three-analysis">
        <h1>Start Phase Three Analysis</h1>
        {/* Add your content here */}
      </div>
      <BackFooter />
      <ForwardFooter to="/phasethree/nextPage" />
    </>
  );
}
