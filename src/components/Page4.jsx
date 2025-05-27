import React, { useState, useEffect } from 'react';
import './Page3.css';
import Header from './Header';
import rombuses_center from '../assets/rombuses_center.png';
import { useNavigate, useLocation } from 'react-router-dom';
import BackFooter from './BackFooter';
import ForwardFooter from '../components/ForwardFooter';
import { sendPhaseOneData } from '../services/APIServices';
import Aos from 'aos';
import 'aos/dist/aos.css';

export default function Page4() {
  const navigate = useNavigate();
  const locationHook = useLocation();
  const name = locationHook.state?.name || '';

  const [isTyping, setIsTyping] = useState(false);
  const [locationText, setLocationText] = useState('');
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (!name) {
      console.warn("Name missing in route state. Redirecting to Page 3.");
      navigate('/page3');
    }
  }, [name, navigate]);

  const handleNext = async () => {
    if (!locationText.trim()) {
      alert('Please enter your location to continue.');
      return;
    }

    setSubmitting(true);
    const payload = {
      name: name.trim(),
      location: locationText.trim(),
    };

    try {
      console.log("Submitting to API:", payload);
      await sendPhaseOneData(payload);


      navigate('/page5', {
        state: {
          name: payload.name,
          location: payload.location,
        },
      });
    } catch (error) {
      console.error('Failed to submit location:', error);
      alert('Something went wrong submitting your data. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="page3">
      <Header rightButtonText={null} />
      <h2 className="page3__intro-text" data-aos="fade-left">To start analysis</h2>

      <div className="page3__main">
        <div
          className="page3__diamond-container"
          onClick={() => setIsTyping(true)}
        >
          <img
            src={rombuses_center}
            alt="rombuses_center"
            className="page3__diamond-image rotating-image flashing-image rotate-flash"
          />
          <div className="page3__diamond-text">
            {isTyping ? (
              <input
                className="page3__textarea"
                value={locationText}
                onChange={(e) => setLocationText(e.target.value)}
                placeholder="Enter your location..."
                autoFocus
                disabled={submitting}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault();
                    handleNext();
                  }
                }}
              />
            ) : (
              <>
                <p data-aos="fade-left">Click to type</p>
                <h3 data-aos="fade-right">Where are you from?</h3>
              </>
            )}
          </div>
        </div>
      </div>

      <ForwardFooter to={null} white={false} onClick={handleNext} />
      <BackFooter to="../page3" />
    </div>
  );
}
