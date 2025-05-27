import React, { useEffect, useState } from 'react';
import './PhaseTwoGlobal.css';
import './DemographicSummary.css';
import Header from '../Header';
import demographics_circle from '../../assets/demographics_circle.png';
import { useNavigate } from 'react-router-dom';
import BackFooter from '../BackFooter';
import Aos from 'aos';
import 'aos/dist/aos.css';

// Optional: selected diamond SVG for race confidence
const SelectedDiamondSVG = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" className="diamond-svg" xmlns="http://www.w3.org/2000/svg">
    <polygon points="7,0 14,7 7,14 0,7" fill="#1A1B1C" stroke="#F3F3F4" strokeWidth="2" />
    <polygon points="7,4 10,7 7,10 4,7" fill="#F3F3F4" />
  </svg>
);

export default function DemographicSummary() {
  const navigate = useNavigate();
  const [selectedRace, setSelectedRace] = useState('East Asian');

  const raceConfidenceData = [
    { label: 'East Asian', percent: '96%' },
    { label: 'White', percent: '6%' },
    { label: 'Black', percent: '3%' },
    { label: 'South Asian', percent: '2%' },
    { label: 'Latino Hispanic', percent: '0%' },
    { label: 'South East Asian', percent: '0%' },
    { label: 'Middle Eastern', percent: '0%' },
  ];

  const handleBack = () => navigate(-1);
  const handleConfirm = () => navigate('/phasetwo/demographicAnalysis');

    useEffect(() => {
      Aos.init({ duration: 3000 });
    }, [])

  return (
    <>
      <Header title="Analysis" rightButtonText={null} />
      <div className="demographic-summary">
        <h3>A. I. Analysis</h3>
        <h1>Demographics</h1>
        <p>predicted race & age</p>

        <section className="main-content" >
          {/* LEFT PANEL */}
          <div className="left-panel" data-aos="fade-right">
            <div className="summary-panel selected item-panel--race">
              <p className="summary-panel value-race">{selectedRace}</p>
              <p className="summary-panel label-race">Race</p>
            </div>
            <div className="summary-panel border-top item-panel--age">
              <p className="summary-panel value-age">20-29</p>
              <p className="summary-panel label-age">Age</p>
            </div>
            <div className="summary-panel border-top item-panel--sex">
              <p className="summary-panel value-sex">Female</p>
              <p className="summary-panel label-sex">Sex</p>
            </div>
          </div>

          {/* CENTER PANEL */}
          <div className="center-panel" data-aos="fade-up">
            <div className="center-left">
              <h2 className="center-title">{selectedRace}</h2>
            </div>
            <div className="center-right">
              <img src={demographics_circle} alt="Demographic Circle" className="demographic-circle" />
            </div>
          </div>

          {/* RIGHT PANEL */}
          <div className="right-panel--main" data-aos="fade-left">
            <div className="right-panel">
              <div className="confidence-header">
                <span>Race</span>
                <span>A.I. Confidence</span>
              </div>

              {raceConfidenceData.map(({ label, percent }) => {
                const isSelected = label === selectedRace;
                return (
                  <div
                    key={label}
                    className={`confidence-row ${isSelected ? 'selected' : ''}`}
                    onClick={() => setSelectedRace(label)}
                    style={{ cursor: 'pointer' }}
                  >
                    <div className={`confidence-left${isSelected ? '--selected' : ''}`}>
                      {isSelected ? <SelectedDiamondSVG /> : <div className="diamond-bullet" />}
                      <span className={isSelected ? 'row-selected--text' : ''}>{label}</span>
                    </div>
                    <span className={isSelected ? 'row-selected--text' : ''}>{percent}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </div>

      {/* FOOTER */}
      <div className="footer-container">
      <footer className="footer-row">
  <BackFooter to="/phasetwo/demographicsEstimate" />

  <p className="footer__text">
    If A.I. estimate is wrong, select the correct one.
  </p>

  <div className="dual-button-footer">
    <button className="reset-button">Reset</button>
    <button className="confirm-button" onClick={handleConfirm}>
      Confirm
    </button>
  </div>
</footer>
      </div>
    </>
  );
}
