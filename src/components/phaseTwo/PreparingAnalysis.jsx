import React from 'react';
import { useNavigate } from 'react-router-dom';
import './PhaseTwoGlobal.css';
import './PreparingAnalysis.css';
import rombusesPreparingAnalysis from '../../assets/rombusesPreparingAnalysis.png';

export default function PreparingAnalysis() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/phasetwo/demographicsEstimate');
  };

  return (
    <>    
      <div className="preparing-analysis">
        <div className="image-wrapper" onClick={handleClick} style={{ cursor: 'pointer' }}>
          <img src={rombusesPreparingAnalysis} alt="Preparing" />
          <h2>Preparing Analysis...</h2>
        </div>
      </div>  
    </>
  );
}
