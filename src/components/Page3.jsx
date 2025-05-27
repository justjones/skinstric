import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import BackFooter from '../components/BackFooter';
import ForwardFooter from '../components/ForwardFooter';
import rombuses_center from '../assets/rombuses_center.png';
import './Page3.css';
import Aos from 'aos';
import 'aos/dist/aos.css';

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
  
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, [])

  const handleNext = () => {
    if (!introText.trim()) {
      alert('Please enter your name to continue.');
      return;
    }
    handleNavigation();
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
                <p data-aos="fade-left"> Click to type</p>
                <h3 data-aos="fade-right">Introduce Yourself</h3>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Footer buttons */}
      <ForwardFooter to={null} white={false} onClick={handleNext} />
      <BackFooter to="../test" />
    </div>
  );
};

export default Page3;
