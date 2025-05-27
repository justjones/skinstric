import React, { useEffect } from 'react';
import './Test.css';
import rombuses_right from '../assets/rombuses_right.png';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Aos from 'aos';
import 'aos/dist/aos.css';

export default function Test() {

  useEffect(() => {
      Aos.init({ duration: 3000 });
    }, [])

  return (
    <>
      <Header rightButtonText="ENTER CODE" />

      <main className="test-page">

        <div className="test__title" data-aos="zoom-in-up">
          <h1>
            Sophisticated<br />
            skincare
          </h1>
        </div>

        <div className="test__image-wrapper">
          <img src={rombuses_right} alt="Right graphic" className="test__image" />
        </div>

        <div className="test__side">
          <Link to="/page3" className="side-button-wrapper" data-aos="flip-up">
            <span className="side-text" data-aos="fade-right">Take Test</span>
            <div className="test-diamond-button" >
              <div className="test-triangle right" />
            </div>
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
