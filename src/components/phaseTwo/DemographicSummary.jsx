import React from 'react';
import './PhaseTwoGlobal.css';
import './DemographicSummary.css';
import Header from '../Header';
import demographics_circle from '../../assets/demographics_circle.png';
import { useNavigate } from 'react-router-dom';


export default function DemographicSummary() {

  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1); 
  };

  const handleConfirm = () => {
    navigate('/phasetwo/demographicAnalysis'); 
  };

  return (
    <>
      <Header title="Analysis" rightButtonText={null} />
      <div className="demographic-summary">
        <h3>A. I. Analysis</h3>
        <h1>Demographics</h1>
        <p>predicted race & age</p>

        <section className="main-content">
          <div className="left-panel">
            <div className="summary-panel selected item-panel--race">
              <p className="summary-panel value-race">East Asian</p>
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

          <div className="center-panel">
            <div className="center-left">
              <h2 className="center-title">East Asian</h2>
            </div>
            <div className="center-right">
              <img src={demographics_circle} alt="Demographic Circle" className="demographic-circle" />
            </div>
          </div>

          <div className='right-panel--main'>
            <div className="right-panel">
              <div className="confidence-header">
                <span>Race</span>
                <span>A.I. Confidence</span>
              </div>

              {/* Selected row (East Asian, with background) */}
              <div className="confidence-row selected">
                <div className="confidence-left--selected">
                <div className="diamond-bullet--selected" />                                
                  <span className='row-selected--text'>East Asian</span>
                </div>
                <span className='row-selected--text'>96%</span>
              </div>

              {/* Other rows */}
              <div className="confidence-row">
                <div className="confidence-left">
                  <div className="diamond-bullet" />
                  <span>White</span>
                </div>
                <span>6%</span>
              </div>

              <div className="confidence-row">
                <div className="confidence-left">
                  <div className="diamond-bullet" />
                  <span>Black</span>
                </div>
                <span>3%</span>
              </div>

              <div className="confidence-row">
                <div className="confidence-left">
                  <div className="diamond-bullet" />
                  <span>South Asian</span>
                </div>
                <span>2%</span>
              </div>

              <div className="confidence-row">
                <div className="confidence-left">
                  <div className="diamond-bullet" />
                  <span>Latino Hispanic</span>
                </div>
                <span>0%</span>
              </div>

              <div className="confidence-row">
                <div className="confidence-left">
                  <div className="diamond-bullet" />
                  <span>South East Asian</span>
                </div>
                <span>0%</span>
              </div>

              <div className="confidence-row">
                <div className="confidence-left">
                  <div className="diamond-bullet" />
                  <span>Middle Eastern</span>
                </div>
                <span>0%</span>
              </div>
            </div>
          </div>

        </section>
      </div>

      <div className="footer-container">
        <footer className="footer-row">
          <div className="footer-back" onClick={handleBack}>
            <div className="diamond-button">
              <div className="triangle left" />
            </div>
            <span className="back-text">Back</span>
          </div>

          <p className="footer__text">If A.I. estimate is wrong, select the correct one.</p>


          <button className="reset-button">Reset</button>
          <button className="confirm-button" onClick={handleConfirm}>Confirm</button>


        </footer>
      </div>


    </>
  );
}
