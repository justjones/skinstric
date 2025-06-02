import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from './Header';
import rombuses_center from '../assets/rombuses_center.png';
import BackFooter from './BackFooter';
import ForwardFooter from './ForwardFooter';
import './Page5.css';
import Aos from 'aos';
import 'aos/dist/aos.css';

export default function Page5() {
  const { state } = useLocation();
  const name = state?.name || '';
  const location = state?.location || '';

    useEffect(() => {
      Aos.init({ duration: 3000 });
    }, [])

  return (
    <div className="page5">
      <Header rightButtonText={null} />

      <h2 className="page5__intro-text" data-aos="fade-left">To start analysis</h2>

      <div className="page5__main">
        <div className="page5__diamond-container">
          <img
            src={rombuses_center}
            alt="rombuses_center"
            className="page5__diamond-image"
          />
          <div className="page5__diamond-text">
            <h3>Thank you!</h3>
            <p>Proceed to the next step</p>            
          </div>
        </div>
      </div>      
      <BackFooter to="/" />
      <ForwardFooter to='/phasethree/startPhaseThreeAnalysis'/>
    </div>
  );
}
