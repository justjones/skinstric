import React, { useEffect } from 'react';
import './Main.css';
import LeftImage from '../assets/left.png';
import { Link } from 'react-router-dom';
import Header from './Header';
import Aos from 'aos';
import 'aos/dist/aos.css';


export default function Main() {
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, [])

  return (
    <>
      <Header rightButtonText="ENTER CODE" />
      <main className="main">
        {/* Left image */}
        <img src={LeftImage} alt="Left graphic" className="main__image main__image--left" />

        {/* Left button */}
        <div className="main__side main__side--left" >
          <div className="main__button-wrapper" data-aos="fade-left">
            <div className="main__diamond">
              <div className="main__triangle main__triangle--left"  />
            </div>
            <span className="main__button-text">Discover A.I.</span>
          </div>
        </div>

        {/* Title */}
        <div className="main__title" data-aos="zoom-in-up">
          <h1>Sophisticated skincare</h1>
        </div>

        {/* Right image */}
        <img src={LeftImage} alt="Right graphic" className="main__image main__image--right"  />

        {/* Right button */}
        <div className="main__side main__side--right">
          <Link to="/page3" className="main__button-wrapper main__button-wrapper--reverse" data-aos="fade-right">
            <div className="main__diamond" >
              <div className="main__triangle main__triangle--right" />
            </div>
            <span className="main__button-text">Take Test</span>
          </Link>

        </div>
        <div className="main__footer-container">
          <footer className="main__footer footer-text" data-aos="fade-in">
            <p>
              Skinstric developed an A.I. that creates <br />
              a highly-personalised routine tailored to <br />
              what your skin needs.
            </p>
          </footer>
        </div>
      </main>
    </>
  );
}
