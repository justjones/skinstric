import React from 'react';
import './Test.css';
import rombuses_right from '../assets/rombuses_right.png';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

export default function Test() {
  return (
    <>
      <Header rightButtonText="ENTER CODE" />

      <main className="test-page">

        <div className="test__title">
          <h1>
            Sophisticated<br />
            skincare
          </h1>
        </div>

        <div className="test__image-wrapper">
          <img src={rombuses_right} alt="Right graphic" className="test__image" />
        </div>

        <div className="test__side">
          <Link to="/page3" className="side-button-wrapper">
            <span className="side-text">Take Test</span>
            <div className="diamond-button">
              <div className="triangle right" />
            </div>
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
