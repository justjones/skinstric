import React, { useState, useEffect } from 'react';
import './Page3.css';
import Header from './Header';
import rombuses_center from '../assets/rombuses_center.png';
import { useNavigate, useLocation } from 'react-router-dom';
import BackFooter from './BackFooter';
import ForwardFooter from '../components/ForwardFooter';
import { sendPhaseOneData } from '../services/APIServices';

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
    if (!locationText.trim()) return;

    setSubmitting(true);
    try {
      const payload = {
        name: name.trim(),
        location: locationText.trim(),
      };
      console.log("Submitting to API:", payload);

      await sendPhaseOneData(payload);
      navigate('/page5', {
        state: {
          name: payload.name,
          location: payload.location,
        }
      });
    } catch (error) {
      console.error('Failed to submit location:', error);
      
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="page3">
      <Header rightButtonText={null} />

      <h2 className="page3__intro-text">To start analysis</h2>

      <div className="page3__main">
        <div
          className="page3__diamond-container"
          onClick={() => setIsTyping(true)}
        >
          <img
            src={rombuses_center}
            alt="rombuses_center"
            className="page3__diamond-image"
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
                <p>Click to type</p>
                <h3>Where are you from?</h3>
              </>
            )}
          </div>
        </div>
      </div>
      <ForwardFooter to="/page5" />
      <BackFooter />
    </div>
  );
}
