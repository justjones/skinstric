import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import BackFooter from '../components/BackFooter';
import rombuses_center from '../assets/rombuses_center.png';
import './Page3.css';

const Page3 = () => {
  const [isTyping, setIsTyping] = useState(false);
  const [introText, setIntroText] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const navigate = useNavigate();

  const handleNavigation = () => {
    if (!introText.trim()) return;

    setSubmitting(true);
    try {
      navigate('/page4', { state: { name: introText.trim() } });
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
                value={introText}
                onChange={(e) => setIntroText(e.target.value)}
                placeholder="What is your name?..."
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
                <p>Click to type</p>
                <h3>Introduce Yourself</h3>
              </>
            )}
          </div>
        </div>
      </div>
      <BackFooter />
    </div>
  );
};

export default Page3;
