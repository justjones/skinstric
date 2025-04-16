import React from 'react';
import './Main.css';
import LeftImage from '../assets/left.png';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';


export default function Main() {
  return (
    <>
    <Header rightButtonText="ENTER CODE" />
    <main className="main">
      {/* Left decorative image */}
      <img src={LeftImage} alt="Left graphic" className="main__image left" />

      {/* Left button + text */}
      <div className="main__side left">
        <div className="side-button-wrapper">
          <div className="diamond-button">
            <div className="triangle left" />
          </div>
          <span className="side-text">Discover A.I.</span>
        </div>
      </div>

      {/* Center title */}
      <div className="main__title">
        <h1>Sophisticated skincare</h1>
      </div>

      {/* Right decorative image */}
      <img src={LeftImage} alt="Right graphic" className="main__image right" />

      {/* Right button + text */}
      <div className="main__side right">
      <Link to="/test" className="side-button-wrapper">
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
