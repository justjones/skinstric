import React from 'react';
import './DemographicAnalysis.css';
import Header from '../Header';
import demographics_circle from '../../assets/demographics_circle.png';
import Nav from '../../assets/nav.png';
import { useNavigate } from 'react-router-dom';
import BackFooter from '../BackFooter';

// Inline SVG component for selected diamond
const SelectedDiamondSVG = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 14 14"
    className="diamond-svg"
    xmlns="http://www.w3.org/2000/svg"
  >
    <polygon
      points="7,0 14,7 7,14 0,7"
      fill="#1A1B1C"
      stroke="#F3F3F4"
      strokeWidth="2"
    />
    <polygon
      points="7,4 10,7 7,10 4,7"
      fill="#F3F3F4"
    />
  </svg>
);

export default function DemographicAnalysis() {
  const navigate = useNavigate();

  const handleBack = () => navigate(-1);
  const handleConfirm = () => navigate('/phasethree/startPhaseThreeAnalysis');

  const ageConfidenceData = [
    { label: '0-9', percent: '0%' },
    { label: '10-19', percent: '4%' },
    { label: '20-29', percent: '96%' },
    { label: '30-39', percent: '2%' },
    { label: '40-49', percent: '0%' },
    { label: '50-59', percent: '0%' },
    { label: '60-69', percent: '0%' },
    { label: '70+', percent: '0%' },
  ];

  const selectedAgeRange = '20-29';

  return (
    <>
      <Header title="Analysis" rightButtonText={null} />

      <div className="demographic-analysis">
        <div className="demographic-analysis__header">
          <h3>A. I. Analysis</h3>
          <img className='nav' src={Nav} />
          <div className='subheader'>
            <h1>Demographics</h1>
          </div>



          <p>predicted race & age</p>
        </div>

        <section className="analysis-main-content">
          {/* Left Panel */}
          <div className="analysis-left-panel">
            <div className="analysis-panel--item">
              <p className="analysis-panel--value">East Asian</p>
              <p className="analysis-panel--label">Race</p>
            </div>
            <div className="analysis-panel--item--selected">
              <p className="analysis-panel--value">20-29</p>
              <p className="analysis-panel--label">Age</p>
            </div>
            <div className="analysis-panel--item">
              <p className="analysis-panel--value">Female</p>
              <p className="analysis-panel--label">Sex</p>
            </div>
          </div>

          {/* Center Panel */}
          <div className="analysis-center-panel">
            <div className="center-left">
              <h2 className="center-title text-lower">20-29 y.o.</h2>
            </div>
            <div className="center-right">
              <img
                src={demographics_circle}
                alt="Demographic Circle"
                className="demographic-circle"
              />
            </div>
          </div>

          {/* Right Panel */}
          <div className="analysis-right-panel-wrapper">
            <div className="analysis-right-panel">
              <div className="confidence-header">
                <span>Race</span>
                <span>A.I. Confidence</span>
              </div>

              {ageConfidenceData.map(({ label, percent }) => {
                const isSelected = label === selectedAgeRange;
                return (
                  <div
                    key={label}
                    className={`confidence-row ${isSelected ? 'selected' : ''}`}
                  >
                    <div className="confidence-left is-selected">
                      {isSelected ? (
                        <SelectedDiamondSVG />
                      ) : (
                        <div className="diamond-bullet" />
                      )}
                      <span>{label}</span>
                    </div>
                    <span>{percent}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <div className="footer-container">
        <footer className="footer-row">
          <BackFooter to="/phasetwo/demographicSummary" />


          <p className="footer__text">
            If A.I. estimate is wrong, select the correct one.
          </p>

          <button className="reset-button">Reset</button>
          <button className="confirm-button" onClick={handleConfirm}>
            Confirm
          </button>
        </footer>
      </div>
    </>
  );
}
