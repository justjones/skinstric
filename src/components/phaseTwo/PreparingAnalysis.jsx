import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './PhaseTwoGlobal.css';
import './PreparingAnalysis.css';
import rombusesPreparingAnalysis from '../../assets/rombusesPreparingAnalysis.png';

export default function PreparingAnalysis() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const response = state?.response || null;

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/phasethree/ImagePage2', {
        state: { response }, // optional: pass along data
      });
    }, 2500); // Adjust delay as needed

    return () => clearTimeout(timer);
  }, [navigate, response]);

  return (
    <div className="preparing-analysis">
      <div className="image-wrapper">
        <img src={rombusesPreparingAnalysis} alt="Preparing Analysis" />
        <h2>Preparing Analysis...</h2>
      </div>
    </div>
  );
}
