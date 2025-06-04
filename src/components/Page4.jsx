import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Header from '../components/Header';
import BackFooter from '../components/BackFooter';
import ForwardFooter from '../components/ForwardFooter';
import rombuses_center from '../assets/rombuses_center.png';
import './Page3.css';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Page4 = () => {
  const [showInput, setShowInput] = useState(false);
  const [locationText, setLocationText] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const navigate = useNavigate();
  const { state } = useLocation();
  const name = state?.name || '';

  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);

  const handleNavigation = () => {
    if (!locationText.trim()) return;

    setSubmitting(true);
    try {
      navigate('/phasethree/CameraSetUp', {
        state: {
          name,
          location: locationText.trim(),
        },
      });
    } finally {
      setSubmitting(false);
    }
  };

  const handleNext = () => {
    if (!locationText.trim()) {
      alert('Please enter your location to continue.');
      return;
    }
    handleNavigation();
  };

  return (
    <div className="page3">
      <Header rightButtonText={null} />

      <h2 className="page3__intro-text" data-aos="fade-left">Now tell us where you're from</h2>

      <div className="page3__main">
        <div
          className="page3__diamond-container"
          onClick={() => setShowInput(true)}
        >
          <img
            src={rombuses_center}
            alt="rombuses_center"
            className="page3__diamond-image rotating-image flashing-image rotate-flash"
          />

          <div className="page3__diamond-text">
            {showInput ? (
              <input
                className="page3__textarea"
                value={locationText}
                onChange={(e) => setLocationText(e.target.value)}
                placeholder="Where are you located?..."
                autoFocus
                disabled={submitting}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault();
                    handleNavigation();
                  }
                }}
              />
            ) : (
              <>
                <p data-aos="fade-left"> Click to type</p>
                <h3 data-aos="fade-right">Enter Your Location</h3>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Footer buttons */}
      <ForwardFooter to={null} white={false} onClick={handleNext} />
      <BackFooter to="/page3" />
    </div>
  );
};

export default Page4;
